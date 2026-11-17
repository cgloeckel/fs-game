// Ein Gefecht: Rundenablauf, Waffenwirkung, Gegenstände, Sieg und Niederlage.
import * as THREE from 'three';
import { World } from './world.js';
import { FX } from './fx.js';
import { CameraRig } from './camera.js';
import { Unit } from './unit.js';
import { Projectile, simulate } from './projectile.js';
import { AI } from './ai.js';
import { RNG } from './rng.js';
import { THEMES, WEAPONS, STAMINA_PER_M, WALK_SPEED, CRATE_WEAPONS, factionById, GRAVITY } from './config.js';
import { itemGeometry, materials } from './models.js';
import { line, pick, ANNOUNCE } from './text.js';
import { clamp, dist2D, DEG } from './util.js';
import { audio } from './audio.js';

const V3 = THREE.Vector3;
const NOOP_HUD = new Proxy({}, { get: () => () => {} });

function gauss() {
  return (Math.random() + Math.random() + Math.random() - 1.5) / 1.5;
}

export class Game {
  constructor(app, opts) {
    this.app = app;
    this.opts = opts;
    this.demo = opts.mode === 'demo';
    this.hud = this.demo ? NOOP_HUD : app.hud;
    this.settings = app.settings;
    this.rules = Object.assign({
      wind: 0.4, turnTime: app.settings.turnTime || 60, risingWater: 0, mines: 0, fog: false, crates: true, maxRounds: 40,
    }, opts.rules || {});
    this.rng = new RNG((opts.seed || 1) * 977 + 13);
    this.scene = new THREE.Scene();
    this.theme = THEMES[opts.theme] || THEMES.alm;
    this.time = 0;
    this.timers = [];
    this.frameWaiters = [];
    this.projectiles = [];
    this.mines = [];
    this.tnts = [];
    this.crates = [];
    this.gases = [];
    this.planes = [];
    this.units = [];
    this.teams = [];
    this.played = new Set();
    this.phase = 'intro';
    this.round = 1;
    this.turnIdx = -1;
    this.wind = { x: 0, z: 0 };
    this.power = 0;
    this.charging = false;
    this.overview = false;
    this.paused = false;
    this.disposed = false;
    this.busy = 0;
    this.settleT = 0;
    this.settleT2 = 0;
    this.shot = null;
    this.lastEvent = null;
    this.targetPoint = null;
    this.saidBlock = 0;
    this.log = [];
    this.turnCount = 0;

    this.world = new World(this.scene, this.theme, opts.seed || 1, app.quality, {
      fog: this.rules.fog, maibaum: this.rules.maibaum, planSpawns: (t) => this.planSpawns(t),
    });
    this.terrain = this.world.terrain;
    this.fx = new FX(this.scene, app.quality);
    this.fx.terrain = this.terrain;
    this.cam = new CameraRig(app.aspect());
    this.cam.terrain = this.terrain;
    this.env = { terrain: this.terrain, wind: this.wind, units: this.units, obstacles: this.world.obstacles, grid: this.world.obstacleGrid, waterLevel: 0, owner: null };
    this.envCalm = { ...this.env, wind: { x: 0, z: 0 } };
    this.createTeams();
    this.createMarkers();
    if (this.rules.mines) this.scatterMines(this.rules.mines);
  }

  // --- Aufbau -------------------------------------------------------------
  planSpawns(T) {
    const rng = this.rng;
    const teams = this.opts.teams;
    const n = teams.length;
    const base = rng.range(0, Math.PI * 2);
    this.spawnSpots = [];
    const avoid = [];
    const anyLand = () => {
      for (let i = 0; i < 400; i++) {
        const x = rng.range(-40, 40), z = rng.range(-40, 40);
        if (T.heightAt(x, z) > T.waterLevel + 0.8) return { x, z };
      }
      return { x: 0, z: 0 };
    };
    for (let k = 0; k < n; k++) {
      const a = base + (k * Math.PI * 2) / n;
      let center = null;
      for (let tries = 0; tries < 120 && !center; tries++) {
        const spreadA = 0.15 + tries * 0.01;
        const aa = a + rng.range(-spreadA, spreadA);
        const rad = rng.range(n > 2 ? 22 : 18, 34);
        const x = Math.sin(aa) * rad, z = Math.cos(aa) * rad;
        if (T.heightAt(x, z) > T.waterLevel + 1.2 && T.slopeAt(x, z) < 0.45) center = { x, z };
      }
      if (!center) center = anyLand();
      const spots = [];
      const count = teams[k].soldiers.length;
      for (let i = 0; i < count; i++) {
        let s = null;
        for (let tries = 0; tries < 300 && !s; tries++) {
          const spread = 4 + tries * 0.05;
          const x = center.x + rng.range(-spread, spread), z = center.z + rng.range(-spread, spread);
          const h = T.heightAt(x, z);
          if (h < T.waterLevel + 0.9) continue;
          if (T.slopeAt(x, z) > 0.55 + tries * 0.003) continue;
          if (spots.some((p) => dist2D(p.x, p.z, x, z) < 2.4)) continue;
          if (this.spawnSpots.some((tm) => tm.some((p) => dist2D(p.x, p.z, x, z) < 11))) continue;
          s = { x, z };
        }
        if (!s) s = anyLand();
        spots.push(s);
        avoid.push({ x: s.x, z: s.z, r: 2.6 });
      }
      this.spawnSpots.push(spots);
    }
    return avoid;
  }

  createTeams() {
    this.opts.teams.forEach((td, k) => {
      const f = factionById(td.faction);
      const team = {
        idx: k, faction: f, name: f.name, short: f.short, color: f.color, control: td.control,
        difficulty: td.difficulty || 'normal', units: [], next: 0, alive: true, human: td.control === 'human', label: td.label,
      };
      td.soldiers.forEach((s, i) => {
        const u = new Unit(this, s, team);
        const sp = this.spawnSpots[k][i];
        u.pos.set(sp.x, this.terrain.heightAt(sp.x, sp.z), sp.z);
        u.yaw = Math.atan2(-sp.x, -sp.z) + this.rng.range(-0.4, 0.4);
        u.animate(0);
        team.units.push(u);
        this.units.push(u);
      });
      if (!team.human) team.ai = new AI(this, team, team.difficulty);
      this.teams.push(team);
    });
  }

