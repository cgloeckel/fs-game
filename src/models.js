// Prozedurale Low-Poly-Modelle mit Vertex-Farben: Rindsviecher, Requisiten, Geschosse.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { RNG, hash2 } from './rng.js';

const _m = new THREE.Matrix4();
const _q = new THREE.Quaternion();
const _e = new THREE.Euler();
const _v = new THREE.Vector3();
const _s = new THREE.Vector3();
const PI = Math.PI;

export const col = (hex) => new THREE.Color(hex);

export function paint(g, color) {
  const pos = g.attributes.position;
  const nor = g.attributes.normal;
  const n = pos.count;
  const arr = new Float32Array(n * 3);
  const c = new THREE.Color();
  const P = new THREE.Vector3();
  const N = new THREE.Vector3();
  const fixed = typeof color === 'function' ? null : (color instanceof THREE.Color ? color : col(color));
  for (let i = 0; i < n; i++) {
    if (fixed) c.copy(fixed);
    else {
      P.fromBufferAttribute(pos, i);
      N.fromBufferAttribute(nor, i);
      color(P, N, c);
    }
    arr[i * 3] = c.r; arr[i * 3 + 1] = c.g; arr[i * 3 + 2] = c.b;
  }
  g.setAttribute('color', new THREE.BufferAttribute(arr, 3));
  return g;
}

export function part(geo, t = {}, color = '#ffffff') {
  const g = geo.index ? geo.toNonIndexed() : geo;
  if (g !== geo) geo.dispose();
  if (g.attributes.uv) g.deleteAttribute('uv');
  const p = t.p || [0, 0, 0], r = t.r || [0, 0, 0], s = t.s || [1, 1, 1];
  _e.set(r[0], r[1], r[2], t.order || 'XYZ');
  _q.setFromEuler(_e);
  _m.compose(_v.set(p[0], p[1], p[2]), _q, _s.set(s[0], s[1], s[2]));
  g.applyMatrix4(_m);
  if (t.jitter) jitter(g, t.jitter, t.seed || 1);
  paint(g, color);
  return g;
}

export function jitter(g, amt, seed = 1) {
  const pos = g.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i);
    const kx = Math.round(x * 100), ky = Math.round(y * 100), kz = Math.round(z * 100);
    const h1 = hash2(kx + seed * 31, ky * 7 + kz * 13);
    const h2 = hash2(ky + seed * 17, kz * 5 + kx * 3);
    const h3 = hash2(kz + seed * 11, kx * 9 + ky * 2);
    pos.setXYZ(i, x + (h1 - 0.5) * amt, y + (h2 - 0.5) * amt, z + (h3 - 0.5) * amt);
  }
  g.computeVertexNormals();
  return g;
}

export function merge(list) {
  const g = mergeGeometries(list, false);
  list.forEach((x) => x.dispose());
  return g;
}

// --- Materialien --------------------------------------------------------------
let _mats = null;
export function materials() {
  if (_mats) return _mats;
  _mats = {
    unit: new THREE.MeshPhongMaterial({ vertexColors: true, shininess: 14, specular: 0x1a1a1a }),
    prop: new THREE.MeshLambertMaterial({ vertexColors: true }),
    item: new THREE.MeshPhongMaterial({ vertexColors: true, shininess: 40, specular: 0x333333 }),
    basic: new THREE.MeshBasicMaterial({ vertexColors: true }),
    glow: new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.8, depthWrite: false }),
  };
  return _mats;
}

// --- Rindsviecher ------------------------------------------------------------
const BREEDS = {
  fleckvieh: { base: '#f3ece0', spot: '#94461f', snout: '#f1c3b0', spots: true },
  holstein: { base: '#f6f6f3', spot: '#1c1c1c', snout: '#f0b9b0', spots: true },
  pinzgauer: { base: '#7a3216', stripe: '#f3ece0', snout: '#e8b8a6', pinz: true },
  grauvieh: { base: '#a8a398', dark: '#5a5750', snout: '#35322e' },
  braunvieh: { base: '#86643f', light: '#b89a74', snout: '#e7dcc8' },
  schwarz: { base: '#2a2321', snout: '#5c4b45' },
};

