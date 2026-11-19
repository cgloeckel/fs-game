// Einstiegspunkt: Renderer, Hauptschleife, Bildschirme, Qualität.
import * as THREE from 'three';
import { Game } from './game.js';
import { HUD } from './hud.js';
import { Menus } from './menus.js';
import { Input } from './input.js';
import { audio } from './audio.js';
import { DEFAULT_SETTINGS, THEME_ORDER, FACTIONS } from './config.js';
import { applyResults, soldierAtTier } from './campaign.js';
import { RNG } from './rng.js';
import { isMobile, el } from './util.js';

const SETTINGS_KEY = 'rindsviecher_settings';

class App {
  constructor() {
    this.canvas = document.getElementById('c');
    this.uiRoot = document.getElementById('ui');
    this.params = new URLSearchParams(location.search);
    this.settings = { ...DEFAULT_SETTINGS };
    try { Object.assign(this.settings, JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{}')); } catch (e) { /* egal */ }
    if (!this.settings.v || this.settings.v < 2) {
      // Version 2: volle Zielhilfe als Standard
      this.settings.aimHelp = 'full';
      this.settings.v = 2;
      try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(this.settings)); } catch (e) { /* egal */ }
    }
    this.quality = this.resolveQuality();
    this.renderScale = 1;
    this.timeScale = Number(this.params.get('speed')) || 1;
    this.createRenderer();
    this.input = new Input(this.canvas);
    this.hud = new HUD(this, this.uiRoot);
    this.menus = new Menus(this, this.uiRoot);
    this.fpsEl = el('div', 'fps hidden');
    this.uiRoot.appendChild(this.fpsEl);
    this.fpsEl.classList.toggle('hidden', !this.settings.showFps);
    audio.setVolumes(this.settings.sfx, this.settings.music);
    this.bindInput();
    window.addEventListener('resize', () => this.resize());
    window.addEventListener('orientationchange', () => setTimeout(() => this.resize(), 250));
    document.addEventListener('visibilitychange', () => {
      if (document.hidden && this.game && !this.game.demo && !this.game.paused) this.pause();
      if (audio.ctx) { if (document.hidden) audio.ctx.suspend(); else audio.ctx.resume(); }
    });
    const unlock = () => {
      audio.unlock();
      if (!this.game || this.game.demo || this.game.phase === 'gameover') audio.startMusic();
    };
    window.addEventListener('pointerdown', unlock, { passive: true });
    window.addEventListener('touchend', unlock, { passive: true });
    window.addEventListener('click', unlock);
    window.addEventListener('keydown', unlock);
    this.resize();
    this.last = performance.now();
    this.frames = 0;
    this.fpsT = 0;
    this.perfT = 0;
    this.perfFrames = 0;
    requestAnimationFrame((t) => this.loop(t));
    window.__rv = this;
    window.__audio = audio;

    const auto = this.params.get('autotest');
    if (auto) this.startAutotest(auto);
    else {
      this.startDemo();
      this.menus.title();
    }
    const ld = document.getElementById('loading');
    if (ld) ld.classList.add('done');
  }

  resolveQuality() {
    const q = this.params.get('quality') || this.settings.quality;
    if (q && q !== 'auto') return q;
    if (isMobile()) return 'medium';
    return 'high';
  }