  createMarkers() {
    this.arrow = new THREE.Mesh(itemGeometry('arrow'), new THREE.MeshBasicMaterial({ color: 0xffffff }));
    this.arrow.scale.setScalar(0.7);
    this.arrow.visible = false;
    this.marker = new THREE.Mesh(itemGeometry('marker'), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.9 }));
    this.marker.visible = false;
    const rg = new THREE.TorusGeometry(1, 0.05, 4, 72);
    rg.rotateX(Math.PI / 2);
    this.rangeRing = new THREE.Mesh(rg, new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.45 }));
    this.rangeRing.visible = false;
    this.previewArr = new Float32Array(150 * 3);
    this.previewGeo = new THREE.BufferGeometry();
    this.previewGeo.setAttribute('position', new THREE.BufferAttribute(this.previewArr, 3).setUsage(THREE.DynamicDrawUsage));
    this.previewGeo.setDrawRange(0, 0);
    this.preview = new THREE.Points(this.previewGeo, new THREE.PointsMaterial({ size: 0.3, color: 0xffffff, transparent: true, opacity: 0.9, depthWrite: false, depthTest: false }));
    this.preview.frustumCulled = false;
    this.laserGeo = new THREE.BufferGeometry().setFromPoints([new V3(), new V3(0, 1, 0)]);
    this.laser = new THREE.Line(this.laserGeo, new THREE.LineBasicMaterial({ color: 0xff3b30, transparent: true, opacity: 0.7 }));
    this.laser.frustumCulled = false;
    this.laser.visible = false;
    this.scene.add(this.arrow, this.marker, this.rangeRing, this.preview, this.laser);
  }

  scatterMines(n) {
    for (let i = 0; i < n; i++) {
      const s = this.world.findSpot(this.rng, { maxSlope: 0.6, minDist: 0.5, minH: 0.8, area: 0.8 });
      if (!s) continue;
      if (this.units.some((u) => dist2D(u.pos.x, u.pos.z, s.x, s.z) < 4.5)) continue;
      this.addMine(new V3(s.x, s.y, s.z), null, true);
    }
  }

  addMine(p, owner, armed) {
    const mesh = new THREE.Mesh(itemGeometry('mine'), materials().item);
    mesh.position.copy(p);
    mesh.rotation.y = Math.random() * 6;
    mesh.castShadow = true;
    this.scene.add(mesh);
    this.mines.push({ pos: p, mesh, armed, trig: -1, owner, W: WEAPONS.mine, dead: false });
  }

  // --- Ablauf -------------------------------------------------------------
  start() {
    this.cam.setMode('orbit', { pos: new V3(0, 4, 0) }, { dist: 78, pitch: 0.55 });
    this.cam.yaw = this.rng.range(0, 6.28);
    this.cam.dist = 120;
    this.turnIdx = (this.opts.firstTeam ?? this.rng.int(0, this.teams.length - 1)) - 1;
    if (this.demo) {
      this.after(1.5, () => this.startTurn());
      return;
    }
    this.hud.setupMatch(this);
    this.hud.announce(this.opts.title || 'Gefecht!', `${this.theme.name}${this.rules.fog ? ' · Nebel' : ''}${this.rules.risingWater ? ' · Hochwasser' : ''}`, 2.4);
    this.sfx('bell', 0.35, 0, 1);
    this.after(2.6, () => this.startTurn());
  }

  addLog(msg) {
    this.log.push(`${this.time.toFixed(1)}s ${msg}`);
    if (this.log.length > 300) this.log.shift();
  }

  after(sec, fn) { this.timers.push({ t: sec, fn }); }
  wait(sec) { return new Promise((res) => this.after(sec, res)); }
  nextFrame() { return new Promise((res) => this.frameWaiters.push(res)); }

  sfx(name, ...args) {
    if (this.demo || !audio[name]) return;
    audio[name](...args);
  }

  say(u, cat, chance = 1) {
    if (!u || this.demo || Math.random() > chance) return;
    const l = cat === 'hit' && u.isStier && Math.random() < 0.4 ? line('hitStier') : line(cat);
    this.hud.say(u, l);
  }

  startTurn() {
    if (this.disposed || this.phase === 'gameover') return;
    if (this.checkVictory()) return;
    const n = this.teams.length;
    let idx = this.turnIdx;
    let team = null;
    for (let i = 0; i < n; i++) {
      idx = (idx + 1) % n;
      if (this.teams[idx].alive) { team = this.teams[idx]; break; }
    }
    if (!team) { this.gameOver(null); return; }
    if (this.played.has(idx)) {
      this.played.clear();
      this.newRound();
      if (this.phase === 'gameover') return;
    }
    this.played.add(idx);
    this.turnIdx = idx;
    this.team = team;
    let u = null;
    for (let i = 0; i < team.units.length; i++) {
      const c = team.units[(team.next + i) % team.units.length];
      if (c.alive) {
        u = c;
        team.next = (team.units.indexOf(c) + 1) % team.units.length;
        break;
      }
    }
    if (!u) { this.endTurn(); return; }
    this.unit = u;
    this.turnCount++;
    this.addLog(`T${this.turnCount} R${this.round} ${team.short} ${u.name}`);
    this.windChange();
    if (this.rules.crates && this.round > 1 && this.rng.chance(0.3) && this.crates.length < 4) this.spawnCrate();
    this.turnTimer = this.rules.turnTime;
    this.timerWarn = 5;
    u.stamina = 100;
    this.attacked = false;
    this.canSwitch = true;
    this.moved = 0;
    this.tiredSaid = false;
    this.charging = false;
    this.power = 0;
    this.targetPoint = null;
    this.weapon = u.weapon && u.ammo[u.weapon] !== 0 && u.ammo[u.weapon] !== undefined ? u.weapon : u.defaultWeapon();
    u.setHeld(this.weapon);
    this.phase = team.human ? 'move' : 'ai';
    this.overview = false;
    this.cam.manualZoom = 1;
    this.cam.userTime = 99;
    this.arrow.material.color.set(team.color);
    this.hud.turnStart(this, team, u);
    this.sfx('turnStart');
    this.after(0.5, () => {
      if (this.unit === u && u.alive) {
        this.say(u, 'select', 0.65);
        this.sfx('moo', u.isStier ? 0.72 : 1.05, 0.3);
      }
    });
    if (!team.human) {
      team.ai.takeTurn(u).catch((e) => {
        console.error(e);
        if (!this.disposed && this.phase !== 'gameover') { this.phase = 'ai'; this.endTurn(); }
      });
    }
    if (this.opts.tutorial && team.human && !this.tutorialShown) {
      this.tutorialShown = true;
      this.after(0.8, () => this.hud.tutorial(this));
    }
  }

  newRound() {
    this.round++;
    this.hud.setRound(this.round);
    if (this.round > this.rules.maxRounds) {
      this.hud.announce('Zeit is um!', 'Wer am meisten Lebenspunkte hat, gewinnt.', 2);
      this.gameOver(null, true);
      return;
    }
    if (this.rules.risingWater) {
      const from = this.terrain.waterLevel;
      this.waterAnim = { from, to: from + this.rules.risingWater, t: 0 };
      if (!this.demo) this.hud.announce('Das Wasser steigt!', `Runde ${this.round}`, 1.6);
    }
  }

  windChange() {
    const s = this.rules.wind;
    const a = this.rng.range(0, Math.PI * 2);
    const m = s * this.rng.range(0.1, 1);
    this.wind.x = this.wind.x * 0.35 + Math.sin(a) * m * 0.65;
    this.wind.z = this.wind.z * 0.35 + Math.cos(a) * m * 0.65;
    const l = Math.hypot(this.wind.x, this.wind.z);
    if (l > s && l > 0) { this.wind.x *= s / l; this.wind.z *= s / l; }
  }

  endTurn() {
    if (this.phase === 'turnEnd' || this.phase === 'gameover') return;
    this.phase = 'turnEnd';
    this.charging = false;
    this.power = 0;
    this.targetPoint = null;
    if (this.unit) {
      this.unit.aiming = false;
      this.unit.moving = false;
      this.unit.weapon = this.weapon;
    }
    this.overview = false;
    this.hud.phase(this);
    this.hud.closeWeaponMenu();
    for (const m of this.mines) m.armed = true;
    for (const g of this.gases) {
      for (const u of this.units) {
        if (u.alive && u.getCenter().distanceTo(g.pos) < g.radius + 0.6) {
          this.damageUnit(u, g.dmg, g.owner, null, 'gas');
          this.fx.gasBurst(u.getCenter(), 0.8);
        }
      }
      g.turns--;
    }
    this.gases = this.gases.filter((g) => g.turns > 0);
    this.after(0.35, () => {
      this.settleT2 = 0;
      this.settleCb = () => {
        if (!this.checkVictory()) this.startTurn();
      };
    });
  }

  checkVictory() {
    if (this.phase === 'gameover') return true;
    for (const t of this.teams) t.alive = t.units.some((u) => u.alive);
    const alive = this.teams.filter((t) => t.alive);
    const humans = this.teams.filter((t) => t.human);
    if (alive.length <= 1) { this.gameOver(alive[0] || null); return true; }
    if (humans.length && !humans.some((t) => t.alive)) { this.gameOver(null, true); return true; }
    return false;
  }

  gameOver(winner, byHp = false) {
    if (this.phase === 'gameover') return;
    if (!winner && byHp) {
      let best = -1;
      for (const t of this.teams) {
        const hp = t.units.reduce((s, u) => s + (u.alive ? u.hp : 0), 0);
        if (hp > best) { best = hp; winner = hp > 0 ? t : null; }
      }
    }
    this.phase = 'gameover';
    this.winner = winner;
    this.arrow.visible = false;
    this.hud.phase(this);
    this.hud.closeWeaponMenu();
    this.settleCb = null;
    const anyHuman = this.teams.some((t) => t.human);
    if (winner) {
      const alive = winner.units.filter((u) => u.alive);
      alive.forEach((u, i) => {
        u.cheer = 0.01;
        u.aiming = false;
        if (i < 2) this.after(0.4 + i * 0.6, () => this.say(u, 'victory'));
      });
      this.cam.setMode('orbit', alive[0] || { pos: new V3() }, { dist: 13, pitch: 0.28 });
      this.hud.announce(winner.human && this.teams.filter((t) => t.human).length === 1 ? 'Sieg!' : `${winner.short} gewinnt!`, winner.name, 3.5);
      if (anyHuman) this.sfx(winner.human ? 'victory' : 'defeat');
    } else {
      this.cam.setMode('orbit', { pos: new V3(0, 3, 0) }, { dist: 60, pitch: 0.5 });
      this.hud.announce('Unentschieden!', 'Alle hin. Typisch.', 3.5);
      if (anyHuman) this.sfx('defeat');
    }
    this.after(this.demo ? 4 : 4.8, () => {
      if (this.disposed) return;
      if (this.demo) this.app.onDemoEnd && this.app.onDemoEnd();
      else this.app.onMatchEnd(this.result());
    });
  }

  result() {
    return {
      winner: this.winner ? this.winner.idx : -1,
      rounds: this.round,
      teams: this.teams.map((t) => ({
        idx: t.idx, faction: t.faction.id, name: t.name, human: t.human, alive: t.alive,
        units: t.units.map((u) => ({
          id: u.s.id, name: u.name, alive: u.alive, hp: Math.max(0, Math.round(u.hp)), hpMax: u.hpMax,
          kills: u.stats.kills, dmg: Math.round(u.stats.dmg), dmgTaken: Math.round(u.stats.dmgTaken),
        })),
      })),
    };
  }

  // --- Spieler-Befehle -----------------------------------------------------
  get humanTurn() { return this.team && this.team.human && ['move', 'aim', 'target', 'retreat'].includes(this.phase); }

  cmd(name, arg) {
    if (this.paused || this.disposed) return;
    const u = this.unit;
    if (!this.humanTurn) return;
    switch (name) {
      case 'weaponMenu':
        if (this.phase === 'move' || this.phase === 'aim' || this.phase === 'target') this.hud.openWeaponMenu(this);
        break;
      case 'selectWeapon':
        if (u.ammo[arg] === undefined || u.ammo[arg] === 0) return;
        this.weapon = arg;
        u.weapon = arg;
        u.setHeld(arg);
        this.sfx('click');
        this.enterAim();
        break;
      case 'aim':
        if (this.phase === 'move') this.enterAim();
        break;
      case 'back':
        if (this.phase === 'aim' || this.phase === 'target') {
          this.phase = 'move';
          this.charging = false;
          this.power = 0;
          u.aiming = false;
          this.targetPoint = null;
          this.overview = false;
          this.hud.phase(this);
        }
        break;
      case 'fireDown': {
        if (this.phase === 'aim') {
          const W = WEAPONS[this.weapon];
          if (W.type === 'ballistic') { this.charging = true; this.power = 0; }
          else this.fire();
        } else if (this.phase === 'target' && this.targetPoint) this.fire();
        break;
      }
      case 'fireUp':
        if (this.phase === 'aim' && this.charging) this.fire();
        break;
      case 'jump':
        if ((this.phase === 'move' || this.phase === 'retreat') && u.jump()) {
          this.sfx('jump');
          this.moved += 1;
          this.canSwitch = false;
        }
        break;
      case 'switch':
        if (this.phase === 'move' && this.canSwitch) this.switchUnit();
        break;
      case 'endTurn':
        if (this.phase === 'move' || this.phase === 'aim' || this.phase === 'target') this.endTurn();
        break;
      case 'nextTarget':
        if (this.phase === 'aim') this.nextTarget();
        break;
      case 'overview':
        if (this.phase === 'move' || this.phase === 'aim') {
          this.overview = !this.overview;
          if (this.overview) { this.cam.setMode('overview', null, { keepTarget: true }); this.cam.goal.copy(u.pos); }
          this.hud.phase(this);
        }
        break;
      default:
        break;
    }
  }

  switchUnit() {
    const team = this.team;
    const alive = team.units.filter((x) => x.alive);
    if (alive.length < 2) return;
    const i = alive.indexOf(this.unit);
    const next = alive[(i + 1) % alive.length];
    this.unit.aiming = false;
    this.unit = next;
    next.stamina = 100;
    this.weapon = next.weapon && next.ammo[next.weapon] ? next.weapon : next.defaultWeapon();
    next.setHeld(this.weapon);
    team.next = (team.units.indexOf(next) + 1) % team.units.length;
    this.cam.userTime = 99;
    this.hud.turnStart(this, team, next, true);
    this.say(next, 'select', 0.5);
    this.sfx('click');
  }

  pitchMin(W) {
    if (W.type === 'ballistic') return (W.minPitch !== undefined ? W.minPitch : -10) * DEG;
    if (W.type === 'hitscan' || W.type === 'cone') return -50 * DEG;
    return 0;
  }

  pitchMax(W) {
    if (W.type === 'ballistic') return 82 * DEG;
    if (W.type === 'hitscan' || W.type === 'cone') return 60 * DEG;
    return 0;
  }

  enterAim() {
    const u = this.unit;
    const W = WEAPONS[this.weapon];
    if (!W || u.ammo[this.weapon] === 0) return;
    this.hud.closeWeaponMenu();
    this.charging = false;
    this.power = 0;
    if (W.type === 'strike' || W.type === 'jump') {
      this.phase = 'target';
      this.targetPoint = null;
      this.cam.setMode('overview', null, { keepTarget: true });
      this.cam.goal.copy(u.pos);
      this.cam.manualZoom = W.type === 'jump' ? 0.65 : 1;
      this.hud.toast(W.type === 'jump' ? 'Tipp auf an Landepunkt im Kreis.' : 'Tipp auf das Ziel auf der Karte.');
    } else {
      this.phase = 'aim';
      this.overview = false;
      u.aiming = true;
      if (W.type === 'ballistic') u.aimPitch = clamp(Math.max(u.aimPitch, (W.minPitch || 30) * DEG), this.pitchMin(W), this.pitchMax(W));
      else u.aimPitch = clamp(u.aimPitch, this.pitchMin(W), this.pitchMax(W));
      if (W.type === 'hitscan' && Math.abs(u.aimPitch) > 0.5) u.aimPitch = 0.05;
      if (['heal', 'place', 'melee'].includes(W.type)) u.aimPitch = 0;
    }
    this.hud.phase(this);
  }

  nextTarget() {
    const u = this.unit;
    const enemies = this.units.filter((t) => t.alive && t.team !== u.team);
    if (!enemies.length) return;
    enemies.sort((a, b) => a.pos.distanceTo(u.pos) - b.pos.distanceTo(u.pos));
    this.targetCycle = ((this.targetCycle || 0) + 1) % enemies.length;
    const t = enemies[this.targetCycle % enemies.length];
    u.yaw = Math.atan2(t.pos.x - u.pos.x, t.pos.z - u.pos.z);
    const W = WEAPONS[this.weapon];
    if (W.type === 'hitscan' || W.type === 'cone') {
      const m = u.muzzle();
      const c = t.getCenter();
      u.aimPitch = clamp(Math.atan2(c.y - m.y, dist2D(m.x, m.z, c.x, c.z)), this.pitchMin(W), this.pitchMax(W));
    }
    this.hud.toast(`Ziel: ${t.name} (${Math.round(t.pos.distanceTo(u.pos))} m)`);
    this.sfx('click');
  }

  onTap(nx, ny) {
    if (!this.humanTurn || this.phase !== 'target') return;
    const W = WEAPONS[this.weapon];
    const r = this.cam.screenRay(nx, ny);
    const hit = this.terrain.raycast(r.origin, r.dir, 700, 0.6);
    if (!hit) return;
    const p = hit.point;
    if (W.type === 'jump') {
      const d = dist2D(p.x, p.z, this.unit.pos.x, this.unit.pos.z);
      if (d > W.range) { this.hud.toast('Z\'weit weg! Nur innerhalb vom Kreis.'); return; }
      if (p.y < this.terrain.waterLevel + 0.3) { this.hud.toast('Ins Wasser springen? Na sicher ned.'); return; }
    }
    if (this.targetPoint && dist2D(p.x, p.z, this.targetPoint.x, this.targetPoint.z) < 2.5) {
      this.fire();
      return;
    }
    this.targetPoint = p.clone();
    this.sfx('click');
    this.hud.phase(this);
  }

  onDrag(dx, dy, button, pointerType) {
    if (this.disposed) return;
    const sens = this.settings.camSens || 1;
    const u = this.unit;
    if (this.humanTurn && this.phase === 'aim' && (pointerType !== 'mouse' || button === 0)) {
      const W = WEAPONS[this.weapon];
      u.yaw -= dx * 0.0045 * sens;
      u.aimPitch = clamp(u.aimPitch - dy * 0.0035 * sens, this.pitchMin(W), this.pitchMax(W));
      return;
    }
    if (this.cam.mode === 'overview') { this.cam.pan(dx, dy); return; }
    this.cam.orbitInput(dx * 0.006 * sens, dy * 0.004 * sens);
  }

  onKey(code, down) {
    if (!this.humanTurn) return;
    if (!down) {
      if (code === 'Space' && this.phase === 'aim') this.cmd('fireUp');
      return;
    }
    switch (code) {
      case 'Space':
        if (this.phase === 'move' || this.phase === 'retreat') this.cmd('jump');
        else if (this.phase === 'aim') this.cmd('fireDown');
        else if (this.phase === 'target') this.cmd('fireDown');
        break;
      case 'Enter':
      case 'KeyF':
        if (this.phase === 'move') this.cmd('aim');
        else if (this.phase === 'aim') {
          if (WEAPONS[this.weapon].type === 'ballistic') { this.power = this.power || 0.75; this.fire(); } else this.cmd('fireDown');
        } else if (this.phase === 'target') this.cmd('fireDown');
        break;
      case 'KeyQ':
      case 'KeyR':
        this.hud.toggleWeaponMenu(this);
        break;
      case 'Tab':
      case 'KeyE':
        if (this.phase === 'move') this.cmd('switch');
        else if (this.phase === 'aim') this.cmd('nextTarget');
        break;
      case 'Escape':
        if (this.phase === 'aim' || this.phase === 'target') this.cmd('back');
        break;
      case 'Backspace':
      case 'KeyX':
        this.cmd('endTurn');
        break;
      case 'KeyM':
        this.cmd('overview');
        break;
      default:
        if (code.startsWith('Digit')) {
          const n = parseInt(code.slice(5), 10);
          const list = this.unit.weapons().filter((id) => this.unit.ammo[id] !== 0);
          if (list[n - 1]) this.cmd('selectWeapon', list[n - 1]);
        }
    }
  }

  // --- Feuern ---------------------------------------------------------------
  fire(params = {}) {
    const u = this.unit;
    if (!u || !u.alive) return Promise.resolve();
    if (!['aim', 'target', 'ai'].includes(this.phase)) return Promise.resolve();
    const id = this.weapon;
    const W = WEAPONS[id];
    if (!W || u.ammo[id] === 0 || u.ammo[id] === undefined) return Promise.resolve();
    if (params.yaw !== undefined) u.yaw = params.yaw;
    if (params.pitch !== undefined) u.aimPitch = params.pitch;
    const power = params.power !== undefined ? params.power : this.power;
    const target = params.target || this.targetPoint;
    if ((W.type === 'strike' || W.type === 'jump') && !target) return Promise.resolve();
    if (u.ammo[id] > 0) u.ammo[id]--;
    this.charging = false;
    this.power = 0;
    this.attacked = true;
    this.canSwitch = false;
    this.phase = 'resolve';
    this.resolveT = 0;
    this.settleT = 0;
    this.shot = { weapon: id, enemyDmg: 0, kills: 0, selfDmg: 0, offensive: !['heal', 'jump', 'place'].includes(W.type) };
    this.marker.visible = false;
    this.rangeRing.visible = false;
    this.overview = false;
    this.hud.phase(this);
    this.hud.closeWeaponMenu();
    u.weapon = id;
    this.addLog(`  fire ${id} pow=${(power || 0).toFixed(2)}`);
    if (W.type !== 'heal' && W.type !== 'jump' && W.type !== 'place') this.say(u, 'fire', 0.4);
    switch (W.type) {
      case 'hitscan': this.fireHitscan(u, W, id); break;
      case 'ballistic': this.fireBallistic(u, W, id, power); break;
      case 'melee': this.fireMelee(u, W); break;
      case 'cone': this.fireCone(u, W); break;
      case 'place': this.firePlace(u, W, id); break;
      case 'heal': this.fireHeal(u, W); break;
      case 'strike': this.fireStrike(u, W, id, target); break;
      case 'jump': this.fireJump(u, W, target); break;
      default: break;
    }
    return new Promise((res) => { this._resolveWaiter = res; });
  }

  fireHitscan(u, W, id) {
    this.busy++;
    const shots = W.shots || 1;
    const yaw0 = u.yaw, pitch0 = u.aimPitch;
    for (let s = 0; s < shots; s++) {
      this.after(0.12 + s * (W.interval || 0), () => {
        this.hitscanShot(u, W, id, yaw0, pitch0);
        if (s === shots - 1) this.after(0.35, () => { this.busy--; });
      });
    }
  }

  hitscanShot(u, W, id, yaw, pitch) {
    if (!u.alive) return;
    const origin = u.muzzle(new V3(), yaw, pitch);
    const dir0 = u.aimDir(new V3(), yaw, pitch);
    this.fx.muzzle(origin, dir0);
    this.sfx('shot', id);
    u.squash = Math.max(u.squash, 0.12);
    const pellets = W.pellets || 1;
    for (let k = 0; k < pellets; k++) {
      const sp = (W.spread || 0) * DEG;
      const dir = u.aimDir(new V3(), yaw + gauss() * sp * 0.6, pitch + gauss() * sp * 0.6);
      const hit = this.traceRay(origin, dir, W.range, u);
      this.fx.tracer(origin, hit.point);
      if (hit.unit) {
        let dmg = W.dmg;
        if (hit.dist > W.range * 0.6) dmg *= 0.75;
        if (hit.head) {
          dmg *= 1.6;
          if (W.zoom && !this.demo) this.hud.announce(pick(ANNOUNCE.headshot), '', 1.4);
        }
        this.fx.milk(hit.point);
        if (dmg > 25) {
          hit.unit.impulse(dir.clone().multiplyScalar(3.5));
          hit.unit.lastHitBy = u;
          hit.unit.lastHitTime = this.time;
        }
        this.damageUnit(hit.unit, dmg, u, null, 'shot');
      } else {
        this.fx.impactDust(hit.point, hit.prop ? undefined : this.terrain.colors.dirt);
      }
    }
  }

  traceRay(origin, dir, range, ignore) {
    let best = range;
    let res = { dist: range, point: origin.clone().addScaledVector(dir, range) };
    for (const t of this.units) {
      if (!t.alive || t === ignore) continue;
      for (let part = 0; part < 2; part++) {
        const cy = part ? 1.85 : 0.95, r = part ? 0.34 : 0.56;
        const ox = origin.x - t.pos.x, oy = origin.y - (t.pos.y + cy), oz = origin.z - t.pos.z;
        const b = ox * dir.x + oy * dir.y + oz * dir.z;
        const c = ox * ox + oy * oy + oz * oz - r * r;
        const disc = b * b - c;
        if (disc < 0) continue;
        const tt = -b - Math.sqrt(disc);
        if (tt > 0 && tt < best) {
          best = tt;
          res = { dist: tt, unit: t, head: part === 1, point: origin.clone().addScaledVector(dir, tt) };
        }
      }
    }
    for (const o of this.world.obstacles) {
      if (!o.solid) continue;
      const ox = origin.x - o.x, oz = origin.z - o.z;
      const a = dir.x * dir.x + dir.z * dir.z;
      if (a < 1e-6) continue;
      const rr = (o.r + o.pr) * 0.5;
      const b = 2 * (ox * dir.x + oz * dir.z), c = ox * ox + oz * oz - rr * rr;
      const disc = b * b - 4 * a * c;
      if (disc < 0) continue;
      const tt = (-b - Math.sqrt(disc)) / (2 * a);
      if (tt > 0 && tt < best) {
        const y = origin.y + dir.y * tt;
        if (y > o.y0 && y < o.top) {
          best = tt;
          res = { dist: tt, prop: o, point: origin.clone().addScaledVector(dir, tt) };
        }
      }
    }
    const th = this.terrain.raycast(origin, dir, best, 0.3);
    if (th && th.t < best) res = { dist: th.t, terrain: true, point: th.point };
    return res;
  }

  fireBallistic(u, W, id, power) {
    const p = clamp(power, 0.06, 1);
    const dir = u.aimDir();
    const origin = u.muzzle();
    const vel = dir.clone().multiplyScalar(W.speed * p);
    if (W.throw) {
      u.throwAnim = 1;
      this.sfx('throwSnd');
      u.model.ball.visible = false;
    } else if (id === 'panzerfaust') {
      this.sfx('whoosh');
      this.fx.muzzle(origin, dir);
    } else {
      this.sfx('thump');
      this.fx.muzzle(origin, dir);
    }
    this.projectiles.push(new Projectile(this, W, id, origin, vel, u, { scale: id === 'heiligekuh' ? 1.5 : 1 }));
  }

  fireMelee(u, W) {
    this.busy++;
    u.lunge = 1;
    const f = u.forward();
    this.after(0.18, () => {
      let hitAny = false;
      for (const t of this.units) {
        if (!t.alive || t === u) continue;
        const dx = t.pos.x - u.pos.x, dz = t.pos.z - u.pos.z;
        const d = Math.hypot(dx, dz);
        if (d > W.range || Math.abs(t.pos.y - u.pos.y) > 1.6) continue;
        const cos = (dx * f.x + dz * f.z) / (d || 1);
        if (cos < Math.cos(60 * DEG)) continue;
        hitAny = true;
        const dmg = u.isStier ? W.dmgStier : W.dmg;
        const k = W.knock * (u.isStier ? 1.3 : 1);
        t.impulse(new V3(f.x * k, 4.5, f.z * k));
        t.lastHitBy = u;
        t.lastHitTime = this.time;
        this.damageUnit(t, dmg, u, null, 'melee');
        this.fx.stars(t.getHead());
      }
      this.sfx(hitAny ? 'hit' : 'throwSnd');
      if (hitAny) this.sfx('moo', u.isStier ? 0.7 : 1, 0.4);
      this.after(0.45, () => { this.busy--; });
    });
  }

  fireCone(u, W) {
    this.busy++;
    this.sfx('flame');
    const origin = u.muzzle();
    const dir = u.aimDir();
    let t = 0;
    const tick = () => {
      this.fx.flame(origin, dir, W.range);
      t += 0.05;
      if (t < 0.9) this.after(0.05, tick);
    };
    tick();
    this.after(0.35, () => {
      for (const tu of this.units) {
        if (!tu.alive || tu === u) continue;
        const c = tu.getCenter().clone();
        const v = c.clone().sub(origin);
        const d = v.length();
        if (d > W.range + 0.6) continue;
        if (v.angleTo(dir) > W.angle * DEG) continue;
        if (!this.terrain.lineOfSight(origin, c, 0)) continue;
        tu.burnT = 2.2;
        tu.impulse(dir.clone().multiplyScalar(2.5).setY(2.5));
        tu.lastHitBy = u;
        tu.lastHitTime = this.time;
        this.damageUnit(tu, W.dmg * (1 - (0.4 * d) / W.range), u, null, 'fire');
      }
      for (let s = 2; s <= W.range; s += 2) {
        const p = origin.clone().addScaledVector(dir, s);
        this.world.destroyInRadius(p.x, p.y, p.z, 1.3, this.fx);
      }
      const mid = origin.clone().addScaledVector(dir, W.range * 0.6);
      this.terrain.scorchAt(mid.x, mid.z, W.range * 0.5, 0.6);
    });
    this.after(1.15, () => { this.busy--; });
  }

  firePlace(u, W, id) {
    const f = u.forward();
    const p = new V3(u.pos.x + f.x * 1.1, 0, u.pos.z + f.z * 1.1);
    p.y = this.terrain.heightAt(p.x, p.z);
    u.lunge = 0.5;
    this.sfx('click');
    if (p.y < this.terrain.waterLevel) {
      this.fx.splash(new V3(p.x, this.terrain.waterLevel, p.z), 0.5);
      this.sfx('splash');
      return;
    }
    if (id === 'mine') {
      this.addMine(p, u, false);
      this.hud.toast('Kuhfladen-Mine liegt. Scharf ab der nächsten Runde.');
    } else {
      const mesh = new THREE.Mesh(itemGeometry('tnt'), materials().item);
      mesh.position.copy(p);
      mesh.rotation.y = u.yaw;
      mesh.castShadow = true;
      this.scene.add(mesh);
      this.tnts.push({ pos: p, mesh, t: W.fuse, owner: u, W });
      // Rückzug erlauben
      if (this.team.human) {
        this.phase = 'retreat';
        u.stamina = Math.max(u.stamina, 40);
        this.hud.phase(this);
        this.hud.toast('Lauf, Forrest, lauf!');
      }
    }
  }

  heal(unit, amt) {
    const before = unit.hp;
    unit.hp = Math.min(unit.hpMax, unit.hp + amt);
    const got = Math.round(unit.hp - before);
    this.fx.heal(unit.pos);
    if (got > 0) this.hud.floatText(unit.getHead().clone(), `+${got}`, '#5dff6a');
    this.hud.updateTeams(this);
  }

  fireHeal(u, W) {
    if (W.area) {
      this.fx.healRing(u.pos, W.area);
      for (const t of this.units) {
        if (t.alive && t.team === u.team && t.pos.distanceTo(u.pos) <= W.area) this.heal(t, W.amount);
      }
    } else {
      this.heal(u, W.amount);
    }
    this.sfx('heal');
    this.say(u, 'heal', 0.9);
  }

  fireStrike(u, W, id, target) {
    this.busy++;
    if (id === 'haubitze') {
      if (!this.demo) this.hud.announce('Haubitzenfeuer!', 'Kopf einziehen!', 1.3);
      for (let i = 0; i < W.shells; i++) {
        this.after(0.9 + i * 0.45, () => {
          const sx = target.x + this.rng.range(-W.scatter, W.scatter);
          const sz = target.z + this.rng.range(-W.scatter, W.scatter);
          const sW = { impact: true, radius: W.radius, dmg: W.dmg, wind: 0.1, mesh: 'shell' };
          this.projectiles.push(new Projectile(this, sW, 'shell', new V3(sx - 6, target.y + 55, sz), new V3(4, -40, 0), u, { mesh: 'shell', align: true }));
          this.sfx('whoosh');
          if (i === W.shells - 1) this.after(0.3, () => { this.busy--; });
        });
      }
      return;
    }
    // Abfangjäger
    const dud = this.rng.chance(W.dudChance);
    const yaw = this.cam.yaw + Math.PI;
    const fwd = new V3(Math.sin(yaw), 0, Math.cos(yaw));
    const alt = target.y + 26;
    const start = target.clone().addScaledVector(fwd, -130);
    start.y = alt;
    const mesh = new THREE.Mesh(itemGeometry('plane'), materials().item);
    mesh.castShadow = true;
    mesh.position.copy(start);
    mesh.lookAt(start.clone().add(fwd));
    this.scene.add(mesh);
    const speed = 62;
    const bombs = [];
    if (!dud) {
      const vf = 9, vy0 = -5;
      const H = alt - target.y;
      const tf = (-vy0 * -1 + Math.sqrt(vy0 * vy0 + 2 * GRAVITY * H)) / GRAVITY;
      const drift = vf * tf;
      for (let i = 0; i < W.bombs; i++) {
        const off = (i - (W.bombs - 1) / 2) * W.spacing;
        bombs.push({ at: 130 + off - drift, done: false });
      }
    }
    this.planes.push({ mesh, start, fwd, speed, t: 0, dur: 260 / speed, bombs, W, owner: u, dud });
    this.sfx('plane');
    this.busy--;
  }

  fireJump(u, W, target) {
    const d = dist2D(target.x, target.z, u.pos.x, u.pos.z);
    const dur = clamp(1.4 + d / 20, 1.4, 3.2);
    u.yaw = Math.atan2(target.x - u.pos.x, target.z - u.pos.z);
    u.startFlight(new V3(target.x, this.terrain.heightAt(target.x, target.z), target.z), dur);
    this.sfx('jump');
  }

  // --- Treffer & Schaden -------------------------------------------------
  onProjectileHit(p, r) {
    const W = p.W;
    const pos = p.pos.clone();
    if (r.type === 'gone' || r.type === 'timeout') return;
    if (r.type === 'water') {
      this.fx.splash(new V3(pos.x, this.terrain.waterLevel, pos.z), W.radius > 5 ? 2 : 1);
      this.sfx('splash');
      this.lastEvent = { pos: new V3(pos.x, this.terrain.waterLevel, pos.z), t: this.time };
      return;
    }
    if (W.gas) {
      this.explode(pos, W.radius, W.dmg, p.owner, { craterMul: 0.25, knock: 3 });
      const g = { pos: new V3(pos.x, this.terrain.heightAt(pos.x, pos.z) + 0.7, pos.z), radius: W.gas.radius, dmg: W.gas.dmg, turns: W.gas.turns, owner: p.owner, emit: 0 };
      this.gases.push(g);
      this.fx.gasBurst(g.pos, g.radius);
      for (const u of this.units) {
        if (u.alive && u.getCenter().distanceTo(g.pos) < g.radius) this.damageUnit(u, W.gas.dmg, p.owner, null, 'gas');
      }
      return;
    }
    this.explode(pos, W.radius, W.dmg, p.owner);
    if (W.cluster) {
      const c = W.cluster;
      for (let i = 0; i < c.n; i++) {
        const a = (i / c.n) * Math.PI * 2 + Math.random();
        const sp = 3 + Math.random() * 2.5;
        const cW = { fuse: 1.0 + i * 0.18, bounce: 0.3, radius: c.radius, dmg: c.dmg, wind: 0.2, mesh: 'granate' };
        this.projectiles.push(new Projectile(this, cW, 'cluster', new V3(pos.x, pos.y + 0.6, pos.z), new V3(Math.cos(a) * sp, 6 + Math.random() * 3, Math.sin(a) * sp), null, { scale: 0.6 }));
      }
    }
  }

  explode(p, radius, dmg, owner, opts = {}) {
    const T = this.terrain;
    const ground = T.heightAt(p.x, p.z);
    this.fx.explosion(p, radius, T.colors.dirt);
    this.world.flash.position.set(p.x, p.y + 1.5, p.z);
    this.world.flash.intensity = 30 + radius * 12;
    const d = this.cam.cam.position.distanceTo(p);
    this.cam.shake(clamp(radius * 0.22 * (1 - d / 90), 0, 1.2));
    this.sfx('explosion', radius / 5, clamp(1 - d / 160, 0.15, 1));
    if (!opts.noCrater && p.y - ground < radius * 0.6) {
      T.deform(p.x, p.z, radius * 0.72, radius * 0.3 * (opts.craterMul || 1));
      this.world.settleProps(p.x, p.z, radius);
    }
    this.world.destroyInRadius(p.x, p.y, p.z, radius * 0.75, this.fx);
    for (const u of this.units) {
      if (!u.alive) continue;
      const c = u.getCenter();
      const dist = c.distanceTo(p);
      if (dist < radius) {
        const f = 1 - dist / radius;
        const amount = dmg * Math.pow(f, 0.65);
        const dir = c.clone().sub(p);
        dir.y = Math.max(dir.y, 0) + 0.9;
        dir.normalize();
        const k = (opts.knock !== undefined ? opts.knock : dmg * 0.2) * (0.35 + 0.65 * f);
        u.impulse(dir.multiplyScalar(k));
        u.lastHitBy = owner;
        u.lastHitTime = this.time;
        this.damageUnit(u, amount, owner, null, 'explosion');
      }
    }
    for (const m of this.mines) {
      if (!m.dead && m.trig < 0 && m.pos.distanceTo(p) < radius) m.trig = 0.15 + Math.random() * 0.25;
    }
    for (const c of this.crates) {
      if (!c.dead && c.landed && c.pos.distanceTo(p) < radius) this.destroyCrate(c);
    }
    this.lastEvent = { pos: p.clone(), t: this.time };
  }

  damageUnit(u, amount, src, knock, kind) {
    if (!u.alive) return;
    amount = Math.round(amount);
    if (amount <= 0) return;
    u.hp -= amount;
    u.stats.dmgTaken += amount;
    u.squash = 1;
    this.hud.floatText(u.getHead().clone(), `-${amount}`, kind === 'gas' ? '#c6e05a' : '#ff5a4a');
    if (kind !== 'gas' && kind !== 'fall') this.fx.milk(u.getCenter());
    this.sfx('hit');
    const sh = this.shot;
    if (src && src.team !== u.team) {
      src.stats.dmg += amount;
      if (sh && src === this.unit) sh.enemyDmg += amount;
    } else if (src && src === u && sh) sh.selfDmg += amount;
    if (src) u.lastHitBy = src;
    if (u.hp <= 0) {
      this.kill(u, src, kind);
    } else if (u.hp > 0) {
      if (src === u) this.say(u, 'selfHit', 0.8);
      else if (src && src.team === u.team) this.say(u, 'friendly', 0.8);
      else this.say(u, 'hit', 0.45);
    }
    this.hud.updateTeams(this);
  }

  kill(u, src, kind) {
    if (!u.alive) return;
    u.hp = 0;
    u.alive = false;
    u.aiming = false;
    u.moving = false;
    u.deathKind = kind;
    u.deathT = 0;
    u.model.weapon.visible = false;
    u.model.chute.visible = false;
    u.scripted = null;
    if (src && src.team !== u.team) {
      src.stats.kills++;
      if (this.shot && src === this.unit) this.shot.kills++;
      if (src.alive) this.after(0.9, () => this.say(src, 'kill', 0.7));
    } else if (src === u && !this.demo) {
      this.hud.announce(pick(ANNOUNCE.selfKill), u.name, 1.4);
    }
    this.say(u, kind === 'drown' ? 'drown' : 'death');
    this.sfx('moo', u.isStier ? 0.55 : 0.75, 0.45);
    this.hud.updateTeams(this);
    this.hud.unitDied(u);
    if (u === this.unit && ['move', 'aim', 'target', 'retreat'].includes(this.phase)) {
      this.phase = 'resolve';
      this.resolveT = 0;
      this.shot = this.shot || { weapon: null, enemyDmg: 0, kills: 0, selfDmg: 0, offensive: false };
      this.hud.phase(this);
    }
  }

  onDrown(u) {
    if (!u.alive) return;
    this.fx.splash(new V3(u.pos.x, this.terrain.waterLevel, u.pos.z), 1.4);
    this.sfx('splash');
    const src = u.lastHitBy && this.time - u.lastHitTime < 12 ? u.lastHitBy : null;
    if (!this.demo) this.hud.announce(pick(ANNOUNCE.drown), u.name, 1.3);
    this.kill(u, src, 'drown');
    u.vel.set(0, 0, 0);
  }

  // --- Kisten ---------------------------------------------------------------
  spawnCrate() {
    let s = null;
    for (let i = 0; i < 10 && !s; i++) {
      const c = this.world.findSpot(this.rng, { maxSlope: 0.5, minDist: 1, minH: 1, area: 0.75 });
      if (c && !this.units.some((u) => u.alive && dist2D(u.pos.x, u.pos.z, c.x, c.z) < 3)) s = c;
    }
    if (!s) return;
    const r = this.rng.next();
    const type = r < 0.42 ? 'jause' : r < 0.9 ? 'waffen' : 'falle';
    const group = new THREE.Group();
    const box = new THREE.Mesh(itemGeometry(type === 'jause' ? 'crateHealth' : 'crate'), materials().item);
    box.castShadow = true;
    const chute = new THREE.Mesh(itemGeometry('chute'), materials().item);
    group.add(box, chute);
    const pos = new V3(s.x, s.y + 24, s.z);
    group.position.copy(pos);
    this.scene.add(group);
    this.crates.push({ pos, group, chute, type, landed: false, dead: false, sway: Math.random() * 6 });
    if (!this.demo && this.team && this.team.human) this.hud.toast('A Packerl fällt vom Himmel!');
  }

  destroyCrate(c) {
    if (c.dead) return;
    c.dead = true;
    this.scene.remove(c.group);
    this.fx.spawnDebris(c.pos.x, c.pos.y, c.pos.z, new THREE.Color('#7a5a3a'), 6, 4);
    if (c.type === 'falle') this.after(0.05, () => this.explode(c.pos.clone().setY(c.pos.y + 0.3), 3.6, 35, null));
  }

  pickupCrate(u, c) {
    c.dead = true;
    this.scene.remove(c.group);
    if (c.type === 'falle') {
      if (!this.demo) this.hud.announce('Überraschung!', 'Da Bauer hat a Falle gstellt.', 1.4);
      this.explode(c.pos.clone().setY(c.pos.y + 0.3), 3.6, 35, null);
      return;
    }
    this.sfx('pickup');
    if (c.type === 'jause') {
      this.heal(u, 30);
      this.say(u, 'jauseCrate', 0.9);
      return;
    }
    let id = this.rng.pick(CRATE_WEAPONS)[0];
    if (id === 'heiligekuh' && this.rng.next() < 0.6) id = 'granate';
    const cnt = CRATE_WEAPONS.find((x) => x[0] === id)[1];
    if (u.ammo[id] !== -1) u.ammo[id] = Math.max(0, u.ammo[id] || 0) + cnt;
    this.hud.floatText(u.getHead().clone(), `+${cnt} ${WEAPONS[id].name}`, '#ffd54f');
    this.say(u, 'crate', 0.8);
  }

  // --- Update ---------------------------------------------------------------
  update(dt) {
    if (this.disposed) return;
    if (this.paused) {
      this.cam.update(dt);
      return;
    }
    if (this.frameWaiters.length) {
      const w = this.frameWaiters;
      this.frameWaiters = [];
      w.forEach((r) => r(dt));
    }
    this.time += dt;
    const list = this.timers;
    this.timers = [];
    const due = [];
    for (const t of list) {
      t.t -= dt;
      if (t.t <= 0) due.push(t); else this.timers.push(t);
    }
    due.forEach((t) => t.fn());

    this.env.waterLevel = this.terrain.waterLevel;
    this.envCalm.waterLevel = this.terrain.waterLevel;
    this.world.update(dt);
    if (this.waterAnim) {
      const a = this.waterAnim;
      a.t += dt / 1.6;
      const k = Math.min(1, a.t);
      this.world.setWaterLevel(a.from + (a.to - a.from) * k);
      if (k >= 1) {
        this.waterAnim = null;
        this.terrain.refreshColors();
      }
    }
    this.updateControl(dt);
    for (const u of this.units) u.update(dt);
    for (const p of this.projectiles) p.update(dt, this.env);
    if (this.projectiles.some((p) => p.dead)) {
      this.projectiles = this.projectiles.filter((p) => {
        if (p.dead) p.remove();
        return !p.dead;
      });
    }
    this.updateItems(dt);
    this.fx.update(dt);
    this.updatePhase(dt);
    this.updateCamera(dt);
    this.updateMarkers(dt);
    this.hud.frame(this, dt);
  }

  updateControl(dt) {
    const u = this.unit;
    if (!u || !u.alive) return;
    if (!this.team || !this.team.human) return;
    u.moving = false;
    if (!['move', 'aim', 'target', 'retreat'].includes(this.phase)) return;
    const inp = this.app.input.axis();
    if ((this.phase === 'move' || this.phase === 'retreat') && !this.overview) {
      if (inp.x) u.yaw -= inp.x * 2.6 * dt;
      if (inp.y) this.walk(u, inp.y, dt);
    } else if (this.phase === 'aim') {
      const W = WEAPONS[this.weapon];
      const fine = inp.fine ? 0.25 : 1;
      if (inp.x) u.yaw -= inp.x * 1.2 * dt * fine;
      if (inp.y) u.aimPitch = clamp(u.aimPitch + inp.y * 0.8 * dt * fine, this.pitchMin(W), this.pitchMax(W));
      if (this.charging) this.power = Math.min(1, this.power + dt / 1.6);
    }
    if (this.phase !== 'retreat') {
      this.turnTimer -= dt;
      if (this.turnTimer <= this.timerWarn && this.turnTimer > 0) {
        this.timerWarn--;
        this.sfx('beep');
      }
      if (this.turnTimer <= 0) {
        this.turnTimer = 0;
        if (this.charging) this.fire();
        else {
          this.say(u, 'timeout');
          this.endTurn();
        }
      }
    }
  }

  blocked(u, cat) {
    if (this.time - this.saidBlock > 3.5) {
      this.saidBlock = this.time;
      this.say(u, cat, 0.9);
    }
  }

  walk(u, f, dt) {
    if (!u.onGround || u.scripted) return false;
    if (u.stamina <= 0) {
      if (!this.tiredSaid) { this.tiredSaid = true; this.say(u, 'tired'); }
      return false;
    }
    const sp = WALK_SPEED * (f < 0 ? 0.55 : 1) * Math.abs(f);
    const dir = f < 0 ? -1 : 1;
    const dx = Math.sin(u.yaw) * sp * dt * dir, dz = Math.cos(u.yaw) * sp * dt * dir;
    const nx = u.pos.x + dx, nz = u.pos.z + dz;
    const nh = this.terrain.heightAt(nx, nz);
    const len = Math.hypot(dx, dz);
    if (nh < this.terrain.waterLevel + 0.1) { this.blocked(u, 'shore'); return false; }
    if ((nh - u.pos.y) / Math.max(len, 1e-4) > 1.3) { this.blocked(u, 'steep'); return false; }
    const ox = u.pos.x, oz = u.pos.z;
    u.pos.x = nx; u.pos.z = nz;
    this.world.collideCircle(u.pos, 0.45);
    for (const o of this.units) {
      if (o === u || !o.alive) continue;
      const ddx = u.pos.x - o.pos.x, ddz = u.pos.z - o.pos.z;
      const d = Math.hypot(ddx, ddz);
      if (d < 0.9 && d > 1e-4 && Math.abs(u.pos.y - o.pos.y) < 1.5) {
        u.pos.x = o.pos.x + (ddx / d) * 0.9;
        u.pos.z = o.pos.z + (ddz / d) * 0.9;
      }
    }
    if (this.terrain.heightAt(u.pos.x, u.pos.z) < this.terrain.waterLevel + 0.1) {
      u.pos.x = ox; u.pos.z = oz;
      return false;
    }
    const moved = Math.hypot(u.pos.x - ox, u.pos.z - oz);
    u.stamina = Math.max(0, u.stamina - moved * STAMINA_PER_M);
    this.moved += moved;
    if (this.moved > 0.4) this.canSwitch = false;
    u.moving = moved > 0.0005;
    return u.moving;
  }

  updateItems(dt) {
    const wl = this.terrain.waterLevel;
    // Minen
    for (const m of this.mines) {
      if (m.dead) continue;
      m.pos.y = this.terrain.heightAt(m.pos.x, m.pos.z);
      m.mesh.position.copy(m.pos);
      if (m.pos.y < wl - 0.1) {
        m.dead = true;
        this.scene.remove(m.mesh);
        continue;
      }
      if (m.trig < 0 && m.armed) {
        for (const u of this.units) {
          if (u.alive && dist2D(u.pos.x, u.pos.z, m.pos.x, m.pos.z) < 1.1 && Math.abs(u.pos.y - m.pos.y) < 1.3) {
            m.trig = 1.0;
            this.hud.floatText(m.pos.clone().setY(m.pos.y + 0.6), 'Pieps!', '#ffffff');
            break;
          }
        }
      }
      if (m.trig > 0) {
        m.trig -= dt;
        m.mesh.visible = Math.floor(m.trig * 10) % 2 === 0;
        if (Math.floor(m.trig * 10) % 3 === 0) this.sfx('beep');
        if (m.trig <= 0) {
          m.dead = true;
          this.scene.remove(m.mesh);
          this.explode(m.pos.clone().setY(m.pos.y + 0.25), m.W.radius, m.W.dmg, m.owner);
        }
      }
    }
    if (this.mines.some((m) => m.dead)) this.mines = this.mines.filter((m) => !m.dead);
    // Sprengladungen
    for (const t of this.tnts) {
      t.t -= dt;
      t.pos.y = this.terrain.heightAt(t.pos.x, t.pos.z);
      t.mesh.position.copy(t.pos);
      if (Math.random() < 0.6) this.fx.sparkle(new V3(t.pos.x, t.pos.y + 0.45, t.pos.z));
      if (t.t <= 0) {
        t.dead = true;
        this.scene.remove(t.mesh);
        this.explode(t.pos.clone().setY(t.pos.y + 0.3), t.W.radius, t.W.dmg, t.owner);
      }
    }
    if (this.tnts.some((t) => t.dead)) this.tnts = this.tnts.filter((t) => !t.dead);
    // Kisten
    for (const c of this.crates) {
      if (c.dead) continue;
      const g = this.terrain.heightAt(c.pos.x, c.pos.z);
      if (!c.landed) {
        c.pos.y -= 3.6 * dt;
        c.sway += dt;
        c.group.rotation.z = Math.sin(c.sway * 1.5) * 0.12;
        if (c.pos.y <= g) {
          c.pos.y = g;
          c.landed = true;
          c.chute.visible = false;
          c.group.rotation.z = 0;
          this.fx.impactDust(c.pos);
        }
      } else {
        c.pos.y = g;
        if (g < wl - 0.2) { c.dead = true; this.scene.remove(c.group); continue; }
        for (const u of this.units) {
          if (u.alive && dist2D(u.pos.x, u.pos.z, c.pos.x, c.pos.z) < 1.25 && Math.abs(u.pos.y - c.pos.y) < 1.6) {
            this.pickupCrate(u, c);
            break;
          }
        }
      }
      c.group.position.copy(c.pos);
    }
    if (this.crates.some((c) => c.dead)) this.crates = this.crates.filter((c) => !c.dead);
    // Gülle
    for (const g of this.gases) {
      g.emit -= dt;
      if (g.emit <= 0) {
        g.emit = this.app.quality === 'low' ? 0.12 : 0.05;
        this.fx.gas(g.pos, g.radius);
      }
    }
    // Flugzeuge
    for (const pl of this.planes) {
      pl.t += dt;
      const dist = pl.t * pl.speed;
      pl.mesh.position.copy(pl.start).addScaledVector(pl.fwd, dist);
      for (const b of pl.bombs) {
        if (!b.done && dist >= b.at) {
          b.done = true;
          const bW = { impact: true, radius: pl.W.radius, dmg: pl.W.dmg, wind: 0.1, mesh: 'bomb' };
          const v = pl.fwd.clone().multiplyScalar(9);
          v.y = -5;
          this.projectiles.push(new Projectile(this, bW, 'bomb', pl.mesh.position.clone().setY(pl.mesh.position.y - 1), v, pl.owner, { mesh: 'bomb', align: true }));
        }
      }
      if (pl.dud && !pl.dudSaid && dist > 130) {
        pl.dudSaid = true;
        if (!this.demo) this.hud.announce('Nix is!', line('dud'), 2);
      }
      if (pl.t >= pl.dur) {
        pl.done = true;
        this.scene.remove(pl.mesh);
      }
    }
    if (this.planes.some((p) => p.done)) this.planes = this.planes.filter((p) => !p.done);
  }

  isSettled() {
    if (this.projectiles.length || this.tnts.length || this.planes.length || this.busy > 0 || this.waterAnim) return false;
    if (this.mines.some((m) => m.trig > 0)) return false;
    for (const u of this.units) {
      if (u.alive) {
        if (!u.onGround || u.scripted || u.slide.lengthSq() > 0.05) return false;
      } else if (u.deathKind === 'drown') {
        if (u.deathT < 1.2) return false;
      } else if (u.deathT < 1.75) return false;
    }
    return true;
  }

  updatePhase(dt) {
    if (this.phase === 'resolve' || this.phase === 'retreat') {
      this.resolveT += dt;
      if (this.isSettled()) {
        this.settleT += dt;
        if (this.settleT > 0.6) this.afterResolve();
      } else this.settleT = 0;
      if (this.resolveT > 25) this.afterResolve();
    } else if (this.settleCb) {
      if (this.isSettled()) {
        this.settleT2 += dt;
        if (this.settleT2 > 0.5) {
          const cb = this.settleCb;
          this.settleCb = null;
          cb();
        }
      } else this.settleT2 = 0;
    }
  }

  afterResolve() {
    if (this.phase !== 'resolve' && this.phase !== 'retreat') return;
    const u = this.unit;
    const sh = this.shot || {};
    const W = WEAPONS[sh.weapon];
    if (u) u.aiming = false;
    this.addLog(`  done dmg=${sh.enemyDmg || 0} kills=${sh.kills || 0} self=${sh.selfDmg || 0}`);
    if (!this.demo) {
      if (sh.kills >= 3) this.hud.announce(pick(ANNOUNCE.multiKill), `${sh.kills} auf an Streich!`, 1.8);
      else if (sh.kills === 2) this.hud.announce(pick(ANNOUNCE.doubleKill), '', 1.6);
      else if (sh.enemyDmg >= 70) this.hud.announce(pick(ANNOUNCE.bigDamage), `${sh.enemyDmg} Schaden`, 1.3);
    }
    if (sh.offensive && sh.enemyDmg === 0 && u && u.alive && !sh.selfDmg) this.say(u, 'miss', 0.55);
    if (this.checkVictory()) return;
    if (this.team && !this.team.human) {
      this.phase = 'ai';
      const r = this._resolveWaiter;
      this._resolveWaiter = null;
      if (r) r();
      return;
    }
    if (W && W.endsTurn === false && u && u.alive) {
      this.phase = 'move';
      u.setHeld(this.weapon = u.defaultWeapon());
      this.hud.phase(this);
      return;
    }
    this.endTurn();
  }

  // Kamera abhängig vom Geschehen
  wantCam(mode, obj, opts) {
    const c = this.cam;
    if (c.mode !== mode || c.obj !== obj || JSON.stringify(c.opts || {}) !== JSON.stringify(opts || {})) c.setMode(mode, obj, opts);
  }

  updateCamera(dt) {
    const c = this.cam;
    const u = this.unit;
    const ph = this.phase;
    if (ph === 'gameover' || ph === 'intro') {
      // Orbit bleibt
    } else if (this.overview || ph === 'target') {
      if (c.mode !== 'overview') {
        c.setMode('overview', null, { keepTarget: true });
        if (u) c.goal.copy(u.pos);
      }
    } else if (u && u.alive && u.aiming && (ph === 'aim' || ph === 'ai')) {
      const W = WEAPONS[this.weapon];
      this.wantCam('aim', u, { ballistic: W.type === 'ballistic', sniper: !!W.zoom && ph === 'aim' });
    } else if (ph === 'resolve' || ph === 'turnEnd' || ph === 'retreat') {
      const p = this.projectiles[0];
      const flyer = this.units.find((x) => x.alive && (!x.onGround || x.scripted) && x !== u);
      if (p) this.wantCam('track', p);
      else if (this.planes[0]) this.wantCam('track', { pos: this.planes[0].mesh.position });
      else if (this.lastEvent && this.time - this.lastEvent.t < 1.6) this.wantCam('point', this.lastEvent.pos, { dist: 17 });
      else if (flyer) this.wantCam('track', flyer);
      else if (u && (u.alive || u.deathT < 2)) this.wantCam(ph === 'retreat' ? 'follow' : 'follow', u);
    } else if (u) {
      this.wantCam('follow', u);
    }
    c.update(dt);
  }

  updateMarkers(dt) {
    const u = this.unit;
    const ph = this.phase;
    const active = u && u.alive && ['move', 'aim', 'target', 'ai', 'retreat'].includes(ph);
    this.arrow.visible = !!active && ph !== 'aim' && !u.aiming && !this.demo;
    if (this.arrow.visible) {
      this.arrow.position.set(u.pos.x, u.pos.y + 3.05 + Math.sin(this.time * 4) * 0.1, u.pos.z);
      this.arrow.rotation.y += dt * 2.5;
    }
    // Flugbahnvorschau
    let shown = 0;
    const W = this.weapon ? WEAPONS[this.weapon] : null;
    const help = this.settings.aimHelp || 'short';
    if (active && ph === 'aim' && W && W.type === 'ballistic' && help !== 'off' && this.team.human) {
      const pw = this.charging ? Math.max(0.06, this.power) : 0.7;
      const vel = u.aimDir().multiplyScalar(W.speed * pw);
      const path = [];
      const env = help === 'full' ? this.env : this.envCalm;
      env.owner = u;
      simulate(W, u.muzzle(), vel, env, help === 'full' ? 7 : 0.55, path);
      env.owner = null;
      const n = Math.min(150, path.length / 3);
      for (let i = 0; i < n * 3; i++) this.previewArr[i] = path[i];
      shown = n;
      this.previewGeo.attributes.position.needsUpdate = true;
    }
    this.previewGeo.setDrawRange(0, shown);
    this.preview.visible = shown > 0;
    // Laser für direkte Waffen
    const laserOn = active && ph === 'aim' && W && (W.type === 'hitscan' || W.type === 'cone') && this.team.human && !W.pellets;
    this.laser.visible = !!laserOn;
    if (laserOn) {
      const o = u.muzzle();
      const d = u.aimDir();
      const hit = this.traceRay(o, d, W.type === 'cone' ? W.range : W.range, u);
      const pos = this.laserGeo.attributes.position;
      pos.setXYZ(0, o.x, o.y, o.z);
      pos.setXYZ(1, hit.point.x, hit.point.y, hit.point.z);
      pos.needsUpdate = true;
      this.laser.material.color.set(hit.unit ? (hit.unit.team === u.team ? '#ffd54f' : '#ff2a2a') : '#ffffff');
    }
    // Zielmarker
    this.marker.visible = !!(active && ph === 'target' && this.targetPoint);
    if (this.marker.visible) {
      this.marker.position.copy(this.targetPoint).setY(this.targetPoint.y + 0.2);
      const r = W && W.type === 'strike' ? (W.scatter || 6) + 1 : 1.2;
      this.marker.scale.setScalar(r * (1 + Math.sin(this.time * 6) * 0.06));
      this.marker.rotation.y += dt;
    }
    this.rangeRing.visible = !!(active && ph === 'target' && W && W.type === 'jump');
    if (this.rangeRing.visible) {
      this.rangeRing.position.set(u.pos.x, u.pos.y + 0.3, u.pos.z);
      this.rangeRing.scale.setScalar(W.range);
    }
  }

  // --- Hilfen für KI und HUD ------------------------------------------------
  enemiesOf(team) { return this.units.filter((u) => u.alive && u.team !== team); }

  dispose() {
    this.disposed = true;
    this.timers = [];
    this.frameWaiters = [];
    for (const u of this.units) u.dispose();
    for (const p of this.projectiles) p.remove();
    this.world.dispose();
    this.scene.clear();
  }
}
