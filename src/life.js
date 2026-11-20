// Leben auf der Insel: Hasen, Murmeltiere, Enten, Schmetterlinge, Bussarde und Rauch aus'm Rauchfang.
// Reine Deko – die Viecher stören das Gefecht nicht und kommen nie zu Schaden (höchstens a bissl Flugstunde).
import * as THREE from 'three';
import { hareGeometry, marmotGeometry, duckGeometry, butterflyGeometry, birdGeometry, materials, merge, part } from './models.js';
import { RNG } from './rng.js';
import { audio } from './audio.js';

const TAU = Math.PI * 2;
const G = 16;

let GEO = null;
function geos() {
  if (GEO) return GEO;
  GEO = {
    hare: hareGeometry('#9a7b5a'),
    hare2: hareGeometry('#8a7056'),
    marmot: marmotGeometry(),
    drake: duckGeometry(false),
    duck: duckGeometry(true),
    butterfly: butterflyGeometry(),
    bird: birdGeometry(),
    burrow: merge([
      part(new THREE.CylinderGeometry(0.42, 0.55, 0.12, 10), { p: [0, 0.02, 0] }, '#6b5236'),
      part(new THREE.CylinderGeometry(0.2, 0.2, 0.02, 10), { p: [0, 0.09, 0] }, '#1e1710'),
    ]),
  };
  return GEO;
}

const wrapAngle = (a) => {
  while (a > Math.PI) a -= TAU;
  while (a < -Math.PI) a += TAU;
  return a;
};

export class Life {
  constructor(game, seed = 1) {
    this.g = game;
    this.scene = game.scene;
    this.T = game.terrain;
    this.world = game.world;
    this.fx = game.fx;
    this.rng = new RNG(seed * 31 + 7);
    const q = game.app.quality;
    this.mul = q === 'low' ? 0.5 : q === 'medium' ? 0.8 : 1;
    this.shadows = q === 'high';
    this.time = 0;
    this.smokeT = 0;
    this.prevUnit = new Map();
    this.hares = [];
    this.marmots = [];
    this.ducks = [];
    this.butterflies = [];
    this.birds = [];
    this.whistleT = 0;
    const L = game.theme.life || {};
    const n = (k) => Math.round((L[k] || 0) * this.mul);
    const G0 = geos();
    for (let i = 0; i < n('hasen'); i++) this.spawnHare(G0);
    for (let i = 0; i < n('murmel'); i++) this.spawnMarmot(G0);
    if (L.enten) this.spawnDucks(G0, Math.max(2, n('enten')));
    if (L.falter) this.spawnButterflies(G0, n('falter'));
    if (L.voegel) this.spawnBirds(G0, Math.max(1, Math.round(L.voegel * (q === 'low' ? 0.6 : 1))));
  }

  mesh(geo, scale = 1) {
    const m = new THREE.Mesh(geo, materials().prop);
    m.castShadow = this.shadows;
    m.scale.setScalar(scale);
    m.rotation.order = 'YXZ';
    this.scene.add(m);
    return m;
  }

  // --- Hilfen ----------------------------------------------------------------
  landOk(x, z, margin = 0.6) {
    const T = this.T;
    if (Math.abs(x) > T.half * 0.9 || Math.abs(z) > T.half * 0.9) return false;
    if (T.heightAt(x, z) < T.waterLevel + margin) return false;
    if (T.slopeAt(x, z) > 1.0) return false;
    for (const o of this.world.obstaclesNear(x, z)) {
      if (!o.solid) continue;
      const dx = x - o.x, dz = z - o.z;
      if (dx * dx + dz * dz < (o.r + 0.35) * (o.r + 0.35) && T.heightAt(x, z) < o.top) return false;
    }
    return true;
  }

  unitNear(x, z, r) {
    let best = null, bd = r * r;
    for (const u of this.g.units) {
      if (!u.alive && u.deathT > 2) continue;
      const dx = u.pos.x - x, dz = u.pos.z - z;
      const d = dx * dx + dz * dz;
      if (d < bd) { bd = d; best = u; }
    }
    return best;
  }

