// Partikel (ein Draw-Call pro System), Trümmer und Effekt-Rezepte.
import * as THREE from 'three';
import { GRAVITY } from './config.js';

const VS = `
attribute float size;
attribute vec4 rgba;
varying vec4 vC;
uniform float uScale;
void main() {
  vC = rgba;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = clamp(size * uScale / max(-mv.z, 0.1), 0.0, 512.0);
  gl_Position = projectionMatrix * mv;
}`;
const FS = `
varying vec4 vC;
uniform float uSoft;
void main() {
  vec2 c = gl_PointCoord - 0.5;
  float d = length(c);
  if (d > 0.5) discard;
  float a = smoothstep(0.5, uSoft, d);
  gl_FragColor = vec4(vC.rgb, vC.a * a);
  #include <colorspace_fragment>
}`;

class ParticleSystem {
  constructor(scene, max, additive) {
    this.max = max;
    this.n = 0;
    this.pos = new Float32Array(max * 3);
    this.vel = new Float32Array(max * 3);
    this.rgba = new Float32Array(max * 4);
    this.size = new Float32Array(max);
    this.life = new Float32Array(max);
    this.maxLife = new Float32Array(max);
    this.s0 = new Float32Array(max);
    this.s1 = new Float32Array(max);
    this.c0 = new Float32Array(max * 3);
    this.c1 = new Float32Array(max * 3);
    this.a0 = new Float32Array(max);
    this.grav = new Float32Array(max);
    this.drag = new Float32Array(max);
    const g = new THREE.BufferGeometry();
    this.posAttr = new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage);
    this.rgbaAttr = new THREE.BufferAttribute(this.rgba, 4).setUsage(THREE.DynamicDrawUsage);
    this.sizeAttr = new THREE.BufferAttribute(this.size, 1).setUsage(THREE.DynamicDrawUsage);
    g.setAttribute('position', this.posAttr);
    g.setAttribute('rgba', this.rgbaAttr);
    g.setAttribute('size', this.sizeAttr);
    g.setDrawRange(0, 0);
    this.uniforms = { uScale: { value: 500 }, uSoft: { value: additive ? 0.0 : 0.15 } };
    this.mat = new THREE.ShaderMaterial({
      vertexShader: VS,
      fragmentShader: FS,
      uniforms: this.uniforms,
      transparent: true,
      depthWrite: false,
      blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
    });
    this.points = new THREE.Points(g, this.mat);
    this.points.frustumCulled = false;
    this.points.renderOrder = additive ? 4 : 3;
    this.geo = g;
    scene.add(this.points);
  }

  spawn(x, y, z, vx, vy, vz, life, s0, s1, c0, c1, a0, grav = 0, drag = 0) {
    if (this.n >= this.max) return;
    const i = this.n++;
    this.pos[i * 3] = x; this.pos[i * 3 + 1] = y; this.pos[i * 3 + 2] = z;
    this.vel[i * 3] = vx; this.vel[i * 3 + 1] = vy; this.vel[i * 3 + 2] = vz;
    this.life[i] = life; this.maxLife[i] = life;
    this.s0[i] = s0; this.s1[i] = s1;
    this.c0[i * 3] = c0.r; this.c0[i * 3 + 1] = c0.g; this.c0[i * 3 + 2] = c0.b;
    this.c1[i * 3] = c1.r; this.c1[i * 3 + 1] = c1.g; this.c1[i * 3 + 2] = c1.b;
    this.a0[i] = a0;
    this.grav[i] = grav;
    this.drag[i] = drag;
  }

  copy(from, to) {
    for (const arr of [this.pos, this.vel, this.c0, this.c1]) {
      arr[to * 3] = arr[from * 3]; arr[to * 3 + 1] = arr[from * 3 + 1]; arr[to * 3 + 2] = arr[from * 3 + 2];
    }
    for (const arr of [this.life, this.maxLife, this.s0, this.s1, this.a0, this.grav, this.drag]) arr[to] = arr[from];
  }

  update(dt) {
    let i = 0;
    while (i < this.n) {
      this.life[i] -= dt;
      if (this.life[i] <= 0) {
        this.n--;
        if (i !== this.n) this.copy(this.n, i);
        continue;
      }
      const d = Math.exp(-this.drag[i] * dt);
      this.vel[i * 3] *= d; this.vel[i * 3 + 1] = this.vel[i * 3 + 1] * d - this.grav[i] * dt; this.vel[i * 3 + 2] *= d;
      this.pos[i * 3] += this.vel[i * 3] * dt;
      this.pos[i * 3 + 1] += this.vel[i * 3 + 1] * dt;
      this.pos[i * 3 + 2] += this.vel[i * 3 + 2] * dt;
      const t = 1 - this.life[i] / this.maxLife[i];
      this.size[i] = this.s0[i] + (this.s1[i] - this.s0[i]) * t;
      this.rgba[i * 4] = this.c0[i * 3] + (this.c1[i * 3] - this.c0[i * 3]) * t;
      this.rgba[i * 4 + 1] = this.c0[i * 3 + 1] + (this.c1[i * 3 + 1] - this.c0[i * 3 + 1]) * t;
      this.rgba[i * 4 + 2] = this.c0[i * 3 + 2] + (this.c1[i * 3 + 2] - this.c0[i * 3 + 2]) * t;
      this.rgba[i * 4 + 3] = this.a0[i] * (1 - t * t);
      i++;
    }
    this.geo.setDrawRange(0, this.n);
    this.posAttr.needsUpdate = true;
    this.rgbaAttr.needsUpdate = true;
    this.sizeAttr.needsUpdate = true;
  }
}

