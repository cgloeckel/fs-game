// Heightmap-Insel mit Kratern, Vertex-Farben und schnellen Höhenabfragen.
import * as THREE from 'three';
import { makeNoise2D, fbm, hash2 } from './rng.js';
import { WORLD_SIZE } from './config.js';
import { clamp, smoothstep } from './util.js';

export class Terrain {
  constructor(theme, seed, res = 128, lowQuality = false) {
    this.theme = theme;
    this.size = WORLD_SIZE;
    this.half = this.size / 2;
    this.res = res;
    this.cell = this.size / (res - 1);
    this.h = new Float32Array(res * res);
    this.scorch = new Float32Array(res * res);
    this.varN = new Float32Array(res * res);
    this.waterLevel = 0;
    this.colors = {};
    for (const k in theme.colors) this.colors[k] = new THREE.Color(theme.colors[k]);
    this.generate(seed);
    this.buildMesh(lowQuality);
  }

  idx(i, j) { return j * this.res + i; }

  generate(seed) {
    const T = this.theme;
    const n1 = makeNoise2D(seed);
    const n2 = makeNoise2D(seed + 17);
    const n3 = makeNoise2D(seed + 31);
    const r = this.res;
    for (let j = 0; j < r; j++) {
      for (let i = 0; i < r; i++) {
        const x = -this.half + i * this.cell;
        const z = -this.half + j * this.cell;
        const nx = x / this.size, nz = z / this.size;
        const wx = nx + 0.07 * n2(nx * 3.1, nz * 3.1);
        const wz = nz + 0.07 * n2(nx * 3.1 + 5.2, nz * 3.1 + 5.2);
        const d = Math.sqrt(wx * wx + wz * wz) * 2;
        const f = fbm(n1, wx * T.freq + 10, wz * T.freq + 10, T.oct);
        let hn = clamp(f * 0.75 + 0.5, 0, 1);
        let h = T.base + T.amp * Math.pow(hn, T.pow || 1.2);
        if (T.peaks) {
          for (const p of T.peaks) {
            const dx = nx - p.x, dz = nz - p.z;
            h += p.h * Math.exp(-(dx * dx + dz * dz) / (p.r * p.r));
          }
        }
        if (T.ponds) {
          const pn = fbm(n3, nx * 4.5 + 3, nz * 4.5 + 3, 2);
          if (pn > 0.12) h -= (pn - 0.12) * T.ponds * 6;
        }
        if (T.terrace) {
          const s = T.terrace;
          const k = h / s;
          const fl = Math.floor(k);
          h = (fl + smoothstep(T.terraceSharp || 0.6, 1, k - fl)) * s;
        }
        const m = 1 - smoothstep(0.6, 0.95, d);
        h = h * m + -5 * (1 - m);
        this.h[this.idx(i, j)] = Math.max(-6, h);
        this.varN[this.idx(i, j)] = fbm(n2, nx * 14, nz * 14, 2) * 0.5 + 0.5;
      }
    }
    // Zentrum garantiert begehbar: leicht anheben, falls zu tief
    for (let k = 0; k < this.h.length; k++) {
      if (this.h[k] > -0.2 && this.h[k] < 0.6) this.h[k] = this.h[k] * 0.9 - 0.05;
    }
  }

  heightAt(x, z) {
    const fx = (x + this.half) / this.cell;
    const fz = (z + this.half) / this.cell;
    const r = this.res;
    if (fx < 0 || fz < 0 || fx > r - 1 || fz > r - 1) return -6;
    let i = Math.floor(fx), j = Math.floor(fz);
    if (i > r - 2) i = r - 2;
    if (j > r - 2) j = r - 2;
    const tx = fx - i, tz = fz - j;
    const k = j * r + i;
    const h00 = this.h[k], h10 = this.h[k + 1], h01 = this.h[k + r], h11 = this.h[k + r + 1];
    return (h00 * (1 - tx) + h10 * tx) * (1 - tz) + (h01 * (1 - tx) + h11 * tx) * tz;
  }

