// Szene rund um die Insel: Licht, Himmel, Wasser, Berge, Wolken, Requisiten.
import * as THREE from 'three';
import { Terrain } from './terrain.js';
import { RNG, makeNoise2D } from './rng.js';
import { propGeometry, materials, merge, part, col } from './models.js';
import { DEG, clamp, dist2D } from './util.js';

export const GRID = 6;
const EMPTY = [];
export const gridKey = (ix, iz) => (ix + 512) * 2048 + (iz + 512);

const QUALITY = {
  low: { res: 96, shadow: 0, propScale: 0.45, grassScale: 0.3 },
  medium: { res: 128, shadow: 1024, propScale: 0.8, grassScale: 0.65 },
  high: { res: 160, shadow: 2048, propScale: 1, grassScale: 1 },
};

export class World {
  constructor(scene, theme, seed, quality = 'medium', opts = {}) {
    this.scene = scene;
    this.theme = theme;
    this.Q = QUALITY[quality] || QUALITY.medium;
    this.quality = quality;
    this.rng = new RNG(seed * 7 + 3);
    this.time = 0;
    this.obstacles = [];
    this.instanced = {};
    this.terrain = new Terrain(theme, seed, this.Q.res, quality === 'low');
    scene.add(this.terrain.mesh);
    this.setupLights();
    this.setupSky(opts.fog);
    this.setupWater();
    if (theme.mountains) this.setupMountains();
    this.setupClouds();
    const avoid = opts.planSpawns ? opts.planSpawns(this.terrain) : (opts.avoid || []);
    this.placeProps({ ...opts, avoid });
    this.buildGrid();
  }

  // Räumliches Raster für schnelle Kollisionsabfragen
  buildGrid() {
    const grid = new Map();
    for (const o of this.obstacles) {
      const r = Math.max(o.r, o.pr) + 0.6;
      const x0 = Math.floor((o.x - r) / GRID), x1 = Math.floor((o.x + r) / GRID);
      const z0 = Math.floor((o.z - r) / GRID), z1 = Math.floor((o.z + r) / GRID);
      for (let ix = x0; ix <= x1; ix++) {
        for (let iz = z0; iz <= z1; iz++) {
          const k = gridKey(ix, iz);
          if (!grid.has(k)) grid.set(k, []);
          grid.get(k).push(o);
        }
      }
    }
    this.obstacleGrid = grid;
  }

  obstaclesNear(x, z) {
    return this.obstacleGrid.get(gridKey(Math.floor(x / GRID), Math.floor(z / GRID))) || EMPTY;
  }

  setupLights() {
    const T = this.theme;
    this.hemi = new THREE.HemisphereLight(T.hemi.sky, T.hemi.ground, T.hemi.intensity);
    this.scene.add(this.hemi);
    const sun = new THREE.DirectionalLight(T.sun.color, T.sun.intensity);
    const el = T.sun.elev * DEG, az = T.sun.azim * DEG;
    this.sunDir = new THREE.Vector3(Math.cos(el) * Math.sin(az), Math.sin(el), Math.cos(el) * Math.cos(az)).normalize();
    sun.position.copy(this.sunDir).multiplyScalar(150);
    sun.target.position.set(0, 0, 0);
    if (this.Q.shadow) {
      sun.castShadow = true;
      sun.shadow.mapSize.set(this.Q.shadow, this.Q.shadow);
      const s = 64;
      Object.assign(sun.shadow.camera, { left: -s, right: s, top: s, bottom: -s, near: 20, far: 320 });
      sun.shadow.bias = -0.0006;
      sun.shadow.normalBias = 0.04;
    }
    this.sun = sun;
    this.scene.add(sun, sun.target);
    // Blitzlicht für Explosionen
    this.flash = new THREE.PointLight(0xffaa55, 0, 22, 1.6);
    this.scene.add(this.flash);
  }

