// Ein Rindsviech auf dem Schlachtfeld: Physik, Animation, Zustand.
import * as THREE from 'three';
import { buildCattle, itemGeometry, materials } from './models.js';
import { GRAVITY, TIER_HP, loadoutFor, WEAPONS, WEAPON_ORDER, shortName, unitTitle, RANKS } from './config.js';
import { damp, clamp } from './util.js';
import { hash2 } from './rng.js';

let UID = 1;

// Ursprung eines Schusses. Direktwaffen werden auf Augenhöhe angelegt,
// das Zielfernrohr sitzt genau dort, wo auch die Kamera hinschaut.
export function shotOrigin(pos, yaw, pitch, W, out = new THREE.Vector3()) {
  const cp = Math.cos(pitch);
  const dx = Math.sin(yaw) * cp, dy = Math.sin(pitch), dz = Math.cos(yaw) * cp;
  let h = 1.3, f = 0.75;
  if (W && W.type === 'hitscan') {
    if (W.zoom) { h = 1.86; f = 0.55; } else { h = 1.62; f = 0.6; }
  }
  return out.set(pos.x + dx * f, pos.y + h + dy * f, pos.z + dz * f);
}

export class Unit {
  constructor(game, soldier, team) {
    this.uid = UID++;
    this.game = game;
    this.s = soldier;
    this.team = team;
    this.hpMax = TIER_HP[soldier.tier];
    this.hp = this.hpMax;
    this.pos = new THREE.Vector3();
    this.vel = new THREE.Vector3();
    this.slide = new THREE.Vector3();
    this.yaw = 0;
    this.aimPitch = 0.3;
    this.onGround = true;
    this.alive = true;
    this.stamina = 100;
    this.moving = false;
    this.walkAmt = 0;
    this.phase = Math.random() * 10;
    this.aiming = false;
    this.ammo = loadoutFor(soldier);
    this.stats = { dmg: 0, kills: 0, dmgTaken: 0 };
    this.squash = 0;
    this.deathT = 0;
    this.deathKind = null;
    this.noFall = false;
    this.lastHitBy = null;
    this.lastHitTime = -99;
    this.scripted = null;
    this.throwAnim = 0;
    this.lunge = 0;
    this.cheer = 0;
    this.burnT = 0;
    const seed = Math.floor(hash2(soldier.id * 13 + 7, soldier.name.length) * 1e9);
    this.model = buildCattle({ sex: soldier.sex, breed: soldier.breed, teamColor: team.color, tier: soldier.tier, seed });
    game.scene.add(this.model.root);
    this.center = new THREE.Vector3();
    this.headPos = new THREE.Vector3();
    this.weapon = this.defaultWeapon();
  }

  get isStier() { return this.s.sex === 'stier'; }
  get name() { return shortName(this.s); }
  get title() { return unitTitle(this.s); }
  get rank() { return RANKS[this.s.tier]; }

  defaultWeapon() {
    for (const id of ['panzerfaust', 'sniper', 'gewehr', 'flinte', 'granate', 'pistole']) {
      if (this.ammo[id] && this.ammo[id] !== 0) return id;
    }
    return 'pistole';
  }

  weapons() {
    return WEAPON_ORDER.filter((id) => this.ammo[id] !== undefined);
  }

  getCenter() { return this.center.set(this.pos.x, this.pos.y + 0.95, this.pos.z); }
  getHead() { return this.headPos.set(this.pos.x, this.pos.y + 2.05, this.pos.z); }

  forward(out = new THREE.Vector3()) { return out.set(Math.sin(this.yaw), 0, Math.cos(this.yaw)); }

  aimDir(out = new THREE.Vector3(), yaw = this.yaw, pitch = this.aimPitch) {
    const cp = Math.cos(pitch);
    return out.set(Math.sin(yaw) * cp, Math.sin(pitch), Math.cos(yaw) * cp);
  }

  muzzle(out = new THREE.Vector3(), yaw = this.yaw, pitch = this.aimPitch, W = WEAPONS[this.weapon]) {
    return shotOrigin(this.pos, yaw, pitch, W, out);
  }

  setHeld(id) {
    if (id) this.weapon = id;
    const W = WEAPONS[id];
    const m = this.model;
    m.gun.visible = false; m.tube.visible = false; m.ball.visible = false;
    if (!W) return;
    if (W.type === 'hitscan' || W.type === 'cone') m.gun.visible = true;
    else if (W.tube) m.tube.visible = true;
    else if (W.throw) m.ball.visible = true;
  }

  impulse(v) {
    this.vel.add(v);
    if (this.vel.y < 1.5) this.vel.y = 1.5;
    this.onGround = false;
    this.slide.set(0, 0, 0);
  }

  jump() {
    if (!this.onGround || this.scripted || this.stamina < 5) return false;
    const f = this.forward();
    this.vel.set(f.x * 3.6, 6.4, f.z * 3.6);
    this.onGround = false;
    this.stamina = Math.max(0, this.stamina - 6);
    return true;
  }