export function buildCattle({ sex, breed, teamColor, tier = 0, seed = 1 }) {
  const rng = new RNG(seed);
  const B = BREEDS[breed] || BREEDS.fleckvieh;
  const stier = sex === 'stier';
  const base = col(B.base);
  const spot = col(B.spot || B.base);
  const snout = col(B.snout);
  const team = col(teamColor);
  const teamDark = team.clone().multiplyScalar(0.55);
  const hoof = col('#2b2420');
  const horn = col('#efe6cf');
  const pink = col('#f2a7a0');
  const gold = col('#e6b422');
  const white = col('#ffffff');
  const black = col('#121212');
  const leather = col('#5a3a22');
  const stripe = col(B.stripe || '#ffffff');
  const dark = col(B.dark || B.base);
  const light = col(B.light || B.base);

  const spots = [];
  if (B.spots) {
    const n = 8 + rng.int(0, 5);
    for (let i = 0; i < n; i++) {
      spots.push({ x: rng.range(-0.45, 0.45), y: rng.range(0.5, 2.15), z: rng.range(-0.45, 0.5), r: rng.range(0.1, 0.21) });
    }
  }
  const coat = (ox, oy, oz) => (P, N, out) => {
    const x = P.x + ox, y = P.y + oy, z = P.z + oz;
    out.copy(base);
    if (B.spots) {
      for (const s of spots) {
        const dx = x - s.x, dy = y - s.y, dz = z - s.z;
        if (dx * dx + dy * dy + dz * dz < s.r * s.r) { out.copy(spot); break; }
      }
    }
    if (B.pinz && ((z < -0.18 && Math.abs(x) < 0.14) || (z > 0.2 && y < 1.15 && y > 0.55))) out.copy(stripe);
    if (B.dark && (y < 0.62 || (y > 1.85 && z > 0.25))) out.copy(dark);
    if (B.light && z > 0.22 && y < 1.25 && y > 0.6) out.copy(light);
  };

  const HIP = 0.74;
  const tr = stier ? 0.4 : 0.36;
  const mats = materials();

  // Rumpf
  const torso = [];
  torso.push(part(new THREE.CapsuleGeometry(tr, 0.42, 6, 14), { p: [0, 1.08, 0], s: [1, 1, 0.88] }, coat(0, 0, 0)));
  if (stier) torso.push(part(new THREE.SphereGeometry(0.36, 12, 8), { p: [0, 1.4, 0.02], s: [1.32, 0.8, 0.95] }, coat(0, 0, 0)));
  torso.push(part(new THREE.TorusGeometry(tr * 0.98, 0.055, 6, 22), { p: [0, 0.84, 0], r: [PI / 2, 0, 0], s: [1, 0.88, 1] }, team));
  torso.push(part(new THREE.BoxGeometry(0.13, 0.1, 0.05), { p: [0, 0.84, tr * 0.88 + 0.03] }, gold));
  if (!stier) {
    torso.push(part(new THREE.SphereGeometry(0.12, 10, 8), { p: [0, 0.7, 0.2], s: [1.1, 0.8, 0.9] }, pink));
    for (const [x, z] of [[-0.05, 0.25], [0.05, 0.25], [-0.05, 0.15], [0.05, 0.15]]) {
      torso.push(part(new THREE.ConeGeometry(0.022, 0.08, 5), { p: [x, 0.6, z], r: [PI, 0, 0] }, pink));
    }
  }
  torso.push(part(new THREE.TorusGeometry(0.21, 0.03, 5, 14), { p: [0, 1.56, 0.03], r: [PI / 2 - 0.3, 0, 0] }, leather));
  torso.push(part(new THREE.CylinderGeometry(0.055, 0.09, 0.14, 8), { p: [0, 1.43, tr * 0.88 + 0.02] }, gold));
  torso.push(part(new THREE.SphereGeometry(0.028, 6, 4), { p: [0, 1.35, tr * 0.88 + 0.02] }, col('#6b4a12')));
  // Schulterklappen
  const epColor = tier >= 4 ? gold : teamDark;
  for (const sx of [-1, 1]) {
    torso.push(part(new THREE.BoxGeometry(0.2, 0.05, 0.22), { p: [sx * (tr + 0.02), 1.53, 0], r: [0, 0, sx * -0.35] }, epColor));
  }

  // Kopf
  const head = [];
  const hs = stier ? 1.12 : 1;
  const hc = coat(0, 1.62, 0.04);
  head.push(part(new THREE.SphereGeometry(0.27, 14, 10), { p: [0, 0.2, 0.05], s: [1.0 * hs, 0.95 * hs, 1.05] }, hc));
  head.push(part(new THREE.SphereGeometry(0.19, 12, 8), { p: [0, 0.1, 0.29], s: [1.15 * hs, 0.85, 0.85] }, snout));
  for (const sx of [-1, 1]) {
    head.push(part(new THREE.SphereGeometry(0.035, 6, 4), { p: [sx * 0.075, 0.12, 0.44] }, black));
    head.push(part(new THREE.SphereGeometry(0.078, 10, 8), { p: [sx * 0.125, 0.29, 0.27] }, white));
    head.push(part(new THREE.SphereGeometry(0.042, 8, 6), { p: [sx * 0.13, 0.29, 0.335] }, black));
    head.push(part(new THREE.SphereGeometry(0.1, 8, 6), { p: [sx * 0.34 * hs, 0.27, 0.0], r: [0, 0, sx * -0.35], s: [1.7, 0.45, 0.85] }, hc));
    if (stier) {
      head.push(part(new THREE.BoxGeometry(0.15, 0.035, 0.03), { p: [sx * 0.125, 0.385, 0.31], r: [0, 0, sx * 0.4] }, black));
      head.push(part(new THREE.ConeGeometry(0.075, 0.4, 8), { p: [sx * 0.42, 0.47, 0.03], r: [0, 0, sx * -1.1] }, horn));
      head.push(part(new THREE.ConeGeometry(0.03, 0.12, 6), { p: [sx * 0.6, 0.6, 0.03], r: [0, 0, sx * -0.5] }, col('#3b332b')));
    } else {
      head.push(part(new THREE.BoxGeometry(0.1, 0.02, 0.02), { p: [sx * 0.12, 0.38, 0.32], r: [0, 0, sx * -0.15] }, black));
      head.push(part(new THREE.ConeGeometry(0.045, 0.2, 7), { p: [sx * 0.3, 0.45, 0.02], r: [0, 0, sx * -0.75] }, horn));
    }
  }
  if (stier) head.push(part(new THREE.TorusGeometry(0.065, 0.015, 6, 14), { p: [0, 0.02, 0.43] }, gold));
  // Stahlhelm
  head.push(part(new THREE.SphereGeometry(0.31, 16, 8, 0, PI * 2, 0, PI / 2), { p: [0, 0.37, 0.03], s: [1.0 * hs, 0.85, 1.05] }, team));
  head.push(part(new THREE.CylinderGeometry(0.34 * hs, 0.35 * hs, 0.035, 18), { p: [0, 0.37, 0.03] }, teamDark));
  if (tier >= 1 && tier <= 3) {
    for (let i = 0; i < tier; i++) {
      head.push(part(new THREE.BoxGeometry(0.13, 0.025, 0.02), { p: [0, 0.43 + i * 0.04, 0.33] }, gold));
    }
  } else if (tier >= 4) {
    const n = tier - 3;
    for (let i = 0; i < n; i++) {
      head.push(part(new THREE.OctahedronGeometry(0.05), { p: [(i - (n - 1) / 2) * 0.12, 0.48, 0.3], s: [1, 1, 0.4] }, gold));
    }
  }

  // Arme, Beine, Schwanz
  const shoulderX = tr + 0.05;
  const armGeo = (sx) => merge([
    part(new THREE.CylinderGeometry(0.095, 0.085, 0.46, 8), { p: [0, -0.23, 0] }, coat(sx * shoulderX, 1.42, 0)),
    part(new THREE.CylinderGeometry(0.09, 0.1, 0.12, 8), { p: [0, -0.5, 0] }, hoof),
  ]);
  const legGeo = (sx) => merge([
    part(new THREE.CylinderGeometry(0.135, 0.115, 0.56, 10), { p: [0, -0.28, 0] }, coat(sx * 0.17, HIP, 0)),
    part(new THREE.CylinderGeometry(0.13, 0.155, 0.17, 10), { p: [0, -HIP + 0.085, 0.02] }, hoof),
  ]);
  const tailGeo = merge([
    part(new THREE.CylinderGeometry(0.022, 0.028, 0.52, 6), { p: [0, -0.2, -0.12], r: [0.55, 0, 0] }, coat(0, 0.86, -0.3)),
    part(new THREE.SphereGeometry(0.065, 7, 5), { p: [0, -0.42, -0.25], s: [1, 1.6, 1] }, col('#2a2420')),
  ]);

  // Waffen in der Hand
  const gunGeo = merge([
    part(new THREE.BoxGeometry(0.08, 0.11, 0.6), { p: [0, 0, 0.2] }, col('#2f3330')),
    part(new THREE.CylinderGeometry(0.022, 0.022, 0.32, 6), { p: [0, 0.02, 0.62], r: [PI / 2, 0, 0] }, col('#1b1d1c')),
    part(new THREE.BoxGeometry(0.07, 0.12, 0.22), { p: [0, -0.04, -0.14] }, col('#5b3d24')),
    part(new THREE.BoxGeometry(0.05, 0.16, 0.07), { p: [0, -0.12, 0.25], r: [0.2, 0, 0] }, col('#1b1d1c')),
  ]);
  const tubeGeo = merge([
    part(new THREE.CylinderGeometry(0.09, 0.09, 1.0, 10), { p: [0, 0.08, 0.15], r: [PI / 2, 0, 0] }, col('#4b5a2a')),
    part(new THREE.CylinderGeometry(0.11, 0.09, 0.12, 10), { p: [0, 0.08, 0.68], r: [PI / 2, 0, 0] }, col('#2f3a1a')),
    part(new THREE.BoxGeometry(0.05, 0.16, 0.08), { p: [0, -0.04, 0.05] }, col('#2a2a2a')),
  ]);
  const ballGeo = merge([
    part(new THREE.SphereGeometry(0.1, 8, 6), { p: [0.28, 0.05, 0.25] }, col('#4f5b2b')),
  ]);

  const mk = (geo, mat) => {
    const m = new THREE.Mesh(geo, mat || mats.unit);
    m.castShadow = true;
    m.receiveShadow = false;
    return m;
  };

  const root = new THREE.Group();
  const body = new THREE.Group();
  root.add(body);
  const torsoMesh = mk(merge(torso));
  body.add(torsoMesh);
  const headG = new THREE.Group();
  headG.position.set(0, 1.62, 0.04);
  headG.add(mk(merge(head)));
  body.add(headG);
  const armL = new THREE.Group(); armL.position.set(-shoulderX, 1.42, 0); armL.add(mk(armGeo(-1)));
  const armR = new THREE.Group(); armR.position.set(shoulderX, 1.42, 0); armR.add(mk(armGeo(1)));
  body.add(armL, armR);
  const legL = new THREE.Group(); legL.position.set(-0.17, HIP, 0); legL.add(mk(legGeo(-1)));
  const legR = new THREE.Group(); legR.position.set(0.17, HIP, 0); legR.add(mk(legGeo(1)));
  root.add(legL, legR);
  const tail = new THREE.Group(); tail.position.set(0, 0.86, -0.3); tail.add(mk(tailGeo));
  body.add(tail);
  const weapon = new THREE.Group();
  weapon.position.set(0, 1.2, 0.3);
  const gun = mk(gunGeo, mats.item);
  const tube = mk(tubeGeo, mats.item);
  const ball = mk(ballGeo, mats.item);
  weapon.add(gun, tube, ball);
  tube.visible = false; ball.visible = false;
  body.add(weapon);

  // Fallschirm
  const chute = new THREE.Group();
  const canopy = merge([
    part(new THREE.SphereGeometry(1.35, 12, 5, 0, PI * 2, 0, PI / 2.3), { p: [0, 3.0, 0], s: [1, 0.6, 1] }, (P, N, out) => {
      const a = Math.atan2(P.x, P.z);
      out.copy(Math.floor((a + PI) / (PI / 6)) % 2 ? white : team);
    }),
    ...[[-1, -1], [1, -1], [-1, 1], [1, 1]].map(([sx, sz]) => {
      const g = new THREE.CylinderGeometry(0.01, 0.01, 1.9, 3);
      return part(g, { p: [sx * 0.6, 2.25, sz * 0.6], r: [sz * 0.45, 0, -sx * 0.45] }, col('#dddddd'));
    }),
  ]);
  const canopyMesh = new THREE.Mesh(canopy, mats.unit);
  canopyMesh.castShadow = true;
  chute.add(canopyMesh);
  chute.visible = false;
  root.add(chute);

  return { root, body, head: headG, armL, armR, legL, legR, tail, weapon, gun, tube, ball, chute, torso: torsoMesh };
}

