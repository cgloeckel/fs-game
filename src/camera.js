// Kamera: Verfolgen, Zielen, Geschoss-Kamera, Übersicht, Kino-Orbit.
import * as THREE from 'three';
import { clamp, damp, angleDiff, lerp } from './util.js';

export class CameraRig {
  constructor(aspect) {
    this.cam = new THREE.PerspectiveCamera(55, aspect, 0.1, 1500);
    this.target = new THREE.Vector3(0, 5, 0);
    this.goal = new THREE.Vector3(0, 5, 0);
    this.yaw = 0.6;
    this.pitch = 0.42;
    this.dist = 40;
    this.goalDist = 40;
    this.goalPitch = 0.42;
    this.mode = 'orbit';
    this.obj = null;
    this.userTime = 99;
    this.shakeAmt = 0;
    this.fov = 55;
    this.goalFov = 55;
    this.terrain = null;
    this.side = 0;
    this.manualZoom = 1;
    this.lockYaw = false;
  }

  setMode(mode, obj, opts = {}) {
    this.mode = mode;
    this.obj = obj || null;
    this.opts = opts;
    if (mode === 'overview') {
      this.goalPitch = 1.05;
      this.goalDist = 105;
      if (!opts.keepTarget) this.goal.set(0, 0, 0);
    }
  }

  orbitInput(dx, dy) {
    this.yaw -= dx;
    this.goalPitch = clamp(this.goalPitch + dy, -0.15, 1.45);
    this.pitch = this.goalPitch;
    this.userTime = 0;
  }

  pan(dx, dy) {
    const s = this.dist * 0.0018;
    const fx = Math.sin(this.yaw), fz = Math.cos(this.yaw);
    this.goal.x += (-dx * fz - dy * fx) * s;
    this.goal.z += (dx * fx - dy * fz) * s;
    this.goal.x = clamp(this.goal.x, -70, 70);
    this.goal.z = clamp(this.goal.z, -70, 70);
    this.userTime = 0;
  }

  zoomInput(f) {
    this.manualZoom = clamp(this.manualZoom * f, 0.45, 2.4);
    this.userTime = 0;
  }

  shake(a) { this.shakeAmt = Math.min(1.5, this.shakeAmt + a); }