  startFlight(to, dur) {
    this.scripted = { from: this.pos.clone(), to: to.clone(), t: 0, dur };
    this.onGround = false;
    this.model.chute.visible = false;
  }

  update(dt) {
    const T = this.game.terrain;
    if (!this.alive) {
      this.updateDead(dt);
      return;
    }
    if (this.scripted) {
      const sc = this.scripted;
      sc.t += dt;
      const k = Math.min(1, sc.t / sc.dur);
      const arc = Math.sin(k * Math.PI) * (6 + sc.from.distanceTo(sc.to) * 0.25);
      this.pos.lerpVectors(sc.from, sc.to, k);
      this.pos.y += arc;
      this.model.chute.visible = k > 0.45;
      if (k >= 1) {
        this.scripted = null;
        this.pos.y = T.heightAt(this.pos.x, this.pos.z);
        this.onGround = true;
        this.model.chute.visible = false;
        this.vel.set(0, 0, 0);
        this.game.fx.impactDust(this.pos);
      }
    } else if (!this.onGround) {
      this.vel.y -= GRAVITY * dt;
      this.vel.x *= Math.exp(-0.15 * dt);
      this.vel.z *= Math.exp(-0.15 * dt);
      this.pos.addScaledVector(this.vel, dt);
      this.game.world.collideCircle(this.pos, 0.45);
      const g = T.heightAt(this.pos.x, this.pos.z);
      if (this.pos.y <= g) {
        const impact = -this.vel.y;
        this.pos.y = g;
        this.onGround = true;
        const hs = Math.hypot(this.vel.x, this.vel.z);
        if (hs > 1.5) this.slide.set(this.vel.x, 0, this.vel.z).multiplyScalar(0.35);
        this.vel.set(0, 0, 0);
        if (impact > 12.5 && !this.noFall) {
          this.game.damageUnit(this, Math.round((impact - 12.5) * 3.2), this.lastHitBy, null, 'fall');
        }
        if (impact > 4) this.game.fx.impactDust(this.pos);
        this.noFall = false;
        this.squash = Math.min(1, impact / 12);
      }
    } else {
      if (this.slide.lengthSq() > 0.004) {
        const nx = this.pos.x + this.slide.x * dt, nz = this.pos.z + this.slide.z * dt;
        this.pos.x = nx; this.pos.z = nz;
        this.slide.multiplyScalar(Math.exp(-4 * dt));
        this.game.world.collideCircle(this.pos, 0.45);
      }
      // Auf sehr steilen Hängen abrutschen
      const sl = T.slopeAt(this.pos.x, this.pos.z);
      if (sl > 1.5) {
        const n = T.normalAt(this.pos.x, this.pos.z);
        this.slide.x += n.x * 9 * dt;
        this.slide.z += n.z * 9 * dt;
      }
      const g = T.heightAt(this.pos.x, this.pos.z);
      if (g < this.pos.y - 0.35) {
        this.onGround = false;
        this.vel.set(this.slide.x, 0, this.slide.z);
      } else {
        this.pos.y = g;
      }
    }
    // Ertrinken
    if (this.pos.y < T.waterLevel - 0.85 || Math.abs(this.pos.x) > 200 || Math.abs(this.pos.z) > 200) {
      this.game.onDrown(this);
      return;
    }
    if (this.burnT > 0) {
      this.burnT -= dt;
      if (Math.random() < 0.5) this.game.fx.burning(this.getCenter());
    }
    this.animate(dt);
  }

  updateDead(dt) {
    this.deathT += dt;
    const m = this.model;
    if (this.deathKind === 'drown') {
      this.pos.y -= dt * 0.8;
      m.root.position.copy(this.pos);
      m.root.rotation.z = Math.sin(this.deathT * 6) * 0.2;
      if (Math.random() < 0.3) this.game.fx.norm.spawn(this.pos.x + (Math.random() - 0.5), this.game.terrain.waterLevel + 0.05, this.pos.z + (Math.random() - 0.5), 0, 0.5, 0, 0.6, 0.2, 0.4, BUBBLE, BUBBLE, 0.8, 0, 1);
      if (this.deathT > 2.5) m.root.visible = false;
      return;
    }
    // Umfallen, dann Grab
    if (!this.onGround) {
      this.vel.y -= GRAVITY * dt;
      this.pos.addScaledVector(this.vel, dt);
      const g = this.game.terrain.heightAt(this.pos.x, this.pos.z);
      if (this.pos.y <= g) { this.pos.y = g; this.onGround = true; this.vel.set(0, 0, 0); }
    } else {
      this.pos.y = this.game.terrain.heightAt(this.pos.x, this.pos.z);
    }
    m.root.position.copy(this.pos);
    m.root.rotation.z = damp(m.root.rotation.z, Math.PI / 2, 6, dt);
    m.legL.rotation.x = damp(m.legL.rotation.x, 0.6, 4, dt);
    m.legR.rotation.x = damp(m.legR.rotation.x, -0.4, 4, dt);
    if (this.deathT > 1.6 && !this.grave && this.pos.y > this.game.terrain.waterLevel - 0.5) {
      m.root.visible = false;
      const g = new THREE.Mesh(itemGeometry('grave'), materials().prop);
      g.position.copy(this.pos);
      g.rotation.y = this.yaw;
      g.castShadow = true;
      this.game.scene.add(g);
      this.grave = g;
      this.game.fx.impactDust(this.pos);
    }
    if (this.grave) {
      this.grave.position.y = this.game.terrain.heightAt(this.grave.position.x, this.grave.position.z);
    }
  }

