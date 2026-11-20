// Prüft, ob eine Granate in allen Lagen explodiert (auf einem Viech, in einem Baum, im Krater)
import * as THREE from 'three';
import { stepProjectile } from '../../src/projectile.js';
import { WEAPONS } from '../../src/config.js';
const flat = { heightAt: () => 0, normalAt: (x, z, out = new THREE.Vector3()) => out.set(0, 1, 0) };
const unit = { alive: true, pos: new THREE.Vector3(0, 0, 0) };
const tree = { solid: true, x: 5, z: 0, r: 0.5, pr: 1.1, y0: -0.5, top: 4.4 };
function run(name, s, env) {
  const W = WEAPONS.granate;
  for (let i = 0; i < 60 * 20; i++) {
    const r = stepProjectile(s, W, env);
    if (r) return console.log(`${name}: ${r.type} nach ${s.t.toFixed(2)} s`);
  }
  console.log(`${name}: KEINE EXPLOSION nach 20 s  <-- Bug`);
}
const base = { terrain: flat, wind: { x: 0, z: 0 }, units: [unit], obstacles: [tree], waterLevel: -1, owner: null };
run('Granate fällt auf ein Viech', { x: 0, y: 1.0, z: 0, vx: 0, vy: 0, vz: 0, t: 0, rest: false }, base);
run('Granate steckt im Baum', { x: 5, y: 2.0, z: 0, vx: 0, vy: 0, vz: 0, t: 0, rest: false }, base);
run('Granate normal am Boden', { x: 20, y: 1.0, z: 0, vx: 2, vy: 0, vz: 0, t: 0, rest: false }, base);
