// Ballistik: gemeinsame Schrittfunktion für echte Geschosse und KI-Simulation.
import * as THREE from 'three';
import { GRAVITY, WIND_ACC } from './config.js';
import { itemGeometry, materials } from './models.js';
import { GRID, gridKey } from './world.js';

const NONE = [];

export const PSTEP = 1 / 60;
const tmpN = new THREE.Vector3();
const TRAIL_A = new THREE.Color('#b0aca4');
const TRAIL_B = new THREE.Color('#d0ccc4');
const UP = new THREE.Vector3(0, 0.15, 0);

// s: {x,y,z,vx,vy,vz,t,rest}
export function stepProjectile(s, W, env) {
  const dt = PSTEP;
  s.t += dt;
  s.bounced = false;
  // Zünder IMMER zuerst prüfen – auch wenn die Granate irgendwo hängt
  if (W.fuse && s.t >= W.fuse) return { type: 'fuse' };
  // Notbremse: nix fliegt ewig
  if (s.t > 14) return { type: W.fuse ? 'fuse' : 'gone' };
  if (s.rest) {
    s.y = env.terrain.heightAt(s.x, s.z) + 0.1;
    if (s.y < env.waterLevel) return { type: 'water' };
    if (W.fuse && s.t >= W.fuse) return { type: 'fuse' };
    return null;
  }
  s.vy -= GRAVITY * dt;
  if (W.wind) {
    s.vx += env.wind.x * W.wind * WIND_ACC * dt;
    s.vz += env.wind.z * W.wind * WIND_ACC * dt;
  }
  const nx = s.x + s.vx * dt, ny = s.y + s.vy * dt, nz = s.z + s.vz * dt;

  const units = env.units;
  for (let i = 0; i < units.length; i++) {
    const u = units[i];
    if (!u.alive) continue;
    if (u === env.owner && s.t < 0.35) continue;
    const dx = nx - u.pos.x, dy = ny - (u.pos.y + 0.95), dz = nz - u.pos.z;
    if (dx * dx + dy * dy * 0.4 + dz * dz < 0.36) {
      if (W.impact) {
        s.x = nx; s.y = ny; s.z = nz;
        return { type: 'unit', unit: u };
      }
      // vom Viech abprallen UND herunterrutschen, statt drauf liegen zu bleiben
      const l = Math.hypot(dx, dz) || 1;
      const ux = dx / l, uz = dz / l;
      const push = Math.max(2.2, Math.hypot(s.vx, s.vz) * 0.4);
      s.vx = ux * push; s.vz = uz * push;
      s.vy = Math.max(Math.abs(s.vy) * 0.3, 1.2);
      s.x = u.pos.x + ux * 0.65; s.z = u.pos.z + uz * 0.65;
      s.rest = false;
      s.bounced = true;
      return null;
    }
  }
  const obs = env.grid ? (env.grid.get(gridKey(Math.floor(nx / GRID), Math.floor(nz / GRID))) || NONE) : env.obstacles;
  for (let i = 0; i < obs.length; i++) {
    const o = obs[i];
    if (!o.solid) continue;
    if (ny > o.top || ny < o.y0) continue;
    const dx = nx - o.x, dz = nz - o.z;
    if (dx * dx + dz * dz < o.pr * o.pr) {
      if (W.impact) {
        s.x = nx; s.y = ny; s.z = nz;
        return { type: 'prop', prop: o };
      }
      const d = Math.sqrt(dx * dx + dz * dz) || 1;
      const ux = dx / d, uz = dz / d;
      const vn = s.vx * ux + s.vz * uz;
      if (vn < 0) {
        s.vx = (s.vx - 2 * vn * ux) * 0.5;
        s.vz = (s.vz - 2 * vn * uz) * 0.5;
      }
      // aus dem Stamm/Felsen herausschieben, damit nix drin stecken bleibt
      s.x = o.x + ux * (o.pr + 0.05);
      s.z = o.z + uz * (o.pr + 0.05);
      if (Math.hypot(s.vx, s.vz) < 1) { s.vx = ux * 1.5; s.vz = uz * 1.5; }
      s.bounced = true;
      return null;
    }
  }
  const h = env.terrain.heightAt(nx, nz);
  if (ny <= h) {
    if (W.impact) {
      s.x = nx; s.y = h; s.z = nz;
      return { type: 'ground' };
    }
    const n = env.terrain.normalAt(nx, nz, tmpN);
    const b = W.bounce || 0.4;
    const vn = s.vx * n.x + s.vy * n.y + s.vz * n.z;
    if (vn < 0) {
      s.vx -= (1 + b) * vn * n.x;
      s.vy -= (1 + b) * vn * n.y;
      s.vz -= (1 + b) * vn * n.z;
    }
    s.vx *= 0.78; s.vz *= 0.78;
    s.x = nx; s.z = nz; s.y = h + 0.03;
    const sp = s.vx * s.vx + s.vy * s.vy + s.vz * s.vz;
    if (sp < 0.9) { s.vx = s.vy = s.vz = 0; s.rest = true; }
    s.bounced = sp > 2;
  } else {
    s.x = nx; s.y = ny; s.z = nz;
  }
  if (s.y < env.waterLevel) return { type: 'water' };
  if (W.fuse && s.t >= W.fuse) return { type: 'fuse' };
  if (Math.abs(s.x) > 320 || Math.abs(s.z) > 320 || s.y < -20) return { type: 'gone' };
  return null;
}