const C = (h) => new THREE.Color(h);
const COL = {
  white: C('#ffffff'), fire1: C('#fff2b0'), fire2: C('#ff7a1a'), fire3: C('#9a2a08'),
  smoke1: C('#5a5650'), smoke2: C('#a8a49c'), dust: C('#9a8a6a'), dust2: C('#c9bda0'),
  milk: C('#fffdf5'), water: C('#d8f0ff'), water2: C('#8fc4e6'), gas1: C('#7a8a2a'), gas2: C('#5a5a20'),
  heal: C('#7dff8a'), heal2: C('#2ecc40'), spark: C('#ffd27a'), leaf: C('#4f8a33'), straw: C('#e2c46a'),
  rock: C('#8a867e'), black: C('#151515'), gold: C('#ffd54f'), red: C('#ff3b30'),
};

export class FX {
  constructor(scene, quality = 'medium') {
    this.scene = scene;
    const mul = quality === 'low' ? 0.5 : 1;
    this.mul = mul;
    this.add = new ParticleSystem(scene, Math.round(1800 * mul), true);
    this.norm = new ParticleSystem(scene, Math.round(2400 * mul), false);
    // Trümmer
    this.maxDebris = 160;
    const g = new THREE.BoxGeometry(0.18, 0.18, 0.18);
    this.debrisMesh = new THREE.InstancedMesh(g, new THREE.MeshLambertMaterial({ color: 0xffffff }), this.maxDebris);
    this.debrisMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.debrisMesh.castShadow = false;
    this.debrisMesh.frustumCulled = false;
    this.debris = [];
    this.zero = new THREE.Matrix4().makeScale(0, 0, 0);
    for (let i = 0; i < this.maxDebris; i++) {
      this.debrisMesh.setMatrixAt(i, this.zero);
      this.debrisMesh.setColorAt(i, COL.white);
    }
    scene.add(this.debrisMesh);
    this._m = new THREE.Matrix4();
    this._q = new THREE.Quaternion();
    this._e = new THREE.Euler();
    this._p = new THREE.Vector3();
    this._s = new THREE.Vector3();
    this.terrain = null;
  }

  setScale(height, fov) {
    const s = height / (2 * Math.tan((fov * Math.PI) / 360));
    this.add.uniforms.uScale.value = s;
    this.norm.uniforms.uScale.value = s;
  }