  setupSky(fogRule) {
    const T = this.theme;
    const top = new THREE.Color(T.sky.top), hor = new THREE.Color(T.sky.horizon);
    let near = T.fog[0], far = T.fog[1];
    if (fogRule) { near = 8; far = 75; }
    this.scene.fog = new THREE.Fog(hor.clone(), near, far);
    this.scene.background = hor.clone();
    const geo = new THREE.SphereGeometry(900, 32, 16);
    const mat = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
      uniforms: {
        uTop: { value: top },
        uHor: { value: fogRule ? hor.clone().lerp(new THREE.Color('#c8cfd2'), 0.6) : hor },
        uSun: { value: this.sunDir.clone() },
        uSunCol: { value: new THREE.Color(T.sun.color) },
        uFog: { value: fogRule ? 1 : 0 },
      },
      vertexShader: `varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
      fragmentShader: `uniform vec3 uTop; uniform vec3 uHor; uniform vec3 uSun; uniform vec3 uSunCol; uniform float uFog; varying vec3 vDir;
        void main(){ float h = max(vDir.y, 0.0); vec3 c = mix(uHor, uTop, pow(h, 0.38));
          if (vDir.y < 0.0) c = uHor * 0.92;
          float s = max(dot(normalize(vDir), uSun), 0.0);
          c += uSunCol * (pow(s, 600.0) * 2.5 + pow(s, 12.0) * 0.25) * (1.0 - uFog);
          c = mix(c, uHor, uFog * 0.85);
          gl_FragColor = vec4(c, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,
    });
    this.sky = new THREE.Mesh(geo, mat);
    this.sky.frustumCulled = false;
    this.sky.renderOrder = -1;
    this.scene.add(this.sky);
  }