  landSpot(tries = 40, cond = null) {
    const T = this.T, rng = this.rng;
    for (let t = 0; t < tries; t++) {
      const x = rng.range(-T.half * 0.8, T.half * 0.8), z = rng.range(-T.half * 0.8, T.half * 0.8);
      if (!this.landOk(x, z, 0.9)) continue;
      if (this.unitNear(x, z, 4)) continue;
      if (cond && !cond(x, z)) continue;
      return { x, z };
    }
    return null;
  }

  // --- Hasen -------------------------------------------------------------------
  spawnHare(G0) {
    const s = this.landSpot(50, (x, z) => this.T.forestAt(x, z) < 0.7);
    if (!s) return;
    const m = this.mesh(this.rng.chance(0.5) ? G0.hare : G0.hare2, this.rng.range(1.05, 1.25));
    const h = {
      m, x: s.x, z: s.z, y: this.T.heightAt(s.x, s.z), yaw: this.rng.range(0, TAU),
      state: 'idle', t: this.rng.range(0, 3), hop: null, tx: s.x, tz: s.z, fleeT: 0, from: null, vx: 0, vy: 0, vz: 0, spin: 0, pose: 0, poseT: 0,
    };
    this.hares.push(h);
  }

  pickHareTarget(h, flee) {
    const rng = this.rng;
    for (let t = 0; t < 14; t++) {
      let a;
      if (flee && h.from) a = Math.atan2(h.x - h.from.x, h.z - h.from.z) + rng.range(-0.7, 0.7);
      else a = rng.range(0, TAU);
      const d = flee ? rng.range(6, 10) : rng.range(2, 6);
      const x = h.x + Math.sin(a) * d, z = h.z + Math.cos(a) * d;
      if (!this.landOk(x, z, 0.7)) continue;
      if (!flee && this.unitNear(x, z, 3)) continue;
      h.tx = x; h.tz = z;
      return true;
    }
    // Sackgasse: zurück Richtung Inselmitte
    h.tx = h.x * 0.8; h.tz = h.z * 0.8;
    return false;
  }

  startHop(h, flee) {
    const dx = h.tx - h.x, dz = h.tz - h.z;
    const d = Math.hypot(dx, dz);
    if (d < 0.4) return false;
    const step = Math.min(d, flee ? 1.5 : 0.75);
    const nx = h.x + (dx / d) * step, nz = h.z + (dz / d) * step;
    if (!this.landOk(nx, nz, 0.5)) {
      this.pickHareTarget(h, flee);
      return false;
    }
    h.hop = { x0: h.x, z0: h.z, y0: h.y, x1: nx, z1: nz, y1: this.T.heightAt(nx, nz), t: 0, dur: flee ? 0.24 : 0.34, hgt: flee ? 0.45 : 0.3 };
    h.yawGoal = Math.atan2(dx, dz);
    return true;
  }