  normalAt(x, z, out = new THREE.Vector3()) {
    const e = 0.5;
    const hl = this.heightAt(x - e, z), hr = this.heightAt(x + e, z);
    const hd = this.heightAt(x, z - e), hu = this.heightAt(x, z + e);
    return out.set(hl - hr, 2 * e, hd - hu).normalize();
  }

  slopeAt(x, z) {
    const e = 0.5;
    const gx = (this.heightAt(x + e, z) - this.heightAt(x - e, z)) / (2 * e);
    const gz = (this.heightAt(x, z + e) - this.heightAt(x, z - e)) / (2 * e);
    return Math.sqrt(gx * gx + gz * gz);
  }

  isLand(x, z, margin = 0.35) {
    return this.heightAt(x, z) > this.waterLevel + margin;
  }

  colorFor(k, i, j, out) {
    const C = this.colors, T = this.theme;
    const h = this.h[k];
    const wl = this.waterLevel;
    const r = this.res;
    const hl = this.h[k - (i > 0 ? 1 : 0)], hr = this.h[k + (i < r - 1 ? 1 : 0)];
    const hd = this.h[k - (j > 0 ? r : 0)], hu = this.h[k + (j < r - 1 ? r : 0)];
    const g = Math.sqrt((hr - hl) ** 2 + (hu - hd) ** 2) / (2 * this.cell);
    const v = this.varN[k];
    out.copy(C.grass1).lerp(C.grass2, clamp(v * 1.4 - 0.2, 0, 1));
    if (T.rockBias && h > 3) out.lerp(C.rock, clamp((h - 3) / 8, 0, 1) * T.rockBias + v * 0.1);
    if (h < wl + 0.9) out.lerp(C.sand, clamp(1 - (h - wl - 0.15) / 0.75, 0, 1));
    if (h < wl - 0.4) out.copy(C.sand).lerp(C.seabed, clamp((wl - 0.4 - h) / 2.5, 0, 1));
    if (g > 0.6) out.lerp(C.rock, smoothstep(0.6, 1.1, g));
    if (h > T.snowLine && g < 1.1) out.lerp(C.snow, smoothstep(T.snowLine, T.snowLine + 2.5, h));
    const s = this.scorch[k];
    if (s > 0) out.lerp(C.dirt, s);
    const hv = hash2(i, j) * 0.08 - 0.04;
    out.r = Math.max(0, out.r + hv);
    out.g = Math.max(0, out.g + hv);
    out.b = Math.max(0, out.b + hv);
    return out;
  }