  setupWater() {
    const T = this.theme;
    const size = 128;
    const data = new Uint8Array(size * size * 4);
    const n = makeNoise2D(99);
    const hgt = (x, y) => n(x / 9, y / 9) * 0.6 + n(x / 4, y / 4) * 0.3;
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const hx = hgt((x + 1) % size, y) - hgt((x - 1 + size) % size, y);
        const hy = hgt(x, (y + 1) % size) - hgt(x, (y - 1 + size) % size);
        const v = new THREE.Vector3(-hx * 2.5, -hy * 2.5, 1).normalize();
        const i = (y * size + x) * 4;
        data[i] = (v.x * 0.5 + 0.5) * 255;
        data[i + 1] = (v.y * 0.5 + 0.5) * 255;
        data[i + 2] = (v.z * 0.5 + 0.5) * 255;
        data[i + 3] = 255;
      }
    }
    const tex = new THREE.DataTexture(data, size, size, THREE.RGBAFormat);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.magFilter = THREE.LinearFilter;
    tex.minFilter = THREE.LinearMipmapLinearFilter;
    tex.generateMipmaps = true;
    tex.repeat.set(60, 60);
    tex.needsUpdate = true;
    this.waterTex = tex;
    const mat = new THREE.MeshPhongMaterial({
      color: new THREE.Color(T.water),
      specular: 0xffffff,
      shininess: 90,
      transparent: true,
      opacity: T.waterOpacity || 0.82,
      normalMap: tex,
      normalScale: new THREE.Vector2(0.6, 0.6),
      depthWrite: false,
    });
    const geo = new THREE.PlaneGeometry(1800, 1800, 1, 1);
    geo.rotateX(-Math.PI / 2);
    this.water = new THREE.Mesh(geo, mat);
    this.water.position.y = this.terrain.waterLevel;
    this.water.renderOrder = 2;
    this.water.receiveShadow = this.quality === 'high';
    this.scene.add(this.water);
  }

  setWaterLevel(y) {
    this.terrain.waterLevel = y;
    this.water.position.y = y;
  }

  setupMountains() {
    const rng = new RNG(1234);
    const parts = [];
    const n = 28;
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2 + rng.range(-0.08, 0.08);
      const dist = rng.range(360, 470);
      const h = rng.range(60, 150);
      const r = rng.range(60, 110);
      const g = new THREE.ConeGeometry(r, h, 7, 3);
      parts.push(part(g, { p: [Math.sin(a) * dist, h / 2 - 6, Math.cos(a) * dist], r: [0, rng.range(0, 3), 0], jitter: 14, seed: i + 1 }, (P, N, out) => {
        const rel = (P.y + 6) / 150;
        out.copy(col('#6a7a8c')).lerp(col('#8e9aa6'), rel);
        if (P.y > h * 0.55 - 6 && N.y > 0.25) out.copy(col('#f2f6fa'));
      }));
    }
    const geo = merge(parts);
    // eigener Dunst statt Szenen-Nebel, damit Schneegipfel sichtbar bleiben
    const haze = new THREE.Color(this.theme.sky.horizon).lerp(new THREE.Color('#9fb6cf'), 0.5);
    const ca = geo.attributes.color;
    const c = new THREE.Color();
    for (let i = 0; i < ca.count; i++) {
      c.setRGB(ca.getX(i), ca.getY(i), ca.getZ(i)).lerp(haze, 0.42);
      ca.setXYZ(i, c.r, c.g, c.b);
    }
    const mat = new THREE.MeshLambertMaterial({ vertexColors: true, fog: false });
    this.mountains = new THREE.Mesh(geo, mat);
    this.scene.add(this.mountains);
  }

  setupClouds() {
    const rng = new RNG(4321);
    this.clouds = new THREE.Group();
    const mat = new THREE.MeshLambertMaterial({ color: 0xffffff, emissive: 0x8a8f99, flatShading: true });
    for (let c = 0; c < 9; c++) {
      const ps = [];
      const k = rng.int(4, 7);
      for (let i = 0; i < k; i++) {
        const g = new THREE.IcosahedronGeometry(rng.range(8, 15), 1);
        ps.push(part(g, { p: [i * 10 - k * 5 + rng.range(-3, 3), rng.range(-2, 4), rng.range(-6, 6)], s: [1, 0.6, 1] }, '#ffffff'));
      }
      const m = new THREE.Mesh(merge(ps), mat);
      const a = rng.range(0, Math.PI * 2), d = rng.range(120, 380);
      m.position.set(Math.sin(a) * d, rng.range(75, 120), Math.cos(a) * d);
      m.userData.speed = rng.range(1, 3);
      this.clouds.add(m);
    }
    this.scene.add(this.clouds);
  }

  // --- Requisiten -----------------------------------------------------------
  findSpot(rng, { minH = 0.7, maxSlope = 0.6, minDist = 2, avoid = [], tries = 40, area = 0.92 } = {}) {
    const T = this.terrain;
    for (let t = 0; t < tries; t++) {
      const x = rng.range(-T.half * area, T.half * area);
      const z = rng.range(-T.half * area, T.half * area);
      const h = T.heightAt(x, z);
      if (h < T.waterLevel + minH) continue;
      if (T.slopeAt(x, z) > maxSlope) continue;
      let ok = true;
      for (const o of this.obstacles) {
        if (dist2D(x, z, o.x, o.z) < minDist + o.r) { ok = false; break; }
      }
      if (ok) {
        for (const a of avoid) {
          if (dist2D(x, z, a.x, a.z) < a.r) { ok = false; break; }
        }
      }
      if (ok) return { x, z, y: h };
    }
    return null;
  }

  addInstanced(kind, list, { castShadow = true, colors = null } = {}) {
    if (!list.length) return null;
    const geo = propGeometry(kind);
    const mat = materials().prop;
    const im = new THREE.InstancedMesh(geo, mat, list.length);
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3();
    list.forEach((it, i) => {
      q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), it.rot || 0);
      if (it.tilt) q.multiply(new THREE.Quaternion().setFromEuler(new THREE.Euler(it.tilt[0], 0, it.tilt[1])));
      s.set(it.sx || it.s || 1, it.sy || it.s || 1, it.sz || it.s || 1);
      p.set(it.x, it.y, it.z);
      m.compose(p, q, s);
      im.setMatrixAt(i, m);
      if (colors) im.setColorAt(i, colors(it, i));
      it.mesh = im;
      it.index = i;
      it.matrix = m.clone();
    });
    im.instanceMatrix.needsUpdate = true;
    if (im.instanceColor) im.instanceColor.needsUpdate = true;
    im.castShadow = castShadow;
    im.receiveShadow = true;
    im.computeBoundingSphere();
    this.scene.add(im);
    this.instanced[kind] = im;
    return im;
  }

  placeProps(opts) {
    const P = this.theme.props;
    const rng = this.rng;
    const sc = this.Q.propScale, gs = this.Q.grassScale;
    const avoid = opts.avoid || [];
    const T = this.terrain;
    const statics = [];

    // Gebäude
    for (let i = 0; i < (P.stadl || 0); i++) {
      const s = this.findSpot(rng, { maxSlope: 0.25, minDist: 6, avoid, minH: 1.2, area: 0.7 });
      if (!s) continue;
      const rot = rng.range(0, Math.PI * 2);
      const g = propGeometry('stadl');
      g.rotateY(rot);
      g.translate(s.x, s.y - 0.3, s.z);
      statics.push(g);
      // Rechteck grob mit drei Kreisen annähern
      const fx = Math.sin(rot), fz = Math.cos(rot);
      for (const o of [-2, 0, 2]) {
        this.obstacles.push({ kind: 'stadl', x: s.x + fx * o, z: s.z + fz * o, r: 2.3, pr: 2.3, y0: s.y - 1, top: s.y + 5.5, solid: true });
      }
    }
    if (P.marterl || opts.maibaum) {
      for (let i = 0; i < (P.marterl || 0); i++) {
        const s = this.findSpot(rng, { maxSlope: 0.4, minDist: 3, avoid, area: 0.8 });
        if (!s) continue;
        const g = propGeometry('marterl');
        g.rotateY(rng.range(0, Math.PI * 2));
        g.translate(s.x, s.y - 0.1, s.z);
        statics.push(g);
        this.obstacles.push({ kind: 'marterl', x: s.x, z: s.z, r: 0.4, pr: 0.45, y0: s.y - 1, top: s.y + 2.6, solid: true });
      }
      if (opts.maibaum) {
        const s = this.findSpot(rng, { maxSlope: 0.3, minDist: 3, avoid, area: 0.4 });
        if (s) {
          const g = propGeometry('maibaum');
          g.translate(s.x, s.y - 0.2, s.z);
          statics.push(g);
          this.obstacles.push({ kind: 'maibaum', x: s.x, z: s.z, r: 0.35, pr: 0.35, y0: s.y - 1, top: s.y + 15, solid: true });
        }
      }
    }
    if (statics.length) {
      const mesh = new THREE.Mesh(merge(statics), materials().prop);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      this.scene.add(mesh);
      this.staticMesh = mesh;
    }

    const trees = (kind, count, sMin, sMax, r, pr, top, extra = {}) => {
      const list = [];
      const n = Math.round(count * sc);
      for (let i = 0; i < n; i++) {
        const s = this.findSpot(rng, { maxSlope: extra.maxSlope || 0.75, minDist: extra.minDist || 1.5, avoid, minH: extra.minH || 0.9 });
        if (!s) continue;
        const sz = rng.range(sMin, sMax);
        const it = { kind, x: s.x, y: s.y - 0.1, z: s.z, s: sz, rot: rng.range(0, 6.28), alive: true };
        list.push(it);
        const ob = { kind, x: s.x, z: s.z, r: r * sz, pr: pr * sz, y0: s.y - 0.5, top: s.y + top * sz, destructible: true, item: it, solid: true };
        this.obstacles.push(ob);
        it.ob = ob;
      }
      this.addInstanced(kind, list);
    };
    if (P.pine) trees('pine', P.pine, 0.8, 1.5, 0.35, 1.1, 4.4);
    if (P.pineSnow) trees('pineSnow', P.pineSnow, 0.8, 1.6, 0.35, 1.1, 4.4);
    if (P.broad) trees('broad', P.broad, 0.7, 1.2, 0.4, 1.5, 4.6);
    if (P.willow) trees('willow', P.willow, 0.8, 1.3, 0.45, 1.6, 4.3, { minH: 0.4 });
    if (P.rock) trees('rock', P.rock, 0.5, 1.6, 0.85, 0.9, 1.3, { maxSlope: 1.4, minDist: 1 });
    if (P.bale) trees('bale', P.bale, 0.9, 1.1, 0.75, 0.8, 1.45, { maxSlope: 0.3 });
    if (P.silo) trees('silo', P.silo, 0.9, 1.1, 0.75, 0.8, 1.45, { maxSlope: 0.3 });

    // Deko ohne Kollision
    const deco = (kind, count, sMin, sMax, opt = {}) => {
      const list = [];
      const n = Math.round(count * (opt.isGrass ? gs : sc));
      for (let i = 0; i < n; i++) {
        let x, z;
        if (opt.cluster && list.length && rng.chance(0.85)) {
          const b = list[Math.floor(rng.next() * list.length)];
          x = b.x + rng.range(-opt.cluster, opt.cluster);
          z = b.z + rng.range(-opt.cluster, opt.cluster);
        } else {
          x = rng.range(-T.half * 0.9, T.half * 0.9);
          z = rng.range(-T.half * 0.9, T.half * 0.9);
        }
        const h = T.heightAt(x, z);
        if (h < T.waterLevel + (opt.minH ?? 0.6) || h > T.waterLevel + (opt.maxH ?? 999)) continue;
        if (T.slopeAt(x, z) > (opt.maxSlope || 0.7)) continue;
        let blocked = false;
        for (const a of avoid) if (dist2D(x, z, a.x, a.z) < a.r * (opt.avoidScale ?? 1)) { blocked = true; break; }
        if (blocked) continue;
        list.push({ x, y: h - 0.05, z, s: rng.range(sMin, sMax), rot: rng.range(0, 6.28), alive: true, tint: rng.next() });
      }
      return list;
    };
    const grassTint = new THREE.Color(this.theme.colors.grass2);
    const grassTint2 = new THREE.Color(this.theme.colors.grass1);
    if (P.grass) {
      const l = deco('grass', P.grass, 0.7, 1.4, { isGrass: true, avoidScale: 0 });
      this.addInstanced('grass', l, { castShadow: false, colors: (it) => grassTint.clone().lerp(grassTint2, it.tint).multiplyScalar(1.1) });
    }
    if (P.flowers) {
      const fc = ['#ffffff', '#ffeb3b', '#e53935', '#7e57c2', '#ff8a65', '#4fc3f7'].map((c) => new THREE.Color(c));
      const l = deco('flower', P.flowers, 0.8, 1.3, { isGrass: true, avoidScale: 0, cluster: 2.5 });
      this.addInstanced('flower', l, { castShadow: false, colors: (it) => fc[Math.floor(it.tint * fc.length)] });
    }
    if (P.corn) {
      const l = deco('corn', P.corn, 0.85, 1.15, { cluster: 6, maxSlope: 0.4, avoidScale: 0.7 });
      this.addInstanced('corn', l, { castShadow: this.quality === 'high' });
      this.cornList = l;
    }
    if (P.pumpkin) this.addInstanced('pumpkin', deco('pumpkin', P.pumpkin, 0.7, 1.3, { cluster: 5, maxSlope: 0.4 }));
    if (P.reed) {
      const l = deco('reed', P.reed, 0.8, 1.3, { minH: -0.4, maxH: 0.8, maxSlope: 1, cluster: 3, avoidScale: 0.5 });
      this.addInstanced('reed', l, { castShadow: false });
    }
    if (P.vine) {
      // Weinreihen entlang der Höhenlinien
      const list = [];
      const n = Math.round(P.vine * sc);
      for (let i = 0; i < n; i++) {
        const x = rng.range(-T.half * 0.85, T.half * 0.85), z = rng.range(-T.half * 0.85, T.half * 0.85);
        const h = T.heightAt(x, z);
        if (h < T.waterLevel + 1) continue;
        if (T.slopeAt(x, z) > 0.35) continue;
        let blocked = false;
        for (const a of avoid) if (dist2D(x, z, a.x, a.z) < a.r * 0.8) { blocked = true; break; }
        if (blocked) continue;
        const nrm = T.normalAt(x, z);
        const rot = Math.abs(nrm.x) + Math.abs(nrm.z) > 0.05 ? Math.atan2(nrm.x, nrm.z) + Math.PI / 2 : 0;
        list.push({ x, y: h - 0.05, z, s: 1, rot: rot - Math.PI / 2, alive: true });
      }
      this.addInstanced('vine', list, { castShadow: this.quality === 'high' });
      this.vineList = list;
    }
  }

  // Requisiten im Explosionsradius zerstören
  destroyInRadius(x, y, z, radius, fx) {
    const destroyed = [];
    const zero = new THREE.Matrix4().makeScale(0, 0, 0);
    for (const o of this.obstacles) {
      if (!o.destructible || !o.item.alive) continue;
      const d = dist2D(x, z, o.x, o.z);
      if (d < radius + o.r * 0.5 && y < o.top + 1) {
        o.item.alive = false;
        o.solid = false;
        o.item.mesh.setMatrixAt(o.item.index, zero);
        o.item.mesh.instanceMatrix.needsUpdate = true;
        destroyed.push(o);
        if (fx) fx.propBurst(o);
      }
    }
    // Deko (Mais, Wein, Gras) wegblasen
    for (const kind of ['corn', 'vine', 'grass', 'flower', 'pumpkin', 'reed']) {
      const im = this.instanced[kind];
      if (!im) continue;
      let changed = false;
      const m = new THREE.Matrix4(), p = new THREE.Vector3();
      for (let i = 0; i < im.count; i++) {
        im.getMatrixAt(i, m);
        p.setFromMatrixPosition(m);
        if (m.elements[0] === 0 && m.elements[5] === 0) continue;
        if (dist2D(x, z, p.x, p.z) < radius * 0.9) {
          im.setMatrixAt(i, zero);
          changed = true;
        }
      }
      if (changed) im.instanceMatrix.needsUpdate = true;
    }
    return destroyed;
  }

  // Requisiten auf die (verformte) Geländehöhe nachziehen
  settleProps(x, z, radius) {
    const T = this.terrain;
    for (const kind in this.instanced) {
      const im = this.instanced[kind];
      const m = new THREE.Matrix4(), p = new THREE.Vector3(), q = new THREE.Quaternion(), s = new THREE.Vector3();
      let changed = false;
      for (let i = 0; i < im.count; i++) {
        im.getMatrixAt(i, m);
        m.decompose(p, q, s);
        if (s.x === 0) continue;
        if (dist2D(x, z, p.x, p.z) < radius + 1.5) {
          const h = T.heightAt(p.x, p.z) - 0.1;
          if (h < p.y - 0.05) {
            p.y = h;
            m.compose(p, q, s);
            im.setMatrixAt(i, m);
            changed = true;
          }
        }
      }
      if (changed) im.instanceMatrix.needsUpdate = true;
    }
    for (const o of this.obstacles) {
      if (o.destructible && o.item.alive && dist2D(x, z, o.x, o.z) < radius + 1) {
        const h = T.heightAt(o.x, o.z);
        o.y0 = h - 0.5;
        o.top = Math.min(o.top, h + (o.top - o.y0));
      }
    }
  }

  // Kreis gegen Hindernisse – schiebt raus, gibt true bei Kollision
  collideCircle(pos, r) {
    let hit = false;
    for (const o of this.obstaclesNear(pos.x, pos.z)) {
      if (!o.solid) continue;
      if (pos.y > o.top || pos.y + 1.6 < o.y0) continue;
      const dx = pos.x - o.x, dz = pos.z - o.z;
      const d = Math.sqrt(dx * dx + dz * dz);
      const min = r + o.r;
      if (d < min && d > 0.0001) {
        pos.x = o.x + (dx / d) * min;
        pos.z = o.z + (dz / d) * min;
        hit = true;
      }
    }
    return hit;
  }

  update(dt) {
    this.time += dt;
    if (this.waterTex) {
      this.waterTex.offset.x = this.time * 0.006;
      this.waterTex.offset.y = this.time * 0.004;
    }
    if (this.clouds) {
      for (const c of this.clouds.children) {
        c.position.x += c.userData.speed * dt;
        if (c.position.x > 480) c.position.x = -480;
      }
    }
    if (this.flash.intensity > 0) this.flash.intensity = Math.max(0, this.flash.intensity - dt * 120);
  }

  dispose() {
    this.scene.traverse((o) => {
      if (o.geometry) o.geometry.dispose();
      if (o.material && o.material !== materials().unit && o.material !== materials().prop && o.material !== materials().item) {
        if (Array.isArray(o.material)) o.material.forEach((m) => m.dispose());
        else o.material.dispose();
      }
    });
    if (this.waterTex) this.waterTex.dispose();
  }
}