  updateHare(h, dt) {
    const T = this.T;
    h.t -= dt;
    if (h.state === 'air') {
      h.vy -= G * dt;
      h.x += h.vx * dt; h.z += h.vz * dt; h.y += h.vy * dt;
      h.m.rotation.x += h.spin * dt;
      const gy = T.heightAt(h.x, h.z);
      if (h.y <= gy && h.vy < 0) {
        h.y = gy;
        h.m.rotation.x = 0;
        if (gy < T.waterLevel + 0.1) {
          h.state = 'swim';
          this.fx.splash(new THREE.Vector3(h.x, T.waterLevel, h.z), 0.4);
        } else {
          h.state = 'dazed';
          h.t = 1.4;
          this.fx.impactDust(new THREE.Vector3(h.x, gy, h.z), T.colors.dirt);
          this.fx.stars(new THREE.Vector3(h.x, gy + 0.9, h.z));
        }
      }
    } else if (h.state === 'swim') {
      // Paddeln Richtung Ufer
      if (!h.shore || h.t < 0) {
        h.t = 2;
        h.shore = null;
        for (let r = 1; r < 30 && !h.shore; r += 1) {
          for (let k = 0; k < 12; k++) {
            const a = (k / 12) * TAU;
            const x = h.x + Math.sin(a) * r, z = h.z + Math.cos(a) * r;
            if (this.landOk(x, z, 0.4)) { h.shore = { x, z }; break; }
          }
        }
        if (!h.shore) h.shore = { x: 0, z: 0 };
      }
      const dx = h.shore.x - h.x, dz = h.shore.z - h.z, d = Math.hypot(dx, dz) || 1;
      h.x += (dx / d) * 1.2 * dt; h.z += (dz / d) * 1.2 * dt;
      h.yaw = Math.atan2(dx, dz);
      const gy = T.heightAt(h.x, h.z);
      h.y = Math.max(gy, T.waterLevel - 0.18) + Math.sin(this.time * 6) * 0.03;
      if (gy > T.waterLevel + 0.15) {
        h.state = 'flee';
        h.fleeT = 1.5;
        h.from = { x: h.x - dx, z: h.z - dz };
        this.pickHareTarget(h, true);
        this.fx.puff(new THREE.Vector3(h.x, h.y, h.z), new THREE.Color('#cfe8ff'));
      }
    } else if (h.hop) {
      const hp = h.hop;
      hp.t += dt / hp.dur;
      const k = Math.min(1, hp.t);
      h.x = hp.x0 + (hp.x1 - hp.x0) * k;
      h.z = hp.z0 + (hp.z1 - hp.z0) * k;
      h.y = hp.y0 + (hp.y1 - hp.y0) * k + Math.sin(Math.PI * k) * hp.hgt;
      h.m.rotation.x = -0.35 * Math.cos(Math.PI * k);
      if (k >= 1) {
        h.hop = null;
        h.m.rotation.x = 0;
        h.pause = h.state === 'flee' ? 0.04 : this.rng.range(0.08, 0.5);
      }
    } else {
      h.y = T.heightAt(h.x, h.z);
      if (h.y < T.waterLevel + 0.05) { h.state = 'swim'; h.shore = null; }
      if (h.state === 'dazed') {
        h.m.rotation.z = Math.sin(this.time * 9) * 0.25 * Math.max(0, h.t);
        if (h.t <= 0) {
          h.m.rotation.z = 0;
          h.state = 'flee';
          h.fleeT = 2.2;
          this.pickHareTarget(h, true);
        }
      } else if (h.state === 'flee') {
        h.fleeT -= dt;
        if (h.pause > 0) h.pause -= dt;
        else if (!this.startHop(h, true) && Math.hypot(h.tx - h.x, h.tz - h.z) < 0.5) this.pickHareTarget(h, true);
        if (h.fleeT <= 0) { h.state = 'idle'; h.t = this.rng.range(1, 3); }
      } else if (h.state === 'walk') {
        if (h.pause > 0) h.pause -= dt;
        else if (!this.startHop(h, false)) { h.state = 'idle'; h.t = this.rng.range(1.5, 5); }
      } else {
        // idle: knabbern, schauen, Männchen machen
        h.poseT -= dt;
        if (h.poseT <= 0) {
          h.pose = this.rng.chance(0.25) ? 1 : this.rng.chance(0.5) ? 2 : 0;
          h.poseT = this.rng.range(0.8, 2.2);
        }
        const goal = h.pose === 1 ? -0.85 : h.pose === 2 ? 0.18 + Math.max(0, Math.sin(this.time * 7)) * 0.12 : 0;
        h.m.rotation.x += (goal - h.m.rotation.x) * Math.min(1, dt * 8);
        if (h.t <= 0) {
          this.pickHareTarget(h, false);
          h.state = 'walk';
          h.m.rotation.x = 0;
        }
      }
      // Viech kommt z'nah oder rennt vorbei → davon
      if (h.state === 'idle' || h.state === 'walk') {
        const u = this.unitNear(h.x, h.z, 5);
        if (u) {
          const d = Math.hypot(u.pos.x - h.x, u.pos.z - h.z);
          if (d < 2.4 || (u._lifeMoving && d < 5)) this.scare(h, u.pos, 2.5);
        }
      }
    }
    if (h.yawGoal !== undefined && h.state !== 'air') h.yaw += wrapAngle(h.yawGoal - h.yaw) * Math.min(1, dt * 14);
    h.m.position.set(h.x, h.y, h.z);
    h.m.rotation.y = h.yaw;
  }

  scare(h, from, t) {
    h.state = 'flee';
    h.fleeT = t;
    h.from = { x: from.x, z: from.z };
    h.m.rotation.x = 0;
    this.pickHareTarget(h, true);
  }

