// Stellungsbau: Bretterverschlag, Eingraben und Maulwurfgang.
// Der Verschlag ist ein Hindernis mit eigenen Lebenspunkten: Er schluckt Splitter und Kugeln,
// bis er z'sammfällt. Wer drin steht, kann über die Bretter drüber rausschießen.
import * as THREE from 'three';
import { part, merge, col, materials } from './models.js';
import { WEAPONS } from './config.js';
import { dist2D, clamp } from './util.js';
import { hash2 } from './rng.js';

const PI = Math.PI;
export const SHED = { half: 1.3, wall: 1.5, roof: 2.6, inside: 1.1 };
export const DIG_DEPTH = WEAPONS.schaufel.depth;

const plank = (base) => (P, N, out) => {
  const h = hash2(Math.round(P.x * 3.1 + P.z * 3.1) * 7, Math.round(P.y * 9));
  out.copy(col(base)).multiplyScalar(0.78 + h * 0.34);
};

let GEO = null;
function geos() {
  if (GEO) return GEO;
  const H = SHED.half, W = SHED.wall;
  const walls = [];
  // Rückwand und Seiten aus waagrechten Brettern, vorne mit Türlücke
  const boards = (len, x, z, ry) => {
    for (let i = 0; i < 6; i++) {
      const y = -0.45 + i * 0.34;
      walls.push(part(new THREE.BoxGeometry(len, 0.3, 0.08), { p: [x, y + 0.15, z], r: [0, ry, (hash2(i, x * 10 + z) - 0.5) * 0.04] }, plank('#8a6a45')));
    }
  };
  boards(2 * H, 0, -H, 0);
  boards(2 * H, H, 0, PI / 2);
  boards(2 * H, -H, 0, PI / 2);
  const side = H - 0.45;
  boards(side, -H + side / 2, H, 0);
  boards(side, H - side / 2, H, 0);
  // Eckstempen bis unters Dach
  for (const [x, z] of [[-H, -H], [H, -H], [-H, H], [H, H]]) {
    walls.push(part(new THREE.BoxGeometry(0.16, SHED.roof + 0.5, 0.16), { p: [x, (SHED.roof - 0.5) / 2, z] }, '#5e4129'));
  }
  // Querlatten (Diagonalen) für den Stadl-Look
  walls.push(part(new THREE.BoxGeometry(0.06, 0.12, 2.9), { p: [H + 0.05, 0.5, 0], r: [0.42, 0, 0] }, '#6e4f30'));
  walls.push(part(new THREE.BoxGeometry(0.06, 0.12, 2.9), { p: [-H - 0.05, 0.5, 0], r: [-0.42, 0, 0] }, '#6e4f30'));
  walls.push(part(new THREE.BoxGeometry(2.9, 0.12, 0.06), { p: [0, 0.5, -H - 0.05], r: [0, 0, 0.42] }, '#6e4f30'));
  // Sandsackerl vorne links und rechts
  for (const sx of [-1, 1]) {
    for (let i = 0; i < 2; i++) {
      walls.push(part(new THREE.SphereGeometry(0.22, 6, 4), { p: [sx * (0.75 + i * 0.35), W + 0.08, H + 0.05], s: [1.5, 0.6, 1] }, '#b79e70'));
    }
  }
  const roof = [];
  for (let i = 0; i < 8; i++) {
    const z = -H - 0.25 + i * 0.4;
    roof.push(part(new THREE.BoxGeometry(2 * H + 0.6, 0.07, 0.42), { p: [0, SHED.roof - 0.12 + (z / (2 * H)) * -0.3, z], r: [0.12, 0, (hash2(i, 3) - 0.5) * 0.05] }, plank('#7a5c3a')));
  }
  roof.push(part(new THREE.BoxGeometry(2 * H + 0.4, 0.12, 0.12), { p: [0, SHED.roof - 0.25, H] }, '#5e4129'));
  roof.push(part(new THREE.BoxGeometry(2 * H + 0.4, 0.12, 0.12), { p: [0, SHED.roof - 0.05, -H] }, '#5e4129'));
  // a Schild: „Privat!“ als rote Tafel
  roof.push(part(new THREE.BoxGeometry(0.7, 0.28, 0.04), { p: [0.6, SHED.roof - 0.55, H + 0.06] }, '#b3261e'));
  roof.push(part(new THREE.BoxGeometry(0.5, 0.05, 0.05), { p: [0.6, SHED.roof - 0.55, H + 0.09] }, '#f5f0e6'));

  const mound = [];
  for (let i = 0; i < 9; i++) {
    const a = (i / 9) * PI * 2;
    mound.push(part(new THREE.SphereGeometry(0.34, 6, 4), { p: [Math.cos(a) * 0.78, 0.02, Math.sin(a) * 0.78], s: [1.2, 0.55, 1], jitter: 0.06, seed: i + 3 },
      (P, N, out) => out.copy(col('#5b4128')).multiplyScalar(0.8 + hash2(Math.round(P.x * 9), Math.round(P.z * 9)) * 0.35)));
  }
  mound.push(part(new THREE.CylinderGeometry(0.62, 0.62, 0.04, 12), { p: [0, 0.03, 0] }, '#2a1d12'));
  const hill = [part(new THREE.SphereGeometry(0.45, 7, 4, 0, PI * 2, 0, PI / 2), { s: [1, 0.55, 1], jitter: 0.05, seed: 9 }, '#5b4128')];
  GEO = { walls: merge(walls), roof: merge(roof), mound: merge(mound), hill: merge(hill) };
  return GEO;
}