  update(dt) {
    this.userTime += dt;
    const o = this.obj;
    let wantYaw = null;
    let snap = 6;
    let instant = false;
    switch (this.mode) {
      case 'follow': {
        if (o) {
          this.goal.set(o.pos.x, o.pos.y + 1.3, o.pos.z);
          if (o.moving && this.userTime > 1.2) wantYaw = o.yaw + Math.PI;
        }
        this.goalDist = 9 * this.manualZoom;
        if (this.userTime > 1.2) this.goalPitch = lerp(this.goalPitch, 0.38, 1 - Math.exp(-dt * 2));
        this.goalFov = 55;
        break;
      }
      case 'aim': {
        if (o) {
          const fx = Math.sin(o.yaw), fz = Math.cos(o.yaw);
          const ap = o.aimPitch;
          const cp = Math.cos(ap), sp = Math.sin(ap);
          wantYaw = o.yaw + Math.PI;
          snap = 10;
          if (this.opts && this.opts.sniper) {
            // Zielfernrohr: Kamera sitzt genau im Schussursprung -> Bildmitte = Treffpunkt
            const m = o.muzzle(this._m || (this._m = new THREE.Vector3()));
            this.goal.set(m.x + fx * cp * 10, m.y + sp * 10, m.z + fz * cp * 10);
            this.goalDist = 10;
            this.goalPitch = -ap;
            this.goalFov = 24;
            instant = true;
          } else if (this.opts && this.opts.ballistic) {
            // Hoch hinter dem Schützen, Blick auf die Strecke bis zum Einschlag
            const land = clamp(o.aimLandDist || 14, 4, 50);
            const ahead = land * 0.42;
            this.goal.set(o.pos.x + fx * ahead, o.pos.y + 1.0, o.pos.z + fz * ahead);
            this.goalDist = (8 + land * 0.62) * Math.sqrt(this.manualZoom);
            this.goalPitch = 0.56;
            this.goalFov = 55;
            snap = 4;
          } else {
            // Direkt hinter dem Schützen, Blick entlang der Schusslinie
            const L = 10;
            const m = o.muzzle(this._m || (this._m = new THREE.Vector3()));
            this.goal.set(m.x + fx * cp * L, m.y + sp * L, m.z + fz * cp * L);
            this.goalDist = (L + 4.5) * Math.sqrt(this.manualZoom);
            this.goalPitch = clamp(0.2 - ap, -1.2, 1.3);
            this.goalFov = 52;
          }
        }
        break;
      }
      case 'track': {
        if (o) {
          this.goal.copy(o.pos || o);
          if (o.vel && this.userTime > 0.8) {
            const sp = Math.hypot(o.vel.x, o.vel.z);
            if (sp > 2) wantYaw = Math.atan2(o.vel.x, o.vel.z) + Math.PI + 0.35;
          }
        }
        this.goalDist = 13 * this.manualZoom;
        this.goalPitch = lerp(this.goalPitch, 0.35, 1 - Math.exp(-dt * 2));
        this.goalFov = 55;
        snap = 5;
        break;
      }
      case 'point': {
        if (o) this.goal.copy(o);
        this.goalDist = (this.opts && this.opts.dist ? this.opts.dist : 16) * this.manualZoom;
        this.goalFov = 55;
        break;
      }
      case 'overview': {
        this.goalDist = 105 * this.manualZoom;
        this.goalFov = 55;
        break;
      }
      case 'orbit': {
        if (o) this.goal.copy(o.pos || o);
        if (this.userTime > 2) this.yaw += dt * 0.06;
        this.goalDist = (this.opts && this.opts.dist) || 70;
        this.goalPitch = (this.opts && this.opts.pitch) || 0.45;
        this.goalFov = 50;
        snap = 1.2;
        break;
      }
      default:
        break;
    }
    if (instant) {
      // ohne Verzögerung, damit das Fernrohr exakt mitgeht
      this.yaw = wantYaw;
      this.target.copy(this.goal);
      this.dist = this.goalDist;
      this.pitch = this.goalPitch;
      wantYaw = null;
    }
    if (wantYaw !== null) this.yaw += angleDiff(this.yaw, wantYaw) * (1 - Math.exp(-dt * (this.mode === 'aim' ? 12 : 2.5)));
    this.target.x = damp(this.target.x, this.goal.x, snap, dt);
    this.target.y = damp(this.target.y, this.goal.y, snap, dt);
    this.target.z = damp(this.target.z, this.goal.z, snap, dt);
    this.dist = damp(this.dist, this.goalDist, 5, dt);
    this.pitch = damp(this.pitch, this.goalPitch, 6, dt);
    if (Math.abs(this.fov - this.goalFov) > 0.05) {
      this.fov = damp(this.fov, this.goalFov, 8, dt);
      this.cam.fov = this.fov;
      this.cam.updateProjectionMatrix();
    }
    const cp = Math.cos(this.pitch), sp = Math.sin(this.pitch);
    const p = this.cam.position;
    p.set(
      this.target.x + Math.sin(this.yaw) * cp * this.dist,
      this.target.y + sp * this.dist,
      this.target.z + Math.cos(this.yaw) * cp * this.dist,
    );
    if (this.terrain && !instant) {
      const g = this.terrain.heightAt(p.x, p.z) + 0.8;
      const w = this.terrain.waterLevel + 0.6;
      const floor = Math.max(g, w);
      if (p.y < floor) p.y = floor;
    }
    if (this.shakeAmt > 0.001) {
      const s = this.shakeAmt * 0.35;
      p.x += (Math.random() - 0.5) * s;
      p.y += (Math.random() - 0.5) * s;
      p.z += (Math.random() - 0.5) * s;
      this.shakeAmt *= Math.exp(-dt * 7);
    }
    this.cam.lookAt(this.target);
  }

  // Bildschirm-Strahl ins Gelände
  screenRay(nx, ny) {
    const v = new THREE.Vector3(nx, ny, 0.5).unproject(this.cam);
    const dir = v.sub(this.cam.position).normalize();
    return { origin: this.cam.position.clone(), dir };
  }
}