  // --- Murmeltiere -------------------------------------------------------------
  spawnMarmot(G0) {
    const T = this.T;
    const rocks = this.world.obstacles.filter((o) => o.kind === 'rock');
    let s = null;
    for (let t = 0; t < 30 && !s; t++) {
      if (rocks.length && this.rng.chance(0.8)) {
        const r = rocks[this.rng.int(0, rocks.length - 1)];
        const a = this.rng.range(0, TAU), d = r.r + this.rng.range(0.8, 1.6);
        const x = r.x + Math.sin(a) * d, z = r.z + Math.cos(a) * d;
        if (this.landOk(x, z, 1) && !this.unitNear(x, z, 4)) s = { x, z };
      } else s = this.landSpot(10, (x, z) => T.heightAt(x, z) > T.waterLevel + 2.5);
    }
    if (!s) return;
    const burrow = this.mesh(G0.burrow, 1);
    burrow.castShadow = false;
    burrow.receiveShadow = true;
    const y = T.heightAt(s.x, s.z);
    burrow.position.set(s.x, y - 0.05, s.z);
    const m = this.mesh(G0.marmot, 1.25);
    this.marmots.push({ m, burrow, x: s.x, z: s.z, bx: s.x, bz: s.z, y, yaw: this.rng.range(0, TAU), state: 'watch', t: this.rng.range(1, 5), up: 1, depth: 0 });
  }

  updateMarmot(mm, dt) {
    const T = this.T;
    mm.t -= dt;
    const gy = T.heightAt(mm.x, mm.z);
    mm.burrow.position.y = T.heightAt(mm.bx, mm.bz) - 0.05;
    if (mm.state === 'hide') {
      mm.depth = Math.min(1, mm.depth + dt * 5);
      if (mm.t <= 0 && !this.unitNear(mm.bx, mm.bz, 6)) { mm.state = 'peek'; mm.t = 1.2; }
      else if (mm.t <= 0) mm.t = 2;
    } else if (mm.state === 'peek') {
      mm.depth = Math.max(0.45, mm.depth - dt * 2);
      if (mm.t <= 0) { mm.state = 'watch'; mm.t = this.rng.range(3, 6); }
    } else {
      mm.depth = Math.max(0, mm.depth - dt * 3);
      if (mm.state === 'watch') {
        mm.up += (1 - mm.up) * Math.min(1, dt * 6);
        mm.yaw += Math.sin(this.time * 0.9 + mm.bx) * dt * 0.8;
        if (mm.t <= 0) { mm.state = 'graze'; mm.t = this.rng.range(3, 7); mm.gx = mm.bx + this.rng.range(-2, 2); mm.gz = mm.bz + this.rng.range(-2, 2); }
      } else {
        mm.up += (0 - mm.up) * Math.min(1, dt * 6);
        const dx = mm.gx - mm.x, dz = mm.gz - mm.z, d = Math.hypot(dx, dz);
        if (d > 0.2 && this.landOk(mm.gx, mm.gz, 0.8)) {
          mm.x += (dx / d) * 0.6 * dt; mm.z += (dz / d) * 0.6 * dt;
          mm.yaw += wrapAngle(Math.atan2(dx, dz) - mm.yaw) * Math.min(1, dt * 6);
        }
        if (mm.t <= 0) { mm.state = 'watch'; mm.t = this.rng.range(2, 5); }
      }
      const u = this.unitNear(mm.x, mm.z, 7);
      if (u && (u._lifeMoving || Math.hypot(u.pos.x - mm.x, u.pos.z - mm.z) < 3.5)) this.hideMarmot(mm);
    }
    // beim Verstecken schnell zurück zum Bau
    if (mm.state === 'hide') {
      mm.x += (mm.bx - mm.x) * Math.min(1, dt * 8);
      mm.z += (mm.bz - mm.z) * Math.min(1, dt * 8);
    }
    mm.y = Math.max(gy, T.heightAt(mm.bx, mm.bz)) - mm.depth * 0.75;
    mm.m.visible = mm.depth < 0.98;
    mm.m.position.set(mm.x, mm.y, mm.z);
    mm.m.rotation.y = mm.yaw;
    mm.m.rotation.x = -1.15 * mm.up * (1 - mm.depth);
  }

