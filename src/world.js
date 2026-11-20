// Szene rund um die Insel: Licht, Himmel, Wasser, Berge, Wolken, Requisiten.
import * as THREE from 'three';
import { Terrain } from './terrain.js';
import { RNG, makeNoise2D } from './rng.js';
import { propGeometry, bridgeGeometry, materials, merge, part, col } from './models.js';
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
    this.chimneys = [];
    this.flowerSpots = [];
    this.decoKinds = new Set(['corn', 'vine', 'grass', 'flower', 'pumpkin', 'reed', 'sonnenblume', 'zaun', 'seerose', 'seerosenbluete',
      'blume_weiss', 'blume_gelb', 'blume_rot', 'blume_lila', 'blume_blau']);
    this.floatKinds = new Set(['seerose', 'seerosenbluete']);
    this.terrain = new Terrain(theme, seed, this.Q.res, quality === 'low');
    scene.add(this.terrain.mesh);
    this.setupLights();
    this.setupSky(opts.fog);
    this.setupWater();
    this.setupSeabed();
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

  // Durchgehender Meeresboden, damit unter dem Wasser kein Quadrat endet
  setupSeabed() {
    const geo = new THREE.PlaneGeometry(1800, 1800, 1, 1);
    geo.rotateX(-Math.PI / 2);
    const c = new THREE.Color(this.theme.colors.seabed);
    const mat = new THREE.MeshLambertMaterial({ color: c });
    this.seabed = new THREE.Mesh(geo, mat);
    this.seabed.position.y = -5.05;
    this.seabed.receiveShadow = false;
    this.scene.add(this.seabed);
  }

  setWaterLevel(y) {
    const dy = y - this.terrain.waterLevel;
    this.terrain.waterLevel = y;
    this.water.position.y = y;
    // Seerosen schwimmen mit
    if (dy) {
      const m = new THREE.Matrix4();
      for (const kind of this.floatKinds) {
        const im = this.instanced[kind];
        if (!im) continue;
        for (let i = 0; i < im.count; i++) {
          im.getMatrixAt(i, m);
          if (m.elements[0] === 0 && m.elements[5] === 0) continue;
          m.elements[13] += dy;
          im.setMatrixAt(i, m);
        }
        im.instanceMatrix.needsUpdate = true;
      }
    }
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
  findSpot(rng, { minH = 0.7, maxSlope = 0.6, minDist = 2, avoid = [], tries = 40, area = 0.92, pathGap = 0, weight = null, gen = null } = {}) {
    const T = this.terrain;
    for (let t = 0; t < tries; t++) {
      let x, z;
      if (gen) {
        const g = gen(rng);
        if (!g) continue;
        x = g.x; z = g.z;
      } else {
        x = rng.range(-T.half * area, T.half * area);
        z = rng.range(-T.half * area, T.half * area);
      }
      const h = T.heightAt(x, z);
      if (h < T.waterLevel + minH) continue;
      if (T.slopeAt(x, z) > maxSlope) continue;
      if (pathGap && T.distToPath(x, z) < pathGap) continue;
      if (this.onDeck(x, z, 2.5)) continue;
      if (weight && rng.next() > weight(x, z)) continue;
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

  // Punkt auf oder knapp neben einer Brücke?
  onDeck(x, z, margin = 0) {
    for (const dk of this.terrain.decks) {
      const dx = x - dk.ax, dz = z - dk.az;
      const s = dx * dk.dx + dz * dk.dz;
      if (s < -margin || s > dk.len + margin) continue;
      if (Math.abs(dx * -dk.dz + dz * dk.dx) < dk.hw + margin) return true;
    }
    return false;
  }

  nearestPathPoint(x, z) {
    const P = this.terrain.path;
    let best = null, bd = Infinity;
    for (let i = 0; i < P.length - 1; i++) {
      const a = P[i], b = P[i + 1];
      const vx = b.x - a.x, vz = b.z - a.z;
      const l2 = vx * vx + vz * vz || 1;
      const t = clamp(((x - a.x) * vx + (z - a.z) * vz) / l2, 0, 1);
      const px = a.x + vx * t, pz = a.z + vz * t;
      const d = Math.hypot(x - px, z - pz);
      if (d < bd) { bd = d; best = { x: px, z: pz }; }
    }
    return best;
  }

  // zufälliger Punkt seitlich vom Feldweg
  besidePath(rng, offMin, offMax) {
    const P = this.terrain.path;
    if (P.length < 2) return null;
    const i = rng.int(0, P.length - 2);
    const a = P[i], b = P[i + 1];
    if (b.bridge) return null;
    const t = rng.next();
    const len = Math.hypot(b.x - a.x, b.z - a.z) || 1;
    const dx = (b.x - a.x) / len, dz = (b.z - a.z) / len;
    const side = rng.chance(0.5) ? 1 : -1;
    const off = rng.range(offMin, offMax) * side;
    return { x: a.x + (b.x - a.x) * t - dz * off, z: a.z + (b.z - a.z) * t + dx * off, nx: dz * side, nz: -dx * side };
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
    const T = this.terrain;
    const D = this.theme.deco || {};
    const avoid = (opts.avoid || []).concat(T.decks.flatMap((dk) => [{ x: dk.ax, z: dk.az, r: 3.5 }, { x: dk.bx, z: dk.bz, r: 3.5 }]));
    const statics = [];
    const meadow = (x, z) => 1 - T.forestAt(x, z) * 0.9;

    // Gebäude – gern am Feldweg, Tor zum Weg hin
    for (let i = 0; i < (P.stadl || 0); i++) {
      let s = this.findSpot(rng, { maxSlope: 0.25, minDist: 6, avoid, minH: 1.2, pathGap: 4.5, gen: (r) => this.besidePath(r, 6, 9), tries: 30 });
      let rot;
      if (s) {
        const d = T.path.length ? this.nearestPathPoint(s.x, s.z) : null;
        rot = d ? Math.atan2(d.x - s.x, d.z - s.z) : rng.range(0, Math.PI * 2);
      } else {
        s = this.findSpot(rng, { maxSlope: 0.25, minDist: 6, avoid, minH: 1.2, area: 0.7, pathGap: 4 });
        if (!s) continue;
        rot = rng.range(0, Math.PI * 2);
      }
      const g = propGeometry('stadl');
      g.rotateY(rot);
      g.translate(s.x, s.y - 0.3, s.z);
      statics.push(g);
      // Rauchfang
      const cx = 1.05, cz = -1.6;
      this.chimneys.push({ x: s.x + cx * Math.cos(rot) + cz * Math.sin(rot), y: s.y - 0.3 + 5.65, z: s.z - cx * Math.sin(rot) + cz * Math.cos(rot), t: rng.range(0, 1) });
      // Rechteck grob mit drei Kreisen annähern
      const fx = Math.sin(rot), fz = Math.cos(rot);
      for (const o of [-2, 0, 2]) {
        this.obstacles.push({ kind: 'stadl', x: s.x + fx * o, z: s.z + fz * o, r: 2.3, pr: 2.3, y0: s.y - 1, top: s.y + 5.5, solid: true });
      }
    }
    if (P.marterl || opts.maibaum) {
      for (let i = 0; i < (P.marterl || 0); i++) {
        let s = this.findSpot(rng, { maxSlope: 0.4, minDist: 3, avoid, pathGap: 2, gen: (r) => this.besidePath(r, 2.4, 3.2), tries: 30 });
        let rot = rng.range(0, Math.PI * 2);
        if (s) {
          const d = this.nearestPathPoint(s.x, s.z);
          if (d) rot = Math.atan2(d.x - s.x, d.z - s.z);
        } else {
          s = this.findSpot(rng, { maxSlope: 0.4, minDist: 3, avoid, area: 0.8 });
          if (!s) continue;
        }
        const g = propGeometry('marterl');
        g.rotateY(rot);
        g.translate(s.x, s.y - 0.1, s.z);
        statics.push(g);
        this.obstacles.push({ kind: 'marterl', x: s.x, z: s.z, r: 0.4, pr: 0.45, y0: s.y - 1, top: s.y + 2.6, solid: true });
      }
      if (opts.maibaum) {
        const s = this.findSpot(rng, { maxSlope: 0.3, minDist: 3, avoid, area: 0.4, pathGap: 1.6 });
        if (s) {
          const g = propGeometry('maibaum');
          g.translate(s.x, s.y - 0.2, s.z);
          statics.push(g);
          this.obstacles.push({ kind: 'maibaum', x: s.x, z: s.z, r: 0.35, pr: 0.35, y0: s.y - 1, top: s.y + 15, solid: true });
        }
      }
    }
    // Holzbrücke(n) über den See
    for (const dk of T.decks) statics.push(bridgeGeometry(dk, (t) => T.deckY(dk, t)));
    if (statics.length) {
      const mesh = new THREE.Mesh(merge(statics), materials().prop);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      this.scene.add(mesh);
      this.staticMesh = mesh;
    }

    const solid = (kind, list, r, pr, top) => {
      for (const it of list) {
        const ob = { kind, x: it.x, z: it.z, r: r * it.s, pr: pr * it.s, y0: it.y - 0.4, top: it.y + 0.1 + top * it.s, destructible: true, item: it, solid: true };
        this.obstacles.push(ob);
        it.ob = ob;
      }
      this.addInstanced(kind, list);
    };
    const trees = (kind, count, sMin, sMax, r, pr, top, extra = {}) => {
      const list = [];
      const n = Math.round(count * sc);
      for (let i = 0; i < n; i++) {
        const s = this.findSpot(rng, { maxSlope: extra.maxSlope || 0.75, minDist: extra.minDist || 1.5, avoid, minH: extra.minH || 0.9,
          pathGap: extra.pathGap ?? 1.8, weight: extra.weight, tries: extra.weight ? 70 : 40 });
        if (!s) continue;
        const sz = rng.range(sMin, sMax);
        list.push({ kind, x: s.x, y: s.y - 0.1, z: s.z, s: sz, rot: rng.range(0, 6.28), alive: true });
      }
      solid(kind, list, r, pr, top);
      return list;
    };
    // Wald in Gruppen, dazwischen Lichtungen und ein paar Einzelgänger
    const grove = (x, z) => 0.1 + 0.9 * T.forestAt(x, z);
    if (P.pine) trees('pine', P.pine, 0.8, 1.5, 0.35, 1.1, 4.4, { weight: grove });
    if (P.pineSnow) trees('pineSnow', P.pineSnow, 0.8, 1.6, 0.35, 1.1, 4.4, { weight: grove });
    if (P.broad) trees('broad', P.broad, 0.7, 1.2, 0.4, 1.5, 4.6, { weight: (x, z) => 0.35 + 0.65 * T.forestAt(x, z) });
    if (P.willow) trees('willow', P.willow, 0.8, 1.3, 0.45, 1.6, 4.3, { minH: 0.4, weight: (x, z) => T.heightAt(x, z) < T.waterLevel + 2.2 ? 1 : 0.35 });
    if (P.rock) trees('rock', P.rock, 0.5, 1.6, 0.85, 0.9, 1.3, { maxSlope: 1.4, minDist: 1, pathGap: 1.4 });
    if (P.bale) trees('bale', P.bale, 0.9, 1.1, 0.75, 0.8, 1.45, { maxSlope: 0.3, weight: meadow });
    if (P.silo) trees('silo', P.silo, 0.9, 1.1, 0.75, 0.8, 1.45, { maxSlope: 0.3, weight: meadow });

    // Heumandln in Reihen auf der Wiese
    if (D.heumandl) {
      const list = [];
      for (let g = 0; g < Math.max(1, Math.round(D.heumandl * sc * 0.5)); g++) {
        const s = this.findSpot(rng, { maxSlope: 0.3, minDist: 2.5, avoid, pathGap: 3, weight: meadow, tries: 60 });
        if (!s) continue;
        const a = rng.range(0, Math.PI), k = rng.int(3, 5);
        for (let i = 0; i < k; i++) {
          const x = s.x + Math.cos(a) * (i - k / 2) * 3.2 + rng.range(-0.4, 0.4), z = s.z + Math.sin(a) * (i - k / 2) * 3.2 + rng.range(-0.4, 0.4);
          const h = T.heightAt(x, z);
          if (h < T.waterLevel + 0.9 || T.slopeAt(x, z) > 0.45 || T.distToPath(x, z) < 2 || this.onDeck(x, z, 2)) continue;
          if (avoid.some((v) => dist2D(x, z, v.x, v.z) < v.r)) continue;
          if (this.obstacles.some((o) => dist2D(x, z, o.x, o.z) < o.r + 1.2)) continue;
          list.push({ kind: 'heumandl', x, y: h - 0.08, z, s: rng.range(0.9, 1.15), rot: rng.range(0, 6.28), alive: true });
        }
      }
      solid('heumandl', list, 0.45, 0.6, 2.1);
    }
    // Weinfasserl beim Stadl oder am Weg
    if (D.faesser) {
      const list = [];
      for (let g = 0; g < D.faesser; g++) {
        const s = this.findSpot(rng, { maxSlope: 0.3, minDist: 1.5, avoid, pathGap: 2, gen: (r) => this.besidePath(r, 2.6, 4), tries: 40 });
        if (!s) continue;
        const k = rng.int(2, 4), a = rng.range(0, 6.28);
        for (let i = 0; i < k; i++) {
          const x = s.x + Math.cos(a) * i * 0.95, z = s.z + Math.sin(a) * i * 0.95;
          const h = T.heightAt(x, z);
          if (h < T.waterLevel + 0.8) continue;
          list.push({ kind: 'fass', x, y: h - 0.04, z, s: rng.range(0.9, 1.05), rot: a + Math.PI / 2 + rng.range(-0.15, 0.15), alive: true });
        }
      }
      solid('fass', list, 0.45, 0.5, 0.9);
    }

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
        if (this.onDeck(x, z, 0.6) || T.distToPath(x, z) < (opt.pathGap ?? 1.25)) continue;
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
    if (P.corn) {
      const l = deco('corn', P.corn, 0.85, 1.15, { cluster: 6, maxSlope: 0.4, avoidScale: 0.7 }).filter((it) => T.distToPath(it.x, it.z) > 1.6);
      this.addInstanced('corn', l, { castShadow: this.quality === 'high' });
      this.cornList = l;
      // Vogelscheuchen mitten im Kukuruz
      if (D.vogelscheuche && l.length) {
        const vs = [];
        for (let i = 0; i < D.vogelscheuche * 4 && vs.length < D.vogelscheuche; i++) {
          const c = l[rng.int(0, l.length - 1)];
          if (vs.some((v) => dist2D(v.x, v.z, c.x, c.z) < 12)) continue;
          if (avoid.some((v) => dist2D(c.x, c.z, v.x, v.z) < v.r) || this.obstacles.some((o) => dist2D(c.x, c.z, o.x, o.z) < o.r + 1)) continue;
          vs.push({ kind: 'vogelscheuche', x: c.x, y: T.heightAt(c.x, c.z) - 0.1, z: c.z, s: rng.range(0.95, 1.1), rot: rng.range(0, 6.28), alive: true });
        }
        solid('vogelscheuche', vs, 0.3, 0.45, 2.2);
      }
    }
    if (P.pumpkin) this.addInstanced('pumpkin', deco('pumpkin', P.pumpkin, 0.7, 1.3, { cluster: 5, maxSlope: 0.4 }));
    // Schilf: Theme-Schilf plus Gürtel ums Seeufer
    {
      let l = P.reed ? deco('reed', P.reed, 0.8, 1.3, { minH: -0.4, maxH: 0.8, maxSlope: 1, cluster: 3, avoidScale: 0.5 }) : [];
      if (T.lake && this.theme.id !== 'gletscher') {
        const L = T.lake;
        const clumps = Math.round(7 * sc) + 2;
        for (let c = 0; c < clumps; c++) {
          const a = rng.range(0, Math.PI * 2);
          let shore = null;
          for (let r = L.r * 0.4; r < L.r * 2.4; r += 0.3) {
            const x = L.x + Math.cos(a) * r, z = L.z + Math.sin(a) * r;
            if (T.baseHeightAt(x, z) > T.waterLevel - 0.25) { shore = { x, z }; break; }
          }
          if (!shore || this.onDeck(shore.x, shore.z, 3)) continue;
          const k = Math.round(rng.range(6, 12) * gs) + 2;
          for (let i = 0; i < k; i++) {
            const x = shore.x + rng.range(-1.6, 1.6), z = shore.z + rng.range(-1.6, 1.6);
            const h = T.baseHeightAt(x, z);
            if (h < T.waterLevel - 0.5 || h > T.waterLevel + 0.7 || this.onDeck(x, z, 1)) continue;
            l.push({ x, y: h - 0.05, z, s: rng.range(0.8, 1.25), rot: rng.range(0, 6.28), alive: true });
          }
        }
      }
      if (l.length) this.addInstanced('reed', l, { castShadow: false });
    }

    // Blumenwiesen: dichte Flecken in ein, zwei Farben
    const palette = { alm: ['blume_weiss', 'blume_gelb', 'blume_lila', 'blume_blau'], weinberg: ['blume_rot', 'blume_weiss', 'blume_gelb'],
      au: ['blume_weiss', 'blume_gelb', 'blume_lila'], kukuruz: ['blume_rot', 'blume_blau', 'blume_gelb'],
      steinbruch: ['blume_gelb', 'blume_weiss', 'blume_lila'] }[this.theme.id] || ['blume_weiss', 'blume_gelb', 'blume_rot', 'blume_lila'];
    const blumen = {};
    const addBlume = (kind, x, z, s) => {
      const h = T.heightAt(x, z);
      if (h < T.waterLevel + 0.55 || T.slopeAt(x, z) > 0.8 || this.onDeck(x, z, 0.5) || T.distToPath(x, z) < 1.2) return;
      (blumen[kind] ||= []).push({ x, y: h - 0.04, z, s, rot: rng.range(0, 6.28), alive: true });
    };
    for (let f = 0; f < (this.theme.flowerPatches || 0); f++) {
      const s = this.findSpot(rng, { maxSlope: 0.5, minDist: 0, avoid: [], pathGap: 1.6, weight: (x, z) => 1 - T.forestAt(x, z), minH: 0.8, tries: 30 });
      if (!s) continue;
      this.flowerSpots.push({ x: s.x, z: s.z });
      const k1 = palette[rng.int(0, palette.length - 1)], k2 = palette[rng.int(0, palette.length - 1)];
      const R = rng.range(2.2, 3.6);
      const n = Math.round(rng.range(40, 75) * gs) + 6;
      const ea = rng.range(0, Math.PI), ec = Math.cos(ea), es = Math.sin(ea);
      for (let i = 0; i < n; i++) {
        const a = rng.range(0, Math.PI * 2), r = Math.pow(rng.next(), 0.6) * R;
        const u = Math.cos(a) * r * 1.4, v = Math.sin(a) * r;
        addBlume(rng.chance(0.7) ? k1 : k2, s.x + u * ec - v * es, s.z + u * es + v * ec, rng.range(1.1, 1.7) * (1 - r / R * 0.3));
      }
    }
    // einzelne Blumen über die ganze Wiese verstreut
    if (P.flowers) {
      for (const it of deco('flower', P.flowers, 1, 1.4, { isGrass: true, avoidScale: 0, cluster: 2.5 })) {
        addBlume(palette[Math.floor(it.tint * palette.length)], it.x, it.z, it.s);
      }
    }
    // Blumen am Wegrand
    if (this.theme.flowerPatches) {
      for (let i = 0; i < Math.round(60 * gs); i++) {
        const b = this.besidePath(rng, 1.5, 2.6);
        if (b) addBlume(palette[rng.int(0, palette.length - 1)], b.x, b.z, rng.range(1, 1.4));
      }
    }
    for (const kind in blumen) this.addInstanced(kind, blumen[kind], { castShadow: false });

    // Sonnenblumenfeld, alle Köpfe schauen brav zur Sonne
    if (D.sonnenblumen) {
      const list = [];
      const face = Math.atan2(this.sunDir.x, this.sunDir.z);
      const fields = 2;
      for (let f = 0; f < fields; f++) {
        const s = this.findSpot(rng, { maxSlope: 0.3, minDist: 3, avoid, pathGap: 3, weight: meadow, tries: 50 });
        if (!s) continue;
        const a = rng.range(0, Math.PI), ca = Math.cos(a), sa = Math.sin(a);
        const per = Math.round((D.sonnenblumen / fields) * sc);
        const cols = Math.max(4, Math.round(Math.sqrt(per * 1.6)));
        for (let i = 0; i < per; i++) {
          const u = ((i % cols) - cols / 2) * 0.85 + rng.range(-0.15, 0.15);
          const v = (Math.floor(i / cols) - per / cols / 2) * 1.1 + rng.range(-0.15, 0.15);
          const x = s.x + u * ca - v * sa, z = s.z + u * sa + v * ca;
          const h = T.heightAt(x, z);
          if (h < T.waterLevel + 0.9 || T.slopeAt(x, z) > 0.5 || T.distToPath(x, z) < 1.8 || this.onDeck(x, z, 1)) continue;
          if (avoid.some((w) => dist2D(x, z, w.x, w.z) < w.r * 0.6)) continue;
          if (this.obstacles.some((o) => o.solid && dist2D(x, z, o.x, o.z) < o.r + 0.4)) continue;
          list.push({ x, y: h - 0.05, z, s: rng.range(0.85, 1.15), rot: face + rng.range(-0.35, 0.35), alive: true });
        }
      }
      this.addInstanced('sonnenblume', list, { castShadow: this.quality !== 'low' });
    }

    // Zaun entlang vom Feldweg, mit Lücken
    if (D.zaun && T.path.length > 1) {
      const list = [];
      const P2 = T.path;
      for (const side of [1, -1]) {
        let run = rng.int(0, 4), gap = 0;
        for (let i = 0; i < P2.length - 1; i++) {
          const a = P2[i], b = P2[i + 1];
          if (b.bridge) continue;
          const len = Math.hypot(b.x - a.x, b.z - a.z);
          const dx = (b.x - a.x) / len, dz = (b.z - a.z) / len;
          for (let d = 1.05; d < len; d += 2.1) {
            if (gap > 0) { gap--; continue; }
            if (run <= 0) { run = rng.int(3, 7); gap = rng.int(2, 6); continue; }
            run--;
            const off = 2.05 * side;
            const x = a.x + dx * d - dz * off, z = a.z + dz * d + dx * off;
            const h = T.heightAt(x, z);
            if (h < T.waterLevel + 0.6 || T.slopeAt(x, z) > 0.8 || this.onDeck(x, z, 2) || T.distToPath(x, z) < 1.7) continue;
            if (avoid.some((w) => dist2D(x, z, w.x, w.z) < w.r * 0.7)) continue;
            if (this.obstacles.some((o) => o.solid && dist2D(x, z, o.x, o.z) < o.r + 1.1)) continue;
            list.push({ x, y: h - 0.06, z, s: 1, rot: Math.atan2(-dz, dx), alive: true });
          }
        }
      }
      this.addInstanced('zaun', list);
    }

    // Seerosen am See
    if (D.seerosen && T.lake) {
      const L = T.lake;
      const pads = [], blooms = [];
      const n = Math.round(D.seerosen * Math.max(0.6, sc));
      for (let i = 0; i < n * 3 && pads.length < n; i++) {
        const a = rng.range(0, Math.PI * 2), r = Math.sqrt(rng.next()) * L.r * 1.25;
        const x = L.x + Math.cos(a) * r, z = L.z + Math.sin(a) * r;
        if (T.baseHeightAt(x, z) > T.waterLevel - 0.45 || this.onDeck(x, z, 1.5)) continue;
        if (pads.some((p) => dist2D(p.x, p.z, x, z) < 0.7)) continue;
        const it = { x, y: T.waterLevel + 0.03, z, s: rng.range(0.8, 1.5), rot: rng.range(0, 6.28), alive: true };
        pads.push(it);
        if (rng.chance(0.35)) blooms.push({ x: x + 0.05, y: T.waterLevel + 0.05, z, s: rng.range(0.9, 1.3), rot: rng.range(0, 6.28), alive: true });
      }
      this.addInstanced('seerose', pads, { castShadow: false });
      this.addInstanced('seerosenbluete', blooms, { castShadow: false });
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
        if (T.distToPath(x, z) < 1.8 || this.onDeck(x, z, 2)) continue;
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

  // Bäume zwischen Kamera und Blickpunkt durchsichtig machen (nur Optik, Physik bleibt)
  updateOcclusion(cam, focus, dt, enabled) {
    if (!this.occluders) {
      const kinds = new Set(['pine', 'pineSnow', 'broad', 'willow']);
      this.occluders = this.obstacles.filter((o) => o.item && kinds.has(o.kind));
      this.ghosts = [];
      this._om = new THREE.Matrix4();
    }
    const sx = focus.x - cam.x, sz = focus.z - cam.z, L2 = sx * sx + sz * sz;
    for (const o of this.occluders) {
      const it = o.item;
      let hide = false;
      if (enabled && it.alive) {
        let t = L2 > 1e-6 ? ((o.x - cam.x) * sx + (o.z - cam.z) * sz) / L2 : 0;
        t = clamp(t, 0, 1);
        const px = cam.x + sx * t, pz = cam.z + sz * t, py = cam.y + (focus.y - cam.y) * t;
        const d = Math.hypot(o.x - px, o.z - pz);
        if (d < o.pr * 1.05 + 0.35 && t < 0.92 && py < o.top + 0.4 && py > o.y0 - 0.5) hide = true;
        if (!hide && Math.hypot(o.x - cam.x, o.z - cam.z) < o.pr + 1.0 && cam.y < o.top + 0.6 && cam.y > o.y0) hide = true;
      }
      if (hide && !it.ghost) this.ghostOn(it);
      else if (!hide && it.ghost) this.ghostOff(it);
      if (it.ghost) {
        const g = it.ghost;
        g.material.opacity += ((hide ? 0.22 : 1) - g.material.opacity) * Math.min(1, dt * 10);
      }
    }
  }

  ghostOn(it) {
    if (!it.alive) return;
    let g = this.ghosts.find((x) => !x.userData.busy);
    if (!g) {
      if (this.ghosts.length >= 10) return;
      g = new THREE.Mesh(it.mesh.geometry, new THREE.MeshLambertMaterial({ vertexColors: true, transparent: true, opacity: 1, depthWrite: false }));
      g.castShadow = false;
      g.matrixAutoUpdate = false;
      g.renderOrder = 1;
      this.scene.add(g);
      this.ghosts.push(g);
    }
    g.geometry = it.mesh.geometry;
    g.userData.busy = true;
    it.mesh.getMatrixAt(it.index, this._om);
    it.saved = this._om.clone();
    g.matrix.copy(it.saved);
    g.matrixWorldNeedsUpdate = true;
    g.visible = true;
    g.material.opacity = 1;
    it.mesh.setMatrixAt(it.index, new THREE.Matrix4().makeScale(0, 0, 0));
    it.mesh.instanceMatrix.needsUpdate = true;
    it.ghost = g;
  }

  ghostOff(it) {
    const g = it.ghost;
    g.visible = false;
    g.userData.busy = false;
    it.ghost = null;
    if (it.alive && it.saved) {
      it.mesh.setMatrixAt(it.index, it.saved);
      it.mesh.instanceMatrix.needsUpdate = true;
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
        if (o.item.ghost) this.ghostOff(o.item);
        o.item.mesh.setMatrixAt(o.item.index, zero);
        o.item.mesh.instanceMatrix.needsUpdate = true;
        destroyed.push(o);
        if (fx) fx.propBurst(o);
      }
    }
    // Deko (Mais, Wein, Gras) wegblasen
    for (const kind of this.decoKinds) {
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
      if (this.floatKinds.has(kind)) continue;
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