  r(a = 1) { return (Math.random() * 2 - 1) * a; }

  spawnDebris(x, y, z, color, n, speed = 7) {
    for (let k = 0; k < n; k++) {
      let slot = this.debris.findIndex((d) => !d.alive);
      if (slot < 0) {
        if (this.debris.length < this.maxDebris) { slot = this.debris.length; this.debris.push({}); } else break;
      }
      const d = this.debris[slot];
      d.alive = true;
      d.p = new THREE.Vector3(x, y + 0.2, z);
      d.v = new THREE.Vector3(this.r(speed * 0.6), Math.random() * speed + 2, this.r(speed * 0.6));
      d.rot = new THREE.Vector3(this.r(3), this.r(3), this.r(3));
      d.spin = new THREE.Vector3(this.r(10), this.r(10), this.r(10));
      d.life = 1.6 + Math.random() * 1.4;
      d.s = 0.6 + Math.random() * 1.2;
      this.debrisMesh.setColorAt(slot, color.clone().multiplyScalar(0.7 + Math.random() * 0.5));
      this.debrisMesh.instanceColor.needsUpdate = true;
    }
  }

  // --- Rezepte ----------------------------------------------------------
  explosion(p, radius, color) {
    const n = this.mul;
    const A = this.add, N = this.norm;
    A.spawn(p.x, p.y + 0.3, p.z, 0, 0, 0, 0.18, radius * 3.2, radius * 4.2, COL.white, COL.fire1, 1);
    for (let i = 0; i < 18 * n; i++) {
      const s = radius * (0.8 + Math.random() * 0.8);
      A.spawn(p.x + this.r(radius * 0.3), p.y + 0.3 + Math.random() * 0.5, p.z + this.r(radius * 0.3),
        this.r(radius * 2.2), Math.random() * radius * 2.5 + 1, this.r(radius * 2.2),
        0.35 + Math.random() * 0.35, s, s * 1.6, COL.fire1, COL.fire3, 0.95, -1, 3);
    }
    for (let i = 0; i < 16 * n; i++) {
      const s = radius * (1 + Math.random());
      N.spawn(p.x + this.r(radius * 0.5), p.y + 0.5 + Math.random(), p.z + this.r(radius * 0.5),
        this.r(radius * 1.2), Math.random() * radius * 1.4 + 1.5, this.r(radius * 1.2),
        1.6 + Math.random() * 1.6, s * 0.8, s * 2.6, COL.smoke1, COL.smoke2, 0.75, -0.6, 1.2);
    }
    for (let i = 0; i < 22 * n; i++) {
      A.spawn(p.x, p.y + 0.4, p.z, this.r(14), Math.random() * 14 + 2, this.r(14), 0.4 + Math.random() * 0.5, 0.25, 0.05, COL.spark, COL.fire2, 1, GRAVITY * 0.8, 0.8);
    }
    for (let i = 0; i < 14 * n; i++) {
      N.spawn(p.x + this.r(radius * 0.4), p.y + 0.2, p.z + this.r(radius * 0.4), this.r(6), Math.random() * 9 + 3, this.r(6),
        0.9 + Math.random() * 0.6, 0.5, 0.9, color || COL.dust, COL.dust2, 0.9, GRAVITY * 0.7, 0.5);
    }
    this.spawnDebris(p.x, p.y, p.z, color || COL.dust, Math.round(10 * n + radius * 2), radius * 2.2);
  }