  hideMarmot(mm) {
    if (mm.state === 'hide') return;
    mm.state = 'hide';
    mm.t = this.rng.range(4, 8);
    // da Pfiff: Achtung, Rindviecher!
    if (!this.g.demo && this.whistleT <= 0 && audio.ok) {
      const d = this.g.cam ? this.g.cam.cam.position.distanceTo(mm.m.position) : 0;
      if (d < 45) {
        this.whistleT = 9;
        const v = 0.07 * (1 - d / 45);
        audio.tone({ freq: 2300, freqEnd: 2900, dur: 0.13, type: 'sine', gain: v, attack: 0.01 });
        audio.tone({ freq: 2500, freqEnd: 2200, dur: 0.16, type: 'sine', gain: v * 0.8, attack: 0.01, delay: 0.14 });
      }
    }
  }

  // --- Enten -------------------------------------------------------------------
  waterOk(x, z) {
    const T = this.T;
    return T.baseHeightAt(x, z) < T.waterLevel - 0.35 && Math.abs(x) < T.half * 0.95 && Math.abs(z) < T.half * 0.95;
  }

  lakePoint(near) {
    const T = this.T, L = T.lake;
    for (let t = 0; t < 30; t++) {
      let x, z;
      if (L) {
        const a = this.rng.range(0, TAU), r = Math.sqrt(this.rng.next()) * L.r * 1.3;
        x = L.x + Math.cos(a) * r; z = L.z + Math.sin(a) * r;
      } else if (near) {
        x = near.x + this.rng.range(-8, 8); z = near.z + this.rng.range(-8, 8);
      } else return null;
      if (this.waterOk(x, z)) return { x, z };
    }
    return null;
  }

  spawnDucks(G0, count) {
    if (!this.T.lake) return;
    let left = count;
    // a Entenmama mit Küken, der Rest san Erpel
    const mother = this.lakePoint();
    if (!mother) return;
    const fam = { m: this.mesh(G0.duck, 1.1), x: mother.x, z: mother.z, yaw: 0, state: 'swim', t: 0, tx: mother.x, tz: mother.z, kids: [], leader: null, fly: null };
    this.ducks.push(fam);
    left--;
    const chicks = Math.min(4, Math.max(2, left));
    let prev = fam;
    for (let i = 0; i < chicks; i++) {
      const c = { m: this.mesh(G0.duck, 0.55), x: mother.x - i * 0.5, z: mother.z, yaw: 0, state: 'follow', leader: prev, chick: true, fly: null };
      this.ducks.push(c);
      prev = c;
    }
    left -= Math.max(0, chicks - 2);
    for (let i = 0; i < Math.max(1, left); i++) {
      const p = this.lakePoint();
      if (!p) break;
      this.ducks.push({ m: this.mesh(G0.drake, 1.1), x: p.x, z: p.z, yaw: this.rng.range(0, TAU), state: 'swim', t: 0, tx: p.x, tz: p.z, fly: null });
    }
  }