  buildMesh(lowQuality) {
    const r = this.res, N = r * r;
    const pos = new Float32Array(N * 3);
    const nor = new Float32Array(N * 3);
    const colA = new Float32Array(N * 3);
    for (let j = 0; j < r; j++) {
      for (let i = 0; i < r; i++) {
        const k = j * r + i;
        pos[k * 3] = -this.half + i * this.cell;
        pos[k * 3 + 1] = this.h[k];
        pos[k * 3 + 2] = -this.half + j * this.cell;
      }
    }
    const idx = new (N > 65535 ? Uint32Array : Uint16Array)((r - 1) * (r - 1) * 6);
    let p = 0;
    for (let j = 0; j < r - 1; j++) {
      for (let i = 0; i < r - 1; i++) {
        const a = j * r + i, b = a + 1, c = a + r, d = c + 1;
        if ((i + j) % 2 === 0) {
          idx[p++] = a; idx[p++] = c; idx[p++] = b;
          idx[p++] = b; idx[p++] = c; idx[p++] = d;
        } else {
          idx[p++] = a; idx[p++] = c; idx[p++] = d;
          idx[p++] = a; idx[p++] = d; idx[p++] = b;
        }
      }
    }
    const uv = new Float32Array(N * 2);
    for (let j = 0; j < r; j++) {
      for (let i = 0; i < r; i++) {
        const k = j * r + i;
        uv[k * 2] = i / (r - 1);
        uv[k * 2 + 1] = j / (r - 1);
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colA, 3));
    geo.setIndex(new THREE.BufferAttribute(idx, 1));
    this.geo = geo;
    this.updateRegion(0, 0, r - 1, r - 1);
    geo.computeBoundingSphere();
    geo.computeBoundingBox();
    const detail = detailTexture();
    const mat = lowQuality
      ? new THREE.MeshLambertMaterial({ vertexColors: true, map: detail })
      : new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.96, metalness: 0, map: detail });
    mat.color.setScalar(1.14);
    this.mesh = new THREE.Mesh(geo, mat);
    this.mesh.receiveShadow = true;
    this.mesh.castShadow = !lowQuality;
  }

  updateRegion(i0, j0, i1, j1) {
    const r = this.res;
    i0 = clamp(i0, 0, r - 1); i1 = clamp(i1, 0, r - 1);
    j0 = clamp(j0, 0, r - 1); j1 = clamp(j1, 0, r - 1);
    const pos = this.geo.attributes.position.array;
    const nor = this.geo.attributes.normal.array;
    const colA = this.geo.attributes.color.array;
    const c = new THREE.Color();
    const cell2 = 2 * this.cell;
    for (let j = j0; j <= j1; j++) {
      for (let i = i0; i <= i1; i++) {
        const k = j * r + i;
        pos[k * 3 + 1] = this.h[k];
        const hl = this.h[i > 0 ? k - 1 : k], hr = this.h[i < r - 1 ? k + 1 : k];
        const hd = this.h[j > 0 ? k - r : k], hu = this.h[j < r - 1 ? k + r : k];
        let nx = hl - hr, ny = cell2, nz = hd - hu;
        const l = Math.sqrt(nx * nx + ny * ny + nz * nz);
        nor[k * 3] = nx / l; nor[k * 3 + 1] = ny / l; nor[k * 3 + 2] = nz / l;
        this.colorFor(k, i, j, c);
        colA[k * 3] = c.r; colA[k * 3 + 1] = c.g; colA[k * 3 + 2] = c.b;
      }
    }
    this.geo.attributes.position.needsUpdate = true;
    this.geo.attributes.normal.needsUpdate = true;
    this.geo.attributes.color.needsUpdate = true;
  }

  deform(x, z, radius, depth) {
    const r = this.res;
    const i0 = Math.floor((x - radius + this.half) / this.cell) - 1;
    const i1 = Math.ceil((x + radius + this.half) / this.cell) + 1;
    const j0 = Math.floor((z - radius + this.half) / this.cell) - 1;
    const j1 = Math.ceil((z + radius + this.half) / this.cell) + 1;
    for (let j = Math.max(0, j0); j <= Math.min(r - 1, j1); j++) {
      for (let i = Math.max(0, i0); i <= Math.min(r - 1, i1); i++) {
        const vx = -this.half + i * this.cell, vz = -this.half + j * this.cell;
        const d = Math.sqrt((vx - x) ** 2 + (vz - z) ** 2);
        const k = j * r + i;
        if (d < radius) {
          const t = d / radius;
          this.h[k] = Math.max(-6, this.h[k] - depth * (Math.cos(t * Math.PI) * 0.5 + 0.5));
        }
        if (d < radius * 1.35) {
          const s = clamp(1 - d / (radius * 1.35), 0, 1) * 0.9;
          this.scorch[k] = Math.max(this.scorch[k], s);
        }
      }
    }
    this.updateRegion(i0 - 1, j0 - 1, i1 + 1, j1 + 1);
  }

  scorchAt(x, z, radius, amount = 0.5) {
    const r = this.res;
    const i0 = Math.floor((x - radius + this.half) / this.cell);
    const i1 = Math.ceil((x + radius + this.half) / this.cell);
    const j0 = Math.floor((z - radius + this.half) / this.cell);
    const j1 = Math.ceil((z + radius + this.half) / this.cell);
    for (let j = Math.max(0, j0); j <= Math.min(r - 1, j1); j++) {
      for (let i = Math.max(0, i0); i <= Math.min(r - 1, i1); i++) {
        const vx = -this.half + i * this.cell, vz = -this.half + j * this.cell;
        const d = Math.sqrt((vx - x) ** 2 + (vz - z) ** 2);
        if (d < radius) {
          const k = j * r + i;
          this.scorch[k] = Math.max(this.scorch[k], (1 - d / radius) * amount);
        }
      }
    }
    this.updateRegion(i0 - 1, j0 - 1, i1 + 1, j1 + 1);
  }

  refreshColors() {
    this.updateRegion(0, 0, this.res - 1, this.res - 1);
  }

  // Strahl gegen Gelände (Marching + Bisektion)
  raycast(origin, dir, maxDist = 300, step = 0.4) {
    let t = 0;
    let prevT = 0;
    const p = new THREE.Vector3();
    if (origin.y < this.heightAt(origin.x, origin.z)) return { t: 0, point: origin.clone() };
    while (t < maxDist) {
      p.copy(origin).addScaledVector(dir, t);
      if (p.y <= this.heightAt(p.x, p.z)) {
        let a = prevT, b = t;
        for (let it = 0; it < 10; it++) {
          const m = (a + b) / 2;
          p.copy(origin).addScaledVector(dir, m);
          if (p.y <= this.heightAt(p.x, p.z)) b = m; else a = m;
        }
        p.copy(origin).addScaledVector(dir, b);
        return { t: b, point: p.clone() };
      }
      prevT = t;
      t += step;
      if (p.y < -8) return null;
    }
    return null;
  }

  // Sichtlinie zwischen zwei Punkten?
  lineOfSight(a, b, clearance = 0.15) {
    const dx = b.x - a.x, dy = b.y - a.y, dz = b.z - a.z;
    const len = Math.sqrt(dx * dx + dy * dy + dz * dz);
    const steps = Math.ceil(len / 0.5);
    for (let s = 1; s < steps; s++) {
      const t = s / steps;
      const x = a.x + dx * t, y = a.y + dy * t, z = a.z + dz * t;
      if (y < this.heightAt(x, z) + clearance) return false;
    }
    return true;
  }
}