  splash(p, big = 1) {
    const N = this.norm;
    for (let i = 0; i < 26 * this.mul * big; i++) {
      N.spawn(p.x + this.r(0.4 * big), p.y + 0.1, p.z + this.r(0.4 * big), this.r(2.5 * big), Math.random() * 8 * big + 3, this.r(2.5 * big),
        0.8 + Math.random() * 0.6, 0.35 * big, 0.7 * big, COL.water, COL.water2, 0.9, GRAVITY * 0.8, 0.3);
    }
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2;
      N.spawn(p.x, p.y + 0.05, p.z, Math.cos(a) * 3 * big, 0.3, Math.sin(a) * 3 * big, 0.8, 0.6 * big, 1.6 * big, COL.water, COL.water2, 0.6, 0, 2.5);
    }
  }

  muzzle(p, dir) {
    this.add.spawn(p.x, p.y, p.z, dir.x * 2, dir.y * 2, dir.z * 2, 0.07, 0.9, 0.5, COL.fire1, COL.fire2, 1);
    this.norm.spawn(p.x, p.y, p.z, dir.x * 1.5, dir.y * 1.5 + 0.5, dir.z * 1.5, 0.6, 0.2, 0.8, COL.smoke2, COL.smoke2, 0.4, -0.5, 1);
  }

  tracer(a, b) {
    const d = a.distanceTo(b);
    const n = Math.min(40, Math.ceil(d / 1.2));
    for (let i = 0; i < n; i++) {
      const t = i / n;
      this.add.spawn(a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t, a.z + (b.z - a.z) * t, 0, 0, 0, 0.12 + t * 0.05, 0.14, 0.04, COL.spark, COL.fire2, 0.9);
    }
  }

  impactDust(p, color) {
    for (let i = 0; i < 7; i++) {
      this.norm.spawn(p.x, p.y + 0.05, p.z, this.r(2), Math.random() * 3 + 1, this.r(2), 0.6 + Math.random() * 0.4, 0.2, 0.6, color || COL.dust, COL.dust2, 0.8, GRAVITY * 0.5, 1);
    }
  }

  milk(p) {
    for (let i = 0; i < 12; i++) {
      this.norm.spawn(p.x, p.y, p.z, this.r(3), Math.random() * 4 + 1, this.r(3), 0.5 + Math.random() * 0.4, 0.16, 0.06, COL.milk, COL.milk, 1, GRAVITY * 0.8, 0.5);
    }
  }

  smokeTrail(p) {
    this.norm.spawn(p.x, p.y, p.z, this.r(0.3), this.r(0.3) + 0.4, this.r(0.3), 0.9 + Math.random() * 0.5, 0.25, 1.1, COL.smoke2, COL.smoke2, 0.55, -0.4, 1.5);
    this.add.spawn(p.x, p.y, p.z, 0, 0, 0, 0.08, 0.5, 0.2, COL.fire1, COL.fire2, 0.9);
  }

  sparkle(p, color = COL.spark) {
    this.add.spawn(p.x, p.y, p.z, this.r(0.4), 0.6, this.r(0.4), 0.4, 0.15, 0.02, color, color, 1);
  }

  heal(p) {
    for (let i = 0; i < 26; i++) {
      this.add.spawn(p.x + this.r(0.6), p.y + Math.random() * 1.6, p.z + this.r(0.6), this.r(0.3), 1 + Math.random() * 1.5, this.r(0.3),
        0.9 + Math.random() * 0.5, 0.3, 0.05, COL.heal, COL.heal2, 1);
    }
  }

  healRing(p, radius) {
    for (let i = 0; i < 48; i++) {
      const a = (i / 48) * Math.PI * 2;
      this.add.spawn(p.x + Math.cos(a) * radius, p.y + 0.3, p.z + Math.sin(a) * radius, 0, 1.5, 0, 1.1, 0.5, 0.1, COL.heal, COL.heal2, 1);
    }
  }

  gas(p, radius) {
    const a = Math.random() * Math.PI * 2, rr = Math.random() * radius * 0.85;
    this.norm.spawn(p.x + Math.cos(a) * rr, p.y + Math.random() * 1.2, p.z + Math.sin(a) * rr, this.r(0.3), 0.15 + Math.random() * 0.25, this.r(0.3),
      2 + Math.random() * 1.5, 1.2, 2.6, COL.gas1, COL.gas2, 0.45, 0, 0.5);
  }

  gasBurst(p, radius) {
    for (let i = 0; i < 40 * this.mul; i++) {
      const a = Math.random() * Math.PI * 2, s = Math.random() * radius * 1.4;
      this.norm.spawn(p.x, p.y + 0.4, p.z, Math.cos(a) * s, Math.random() * 2, Math.sin(a) * s, 1.4 + Math.random(), 0.8, 2.6, COL.gas1, COL.gas2, 0.7, 0, 1.8);
    }
  }

  flame(p, dir, range) {
    for (let i = 0; i < 6; i++) {
      const sp = range * (1.1 + Math.random() * 0.5);
      this.add.spawn(p.x, p.y, p.z, dir.x * sp + this.r(1.6), dir.y * sp + this.r(1.0) + 0.6, dir.z * sp + this.r(1.6),
        0.55 + Math.random() * 0.25, 0.3, 1.6, COL.fire1, COL.fire3, 0.9, -1.5, 1.2);
    }
    this.norm.spawn(p.x + dir.x * range * 0.8, p.y + 0.5, p.z + dir.z * range * 0.8, this.r(0.5), 1.2, this.r(0.5), 1.2, 0.6, 1.8, COL.smoke1, COL.smoke2, 0.35, -0.5, 1);
  }

  burning(p) {
    this.add.spawn(p.x + this.r(0.3), p.y + Math.random() * 0.8, p.z + this.r(0.3), this.r(0.3), 1.5 + Math.random(), this.r(0.3), 0.4, 0.5, 0.1, COL.fire1, COL.fire3, 0.9);
  }

  propBurst(o) {
    const top = o.top - 1;
    const kind = o.kind;
    let c = COL.leaf;
    if (kind === 'rock') c = COL.rock;
    else if (kind === 'bale') c = COL.straw;
    else if (kind === 'silo') c = COL.white;
    this.spawnDebris(o.x, top * 0.5 + o.y0 * 0.5, o.z, c, 8, 5);
    for (let i = 0; i < 20 * this.mul; i++) {
      this.norm.spawn(o.x + this.r(1), (o.y0 + top) / 2 + Math.random() * 2, o.z + this.r(1), this.r(3), Math.random() * 4, this.r(3),
        1 + Math.random(), 0.3, 0.15, c, c, 1, GRAVITY * 0.3, 1.5);
    }
  }

  stars(p) {
    for (let i = 0; i < 10; i++) {
      const a = (i / 10) * Math.PI * 2;
      this.add.spawn(p.x, p.y, p.z, Math.cos(a) * 2, 1.5, Math.sin(a) * 2, 0.6, 0.3, 0.05, COL.gold, COL.gold, 1, 2, 1);
    }
  }

  update(dt) {
    this.add.update(dt);
    this.norm.update(dt);
    let any = false;
    for (let i = 0; i < this.debris.length; i++) {
      const d = this.debris[i];
      if (!d.alive) continue;
      any = true;
      d.life -= dt;
      if (d.life <= 0) {
        d.alive = false;
        this.debrisMesh.setMatrixAt(i, this.zero);
        continue;
      }
      d.v.y -= GRAVITY * dt;
      d.p.addScaledVector(d.v, dt);
      if (this.terrain) {
        const h = this.terrain.heightAt(d.p.x, d.p.z);
        if (d.p.y < h + 0.05) {
          d.p.y = h + 0.05;
          d.v.y = Math.abs(d.v.y) * 0.3;
          d.v.x *= 0.6; d.v.z *= 0.6;
          d.spin.multiplyScalar(0.6);
        }
      }
      d.rot.addScaledVector(d.spin, dt);
      const sc = d.s * Math.min(1, d.life * 2);
      this._e.set(d.rot.x, d.rot.y, d.rot.z);
      this._q.setFromEuler(this._e);
      this._m.compose(d.p, this._q, this._s.set(sc, sc, sc));
      this.debrisMesh.setMatrixAt(i, this._m);
    }
    if (any || this._hadDebris) this.debrisMesh.instanceMatrix.needsUpdate = true;
    this._hadDebris = any;
  }
}

export { COL };