  updateDuck(d, dt) {
    const T = this.T;
    const wl = T.waterLevel;
    if (d.state === 'fly') {
      const f = d.fly;
      f.t += dt;
      if (f.phase === 'up') {
        d.x += f.vx * dt; d.z += f.vz * dt; d.y += 5 * dt;
        d.yaw = Math.atan2(f.vx, f.vz);
        if (d.y > wl + 11) { f.phase = 'circle'; f.a = Math.atan2(d.z - f.cz, d.x - f.cx); f.r = Math.max(8, Math.hypot(d.x - f.cx, d.z - f.cz)); }
      } else if (f.phase === 'circle') {
        f.a += dt * 7 / f.r;
        const nx = f.cx + Math.cos(f.a) * f.r, nz = f.cz + Math.sin(f.a) * f.r;
        d.yaw = Math.atan2(nx - d.x, nz - d.z);
        d.x = nx; d.z = nz;
        d.y += (wl + 11 - d.y) * dt;
        d.m.rotation.z = -0.3;
        if (f.t > f.dur) {
          const p = this.lakePoint();
          if (p) { f.phase = 'land'; f.lx = p.x; f.lz = p.z; }
        }
      } else {
        const dx = f.lx - d.x, dz = f.lz - d.z, dd = Math.hypot(dx, dz);
        const sp = Math.min(7, dd * 1.2 + 1);
        if (dd > 0.1) { d.x += (dx / dd) * sp * dt; d.z += (dz / dd) * sp * dt; d.yaw = Math.atan2(dx, dz); }
        d.y += (wl - d.y) * Math.min(1, dt * (dd < 6 ? 2.2 : 0.4));
        d.m.rotation.z = 0;
        if (dd < 0.4 && d.y < wl + 0.2) {
          d.state = 'swim';
          d.fly = null;
          d.t = 1;
          this.fx.splash(new THREE.Vector3(d.x, wl, d.z), 0.3);
        }
      }
      d.m.rotation.x = f.phase === 'land' ? -0.1 : -0.25;
      // Flügelschlag andeuten
      d.m.scale.y = d.base * (1 + Math.sin(f.t * 22) * 0.12);
    } else {
      d.m.rotation.x = 0;
      d.m.rotation.z = 0;
      if (d.base) d.m.scale.y = d.base;
      let sp = 0.55;
      let tx, tz;
      if (d.state === 'follow' && d.leader) {
        const L = d.leader;
        tx = L.x - Math.sin(L.yaw) * 0.55; tz = L.z - Math.cos(L.yaw) * 0.55;
        if (L.state === 'fly') { tx = d.x; tz = d.z; }
        const dist = Math.hypot(tx - d.x, tz - d.z);
        sp = Math.min(2.6, dist * 1.6);
        if (dist < 0.05) sp = 0;
      } else {
        d.t -= dt;
        if (d.t <= 0 || Math.hypot(d.tx - d.x, d.tz - d.z) < 0.4) {
          const p = this.lakePoint({ x: d.x, z: d.z });
          if (p) { d.tx = p.x; d.tz = p.z; }
          d.t = this.rng.range(5, 12);
        }
        tx = d.tx; tz = d.tz;
        if (d.hurryT > 0) { d.hurryT -= dt; sp = 2.2; }
      }
      const dx = tx - d.x, dz = tz - d.z, dd = Math.hypot(dx, dz);
      if (dd > 0.02 && sp > 0) {
        const nx = d.x + (dx / dd) * Math.min(dd, sp * dt), nz = d.z + (dz / dd) * Math.min(dd, sp * dt);
        if (this.waterOk(nx, nz) || d.chick) { d.x = nx; d.z = nz; } else d.t = 0;
        d.yaw += wrapAngle(Math.atan2(dx, dz) - d.yaw) * Math.min(1, dt * 4);
      }
      d.y = wl - 0.02 + Math.sin(this.time * 2.3 + d.x) * 0.025;
    }
    d.m.position.set(d.x, d.y, d.z);
    d.m.rotation.y = d.yaw;
  }

  scareDucks(p, radius) {
    for (const d of this.ducks) {
      if (d.state === 'fly') continue;
      const dist = Math.hypot(d.x - p.x, d.z - p.z);
      if (dist > 20 + radius * 2) continue;
      if (d.chick || this.ducks.some((k) => k.leader === d)) {
        // Mama bleibt bei de Kloanen – alle schwimmen hektisch weg
        if (!d.chick) {
          const a = Math.atan2(d.x - p.x, d.z - p.z);
          const q = this.lakePoint();
          d.tx = q ? q.x : d.x + Math.sin(a) * 6; d.tz = q ? q.z : d.z + Math.cos(a) * 6;
          d.hurryT = 4;
          d.t = 5;
        }
        continue;
      }
      const a = Math.atan2(d.x - p.x, d.z - p.z) + this.rng.range(-0.4, 0.4);
      const L = this.T.lake || { x: d.x, z: d.z };
      d.base = d.m.scale.x;
      d.state = 'fly';
      d.y = this.T.waterLevel;
      d.fly = { phase: 'up', t: 0, vx: Math.sin(a) * 6, vz: Math.cos(a) * 6, cx: L.x, cz: L.z, dur: this.rng.range(7, 12) };
      this.fx.splash(new THREE.Vector3(d.x, this.T.waterLevel, d.z), 0.3);
    }
  }