// Feine Detailtextur (Grasstruktur), wird mit den Vertex-Farben multipliziert
let _detail = null;
function detailTexture() {
  if (_detail) return _detail;
  const n = 256;
  const data = new Uint8Array(n * n * 4);
  const vals = new Float32Array(n * n);
  for (let i = 0; i < n * n; i++) vals[i] = Math.random();
  const at = (x, y) => vals[((y + n) % n) * n + ((x + n) % n)];
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      // leicht verschmiert + Halme
      let v = (at(x, y) * 2 + at(x + 1, y) + at(x, y + 1) + at(x - 1, y) + at(x, y - 1)) / 6;
      const blade = at(x * 3, y) > 0.92 ? 0.12 : 0;
      v = 0.8 + v * 0.2 + blade;
      const c = Math.min(255, Math.round(v * 255));
      const i = (y * n + x) * 4;
      data[i] = c; data[i + 1] = c; data[i + 2] = c; data[i + 3] = 255;
    }
  }
  const t = new THREE.DataTexture(data, n, n, THREE.RGBAFormat);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(36, 36);
  t.magFilter = THREE.LinearFilter;
  t.minFilter = THREE.LinearMipmapLinearFilter;
  t.generateMipmaps = true;
  t.anisotropy = 4;
  t.needsUpdate = true;
  _detail = t;
  return t;
}