// --- Requisiten --------------------------------------------------------------
function varied(baseHex, amt, salt = 0) {
  const b = col(baseHex);
  return (P, N, out) => {
    const h = hash2(Math.round(P.x * 10) + salt, Math.round(P.y * 10) * 3 + Math.round(P.z * 10) * 7);
    out.copy(b).multiplyScalar(1 - amt / 2 + h * amt);
  };
}

export function propGeometry(kind) {
  switch (kind) {
    case 'pine':
    case 'pineSnow': {
      const snow = kind === 'pineSnow';
      const fol = (P, N, out) => {
        out.copy(col('#2c5a2b')).lerp(col('#4a7a36'), Math.min(1, P.y / 6));
        if (snow && N.y > 0.2) out.copy(col('#f4f8fc'));
      };
      return merge([
        part(new THREE.CylinderGeometry(0.16, 0.24, 1.4, 6), { p: [0, 0.7, 0] }, '#5b3b22'),
        part(new THREE.ConeGeometry(1.5, 2.3, 8), { p: [0, 2.0, 0] }, fol),
        part(new THREE.ConeGeometry(1.15, 1.9, 8), { p: [0, 3.0, 0], r: [0, 0.4, 0] }, fol),
        part(new THREE.ConeGeometry(0.75, 1.5, 8), { p: [0, 3.9, 0], r: [0, 0.8, 0] }, fol),
      ]);
    }
    case 'broad':
      return merge([
        part(new THREE.CylinderGeometry(0.18, 0.28, 2.4, 6), { p: [0, 1.2, 0] }, '#5e4128'),
        part(new THREE.IcosahedronGeometry(1.7, 1), { p: [0, 3.3, 0], s: [1, 0.85, 1], jitter: 0.45, seed: 3 }, varied('#4f8a33', 0.35)),
        part(new THREE.IcosahedronGeometry(1.1, 1), { p: [0.8, 2.9, 0.4], jitter: 0.3, seed: 5 }, varied('#5c963a', 0.3, 4)),
      ]);
    case 'willow':
      return merge([
        part(new THREE.CylinderGeometry(0.22, 0.32, 2.2, 6), { p: [0, 1.1, 0] }, '#6a5a44'),
        part(new THREE.IcosahedronGeometry(1.8, 1), { p: [0, 2.8, 0], s: [1.1, 1.0, 1.1], jitter: 0.5, seed: 9 }, varied('#8aa64e', 0.3)),
      ]);
    case 'rock':
      return part(new THREE.IcosahedronGeometry(1, 1), { jitter: 0.4, seed: 7, s: [1, 0.75, 1] }, varied('#8a867e', 0.3));
    case 'bale':
      return merge([
        part(new THREE.CylinderGeometry(0.72, 0.72, 1.15, 14), { p: [0, 0.72, 0], r: [0, 0, PI / 2] }, (P, N, out) => {
          out.copy(col('#d9b75a'));
          if (Math.abs(N.x) > 0.7) {
            const r = Math.sqrt(P.y * P.y + P.z * P.z);
            out.multiplyScalar(0.8 + 0.2 * Math.sin(r * 30));
          }
        }),
      ]);
    case 'silo':
      return part(new THREE.CylinderGeometry(0.72, 0.72, 1.15, 14), { p: [0, 0.72, 0], r: [0, 0, PI / 2] }, '#ecece6');
    case 'stadl': {
      const wood = (P, N, out) => {
        out.copy(col('#7a5230'));
        const k = Math.abs(N.x) > 0.5 ? P.z : P.x;
        out.multiplyScalar(0.82 + 0.18 * (Math.floor(k * 3.3) % 2));
      };
      return merge([
        part(new THREE.BoxGeometry(4.2, 3.2, 6), { p: [0, 1.6, 0] }, wood),
        part(new THREE.CylinderGeometry(2.42, 2.42, 6, 3), { p: [0, 3.87, 0], r: [-PI / 2, 0, 0], s: [1, 1, 0.55] }, wood),
        part(new THREE.BoxGeometry(3.15, 0.16, 6.5), { p: [-1.1, 4.25, 0], r: [0, 0, 0.76] }, '#4b3a2c'),
        part(new THREE.BoxGeometry(3.15, 0.16, 6.5), { p: [1.1, 4.25, 0], r: [0, 0, -0.76] }, '#4b3a2c'),
        part(new THREE.BoxGeometry(1.7, 2.3, 0.08), { p: [0, 1.15, 3.02] }, '#3a2717'),
        part(new THREE.BoxGeometry(0.08, 2.3, 0.1), { p: [0, 1.15, 3.06] }, '#7a5230'),
        part(new THREE.BoxGeometry(1.0, 0.7, 0.06), { p: [0, 4.0, 3.03] }, '#2a1c10'),
        part(new THREE.BoxGeometry(0.9, 0.5, 0.06), { p: [0, 3.95, 3.06] }, '#d9b75a'),
      ]);
    }
    case 'marterl':
      return merge([
        part(new THREE.BoxGeometry(0.18, 1.4, 0.18), { p: [0, 0.7, 0] }, '#6a4a2a'),
        part(new THREE.BoxGeometry(0.55, 0.6, 0.36), { p: [0, 1.65, 0] }, '#f1ede4'),
        part(new THREE.BoxGeometry(0.34, 0.4, 0.04), { p: [0, 1.65, 0.18] }, '#3e6fb0'),
        part(new THREE.CylinderGeometry(0.42, 0.42, 0.7, 3), { p: [0, 2.08, 0], r: [-PI / 2, 0, 0], s: [1, 1, 0.45] }, '#5a3a24'),
        part(new THREE.BoxGeometry(0.04, 0.3, 0.04), { p: [0, 2.45, 0] }, '#c9a227'),
        part(new THREE.BoxGeometry(0.16, 0.04, 0.04), { p: [0, 2.5, 0] }, '#c9a227'),
      ]);
    case 'corn':
      return merge([
        part(new THREE.CylinderGeometry(0.03, 0.045, 2.0, 5), { p: [0, 1.0, 0] }, '#8fa63a'),
        part(new THREE.BoxGeometry(0.7, 0.02, 0.1), { p: [0.3, 1.0, 0], r: [0, 0, -0.5] }, '#7f9a33'),
        part(new THREE.BoxGeometry(0.7, 0.02, 0.1), { p: [-0.28, 1.4, 0.05], r: [0, 0.4, 0.5] }, '#93ad3e'),
        part(new THREE.BoxGeometry(0.6, 0.02, 0.1), { p: [0.05, 1.7, 0.25], r: [0.5, 1.6, 0] }, '#7f9a33'),
        part(new THREE.CylinderGeometry(0.05, 0.06, 0.25, 6), { p: [0.08, 1.25, 0.04], r: [0, 0, -0.3] }, '#e8c44a'),
        part(new THREE.ConeGeometry(0.06, 0.3, 4), { p: [0, 2.1, 0] }, '#d8c477'),
      ]);
    case 'vine':
      return merge([
        part(new THREE.CylinderGeometry(0.04, 0.05, 1.3, 5), { p: [-0.9, 0.65, 0] }, '#6a4f33'),
        part(new THREE.CylinderGeometry(0.04, 0.05, 1.3, 5), { p: [0.9, 0.65, 0] }, '#6a4f33'),
        part(new THREE.BoxGeometry(2.0, 0.75, 0.45, 4, 2, 1), { p: [0, 0.9, 0], jitter: 0.12, seed: 4 }, varied('#4f7f2c', 0.4)),
        part(new THREE.SphereGeometry(0.08, 5, 4), { p: [-0.4, 0.55, 0.2] }, '#5b2a5e'),
        part(new THREE.SphereGeometry(0.08, 5, 4), { p: [0.5, 0.6, -0.2] }, '#5b2a5e'),
      ]);
    case 'reed':
      return merge([0, 1, 2, 3, 4].flatMap((i) => {
        const a = i * 1.3, rr = 0.15;
        const x = Math.cos(a) * rr, z = Math.sin(a) * rr;
        return [
          part(new THREE.ConeGeometry(0.03, 1.5, 4), { p: [x, 0.75, z], r: [x * 0.6, 0, -z * 0.6] }, '#8a9a4a'),
          part(new THREE.CylinderGeometry(0.035, 0.035, 0.2, 5), { p: [x * 1.4, 1.3, z * 1.4] }, '#5a3a22'),
        ];
      }));
    case 'grass':
      return merge([0, 1, 2].map((i) => part(new THREE.ConeGeometry(0.05, 0.42, 3), {
        p: [Math.cos(i * 2.1) * 0.06, 0.2, Math.sin(i * 2.1) * 0.06], r: [Math.sin(i * 2.1) * 0.3, 0, -Math.cos(i * 2.1) * 0.3],
      }, (P, N, out) => out.setRGB(0.55 + P.y, 0.6 + P.y, 0.55 + P.y))));
    case 'flower':
      return merge([
        part(new THREE.CylinderGeometry(0.01, 0.01, 0.3, 3), { p: [0, 0.15, 0] }, '#2f4f20'),
        part(new THREE.SphereGeometry(0.06, 6, 4), { p: [0, 0.32, 0] }, '#ffffff'),
      ]);
    case 'pumpkin':
      return merge([
        part(new THREE.SphereGeometry(0.4, 12, 8), { p: [0, 0.28, 0], s: [1, 0.72, 1] }, (P, N, out) => {
          const a = Math.atan2(P.x, P.z);
          out.copy(col('#e07b1c')).multiplyScalar(0.85 + 0.15 * Math.cos(a * 10));
        }),
        part(new THREE.CylinderGeometry(0.03, 0.05, 0.15, 5), { p: [0, 0.6, 0] }, '#4f5a22'),
      ]);
    case 'maibaum':
      return merge([
        part(new THREE.CylinderGeometry(0.12, 0.2, 14, 8), { p: [0, 7, 0] }, (P, N, out) => {
          out.copy(Math.floor((P.y + Math.atan2(P.x, P.z) * 0.3) * 1.2) % 2 ? col('#ffffff') : col('#d32f2f'));
        }),
        part(new THREE.TorusGeometry(0.9, 0.18, 6, 14), { p: [0, 12.5, 0], r: [PI / 2, 0, 0] }, '#2f6b2a'),
        part(new THREE.ConeGeometry(0.9, 1.8, 7), { p: [0, 14.6, 0] }, '#2f6b2a'),
      ]);
    default:
      return part(new THREE.BoxGeometry(1, 1, 1), {}, '#ff00ff');
  }
}