  // --- Schmetterlinge ----------------------------------------------------------
  spawnButterflies(G0, count) {
    const spots = this.world.flowerSpots;
    if (!spots.length || !count) return;
    const im = new THREE.InstancedMesh(G0.butterfly, materials().prop, count);
    im.castShadow = false;
    im.frustumCulled = false;
    const cols = ['#ffffff', '#fff176', '#ffb74d', '#81d4fa', '#f48fb1', '#fffde7'].map((c) => new THREE.Color(c));
    for (let i = 0; i < count; i++) {
      const s = spots[this.rng.int(0, spots.length - 1)];
      im.setColorAt(i, cols[this.rng.int(0, cols.length - 1)]);
      this.butterflies.push({ x: s.x + this.rng.range(-2, 2), z: s.z + this.rng.range(-2, 2), y: 1, a: s, ph: this.rng.range(0, TAU), w: this.rng.range(0.6, 1.2), t: this.rng.range(4, 14), yaw: 0, flap: this.rng.range(14, 20), scatter: 0, size: this.rng.range(1.6, 2.1) });
    }
    im.instanceColor.needsUpdate = true;
    this.scene.add(im);
    this.bfMesh = im;
    this._m = new THREE.Matrix4(); this._q = new THREE.Quaternion(); this._p = new THREE.Vector3(); this._s = new THREE.Vector3(); this._e = new THREE.Euler(0, 0, 0, 'YXZ');
  }

  updateButterflies(dt) {
    if (!this.bfMesh) return;
    const spots = this.world.flowerSpots;
    const T = this.T, w = this.g.wind || { x: 0, z: 0 };
    this.butterflies.forEach((b, i) => {
      b.t -= dt;
      if (b.t <= 0) { b.a = spots[this.rng.int(0, spots.length - 1)]; b.t = this.rng.range(6, 16); }
      const tt = this.time * b.w + b.ph;
      const gx = b.a.x + Math.sin(tt * 1.3) * 2.2 + Math.sin(tt * 3.1) * 0.6;
      const gz = b.a.z + Math.cos(tt * 1.1) * 2.2 + Math.cos(tt * 2.7) * 0.6;
      const k = b.scatter > 0 ? 0.2 : 1.2;
      const vx = (gx - b.x) * k + w.x * 0.05 + (b.svx || 0) * b.scatter, vz = (gz - b.z) * k + w.z * 0.05 + (b.svz || 0) * b.scatter;
      const sp = Math.hypot(vx, vz), maxS = b.scatter > 0 ? 6 : 2.2;
      const f = sp > maxS ? maxS / sp : 1;
      b.x += vx * f * dt; b.z += vz * f * dt;
      if (b.scatter > 0) b.scatter = Math.max(0, b.scatter - dt * 0.6);
      const gy = Math.max(T.heightAt(b.x, b.z), T.waterLevel);
      const ty = gy + 0.75 + Math.sin(tt * 2.3) * 0.35 + Math.abs(Math.sin(tt * 5.1)) * 0.25 + b.scatter * 3;
      b.y += (ty - b.y) * Math.min(1, dt * 3);
      if (sp > 0.05) b.yaw += wrapAngle(Math.atan2(vx, vz) - b.yaw) * Math.min(1, dt * 6);
      const flap = Math.abs(Math.sin(this.time * b.flap + b.ph));
      this._e.set(0, b.yaw, Math.sin(this.time * 3 + b.ph) * 0.2);
      this._q.setFromEuler(this._e);
      this._p.set(b.x, b.y, b.z);
      this._s.set((0.25 + flap * 1.05) * b.size, (1 + flap * 0.4) * b.size, 1.3 * b.size);
      this._m.compose(this._p, this._q, this._s);
      this.bfMesh.setMatrixAt(i, this._m);
    });
    this.bfMesh.instanceMatrix.needsUpdate = true;
  }

  // --- Bussarde ----------------------------------------------------------------
  spawnBirds(G0, count) {
    const T = this.T;
    for (let i = 0; i < count; i++) {
      const m = this.mesh(G0.bird, this.rng.range(1.2, 1.6));
      m.castShadow = false;
      this.birds.push({
        m, cx: this.rng.range(-T.half * 0.5, T.half * 0.5), cz: this.rng.range(-T.half * 0.5, T.half * 0.5),
        r: this.rng.range(10, 24), h: this.rng.range(24, 40), a: this.rng.range(0, TAU), w: this.rng.range(0.18, 0.32) * (this.rng.chance(0.5) ? 1 : -1),
        drift: this.rng.range(0, TAU),
      });
    }
  }