export class Forts {
  constructor(game) {
    this.g = game;
    this.sheds = [];
    this.mounds = new Map();
    this.hills = [];
    this.tunnels = [];
  }

  // --- Bretterverschlag ---------------------------------------------------------
  canBuildAt(x, z) {
    const g = this.g, T = g.terrain;
    const y = T.heightAt(x, z);
    if (y < T.waterLevel + 0.5) return 'Im Wasser baut ma ka Hütten.';
    if (T.slopeAt(x, z) > 0.75) return 'Z\'steil für an Verschlag.';
    if (g.world.onDeck(x, z, 1.2)) return 'Auf da Brückn? Do schimpft da Bürgermeister.';
    for (const s of this.sheds) if (!s.dead && dist2D(s.x, s.z, x, z) < 3.4) return 'Do steht scho a Verschlag.';
    for (const o of g.world.obstaclesNear(x, z)) {
      if (!o.solid || o.walkThrough) continue;
      if (dist2D(o.x, o.z, x, z) < o.r + 1.0) return 'Do is ka Platz – Baum oder Stein im Weg.';
    }
    return null;
  }

  build(u) {
    const G0 = geos();
    const g = this.g, T = g.terrain;
    const x = u.pos.x, z = u.pos.z, y = T.heightAt(x, z);
    const W = WEAPONS.verschlag;
    const group = new THREE.Group();
    const walls = new THREE.Mesh(G0.walls, materials().prop);
    const roofMat = materials().prop.clone();
    roofMat.transparent = true;
    const roof = new THREE.Mesh(G0.roof, roofMat);
    walls.castShadow = roof.castShadow = g.app.quality !== 'low';
    walls.receiveShadow = true;
    group.add(walls, roof);
    group.position.set(x, y, z);
    group.rotation.y = u.yaw;
    group.scale.set(1, 0.01, 1);
    g.scene.add(group);
    const ob = {
      kind: 'verschlag', x, z, r: 1.4, pr: 1.45, y0: y - 0.4, top: y + SHED.roof, rayTop: y + SHED.wall,
      solid: true, walkThrough: true,
    };
    const shed = { x, z, y, yaw: u.yaw, hp: W.hp, hpMax: W.hp, group, walls, roof, roofOn: true, ob, t: 0, dead: false, owner: u };
    ob.shed = shed;
    g.world.addObstacle(ob);
    this.sheds.push(shed);
    return shed;
  }

  shedFor(u) {
    for (const s of this.sheds) {
      if (s.dead) continue;
      if (dist2D(s.x, s.z, u.pos.x, u.pos.z) < SHED.inside && Math.abs(u.pos.y - s.y) < 1.1) return s;
    }
    return null;
  }

  // Schadensfaktor für ein Viech (Explosion/Feuer)
  protection(u, kind) {
    let f = 1;
    if (kind === 'explosion' || kind === 'fire') {
      if (this.shedFor(u)) f *= kind === 'fire' ? 0.5 : 0.4;
      if (u.dug) f *= kind === 'fire' ? 0.6 : 0.5;
    }
    return f;
  }

  damage(shed, amount, src) {
    if (shed.dead || amount <= 0) return;
    const g = this.g;
    amount = Math.round(amount);
    shed.hp -= amount;
    shed.shake = 0.25;
    const top = new THREE.Vector3(shed.x, shed.y + SHED.roof + 0.3, shed.z);
    g.hud.floatText(top, `-${amount}`, '#d9a066');
    g.fx.spawnDebris(shed.x, shed.y + 1.2, shed.z, g.fx.colWood(), 3, 3);
    if (shed.roofOn && shed.hp < shed.hpMax * 0.45) {
      // Dach fliagt weg – ab jetzt fallen Granaten von oben eine
      shed.roofOn = false;
      shed.roof.visible = false;
      shed.ob.top = shed.y + SHED.wall + 0.05;
      g.fx.spawnDebris(shed.x, shed.y + SHED.roof, shed.z, g.fx.colWood(), 10, 6);
    }
    if (shed.hp <= 0) this.destroy(shed, src);
  }

  destroy(shed) {
    if (shed.dead) return;
    const g = this.g;
    shed.dead = true;
    shed.ob.solid = false;
    g.scene.remove(shed.group);
    g.fx.spawnDebris(shed.x, shed.y + 1, shed.z, g.fx.colWood(), 16, 7);
    g.fx.impactDust(new THREE.Vector3(shed.x, shed.y, shed.z), g.terrain.colors.dirt);
    g.sfx('thump');
    if (!g.demo) g.hud.toast('Da Verschlag is hin – Bretter überall!', 1.6);
  }