// --- Geschosse und Gegenstände -----------------------------------------------
export function itemGeometry(kind) {
  switch (kind) {
    case 'granate':
      return merge([
        part(new THREE.SphereGeometry(0.12, 10, 8), {}, '#4f5b2b'),
        part(new THREE.CylinderGeometry(0.04, 0.05, 0.08, 6), { p: [0, 0.13, 0] }, '#2a2a2a'),
      ]);
    case 'rakete':
      return merge([
        part(new THREE.CylinderGeometry(0.065, 0.065, 0.5, 8), { r: [PI / 2, 0, 0] }, '#556b2f'),
        part(new THREE.ConeGeometry(0.065, 0.2, 8), { p: [0, 0, 0.35], r: [PI / 2, 0, 0] }, '#c62828'),
        part(new THREE.BoxGeometry(0.28, 0.02, 0.1), { p: [0, 0, -0.22] }, '#333'),
        part(new THREE.BoxGeometry(0.02, 0.28, 0.1), { p: [0, 0, -0.22] }, '#333'),
      ]);
    case 'moerser':
    case 'shell':
      return merge([
        part(new THREE.CapsuleGeometry(0.08, 0.22, 4, 8), { r: [PI / 2, 0, 0] }, '#5c6266'),
        part(new THREE.BoxGeometry(0.22, 0.02, 0.08), { p: [0, 0, -0.18] }, '#3a3d40'),
        part(new THREE.BoxGeometry(0.02, 0.22, 0.08), { p: [0, 0, -0.18] }, '#3a3d40'),
      ]);
    case 'bomb':
      return merge([
        part(new THREE.CapsuleGeometry(0.13, 0.35, 4, 8), { r: [PI / 2, 0, 0] }, '#2f3a2a'),
        part(new THREE.BoxGeometry(0.34, 0.02, 0.12), { p: [0, 0, -0.28] }, '#222'),
        part(new THREE.BoxGeometry(0.02, 0.34, 0.12), { p: [0, 0, -0.28] }, '#222'),
      ]);
    case 'guelle':
      return merge([
        part(new THREE.CylinderGeometry(0.13, 0.13, 0.28, 10), {}, '#6b4a2a'),
        part(new THREE.CylinderGeometry(0.135, 0.135, 0.03, 10), { p: [0, 0.08, 0] }, '#2a2a2a'),
        part(new THREE.CylinderGeometry(0.135, 0.135, 0.03, 10), { p: [0, -0.08, 0] }, '#2a2a2a'),
      ]);
    case 'glocke':
      return merge([
        part(new THREE.CylinderGeometry(0.2, 0.3, 0.45, 12), {}, '#e6b422'),
        part(new THREE.CylinderGeometry(0.31, 0.31, 0.04, 12), { p: [0, -0.22, 0] }, '#b8860b'),
        part(new THREE.TorusGeometry(0.12, 0.035, 5, 10), { p: [0, 0.3, 0] }, '#c62828'),
        part(new THREE.SphereGeometry(0.07, 6, 5), { p: [0, -0.26, 0] }, '#5a4a2a'),
      ]);
    case 'mine':
      return merge([
        part(new THREE.SphereGeometry(0.36, 10, 6), { p: [0, 0.03, 0], s: [1, 0.22, 1] }, '#5a3d22'),
        part(new THREE.SphereGeometry(0.26, 10, 6), { p: [0.02, 0.09, 0.01], s: [1, 0.3, 1] }, '#634428'),
        part(new THREE.SphereGeometry(0.14, 8, 5), { p: [0.03, 0.15, 0.02], s: [1, 0.5, 1] }, '#6d4a2c'),
      ]);
    case 'tnt':
      return merge([
        part(new THREE.CylinderGeometry(0.06, 0.06, 0.42, 8), { p: [-0.065, 0.06, 0], r: [0, 0, PI / 2] }, '#c62828'),
        part(new THREE.CylinderGeometry(0.06, 0.06, 0.42, 8), { p: [0.065, 0.06, 0], r: [0, 0, PI / 2] }, '#c62828'),
        part(new THREE.CylinderGeometry(0.06, 0.06, 0.42, 8), { p: [0, 0.16, 0], r: [0, 0, PI / 2] }, '#b71c1c'),
        part(new THREE.BoxGeometry(0.08, 0.26, 0.15), { p: [0, 0.1, 0] }, '#2a2a2a'),
        part(new THREE.CylinderGeometry(0.01, 0.01, 0.25, 4), { p: [0, 0.32, 0.05], r: [0.4, 0, 0] }, '#eeeeee'),
      ]);
    case 'crateHealth':
      return part(new THREE.BoxGeometry(0.8, 0.6, 0.8), { p: [0, 0.3, 0] }, (P, N, out) => {
        out.copy(col('#f4f1ea'));
        const top = N.y > 0.5;
        const a = top ? P.x : (Math.abs(N.x) > 0.5 ? P.z : P.x);
        const b = top ? P.z : P.y - 0.3;
        if ((Math.abs(a) < 0.1 && Math.abs(b) < 0.28) || (Math.abs(b) < 0.1 && Math.abs(a) < 0.28)) out.copy(col('#d32f2f'));
      });
    case 'crate':
      return part(new THREE.BoxGeometry(0.8, 0.6, 0.8), { p: [0, 0.3, 0] }, (P, N, out) => {
        out.copy(col('#6b7a3a'));
        const e = Math.max(Math.abs(P.x) > 0.33 ? 1 : 0, Math.abs(P.z) > 0.33 ? 1 : 0, P.y > 0.53 || P.y < 0.07 ? 1 : 0);
        if (e) out.copy(col('#3f4a22'));
      });
    case 'plane':
      return merge([
        part(new THREE.CylinderGeometry(0.55, 0.45, 8, 10), { r: [PI / 2, 0, 0] }, '#8a939b'),
        part(new THREE.ConeGeometry(0.55, 2.2, 10), { p: [0, 0, 5.1], r: [PI / 2, 0, 0] }, '#6f7880'),
        part(new THREE.BoxGeometry(7.5, 0.12, 2.6), { p: [0, -0.1, -0.6] }, '#7d868e'),
        part(new THREE.BoxGeometry(0.12, 1.9, 1.8), { p: [0, 1.0, -3.3], r: [-0.3, 0, 0] }, '#7d868e'),
        part(new THREE.BoxGeometry(3, 0.1, 1.2), { p: [0, 0.1, -3.4] }, '#7d868e'),
        part(new THREE.SphereGeometry(0.42, 8, 6), { p: [0, 0.45, 2.4], s: [1, 0.7, 2] }, '#2b4a6a'),
        part(new THREE.BoxGeometry(0.9, 0.3, 0.02), { p: [2.6, -0.02, -0.6] }, '#d32f2f'),
        part(new THREE.BoxGeometry(0.9, 0.3, 0.02), { p: [-2.6, -0.02, -0.6] }, '#d32f2f'),
      ]);
    case 'grave':
      return merge([
        part(new THREE.SphereGeometry(0.55, 10, 6), { p: [0, 0, 0], s: [1, 0.35, 1.4] }, '#5a4430'),
        part(new THREE.BoxGeometry(0.1, 0.95, 0.08), { p: [0, 0.55, -0.35] }, '#7a5a3a'),
        part(new THREE.BoxGeometry(0.5, 0.09, 0.08), { p: [0, 0.82, -0.35] }, '#7a5a3a'),
        part(new THREE.CylinderGeometry(0.06, 0.09, 0.13, 7), { p: [0.18, 0.66, -0.31] }, '#e6b422'),
        part(new THREE.SphereGeometry(0.06, 5, 4), { p: [-0.2, 0.15, 0.2] }, '#e53935'),
        part(new THREE.SphereGeometry(0.06, 5, 4), { p: [0.15, 0.16, 0.3] }, '#fdd835'),
      ]);
    case 'gabel': {
      const steel = '#9aa3a8';
      const parts = [
        part(new THREE.CylinderGeometry(0.03, 0.035, 1.25, 6), { p: [0, 0, -0.35], r: [PI / 2, 0, 0] }, '#8a5a32'),
        part(new THREE.BoxGeometry(0.34, 0.04, 0.05), { p: [0, 0, 0.28] }, steel),
      ];
      for (const x of [-0.15, 0, 0.15]) {
        parts.push(part(new THREE.CylinderGeometry(0.014, 0.014, 0.42, 5), { p: [x, 0, 0.5], r: [PI / 2, 0, 0] }, steel));
        parts.push(part(new THREE.ConeGeometry(0.016, 0.08, 5), { p: [x, 0, 0.75], r: [PI / 2, 0, 0] }, '#dfe5e8'));
      }
      return merge(parts);
    }
    case 'nest':
      return merge([
        part(new THREE.SphereGeometry(0.22, 12, 10), { s: [1, 1.25, 1] }, (P, N, out) => {
          out.copy(col('#c9b892')).multiplyScalar(0.8 + 0.2 * (Math.floor((P.y + 0.3) * 22) % 2));
        }),
        part(new THREE.CylinderGeometry(0.04, 0.05, 0.08, 6), { p: [0, 0.3, 0] }, '#5a4630'),
        part(new THREE.SphereGeometry(0.06, 6, 5), { p: [0, -0.22, 0.05] }, '#2a2218'),
      ]);
    case 'traktor': {
      const green = '#2e7d32', dark = '#1b1b1b', rim = '#d9b100';
      const wheel = (x, y, z, r, w) => [
        part(new THREE.CylinderGeometry(r, r, w, 16), { p: [x, y, z], r: [0, 0, PI / 2] }, dark),
        part(new THREE.CylinderGeometry(r * 0.55, r * 0.55, w + 0.02, 10), { p: [x, y, z], r: [0, 0, PI / 2] }, rim),
      ];
      return merge([
        part(new THREE.BoxGeometry(0.8, 0.62, 1.35), { p: [0, 0.78, 0.45] }, green),
        part(new THREE.BoxGeometry(0.84, 0.08, 1.4), { p: [0, 1.11, 0.45] }, '#256628'),
        part(new THREE.BoxGeometry(0.7, 0.4, 0.05), { p: [0, 0.78, 1.13] }, '#3a3a3a'),
        part(new THREE.BoxGeometry(1.0, 0.45, 0.85), { p: [0, 0.85, -0.45] }, green),
        part(new THREE.BoxGeometry(1.5, 0.08, 0.9), { p: [0, 1.15, -0.45] }, '#256628'),
        part(new THREE.BoxGeometry(0.45, 0.12, 0.4), { p: [0, 1.25, -0.55] }, '#c62828'),
        part(new THREE.BoxGeometry(0.45, 0.4, 0.08), { p: [0, 1.48, -0.76] }, '#c62828'),
        part(new THREE.TorusGeometry(0.15, 0.025, 5, 12), { p: [0, 1.45, -0.18], r: [-0.9, 0, 0] }, dark),
        part(new THREE.CylinderGeometry(0.045, 0.045, 0.75, 7), { p: [0.27, 1.45, 0.75] }, '#333333'),
        part(new THREE.CylinderGeometry(0.07, 0.07, 0.4, 8), { p: [-0.12, 1.25, 0.55], r: [0, 0, PI / 2] }, '#c62828'),
        part(new THREE.CylinderGeometry(0.07, 0.07, 0.4, 8), { p: [-0.12, 1.25, 0.72], r: [0, 0, PI / 2] }, '#c62828'),
        part(new THREE.CylinderGeometry(0.012, 0.012, 1.0, 4), { p: [-0.55, 1.65, -0.85] }, '#dddddd'),
        part(new THREE.BoxGeometry(0.02, 0.1, 0.36), { p: [-0.55, 2.05, -0.67] }, '#d32f2f'),
        part(new THREE.BoxGeometry(0.02, 0.1, 0.36), { p: [-0.55, 1.95, -0.67] }, '#ffffff'),
        part(new THREE.BoxGeometry(0.02, 0.1, 0.36), { p: [-0.55, 1.85, -0.67] }, '#d32f2f'),
        ...wheel(-0.68, 0.6, -0.45, 0.6, 0.34),
        ...wheel(0.68, 0.6, -0.45, 0.6, 0.34),
        ...wheel(-0.5, 0.34, 0.8, 0.34, 0.22),
        ...wheel(0.5, 0.34, 0.8, 0.34, 0.22),
      ]);
    }
    case 'chute':
      return merge([
        part(new THREE.SphereGeometry(1.1, 12, 5, 0, PI * 2, 0, PI / 2.3), { p: [0, 2.2, 0], s: [1, 0.6, 1] }, (P, N, out) => {
          const a = Math.atan2(P.x, P.z);
          out.copy(Math.floor((a + PI) / (PI / 6)) % 2 ? col('#ffffff') : col('#d32f2f'));
        }),
        ...[[-1, -1], [1, -1], [-1, 1], [1, 1]].map(([sx, sz]) => part(new THREE.CylinderGeometry(0.01, 0.01, 1.8, 3), { p: [sx * 0.45, 1.3, sz * 0.45], r: [sz * 0.4, 0, -sx * 0.4] }, '#dddddd')),
      ]);
    case 'arrow':
      return part(new THREE.ConeGeometry(0.22, 0.45, 4), { r: [PI, 0, 0] }, '#ffffff');
    case 'marker':
      return part(new THREE.TorusGeometry(1.0, 0.08, 6, 28), { r: [PI / 2, 0, 0] }, '#ffffff');
    default:
      return part(new THREE.SphereGeometry(0.1, 6, 4), {}, '#ff00ff');
  }
}