  createRenderer() {
    const r = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: this.quality !== 'low',
      powerPreference: 'high-performance',
      preserveDrawingBuffer: !!this.params.get('autotest'),
    });
    r.toneMapping = THREE.ACESFilmicToneMapping;
    r.toneMappingExposure = 1.05;
    r.outputColorSpace = THREE.SRGBColorSpace;
    r.shadowMap.enabled = this.quality !== 'low';
    r.shadowMap.type = THREE.PCFShadowMap;
    this.renderer = r;
  }

  aspect() { return this.width / this.height; }

  pixelRatio() {
    const dpr = window.devicePixelRatio || 1;
    const cap = this.quality === 'low' ? 1.25 : this.quality === 'medium' ? 1.75 : 2;
    return Math.max(0.5, Math.min(dpr, cap) * this.renderScale);
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.renderer.setPixelRatio(this.pixelRatio());
    this.renderer.setSize(this.width, this.height, false);
    this.canvas.style.width = `${this.width}px`;
    this.canvas.style.height = `${this.height}px`;
    if (this.game) this.applyCamera(this.game);
    document.body.classList.toggle('portrait', this.height > this.width && this.width < 700);
  }

  applyCamera(game) {
    game.cam.cam.aspect = this.aspect();
    game.cam.cam.updateProjectionMatrix();
    const v = new THREE.Vector2();
    this.renderer.getDrawingBufferSize(v);
    game.fx.setScale(v.y, game.cam.cam.fov);
  }

  bindInput() {
    const inp = this.input;
    inp.on('drag', (dx, dy, button, type) => { if (this.game && !this.game.demo) this.game.onDrag(dx, dy, button, type); });
    inp.on('zoom', (f) => { if (this.game && !this.game.demo) this.game.cam.zoomInput(f); });
    inp.on('wheel', (dir, e) => { if (this.game && !this.game.demo) this.game.onWheel(dir, e); });
    inp.on('look', (dx, dy) => { if (this.game && !this.game.demo && !this.game.paused) this.game.onLook(dx, dy); });
    inp.on('lockbutton', (b, down) => { if (this.game && !this.game.demo && !this.game.paused) this.game.onLockButton(b, down); });
    inp.on('lockchange', (on) => { if (this.game && !this.game.demo) this.game.onLockChange(on); });
    inp.on('tap', (nx, ny, e) => { if (this.game && !this.game.demo) this.game.onTap(nx, ny, e); });
    inp.on('keydown', (code) => {
      const g = this.game;
      if (!g || g.demo) return;
      // Esc, das gerade nur den Maus-Fang beendet hat, soll ned zusätzlich pausieren
      if (code === 'Escape' && performance.now() - this.input.unlockTime < 450) return;
      if (code === 'KeyP' || (code === 'Escape' && !['aim', 'target'].includes(g.phase))) {
        if (g.paused) { if (!this.menus.root.querySelector('.pause')) return; this.menus.hide(); this.resume(); } else this.pause();
        return;
      }
      if (g.paused) return;
      g.onKey(code, true);
    });
    inp.on('keyup', (code) => { if (this.game && !this.game.demo && !this.game.paused) this.game.onKey(code, false); });
  }

  setSetting(key, v) {
    this.settings[key] = v;
    try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(this.settings)); } catch (e) { /* egal */ }
    if (key === 'sfx' || key === 'music') audio.setVolumes(this.settings.sfx, this.settings.music);
    if (key === 'showFps') this.fpsEl.classList.toggle('hidden', !v);
    if (key === 'quality') this.pendingQuality = true;
  }

  applyQualityChange() {
    if (!this.pendingQuality) return;
    this.pendingQuality = false;
    const q = this.resolveQuality();
    if (q !== this.quality) {
      this.quality = q;
      this.renderer.shadowMap.enabled = q !== 'low';
      this.renderer.shadowMap.type = THREE.PCFShadowMap;
      this.renderScale = 1;
      this.resize();
    }
  }

  // --- Spiele -----------------------------------------------------------------
  disposeGame() {
    if (this.game) {
      this.game.dispose();
      this.game = null;
      this.renderer.renderLists.dispose();
    }
  }

  startDemo() {
    this.disposeGame();
    const rng = new RNG(Date.now() & 0xffff);
    const facs = rng.shuffle([...FACTIONS]).slice(0, 3);
    const used = new Set();
    const teams = facs.map((f) => ({
      faction: f.id, control: 'cpu', difficulty: 'normal',
      soldiers: [0, 1, 2].map(() => soldierAtTier(rng, rng.int(1, 4), used)),
    }));
    const theme = rng.pick(THEME_ORDER);
    const demoQ = this.quality === 'high' ? 'medium' : this.quality;
    const saved = this.quality;
    this.quality = demoQ;
    this.game = new Game(this, { mode: 'demo', theme, seed: rng.int(1, 99999), teams, rules: { wind: 0.4, crates: true, maxRounds: 12 } });
    this.quality = saved;
    this.applyCamera(this.game);
    this.game.start();
  }

  onDemoEnd() {
    if (this.game && this.game.demo) this.startDemo();
  }

  startMatch(opts, meta) {
    this.applyQualityChange();
    this.menus.hide();
    this.hud.hide();
    const ld = document.getElementById('loading');
    if (ld) {
      ld.querySelector('.ld-text').textContent = 'Gelände wird planiert…';
      ld.classList.remove('done');
    }
    setTimeout(() => {
      this.disposeGame();
      this.matchMeta = meta;
      this.game = new Game(this, opts);
      this.applyCamera(this.game);
      this.game.start();
      audio.stopMusic();
      if (ld) ld.classList.add('done');
    }, 60);
  }

  onMatchEnd(result) {
    this.hud.hide();
    audio.startMusic();
    const meta = this.matchMeta || {};
    if (meta.kind === 'campaign' && this.campaign) {
      const report = applyResults(this.campaign, result);
      this.menus.campaignResult(report, result);
    } else {
      this.menus.skirmishResult(result);
    }
    if (this.onAutotestEnd) this.onAutotestEnd(result);
  }

  pause() {
    if (!this.game || this.game.demo || this.game.paused || this.game.phase === 'gameover') return;
    this.game.paused = true;
    this.input.exitLock();
    this.hud.closeWeaponMenu();
    this.menus.pause(this.game);
  }

  resume() {
    if (this.game) this.game.paused = false;
    this.applyQualityChange();
  }

  quitMatch() {
    const meta = this.matchMeta || {};
    this.hud.hide();
    this.startDemo();
    audio.startMusic();
    if (meta.kind === 'campaign' && this.campaign) this.menus.barracks();
    else this.menus.title();
  }

  toggleFullscreen() {
    const d = document;
    if (!d.fullscreenElement) {
      const p = d.documentElement.requestFullscreen ? d.documentElement.requestFullscreen() : null;
      if (p && p.then) {
        p.then(() => {
          if (screen.orientation && screen.orientation.lock && isMobile()) screen.orientation.lock('landscape').catch(() => {});
        }).catch(() => {});
      }
    } else if (d.exitFullscreen) d.exitFullscreen();
  }

  toastMenu(text) {
    const t = el('div', 'menu-toast', text);
    this.uiRoot.appendChild(t);
    setTimeout(() => t.remove(), 2800);
  }

  // --- Automatischer Test (nur mit ?autotest=…) -----------------------------
  startAutotest(kind) {
    const rng = new RNG(Number(this.params.get('seed')) || 42);
    const used = new Set();
    const n = Number(this.params.get('teams')) || 2;
    const theme = this.params.get('theme') || rng.pick(THEME_ORDER);
    const humans = this.params.get('human') === '1';
    const teams = [];
    for (let k = 0; k < n; k++) {
      teams.push({
        faction: FACTIONS[k * 2].id,
        control: (humans && k === 0) || this.params.get('human') === 'all' ? 'human' : 'cpu',
        difficulty: this.params.get('diff') || 'hard',
        soldiers: [0, 1, 2].map(() => soldierAtTier(rng, rng.int(0, 5), used)),
      });
    }
    this.matchMeta = { kind: 'skirmish' };
    this.game = new Game(this, {
      mode: 'skirmish', theme, seed: rng.int(1, 9999), teams, title: `Autotest ${theme}`,
      rules: { wind: 0.5, crates: true, mines: kind === 'mines' ? 10 : 0, risingWater: kind === 'water' ? 0.5 : 0, fog: kind === 'fog', maxRounds: 25, turnTime: 60 },
    });
    this.applyCamera(this.game);
    this.game.start();
  }

  loop(t) {
    requestAnimationFrame((tt) => this.loop(tt));
    let dt = (t - this.last) / 1000;
    this.last = t;
    if (!(dt > 0)) return;
    const realDt = dt;
    dt = Math.min(dt, 0.05) * this.timeScale;
    // FPS & dynamische Auflösung
    this.frames++;
    this.fpsT += realDt;
    if (this.fpsT >= 1) {
      this.fps = this.frames / this.fpsT;
      if (this.settings.showFps) this.fpsEl.textContent = `${Math.round(this.fps)} FPS · ${this.quality} · ${Math.round(this.pixelRatio() * 100) / 100}x`;
      this.frames = 0;
      this.fpsT = 0;
      if (this.game && !document.hidden) {
        this.perfT++;
        if (this.perfT >= 3) {
          this.perfT = 0;
          if (this.fps < 38 && this.renderScale > 0.55) { this.renderScale = Math.max(0.55, this.renderScale - 0.12); this.resize(); }
          else if (this.fps > 57 && this.renderScale < 1) { this.renderScale = Math.min(1, this.renderScale + 0.06); this.resize(); }
        }
      }
    }
    const g = this.game;
    if (g) {
      const steps = this.timeScale > 1 ? Math.ceil(this.timeScale) : 1;
      for (let i = 0; i < steps; i++) g.update(dt / steps);
      if (this.game === g && !g.disposed) this.renderer.render(g.scene, g.cam.cam);
    }
  }
}

function boot() {
  try {
    const test = document.createElement('canvas');
    const ok = !!(test.getContext('webgl2') || test.getContext('webgl'));
    if (!ok) throw new Error('kein WebGL');
    new App();
  } catch (e) {
    console.error(e);
    const ld = document.getElementById('loading');
    if (ld) ld.querySelector('.ld-text').textContent = 'Uje – dein Browser kann ka WebGL. Probier\'s bitte mit an aktuellen Chrome, Safari, Firefox oder Edge.';
  }
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
else boot();