  updateBirds(dt) {
    for (const b of this.birds) {
      b.a += b.w * dt;
      b.drift += dt * 0.05;
      const cx = b.cx + Math.cos(b.drift) * 6, cz = b.cz + Math.sin(b.drift) * 6;
      const x = cx + Math.cos(b.a) * b.r, z = cz + Math.sin(b.a) * b.r;
      const dir = b.w > 0 ? 1 : -1;
      const tx = -Math.sin(b.a) * dir, tz = Math.cos(b.a) * dir;
      b.m.position.set(x, b.h + Math.sin(b.a * 2) * 1.2, z);
      b.m.rotation.y = Math.atan2(tx, tz);
      b.m.rotation.z = 0.35 * dir;
      b.m.rotation.x = 0.05;
    }
  }

  // --- Hauptschleife -----------------------------------------------------------
  update(dt) {
    this.time += dt;
    if (this.whistleT > 0) this.whistleT -= dt;
    for (const u of this.g.units) {
      const p = this.prevUnit.get(u);
      if (p) {
        u._lifeMoving = Math.hypot(u.pos.x - p.x, u.pos.z - p.z) > dt * 0.8;
        p.x = u.pos.x; p.z = u.pos.z;
      } else this.prevUnit.set(u, { x: u.pos.x, z: u.pos.z });
    }
    for (const h of this.hares) this.updateHare(h, dt);
    for (const mm of this.marmots) this.updateMarmot(mm, dt);
    for (const d of this.ducks) this.updateDuck(d, dt);
    this.updateButterflies(dt);
    this.updateBirds(dt);
    // Rauch aus de Rauchfäng
    if (this.world.chimneys.length && this.g.theme.deco && this.g.theme.deco.rauch) {
      this.smokeT += dt;
      if (this.smokeT > 0.26) {
        this.smokeT = 0;
        const w = this.g.wind || { x: 0, z: 0 };
        for (const c of this.world.chimneys) this.fx.chimney(c.x, c.y, c.z, w.x, w.z);
      }
    }
  }

  onExplosion(p, radius) {
    let launched = false;
    for (const h of this.hares) {
      const d = Math.hypot(h.x - p.x, h.z - p.z);
      if (h.state === 'air') continue;
      if (d < radius * 1.4 + 1) {
        // Flugstunde für Meister Lampe
        const a = Math.atan2(h.x - p.x, h.z - p.z) + this.rng.range(-0.3, 0.3);
        const f = 1 - d / (radius * 1.4 + 1);
        h.state = 'air';
        h.hop = null;
        h.vx = Math.sin(a) * (3 + f * 4); h.vz = Math.cos(a) * (3 + f * 4); h.vy = 6 + f * 6;
        h.spin = this.rng.range(8, 14) * (this.rng.chance(0.5) ? 1 : -1);
        h.yaw = a;
        h.yawGoal = a;
        launched = true;
      } else if (d < 22 + radius * 2) {
        this.scare(h, p, 2.5 + this.rng.range(0, 1.5));
      }
    }
    if (launched && !this.g.demo && this.time - (this.saidHare || -99) > 40) {
      this.saidHare = this.time;
      const lines = ['Da Hos hat an Abflug gmacht!', 'Meister Lampe fliagt Erste Klasse.', 'Hoppala – Hasen-Weitflug!', 'Dem Hasn is nix passiert. Nur sei Frisur is hin.'];
      this.g.hud.toast(lines[Math.floor(Math.random() * lines.length)]);
    }
    for (const mm of this.marmots) {
      if (Math.hypot(mm.x - p.x, mm.z - p.z) < 30) this.hideMarmot(mm);
    }
    this.scareDucks(p, radius);
    for (const b of this.butterflies) {
      const d = Math.hypot(b.x - p.x, b.z - p.z);
      if (d < 12) {
        b.scatter = 1;
        const a = Math.atan2(b.x - p.x, b.z - p.z);
        b.svx = Math.sin(a) * 8; b.svz = Math.cos(a) * 8;
        b.a = this.world.flowerSpots[this.rng.int(0, this.world.flowerSpots.length - 1)];
      }
    }
  }

  // Für den Fotomodus/Tests: Anzahl der Tiere
  census() {
    return { hasen: this.hares.length, murmel: this.marmots.length, enten: this.ducks.length, falter: this.butterflies.length, voegel: this.birds.length };
  }
}