  onExplosion(p, radius, dmg, owner) {
    for (const s of this.sheds) {
      if (s.dead) continue;
      const d = Math.hypot(s.x - p.x, s.z - p.z, (s.y + 1) - p.y);
      const reach = radius + SHED.half;
      if (d >= reach) continue;
      this.damage(s, dmg * (1 - d / reach) * 1.1, owner);
    }
  }

  // --- Eingraben -----------------------------------------------------------------
  dig(u) {
    const g = this.g;
    u.dug = true;
    g.fx.impactDust(u.pos.clone(), g.terrain.colors.dirt);
    g.fx.spawnDebris(u.pos.x, u.pos.y + 0.3, u.pos.z, g.fx.colDirt(), 10, 4);
  }

  undig(u, quiet = false) {
    if (!u.dug) return;
    u.dug = false;
    if (!quiet) this.g.fx.impactDust(u.pos.clone(), this.g.terrain.colors.dirt);
  }

  // --- Maulwurfgang ----------------------------------------------------------------
  tunnelBlocked(from, to) {
    const g = this.g, T = g.terrain;
    const d = dist2D(from.x, from.z, to.x, to.z);
    const n = Math.max(2, Math.ceil(d / 0.7));
    for (let i = 1; i <= n; i++) {
      const k = i / n;
      const x = from.x + (to.x - from.x) * k, z = from.z + (to.z - from.z) * k;
      if (T.baseHeightAt(x, z) < T.waterLevel + 0.3) return 'Unterm Wasser graben? Do wird\'s nass.';
    }
    for (const o of g.world.obstaclesNear(to.x, to.z)) {
      if (o.solid && !o.walkThrough && dist2D(o.x, o.z, to.x, to.z) < o.r + 0.6) return 'Do steht was im Weg.';
    }
    return null;
  }

  dropHill(x, z) {
    const g = this.g;
    const m = new THREE.Mesh(geos().hill, materials().prop);
    m.position.set(x, g.terrain.heightAt(x, z) - 0.05, z);
    m.rotation.y = Math.random() * 6;
    m.scale.setScalar(0.8 + Math.random() * 0.4);
    m.receiveShadow = true;
    g.scene.add(m);
    this.hills.push(m);
    if (this.hills.length > 40) g.scene.remove(this.hills.shift());
  }

  // --- pro Frame -------------------------------------------------------------------
  update(dt) {
    const g = this.g;
    for (const s of this.sheds) {
      if (s.dead) continue;
      if (s.t < 1) {
        s.t = Math.min(1, s.t + dt * 1.25);
        const k = s.t;
        s.group.scale.set(1, Math.max(0.01, k < 0.8 ? k / 0.8 : 1), 1);
      }
      // Dach durchsichtig, wenn das aktive Viech drin steht – sonst sieht ma nix
      const me = g.unit && g.unit.alive && this.shedFor(g.unit) === s && g.phase !== 'turnEnd';
      const op = me ? 0.28 : 1;
      s.roof.material.opacity += (op - s.roof.material.opacity) * Math.min(1, dt * 8);
      s.roof.material.depthWrite = s.roof.material.opacity > 0.95;
      if (s.shake > 0) {
        s.shake -= dt;
        s.group.rotation.z = Math.sin(g.time * 60) * 0.03 * Math.max(0, s.shake) * 4;
      } else s.group.rotation.z = 0;
    }
    // Erdwall um eingegrabene Viecher
    for (const u of g.units) {
      let m = this.mounds.get(u);
      const show = u.alive && u.digDepth > 0.04;
      if (!show) { if (m) m.visible = false; continue; }
      if (!m) {
        m = new THREE.Mesh(geos().mound, materials().prop);
        m.receiveShadow = true;
        g.scene.add(m);
        this.mounds.set(u, m);
      }
      m.visible = true;
      const k = clamp(u.digDepth / DIG_DEPTH, 0, 1);
      m.position.set(u.pos.x, g.terrain.heightAt(u.pos.x, u.pos.z) - 0.05, u.pos.z);
      m.scale.set(0.6 + 0.4 * k, k, 0.6 + 0.4 * k);
    }
    // Maulwurfhügel entlang vom Tunnel
    for (const u of g.units) {
      const sc = u.scripted;
      if (!sc || !sc.tunnel || !u.alive) continue;
      if (sc.phase === 'travel') {
        sc.dust = (sc.dust || 0) - dt;
        if (sc.dust <= 0) {
          sc.dust = 0.09;
          g.fx.impactDust(new THREE.Vector3(u.pos.x, u.pos.y, u.pos.z), g.terrain.colors.dirt);
        }
        const dd = dist2D(u.pos.x, u.pos.z, sc.lastHill ? sc.lastHill.x : sc.from.x, sc.lastHill ? sc.lastHill.z : sc.from.z);
        if (dd > 2.6) {
          this.dropHill(u.pos.x, u.pos.z);
          sc.lastHill = { x: u.pos.x, z: u.pos.z };
        }
      }
    }
  }

  dispose() {
    this.sheds = [];
    this.mounds.clear();
    this.hills = [];
  }
}