// Komplette Flugbahn simulieren (für KI und Zielvorschau)
export function simulate(W, origin, vel, env, maxT = 9, path = null) {
  const s = { x: origin.x, y: origin.y, z: origin.z, vx: vel.x, vy: vel.y, vz: vel.z, t: 0, rest: false };
  const steps = Math.ceil(maxT / PSTEP);
  for (let i = 0; i < steps; i++) {
    const r = stepProjectile(s, W, env);
    if (path && i % 3 === 0) path.push(s.x, s.y, s.z);
    if (r) return { ...r, x: s.x, y: s.y, z: s.z, t: s.t };
  }
  return { type: 'timeout', x: s.x, y: s.y, z: s.z, t: s.t };
}

export class Projectile {
  constructor(game, W, wid, pos, vel, owner, opts = {}) {
    this.game = game;
    this.W = W;
    this.wid = wid;
    this.owner = owner;
    this.opts = opts;
    this.s = { x: pos.x, y: pos.y, z: pos.z, vx: vel.x, vy: vel.y, vz: vel.z, t: 0, rest: false };
    this.mesh = new THREE.Mesh(itemGeometry(opts.mesh || W.mesh || 'granate'), materials().item);
    this.mesh.castShadow = true;
    if (opts.scale) this.mesh.scale.setScalar(opts.scale);
    game.scene.add(this.mesh);
    this.acc = 0;
    this.dead = false;
    this.spin = new THREE.Vector3(Math.random() * 8, Math.random() * 8, Math.random() * 8);
    this.pos = new THREE.Vector3(pos.x, pos.y, pos.z);
    this.vel = new THREE.Vector3(vel.x, vel.y, vel.z);
    this.trailT = 0;
    this.sync();
  }

  sync() {
    const s = this.s;
    this.pos.set(s.x, s.y, s.z);
    this.vel.set(s.vx, s.vy, s.vz);
    this.mesh.position.copy(this.pos);
    if (this.W.impact || this.opts.align) {
      if (this.vel.lengthSq() > 0.01) {
        const t = this.pos.clone().add(this.vel);
        this.mesh.lookAt(t);
      }
    }
  }

  update(dt, env) {
    if (this.dead) return;
    this.acc += dt;
    while (this.acc >= PSTEP) {
      this.acc -= PSTEP;
      const r = stepProjectile(this.s, this.W, env);
      if (this.s.bounced) this.game.sfx('bounce');
      if (r) {
        this.sync();
        this.dead = true;
        this.game.onProjectileHit(this, r);
        return;
      }
    }
    this.sync();
    if (!this.W.impact && !this.opts.align && !this.s.rest) {
      this.mesh.rotation.x += this.spin.x * dt;
      this.mesh.rotation.y += this.spin.y * dt;
    }
    this.trailT -= dt;
    if (this.trailT <= 0) {
      this.trailT = 0.025;
      const fx = this.game.fx;
      if (this.wid === 'panzerfaust') fx.smokeTrail(this.pos);
      else if (this.W.impact) fx.norm.spawn(this.pos.x, this.pos.y, this.pos.z, 0, 0.3, 0, 0.6, 0.15, 0.5, TRAIL_A, TRAIL_B, 0.35, -0.3, 1);
      if (this.W.fuse && this.s.t > this.W.fuse - 1 && Math.floor(this.s.t * 8) % 2 === 0) fx.sparkle(this.pos.clone().add(UP));
      if (this.wid === 'guelle') fx.gas(this.pos, 0.2);
    }
  }

  remove() {
    this.game.scene.remove(this.mesh);
    this.mesh.geometry.dispose();
  }
}