  animate(dt) {
    const m = this.model;
    const t = this.game.time;
    this.walkAmt = damp(this.walkAmt, this.moving ? 1 : 0, 10, dt);
    if (this.moving) this.phase += dt * 10;
    const sw = Math.sin(this.phase) * 0.7 * this.walkAmt;
    const air = !this.onGround && !this.scripted ? 1 : 0;
    m.legL.rotation.x = sw + air * 0.5;
    m.legR.rotation.x = -sw - air * 0.3;
    m.body.position.y = Math.abs(Math.sin(this.phase)) * 0.07 * this.walkAmt + Math.sin(t * 2 + this.uid) * 0.012;
    m.tail.rotation.z = Math.sin(t * 2.3 + this.uid) * 0.4;
    m.tail.rotation.x = 0.15 + Math.sin(t * 1.7 + this.uid) * 0.1;
    m.head.rotation.y = Math.sin(t * 0.7 + this.uid * 2) * 0.12 * (1 - this.walkAmt);
    m.head.rotation.x = Math.sin(t * 1.1 + this.uid) * 0.04;

    if (this.cheer > 0) {
      this.cheer += dt;
      m.armL.rotation.x = -2.8 + Math.sin(t * 10) * 0.3;
      m.armR.rotation.x = -2.8 - Math.sin(t * 10) * 0.3;
      m.armL.rotation.z = 0.2; m.armR.rotation.z = -0.2;
      m.body.position.y += Math.abs(Math.sin(t * 7)) * 0.25;
      m.weapon.visible = false;
    } else if (this.aiming) {
      const p = this.aimPitch;
      const W = WEAPONS[this.weapon];
      if (W && W.throw) {
        this.throwAnim = Math.max(0, this.throwAnim - dt * 4);
        m.armR.rotation.x = damp(m.armR.rotation.x, -2.6 + this.throwAnim * 2.2, 18, dt);
        m.armR.rotation.z = -0.2;
        m.armL.rotation.x = damp(m.armL.rotation.x, -1.2, 10, dt);
        m.armL.rotation.z = 0.2;
        m.weapon.rotation.x = 0;
        m.weapon.position.set(0, 1.62 - this.throwAnim * 0.3, -0.05 + this.throwAnim * 0.4);
      } else {
        m.weapon.position.set(0, W && W.tube ? 1.45 : 1.25, 0.3);
        m.weapon.rotation.x = -p;
        m.armL.rotation.x = damp(m.armL.rotation.x, -Math.PI / 2 - p + 0.15, 14, dt);
        m.armR.rotation.x = damp(m.armR.rotation.x, -Math.PI / 2 - p + 0.15, 14, dt);
        m.armL.rotation.z = 0.35; m.armR.rotation.z = -0.35;
      }
      m.weapon.visible = true;
    } else {
      m.weapon.visible = true;
      m.weapon.position.set(0, 1.2, 0.3);
      m.weapon.rotation.x = damp(m.weapon.rotation.x, 0.7, 8, dt);
      m.armL.rotation.x = damp(m.armL.rotation.x, -0.55 - sw * 0.5 - air * 1.5, 10, dt);
      m.armR.rotation.x = damp(m.armR.rotation.x, -0.55 + sw * 0.5 - air * 1.5, 10, dt);
      m.armL.rotation.z = 0.25 + air * 0.6; m.armR.rotation.z = -0.25 - air * 0.6;
    }
    if (this.lunge > 0) {
      this.lunge = Math.max(0, this.lunge - dt * 3);
      m.body.rotation.x = Math.sin(this.lunge * Math.PI) * 0.6;
      m.head.rotation.x = Math.sin(this.lunge * Math.PI) * 0.5;
    } else {
      m.body.rotation.x = damp(m.body.rotation.x, 0, 10, dt);
    }
    this.squash = Math.max(0, this.squash - dt * 4);
    const sq = Math.sin(this.squash * Math.PI) * 0.18;
    m.root.scale.set(1 + sq * 0.5, 1 - sq, 1 + sq * 0.5);
    m.root.position.copy(this.pos);
    m.root.rotation.y = this.yaw;
    if (this.scripted && this.model.chute.visible) m.chute.rotation.y += dt * 0.5;
  }

  dispose() {
    this.game.scene.remove(this.model.root);
    this.model.root.traverse((o) => { if (o.geometry) o.geometry.dispose(); });
    if (this.grave) {
      this.game.scene.remove(this.grave);
      this.grave.geometry.dispose();
    }
  }
}

const BUBBLE = new THREE.Color('#e0f4ff');
