// CPU-Gegner: wählt Einheit, Position, Waffe und rechnet Flugbahnen samt Wind durch.
import * as THREE from 'three';
import { WEAPONS, DIFFICULTY, STAMINA_PER_M } from './config.js';
import { simulate } from './projectile.js';
import { clamp, dist2D, DEG, angleDiff } from './util.js';
import { shotOrigin } from './unit.js';

const V3 = THREE.Vector3;

// Normalverteilte Zufallszahl (Box-Muller)
function randn() {
  let u = 0, v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

function aimDir(yaw, pitch, out = new V3()) {
  const cp = Math.cos(pitch);
  return out.set(Math.sin(yaw) * cp, Math.sin(pitch), Math.cos(yaw) * cp);
}

export class AI {
  constructor(game, team, difficulty) {
    this.game = game;
    this.team = team;
    this.diff = difficulty;
    this.D = DIFFICULTY[difficulty] || DIFFICULTY.normal;
    this.sims = 0;
  }

  ok(u) {
    const g = this.game;
    return !g.disposed && u.alive && g.phase === 'ai' && g.unit === u;
  }

  finish() {
    const g = this.game;
    if (!g.disposed && g.phase === 'ai') g.endTurn();
  }

  async yieldMaybe(force = false) {
    this.sims++;
    const now = performance.now();
    if (!this.frameStart) this.frameStart = now;
    if (force || now - this.frameStart > 7) {
      await this.game.nextFrame();
      this.frameStart = performance.now();
    }
  }

  async takeTurn(u) {
    const g = this.game;
    await g.wait(0.7 + 0.5 * this.D.think);
    if (!this.ok(u)) return this.finish();
    // Den Wind schätzt a Rindsviech nie ganz richtig ein
    const k = clamp(1 + randn() * this.D.windErr, -0.2, 2);
    this.env = { ...g.env, wind: { x: g.wind.x * k, z: g.wind.z * k }, owner: null };
    u = await this.chooseUnit(u);
    if (!this.ok(u)) return this.finish();
    // eingegraben schießt ma aus'm Loch (tiefere Mündung)
    const here = () => { const p = u.pos.clone(); p.y -= u.digDepth || 0; return p; };
    let plan = await this.plan(u, here(), false);
    const dest = await this.chooseMove(u, plan);
    if (dest) {
      await this.walkTo(u, dest);
      if (!this.ok(u)) return this.finish();
      plan = await this.plan(u, here(), false);
    }
    if (!this.ok(u)) return this.finish();
    if (plan && plan.score > 1) {
      await this.execute(u, plan);
    } else {
      await g.wait(0.6);
    }
    this.finish();
  }

  async chooseUnit(current) {
    const g = this.game;
    const alive = this.team.units.filter((x) => x.alive);
    if (alive.length < 2 || Math.random() > this.D.smart) return current;
    let best = current, bestScore = -Infinity;
    for (const c of alive) {
      const p = await this.plan(c, c.pos.clone(), true);
      let sc = p ? p.score : 0;
      if (c === current) sc += 4;
      if (c.hp < c.hpMax * 0.35) sc += 6; // Angeschlagene lieber noch einsetzen
      if (sc > bestScore) { bestScore = sc; best = c; }
      if (!this.ok(current)) return current;
    }
    if (best !== current) {
      g.unit = best;
      best.stamina = 100;
      g.weapon = best.defaultWeapon();
      best.setHeld(g.weapon);
      this.team.next = (this.team.units.indexOf(best) + 1) % this.team.units.length;
      g.hud.turnStart(g, this.team, best, true);
      await g.wait(0.5);
    }
    return best;
  }

  nearWaterBonus(t, dirX, dirZ) {
    const T = this.game.terrain;
    const l = Math.hypot(dirX, dirZ) || 1;
    for (const s of [2.5, 4.5, 6.5]) {
      const x = t.pos.x + (dirX / l) * s, z = t.pos.z + (dirZ / l) * s;
      if (T.heightAt(x, z) < T.waterLevel - 0.3) return 22;
    }
    return 0;
  }

  explosionScore(point, radius, dmg, u, from) {
    let s = 0;
    for (const t of this.game.units) {
      if (!t.alive) continue;
      const c = t === u ? new V3(from.x, from.y + 0.95, from.z) : t.getCenter();
      const d = c.distanceTo(point);
      if (d >= radius) continue;
      const f = 1 - d / radius;
      const dm = dmg * Math.pow(f, 0.65);
      if (t.team !== u.team) {
        s += Math.min(dm, t.hp);
        if (dm >= t.hp) s += 30;
        s += this.nearWaterBonus(t, c.x - point.x, c.z - point.z) * f;
      } else if (t === u) {
        s -= dm * 2.5 + (dm >= t.hp ? 80 : 0);
      } else {
        s -= dm * 1.5 + (dm >= t.hp ? 45 : 0);
      }
    }
    return s;
  }

  hitscanPlan(u, W, id, t, from) {
    const g = this.game;
    const c = t.getCenter().clone();
    const yaw = Math.atan2(c.x - from.x, c.z - from.z);
    const m0 = shotOrigin(from, yaw, 0, W);
    const pitch = Math.atan2(c.y - m0.y, dist2D(m0.x, m0.z, c.x, c.z));
    const m = shotOrigin(from, yaw, pitch, W);
    const dist = m.distanceTo(c);
    if (dist > W.range) return null;
    const dir = c.clone().sub(m).normalize();
    const hit = g.traceRay(m, dir, dist + 1, u);
    if (!hit.unit || hit.unit.team === u.team) return null;
    const sp = Math.max(W.spread || 0, 0.3) * DEG;
    const p = clamp(0.55 / (dist * Math.tan(sp) + 0.01), 0.05, 0.95);
    let dmg = (W.shots || 1) * (W.pellets || 1) * W.dmg * p * (dist > W.range * 0.6 ? 0.75 : 1);
    dmg = Math.min(dmg, t.hp + 10);
    let score = dmg;
    if (dmg >= t.hp) score += 25;
    return { score, weapon: id, yaw, pitch, power: 1, kind: 'hitscan', target: t };
  }

  meleePlan(u, W, id, t, from) {
    const d = dist2D(from.x, from.z, t.pos.x, t.pos.z);
    if (d > W.range - 0.25 || Math.abs(t.pos.y - from.y) > 1.2) return null;
    const dmg = u.isStier ? W.dmgStier : W.dmg;
    const yaw = Math.atan2(t.pos.x - from.x, t.pos.z - from.z);
    let score = Math.min(dmg, t.hp) + (dmg >= t.hp ? 25 : 0) + this.nearWaterBonus(t, t.pos.x - from.x, t.pos.z - from.z) * 1.4;
    return { score, weapon: id, yaw, pitch: 0, power: 1, kind: 'melee', target: t };
  }

  conePlan(u, W, id, t, from) {
    const c = t.getCenter();
    const d = new V3(from.x, from.y + 1.3, from.z).distanceTo(c);
    if (d > W.range) return null;
    const yaw = Math.atan2(c.x - from.x, c.z - from.z);
    const pitch = Math.atan2(c.y - (from.y + 1.3), dist2D(from.x, from.z, c.x, c.z));
    if (!this.game.terrain.lineOfSight(new V3(from.x, from.y + 1.3, from.z), c, 0)) return null;
    const dmg = W.dmg * (1 - (0.4 * d) / W.range);
    let score = 0;
    for (const o of this.game.units) {
      if (!o.alive || o === u) continue;
      const oc = o.getCenter();
      const v = oc.clone().sub(new V3(from.x, from.y + 1.3, from.z));
      if (v.length() > W.range) continue;
      if (v.angleTo(aimDir(yaw, pitch)) > W.angle * DEG) continue;
      score += o.team === u.team ? -dmg * 1.5 : Math.min(dmg, o.hp) + (dmg >= o.hp ? 25 : 0);
    }
    return { score, weapon: id, yaw, pitch, power: 1, kind: 'cone' };
  }

  async ballisticPlan(u, W, id, t, from, quick) {
    const g = this.game;
    const env = this.env || g.env;
    const aimPt = W.impact ? t.getCenter().clone() : t.pos.clone();
    const o0 = new V3(from.x, from.y + 1.3, from.z);
    let yaw = Math.atan2(aimPt.x - from.x, aimPt.z - from.z);
    const minP = W.minPitch !== undefined ? W.minPitch : 5;
    const pitches = [];
    for (let p = Math.max(minP, 6); p <= 80; p += quick ? 14 : 8) pitches.push(p * DEG);
    const powers = [];
    for (let p = 0.22; p <= 1.001; p += quick ? 0.13 : 0.07) powers.push(Math.min(1, p));
    let best = null;
    const vel = new V3(), org = new V3();
    const test = (yw, pitch, power) => {
      shotOrigin(from, yw, pitch, W, org);
      aimDir(yw, pitch, vel).multiplyScalar(W.speed * power);
      env.owner = u;
      const r = simulate(W, org, vel, env, 7);
      env.owner = null;
      const pt = new V3(r.x, r.y, r.z);
      let err = pt.distanceTo(aimPt);
      if (r.type === 'water' || r.type === 'gone' || r.type === 'timeout') err += 25;
      if (r.type === 'unit' && r.unit === t) err = 0;
      return { err, pitch, power, yaw: yw, r, pt };
    };
    const iters = quick ? 1 : 3;
    for (let it = 0; it < iters; it++) {
      let localBest = null;
      if (it === 0) {
        for (const pitch of pitches) {
          for (const power of powers) {
            const c = test(yaw, pitch, power);
            if (!localBest || c.err < localBest.err) localBest = c;
            await this.yieldMaybe();
          }
        }
      } else {
        const b = best;
        for (let dp = -4; dp <= 4; dp += 2) {
          for (let dw = -0.06; dw <= 0.061; dw += 0.03) {
            const pitch = clamp(b.pitch + dp * DEG, minP * DEG, 82 * DEG);
            const power = clamp(b.power + dw, 0.05, 1);
            const c = test(yaw, pitch, power);
            if (!localBest || c.err < localBest.err) localBest = c;
            await this.yieldMaybe();
          }
        }
      }
      if (!best || localBest.err < best.err) best = localBest;
      // Seitenwind ausgleichen
      const aI = Math.atan2(best.pt.x - o0.x, best.pt.z - o0.z);
      const aT = Math.atan2(aimPt.x - o0.x, aimPt.z - o0.z);
      const corr = angleDiff(aI, aT);
      if (Math.abs(corr) < 0.004 && best.err < 1) break;
      yaw = best.yaw + corr;
    }
    if (!best) return null;
    if (g.disposed) return null;
    let score;
    const r = best.r;
    if (r.type === 'water' || r.type === 'gone' || r.type === 'timeout') score = -5;
    else {
      score = this.explosionScore(best.pt, W.radius, W.dmg, u, from);
      if (W.cluster) score *= 1.35;
      if (W.gas) score += this.explosionScore(best.pt, W.gas.radius, W.gas.dmg * 2, u, from) * 0.8;
      if (W.swarm) {
        let nearest = null, nd = W.swarm.range;
        for (const e of g.units) {
          if (!e.alive || e.team === u.team) continue;
          const d = e.getCenter().distanceTo(best.pt);
          if (d < nd) { nd = d; nearest = e; }
        }
        if (nearest) score += Math.min(W.swarm.dmg, nearest.hp) + (W.swarm.dmg >= nearest.hp ? 25 : 0);
      }
    }
    if (!W.swarm && best.err > W.radius * 1.4) score *= 0.4;
    return { score, weapon: id, yaw: best.yaw, pitch: best.pitch, power: best.power, kind: 'ballistic', point: best.pt, err: best.err };
  }

  async plan(u, from, quick) {
    const g = this.game;
    const enemies = g.enemiesOf(u.team);
    if (!enemies.length) return null;
    enemies.sort((a, b) => dist2D(a.pos.x, a.pos.z, from.x, from.z) - dist2D(b.pos.x, b.pos.z, from.x, from.z));
    const targets = enemies.slice(0, quick ? 2 : 4);
    let best = { score: 0 };
    const all = [];
    const consider = (p, cost) => {
      if (!p) return;
      p.score -= cost;
      if (p.score > 0) all.push(p);
      if (p.score > best.score) best = p;
    };
    let ballisticDone = 0;
    for (const id of u.weapons()) {
      const ammo = u.ammo[id];
      if (ammo === 0 || ammo === undefined) continue;
      const W = WEAPONS[id];
      let cost = ammo < 0 ? 0 : 3;
      if (id === 'heiligekuh') cost = 25;
      if (id === 'haubitze' || id === 'jet') cost = 14;
      switch (W.type) {
        case 'melee':
          for (const t of targets) consider(this.meleePlan(u, W, id, t, from), cost);
          break;
        case 'hitscan':
          for (const t of targets) consider(this.hitscanPlan(u, W, id, t, from), cost);
          break;
        case 'cone':
          for (const t of targets) consider(this.conePlan(u, W, id, t, from), cost);
          break;
        case 'ballistic': {
          if (quick && ballisticDone >= 1) break;
          ballisticDone++;
          for (const t of targets) {
            const d = dist2D(t.pos.x, t.pos.z, from.x, from.z);
            if (d < W.radius * 1.1) continue;
            const p = await this.ballisticPlan(u, W, id, t, from, quick);
            consider(p, cost);
          }
          break;
        }
        case 'heal': {
          if (W.area) {
            let sum = 0;
            for (const a of this.team.units) {
              if (a.alive && a.pos.distanceTo(from) <= W.area) sum += Math.min(W.amount, a.hpMax - a.hp);
            }
            consider({ score: sum * 0.9, weapon: id, kind: 'heal' }, cost);
          } else if (u.hp < u.hpMax * 0.5) {
            consider({ score: Math.min(W.amount, u.hpMax - u.hp) * 1.1, weapon: id, kind: 'heal' }, cost);
          }
          break;
        }
        case 'strike': {
          if (quick) break;
          for (const t of targets) {
            const pt = t.pos.clone();
            let sc = this.explosionScore(pt, W.radius, W.dmg, u, from) * (id === 'haubitze' ? 1.4 : 1.6);
            if (dist2D(pt.x, pt.z, from.x, from.z) < 10) sc -= 40;
            consider({ score: sc, weapon: id, kind: 'strike', target: pt }, cost);
          }
          break;
        }
        case 'place': {
          if (id === 'mine' && enemies[0] && dist2D(enemies[0].pos.x, enemies[0].pos.z, from.x, from.z) < 12) {
            consider({ score: 7, weapon: id, kind: 'place', yaw: Math.atan2(enemies[0].pos.x - from.x, enemies[0].pos.z - from.z) }, cost);
          }
          break;
        }
        case 'build':
        case 'dig': {
          if (quick) break;
          // Stellung bauen, wenn eh nix Gscheites zum Schießen da is und Feinde in der Nähe san
          const near = enemies[0] ? dist2D(enemies[0].pos.x, enemies[0].pos.z, from.x, from.z) : 99;
          const atHome = dist2D(from.x, from.z, u.pos.x, u.pos.z) < 0.5;
          if (near > 55 || (atHome && (u.dug || g.forts.shedFor(u)))) break;
          if (W.type === 'build' && g.forts.canBuildAt(from.x, from.z)) break;
          if (W.type === 'dig' && (g.world.onDeck(from.x, from.z, 0.3) || g.forts.shedFor({ pos: from }))) break;
          const hurt = u.hp < u.hpMax * 0.55 ? 6 : 0;
          consider({ score: (W.type === 'build' ? 13 : 9) + hurt, weapon: id, kind: W.type }, cost);
          break;
        }
        case 'drive': {
          for (const t of targets) {
            const yaw = Math.atan2(t.pos.x - from.x, t.pos.z - from.z);
            const d = g.simulateDrive(from, yaw, u);
            if (d.type === 'water') continue;
            const pt = new V3(d.x, d.y + 0.8, d.z);
            consider({ score: this.explosionScore(pt, W.radius, W.dmg, u, from), weapon: id, kind: 'drive', yaw, pitch: 0, power: 1, point: pt }, cost + 4);
          }
          break;
        }
        default:
          break;
      }
    }
    // Manchmal nimmt a Viech ned die beste, sondern die zweit- oder drittbeste Idee
    if (!quick && best.weapon && all.length > 1 && Math.random() < this.D.sloppy) {
      all.sort((a, b) => b.score - a.score);
      const alt = all[1 + Math.floor(Math.random() * Math.min(2, all.length - 1))];
      if (alt && alt.score > best.score * 0.3) best = alt;
    }
    return best.weapon ? best : null;
  }

  pathOk(from, to) {
    const T = this.game.terrain;
    const d = dist2D(from.x, from.z, to.x, to.z);
    const n = Math.ceil(d / 0.8);
    let prevH = T.heightAt(from.x, from.z);
    for (let i = 1; i <= n; i++) {
      const k = i / n;
      const x = from.x + (to.x - from.x) * k, z = from.z + (to.z - from.z) * k;
      const h = T.heightAt(x, z);
      if (h < T.waterLevel + 0.5) return false;
      if ((h - prevH) / (d / n) > 1.2) return false;
      prevH = h;
    }
    return true;
  }

  async chooseMove(u, plan) {
    const g = this.game;
    const T = g.terrain;
    const cur = plan ? plan.score : 0;
    if (cur >= 30 && Math.random() < 0.8) return null;
    // in Deckung bleibt ma lieber, solang ma von dort was trifft
    const covered = u.dug || g.forts.shedFor(u);
    if (covered && cur > 4 && Math.random() < 0.85) return null;
    if (Math.random() > this.D.smart + 0.2) return null;
    const range = Math.min(18, u.stamina / (STAMINA_PER_M * 1.07));
    const cands = [];
    const n = 8;
    const off = Math.random() * Math.PI * 2;
    for (let i = 0; i < n; i++) {
      const a = off + (i / n) * Math.PI * 2;
      for (const r of [range * 0.55, range * 0.95]) {
        const x = u.pos.x + Math.sin(a) * r, z = u.pos.z + Math.cos(a) * r;
        const h = T.heightAt(x, z);
        if (h < T.waterLevel + 0.9) continue;
        const p = new V3(x, h, z);
        if (!this.pathOk(u.pos, p)) continue;
        cands.push(p);
      }
    }
    for (const c of g.crates) {
      if (c.landed && !c.dead && dist2D(c.pos.x, c.pos.z, u.pos.x, u.pos.z) < range && this.pathOk(u.pos, c.pos)) {
        const p = c.pos.clone();
        p.crate = c;
        cands.push(p);
      }
    }
    const enemies = g.enemiesOf(u.team);
    if (!enemies.length) return null;
    const nearestD = (p) => Math.min(...enemies.map((e) => dist2D(e.pos.x, e.pos.z, p.x, p.z)));
    let best = null, bestScore = cur + 6;
    let approach = null, approachD = nearestD(u.pos);
    // nur eine Auswahl gründlich prüfen
    cands.sort(() => Math.random() - 0.5);
    const evalCount = Math.min(cands.length, this.diff === 'hard' ? 10 : 6);
    for (let i = 0; i < cands.length; i++) {
      const p = cands[i];
      const dN = nearestD(p);
      if (dN < approachD - 2 && dN > 4) { approachD = dN; approach = p; }
      if (i >= evalCount && !p.crate) continue;
      const pl = await this.plan(u, p, true);
      if (!this.ok(u)) return null;
      let sc = pl ? pl.score : 0;
      if (p.crate) sc += p.crate.type === 'jause' ? (u.hpMax - u.hp) * 0.4 + 6 : 12;
      // Ufer meiden
      for (const s of [1.5, 3]) {
        for (let k = 0; k < 4; k++) {
          const a = (k / 4) * Math.PI * 2;
          if (T.heightAt(p.x + Math.sin(a) * s, p.z + Math.cos(a) * s) < T.waterLevel) sc -= 4;
        }
      }
      for (const gz of g.gases) if (gz.pos.distanceTo(p) < gz.radius + 1) sc -= 25;
      if (sc > bestScore) { bestScore = sc; best = p; }
    }
    if (best) return best;
    if ((!plan || cur < 8) && approach) return approach;
    return null;
  }

  async walkTo(u, dest) {
    const g = this.game;
    let t = 0, stuckT = 0, lastD = Infinity, jumped = false;
    while (true) {
      const dt = await g.nextFrame();
      if (!this.ok(u)) return;
      t += dt;
      const d = dist2D(u.pos.x, u.pos.z, dest.x, dest.z);
      if (d < 0.7 || u.stamina <= 0 || t > 9) break;
      const want = Math.atan2(dest.x - u.pos.x, dest.z - u.pos.z);
      const diff = angleDiff(u.yaw, want);
      u.yaw += clamp(diff, -dt * 5, dt * 5);
      if (Math.abs(diff) < 0.6 && u.onGround) {
        const ok = g.walk(u, 1, dt);
        if (!ok && !jumped && u.onGround) {
          jumped = true;
          if (u.jump()) g.sfx('jump');
        }
      }
      if (d < lastD - 0.02) { lastD = d; stuckT = 0; } else stuckT += dt;
      if (stuckT > 1.2) break;
    }
    u.moving = false;
    // kurz warten bis gelandet
    for (let i = 0; i < 90 && !u.onGround; i++) {
      await g.nextFrame();
      if (!this.ok(u)) return;
    }
    await g.wait(0.25);
  }

  async turnTo(u, yaw) {
    const g = this.game;
    for (let i = 0; i < 240; i++) {
      const dt = await g.nextFrame();
      if (!this.ok(u)) return;
      const diff = angleDiff(u.yaw, yaw);
      if (Math.abs(diff) < 0.01) { u.yaw = yaw; return; }
      u.yaw += clamp(diff, -dt * 3, dt * 3);
    }
    u.yaw = yaw;
  }

  async pitchTo(u, pitch) {
    const g = this.game;
    for (let i = 0; i < 240; i++) {
      const dt = await g.nextFrame();
      if (!this.ok(u)) return;
      const diff = pitch - u.aimPitch;
      if (Math.abs(diff) < 0.01) { u.aimPitch = pitch; return; }
      u.aimPitch += clamp(diff, -dt * 1.5, dt * 1.5);
    }
    u.aimPitch = pitch;
  }

  async execute(u, plan) {
    const g = this.game;
    const D = this.D;
    const W = WEAPONS[plan.weapon];
    g.weapon = plan.weapon;
    u.weapon = plan.weapon;
    u.setHeld(plan.weapon);
    if (W.type === 'strike') {
      await g.wait(0.7);
      if (!this.ok(u)) return;
      const tgt = plan.target.clone();
      tgt.x += randn() * D.yaw * 0.6;
      tgt.z += randn() * D.yaw * 0.6;
      tgt.y = g.terrain.heightAt(tgt.x, tgt.z);
      await g.fire({ target: tgt });
      return;
    }
    if (W.type === 'heal' || W.type === 'build' || W.type === 'dig') {
      await g.wait(0.5);
      if (!this.ok(u)) return;
      await g.fire({});
      return;
    }
    let yaw = plan.yaw, pitch = plan.pitch || 0, power = plan.power || 1;
    let blunder = false;
    if (W.type === 'ballistic' || W.type === 'hitscan' || W.type === 'drive') {
      // menschliche Streuung: bei Gewehren weniger, beim Traktor nur die Richtung
      const k = W.type === 'hitscan' ? 0.45 : W.type === 'drive' ? 0.6 : 1;
      yaw += randn() * D.yaw * k * DEG;
      if (W.type !== 'drive') pitch += randn() * D.pitch * k * DEG;
      if (W.type === 'ballistic') power = clamp(power * (1 + randn() * D.power), 0.05, 1);
      // ab und zu a grober Patzer
      if (Math.random() < D.blunder) {
        blunder = true;
        const r = Math.random();
        const sgn = Math.random() < 0.5 ? -1 : 1;
        if (r < 0.4 && W.type === 'ballistic') power = clamp(power * (sgn < 0 ? 0.55 + Math.random() * 0.2 : 1.3 + Math.random() * 0.2), 0.05, 1);
        else if (r < 0.75 || W.type === 'drive') yaw += sgn * (8 + Math.random() * 10) * DEG;
        else pitch += sgn * (8 + Math.random() * 10) * DEG;
      }
    }
    u.aimLandDist = plan.point ? dist2D(u.pos.x, u.pos.z, plan.point.x, plan.point.z) : undefined;
    if (!['melee', 'place', 'drive', 'build', 'dig', 'heal'].includes(W.type)) u.aiming = true;
    await this.turnTo(u, yaw);
    if (!this.ok(u)) return;
    if (W.type === 'ballistic' || W.type === 'hitscan' || W.type === 'cone') await this.pitchTo(u, pitch);
    if (!this.ok(u)) return;
    if (W.type === 'ballistic') {
      await g.wait(0.25);
      g.charging = true;
      g.power = 0;
      while (g.power < power) {
        const dt = await g.nextFrame();
        if (!this.ok(u)) { g.charging = false; return; }
        g.power = Math.min(power, g.power + dt / 1.6);
      }
      g.charging = false;
    } else {
      await g.wait(0.45);
    }
    if (!this.ok(u)) return;
    await g.fire({ yaw, pitch, power, blunder });
  }
}
