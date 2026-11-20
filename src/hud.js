// In-Game-Oberfläche: Leisten, Buttons, Sprechblasen, Schadenszahlen, Waffenmenü.
import * as THREE from 'three';
import { WEAPONS, unitTitle, RANKS } from './config.js';
import { el, esc, isTouchDevice, clamp } from './util.js';
import { audio } from './audio.js';

const V = new THREE.Vector3();

export class HUD {
  constructor(app, root) {
    this.app = app;
    this.root = el('div', 'hud hidden');
    root.appendChild(this.root);
    this.touch = isTouchDevice();
    this.root.classList.toggle('touch', this.touch);
    this.root.innerHTML = `
      <div class="hud-top">
        <div class="teams"></div>
        <div class="turninfo">
          <div class="turn-team"></div>
          <div class="turn-row">
            <div class="timer">60</div>
            <div class="wind" title="Wind"><div class="wind-arrow">➤</div><div class="wind-bar"><i></i></div></div>
          </div>
          <div class="round">Runde 1</div>
        </div>
        <div class="hud-tr">
          <button class="hbtn" data-cmd="overview" title="Karte (M)">🗺️</button>
          <button class="hbtn" data-cmd="pause" title="Pause (P)">⏸</button>
        </div>
      </div>
      <div class="scope"></div>
      <div class="labels"></div>
      <div class="xhair"><i></i><span></span></div>
      <div class="unitcard">
        <div class="uc-name"></div>
        <div class="uc-title"></div>
        <div class="uc-bar hp"><i></i><span></span></div>
        <div class="uc-bar st"><i></i><span>Ausdauer</span></div>
      </div>
      <div class="joy"><div class="joy-knob"></div></div>
      <div class="keyhints"></div>
      <div class="actions">
        <button class="abtn weapon" data-cmd="weaponMenu" data-key="Q"><b class="w-icon">🔫</b><span class="w-name"></span><small class="w-ammo"></small></button>
        <button class="abtn sm" data-cmd="switch" data-key="Tab">⇄<span>Wechseln</span></button>
        <button class="abtn sm" data-cmd="jump" data-key="Leer">⤴<span>Hupfen</span></button>
        <button class="abtn sm" data-cmd="endTurn" data-key="X">⏭<span>Ende</span></button>
        <button class="abtn sm" data-cmd="nextTarget" data-key="E">⌖<span>Ziel</span></button>
        <button class="abtn sm" data-cmd="back" data-key="R-Klick">✖<span>Zurück</span></button>
        <button class="abtn big" data-cmd="aim" data-key="F">🎯<span>Zielen</span></button>
        <button class="abtn big fire" data-cmd="fire" data-key="Klick">🔥<span>Feuer</span></button>
      </div>
      <div class="power"><i></i><b class="tick"></b></div>
      <div class="aiminfo"></div>
      <div class="announce"><div class="a-title"></div><div class="a-sub"></div></div>
      <div class="toast"></div>
      <div class="wmenu hidden"><div class="wm-panel"><div class="wm-head"><b>Waffenkammer</b><button class="wm-close">✖</button></div><div class="wm-grid"></div><div class="wm-desc"></div></div></div>
      <div class="overlay tut hidden"></div>
    `;
    this.$ = (s) => this.root.querySelector(s);
    this.labels = this.$('.labels');
    this.tags = new Map();
    this.bubbles = [];
    this.floats = [];
    this.annT = 0;
    this.toastT = 0;
    this.last = {};

    // Buttons
    this.root.querySelectorAll('[data-cmd]').forEach((b) => {
      const cmd = b.dataset.cmd;
      if (cmd === 'fire') {
        const down = (e) => { e.preventDefault(); audio.unlock(); b.classList.add('held'); this.game && this.game.cmd('fireDown'); };
        const up = (e) => { e.preventDefault(); if (!b.classList.contains('held')) return; b.classList.remove('held'); this.game && this.game.cmd('fireUp'); };
        b.addEventListener('pointerdown', down);
        b.addEventListener('pointerup', up);
        b.addEventListener('pointerleave', up);
        b.addEventListener('pointercancel', up);
        return;
      }
      b.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        e.stopPropagation();
        audio.unlock();
        if (cmd === 'pause') { app.pause(); return; }
        if (cmd === 'weaponMenu') { this.toggleWeaponMenu(this.game); return; }
        this.game && this.game.cmd(cmd);
      });
    });
    this.$('.wm-close').addEventListener('click', () => this.closeWeaponMenu());
    this.$('.wmenu').addEventListener('pointerdown', (e) => { if (e.target.classList.contains('wmenu')) this.closeWeaponMenu(); });
    app.input.bindJoystick(this.$('.joy'), this.$('.joy-knob'));
  }

  show() { this.root.classList.remove('hidden'); }
  hide() {
    this.root.classList.add('hidden');
    this.closeWeaponMenu();
    this.$('.tut').classList.add('hidden');
  }

  setupMatch(game) {
    this.game = game;
    this.labels.innerHTML = '';
    this.tags.clear();
    this.bubbles = [];
    this.floats = [];
    this.last = {};
    this.$('.announce').classList.remove('show');
    for (const u of game.units) {
      const t = el('div', 'tag');
      t.innerHTML = `<div class="tag-n">${esc(u.s.name)}</div><div class="tag-hp"><i style="background:${u.team.color}"></i></div>`;
      this.labels.appendChild(t);
      this.tags.set(u, t);
    }
    const teams = this.$('.teams');
    teams.innerHTML = '';
    for (const tm of game.teams) {
      const row = el('div', 'tm');
      row.innerHTML = `<span class="sw" style="background:${tm.color}"></span><span class="tm-n">${esc(tm.short)}${tm.human && game.teams.filter((x) => x.human).length > 1 ? '' : tm.human ? ' ★' : ''}</span><span class="tm-bar"><i style="background:${tm.color}"></i></span>`;
      teams.appendChild(row);
      tm.row = row;
    }
    this.updateTeams(game);
    this.setRound(1);
    this.show();
    this.phase(game);
  }

  setRound(r) { this.$('.round').textContent = `Runde ${r}`; }

  updateTeams(game) {
    for (const tm of game.teams) {
      const max = tm.units.reduce((s, u) => s + u.hpMax, 0);
      const cur = tm.units.reduce((s, u) => s + (u.alive ? Math.max(0, u.hp) : 0), 0);
      if (!tm.row) continue;
      tm.row.querySelector('i').style.width = `${(cur / max) * 100}%`;
      tm.row.classList.toggle('dead', cur <= 0);
      tm.row.classList.toggle('active', game.team === tm);
    }
  }

  turnStart(game, team, unit, switched = false) {
    this.updateTeams(game);
    const tt = this.$('.turn-team');
    tt.textContent = team.label || team.name;
    tt.style.color = team.color;
    if (!switched) this.announce(team.human ? (game.teams.filter((t) => t.human).length > 1 ? `${team.short} is dran!` : 'Du bist dran!') : `${team.short} is dran`, `${unit.name} · ${unitTitle(unit.s)}`, 1.5);
    this.phase(game);
  }

  phase(game) {
    if (!game) return;
    const ph = game.phase;
    const human = game.team && game.team.human;
    const r = this.root;
    const W = game.weapon ? WEAPONS[game.weapon] : null;
    r.dataset.phase = human ? ph : 'cpu';
    const show = (cmd, on) => {
      const b = r.querySelector(`[data-cmd="${cmd}"]`);
      if (b) b.classList.toggle('off', !on);
    };
    const mv = human && ph === 'move';
    const aim = human && ph === 'aim';
    const tgt = human && ph === 'target';
    const ret = human && ph === 'retreat';
    show('weaponMenu', mv || aim || tgt);
    show('switch', mv && game.canSwitch && game.team.units.filter((u) => u.alive).length > 1);
    show('jump', mv || ret);
    show('endTurn', mv);
    show('nextTarget', aim && W && W.type !== 'heal' && W.type !== 'place');
    show('back', aim || tgt);
    show('aim', mv);
    show('fire', aim || (tgt && !!game.targetPoint));
    show('overview', mv || aim);
    const fireBtn = r.querySelector('[data-cmd="fire"] span');
    if (fireBtn && W) {
      fireBtn.textContent = W.type === 'heal' ? 'Essen' : W.type === 'place' ? 'Legen' : W.type === 'jump' ? 'Spring!' : W.type === 'drive' ? 'Los!' : (W.type === 'ballistic' && this.touch) ? 'Tipp/Halten' : 'Feuer';
    }
    r.querySelector('.joy').classList.toggle('off', !(mv || aim || ret) || game.overview);
    this.updateWeaponButton(game);
    this.updateKeyHints(game);
    if (!(mv || aim || tgt)) this.closeWeaponMenu();
  }

  updateWeaponButton(game) {
    const u = game.unit;
    if (!u || !game.weapon) return;
    const W = WEAPONS[game.weapon];
    const a = u.ammo[game.weapon];
    this.$('.w-icon').textContent = W.icon;
    this.$('.w-name').textContent = W.name;
    this.$('.w-ammo').textContent = a < 0 ? '∞' : `×${a}`;
  }

  updateKeyHints(game) {
    if (this.touch) return;
    const kh = this.$('.keyhints');
    const ph = game.phase;
    const human = game.team && game.team.human;
    let t = '';
    if (human && ph === 'move') t = '<b>W/S</b> gehen · <b>A/D</b> drehen · <b>Leertaste</b> hupfen · <b>F</b> oder <b>Rechtsklick</b> zielen · <b>Q</b> Waffen · <b>Tab</b> wechseln · <b>M</b> Karte · <b>X</b> Zug beenden · Maus ziehen = Kamera';
    else if (human && ph === 'aim' && game.tac) {
      const W = WEAPONS[game.weapon];
      t = W.type === 'drive'
        ? '<b>Maus</b> zeigt die Fahrtrichtung · <b>Klick</b> = Los! · <b>Mausrad</b> Zoom · <b>A/D</b> oder ziehen = Ansicht drehen · <b>E</b> nächstes Ziel · <b>Rechtsklick/Esc</b> zurück'
        : '<b>Maus</b> aufs Ziel zeigen · <b>Klick</b> = Feuer (Winkel, Kraft &amp; Wind rechnet das Spiel) · <b>W/S</b> Bogen hoch/flach · <b>Mausrad</b> Zoom · <b>A/D</b> oder ziehen = Ansicht drehen · <b>E</b> nächstes Ziel · <b>Rechtsklick/Esc</b> zurück';
    } else if (human && ph === 'aim') {
      const W = WEAPONS[game.weapon];
      const locked = this.app.input.locked;
      const mouse = locked ? '<b>Maus</b> zielen · ' : '<b>Klick ins Bild</b> = Maus fangen · ';
      t = W.type === 'ballistic'
        ? `${mouse}<b>Linksklick</b> Feuer (Kreis = Einschlag) · <b>halten</b> = Kraft selbst laden · <b>Mausrad</b> Kraft · <b>E</b> nächstes Ziel · <b>Shift</b> fein · <b>Rechtsklick/Esc</b> zurück`
        : `${mouse}<b>Linksklick</b> Feuer · <b>E</b> nächstes Ziel · <b>Shift</b> fein · <b>Rechtsklick/Esc</b> zurück · <b>A/D W/S</b> geht a`;
    } else if (human && ph === 'target') t = '<b>Klick</b> aufs Ziel · nochmal klicken oder <b>Leertaste</b> = Feuer · Maus ziehen = Karte schieben · <b>Esc</b> zurück';
    else if (human && ph === 'retreat') t = '<b>W/A/S/D</b> davonlaufen! · <b>Leertaste</b> hupfen';
    kh.innerHTML = t;
  }

  toggleWeaponMenu(game) {
    if (this.$('.wmenu').classList.contains('hidden')) this.openWeaponMenu(game);
    else this.closeWeaponMenu();
  }

  openWeaponMenu(game) {
    if (!game || !game.humanTurn || !['move', 'aim', 'target'].includes(game.phase)) return;
    const u = game.unit;
    const grid = this.$('.wm-grid');
    grid.innerHTML = '';
    const desc = this.$('.wm-desc');
    let n = 0;
    for (const id of u.weapons()) {
      const W = WEAPONS[id];
      const a = u.ammo[id];
      n++;
      const b = el('button', `wm-item${a === 0 ? ' empty' : ''}${id === game.weapon ? ' sel' : ''}`);
      b.innerHTML = `<b>${W.icon}</b><span>${esc(W.name)}</span><small>${a < 0 ? '∞' : `×${a}`}</small>${!this.touch && n <= 9 ? `<em>${n}</em>` : ''}`;
      b.addEventListener('pointerenter', () => { desc.textContent = W.desc || ''; });
      b.addEventListener('click', () => {
        if (a === 0) { desc.textContent = 'Leer. Nix mehr da.'; return; }
        game.cmd('selectWeapon', id);
        this.closeWeaponMenu();
      });
      grid.appendChild(b);
    }
    desc.textContent = WEAPONS[game.weapon] ? WEAPONS[game.weapon].desc : '';
    this.$('.wmenu').classList.remove('hidden');
  }

  closeWeaponMenu() { this.$('.wmenu').classList.add('hidden'); }

  get weaponMenuOpen() { return !this.$('.wmenu').classList.contains('hidden'); }

  announce(title, sub = '', dur = 1.6) {
    const a = this.$('.announce');
    a.querySelector('.a-title').textContent = title;
    a.querySelector('.a-sub').textContent = sub;
    a.classList.remove('show');
    void a.offsetWidth;
    a.classList.add('show');
    this.annT = dur;
  }

  toast(text, dur = 2.2) {
    const t = this.$('.toast');
    t.textContent = text;
    t.classList.add('show');
    this.toastT = dur;
  }

  say(u, text) {
    if (!text) return;
    const old = this.bubbles.find((b) => b.u === u);
    if (old) { old.el.remove(); this.bubbles.splice(this.bubbles.indexOf(old), 1); }
    while (this.bubbles.length >= 3) {
      const b = this.bubbles.shift();
      b.el.remove();
    }
    const e = el('div', 'bubble');
    e.textContent = text;
    e.style.borderColor = u.team.color;
    this.labels.appendChild(e);
    this.bubbles.push({ u, el: e, t: 2.6 + text.length * 0.03 });
  }

  floatText(pos, text, color) {
    const e = el('div', 'float');
    e.textContent = text;
    e.style.color = color;
    this.labels.appendChild(e);
    this.floats.push({ pos: pos.clone(), el: e, t: 0 });
  }

  unitDied() {}

  project(p, cam, w, h) {
    V.copy(p).project(cam);
    if (V.z > 1 || V.z < -1) return null;
    return { x: (V.x * 0.5 + 0.5) * w, y: (-V.y * 0.5 + 0.5) * h };
  }

  frame(game, dt) {
    const cam = game.cam.cam;
    const w = this.app.width, h = this.app.height;
    const u = game.unit;
    // Namensschilder
    this.root.classList.toggle('scoped', !!game.scoped);
    for (const [unit, tag] of this.tags) {
      if ((!unit.alive && unit.deathT > 1.2) || (game.scoped && unit === u)) {
        if (tag.style.display !== 'none') tag.style.display = 'none';
        continue;
      }
      const p = this.project(unit.getHead().clone().setY(unit.pos.y + 2.45), cam, w, h);
      const dist = cam.position.distanceTo(unit.pos);
      if (!p || dist > 75) {
        if (tag.style.display !== 'none') tag.style.display = 'none';
        continue;
      }
      tag.style.display = '';
      tag.style.transform = `translate(${p.x.toFixed(1)}px, ${p.y.toFixed(1)}px) translate(-50%, -100%)`;
      const pct = clamp(unit.hp / unit.hpMax, 0, 1) * 100;
      const key = `${Math.round(pct)}|${unit === u}`;
      if (tag._k !== key) {
        tag._k = key;
        tag.querySelector('i').style.width = `${pct}%`;
        tag.classList.toggle('cur', unit === u);
      }
    }
    // Sprechblasen
    for (let i = this.bubbles.length - 1; i >= 0; i--) {
      const b = this.bubbles[i];
      b.t -= dt;
      const p = this.project(b.u.getHead().clone().setY(b.u.pos.y + 2.9), cam, w, h);
      if (b.t <= 0 || !p) {
        if (b.t <= 0) { b.el.remove(); this.bubbles.splice(i, 1); } else b.el.style.display = 'none';
        continue;
      }
      b.el.style.display = '';
      const x = clamp(p.x, 90, w - 90), y = clamp(p.y, 60, h - 40);
      b.el.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px) translate(-50%, -100%)`;
      b.el.style.opacity = Math.min(1, b.t * 3);
    }
    // Schadenszahlen
    for (let i = this.floats.length - 1; i >= 0; i--) {
      const f = this.floats[i];
      f.t += dt;
      f.pos.y += dt * 1.2;
      const p = this.project(f.pos, cam, w, h);
      if (f.t > 1.6 || !p) {
        f.el.remove();
        this.floats.splice(i, 1);
        continue;
      }
      f.el.style.transform = `translate(${p.x.toFixed(1)}px, ${p.y.toFixed(1)}px) translate(-50%, -50%) scale(${1 + Math.max(0, 0.3 - f.t)})`;
      f.el.style.opacity = Math.min(1, (1.6 - f.t) * 2);
    }
    // Einheitskarte
    if (u) {
      const k = `${u.uid}|${Math.round(u.hp)}|${Math.round(u.stamina)}`;
      if (this.last.uc !== k) {
        this.last.uc = k;
        this.$('.uc-name').innerHTML = `<span class="sw" style="background:${u.team.color}"></span>${esc(RANKS[u.s.tier])} ${esc(u.s.name)}`;
        this.$('.uc-title').textContent = `${unitTitle(u.s)} · ${u.isStier ? 'Stier' : 'Kuh'}`;
        const hp = Math.max(0, u.hp);
        this.$('.uc-bar.hp i').style.width = `${(hp / u.hpMax) * 100}%`;
        this.$('.uc-bar.hp span').textContent = `${Math.round(hp)} / ${u.hpMax}`;
        this.$('.uc-bar.st i').style.width = `${u.stamina}%`;
      }
    }
    // Timer
    const tl = Math.ceil(game.turnTimer || 0);
    if (this.last.timer !== tl) {
      this.last.timer = tl;
      const t = this.$('.timer');
      t.textContent = tl;
      t.classList.toggle('low', tl <= 10);
    }
    const humanTimer = game.team && game.team.human && ['move', 'aim', 'target'].includes(game.phase);
    this.$('.timer').classList.toggle('paused', !humanTimer);
    // Wind
    const wx = game.wind.x, wz = game.wind.z;
    const ws = Math.hypot(wx, wz);
    const ang = game.cam.yaw + Math.PI - Math.atan2(wx, wz);
    const wk = `${(ang * 20) | 0}|${(ws * 50) | 0}`;
    if (this.last.wind !== wk) {
      this.last.wind = wk;
      this.$('.wind-arrow').style.transform = `rotate(${(ang * 180) / Math.PI - 90}deg)`;
      this.$('.wind-arrow').style.opacity = ws < 0.03 ? 0.25 : 1;
      this.$('.wind-bar i').style.width = `${Math.min(100, ws * 100)}%`;
    }
    // Kraftbalken
    const pw = this.$('.power');
    const Wc = game.weapon ? WEAPONS[game.weapon] : null;
    const humanBall = game.phase === 'aim' && game.team && game.team.human && Wc && Wc.type === 'ballistic' && !game.tac;
    if (game.charging || humanBall) {
      pw.classList.add('show');
      pw.querySelector('i').style.width = `${(game.charging ? game.power : 0) * 100}%`;
      const tick = pw.querySelector('.tick');
      if (game.powerHint) {
        tick.style.display = 'block';
        tick.style.left = `${game.powerHint.power * 100}%`;
        pw.classList.toggle('near', game.charging && Math.abs(game.power - game.powerHint.power) < 0.03);
      } else {
        tick.style.display = 'none';
        pw.classList.remove('near');
      }
    } else pw.classList.remove('show');
    // Fadenkreuz am tatsächlichen Treffer-/Einschlagspunkt
    const xh = this.$('.xhair');
    const ai0 = game.aimInfo;
    const xp = ai0 ? this.project(ai0.point, cam, w, h) : null;
    if (xp) {
      xh.classList.add('show');
      xh.style.transform = `translate(${xp.x.toFixed(1)}px, ${xp.y.toFixed(1)}px)`;
      xh.classList.toggle('on', !!ai0.enemy);
      xh.classList.toggle('friend', !ai0.enemy && !!ai0.friend);
      let t = '';
      if (ai0.enemy) t = ai0.melee ? `${ai0.enemy.s.name} in Reichweite!` : ai0.swarm ? `Schwarm auf: ${ai0.enemy.s.name}` : ai0.head ? `Kopf! ${ai0.enemy.s.name}` : `Treffer: ${ai0.enemy.s.name}`;
      else if (ai0.friend) t = `Achtung, ${ai0.friend.s.name}!`;
      else if (game.tac && game.tac.reach === 'far') t = `Z'weit weg – max. ca. ${game.tac.maxR} m`;
      else if (game.tac && game.tac.reach === 'blocked') t = 'Da is was im Weg – W/S für an anderen Bogen';
      else if (ai0.water) t = 'Ins Wasser';
      else if (ai0.melee) t = 'Ka Gegner in Reichweite';
      else if (ai0.range) t = 'Außer Reichweite';
      else if (ai0.blocked) t = 'Deckung im Weg';
      if (ai0.dist !== undefined && !ai0.melee) t += `${t ? ' · ' : ''}${Math.round(ai0.dist)} m`;
      const sp = xh.querySelector('span');
      if (sp.textContent !== t) sp.textContent = t;
    } else xh.classList.remove('show');
    // Zielinfo
    const ai = this.$('.aiminfo');
    if (u && u.aiming && (game.phase === 'aim' || game.phase === 'ai')) {
      const W = WEAPONS[game.weapon];
      const deg = Math.round((u.aimPitch * 180) / Math.PI);
      ai.textContent = W.type === 'ballistic'
        ? `Winkel ${deg}° · Kraft ${Math.round((game.charging ? game.power : (game.presetPower ? game.presetPower() : 0)) * 100)}%${game.tac ? ` · Bogen: ${game.tac.arc === 'auto' ? 'auto' : game.tac.arc}` : ''}`
        : `${W.name} · ${deg}°`;
      ai.classList.add('show');
    } else ai.classList.remove('show');
    if (this.annT > 0) {
      this.annT -= dt;
      if (this.annT <= 0) this.$('.announce').classList.remove('show');
    }
    if (this.toastT > 0) {
      this.toastT -= dt;
      if (this.toastT <= 0) this.$('.toast').classList.remove('show');
    }
    const lk = `${game.phase}|${this.app.input.locked}|${!!game.tac}|${game.weapon}`;
    if (this.last.lock !== lk) { this.last.lock = lk; this.updateKeyHints(game); }
    if (game.unit && game.weapon && this.last.wb !== `${game.weapon}|${game.unit.ammo[game.weapon]}`) {
      this.last.wb = `${game.weapon}|${game.unit.ammo[game.weapon]}`;
      this.updateWeaponButton(game);
    }
  }

  tutorial(game) {
    const t = this.$('.tut');
    const touch = this.touch;
    t.innerHTML = `<div class="panel">
      <h2>Kurze Einweisung, Rekrut!</h2>
      <ul class="tut-list">
        ${touch ? `
        <li><b>Joystick links:</b> vorwärts/rückwärts gehen und drehen.</li>
        <li><b>Wischen am Bildschirm:</b> Kamera drehen. Zwei Finger: zoomen.</li>
        <li><b>🎯 Zielen:</b> Waffe anlegen. Dann wischen oder Joystick = Richtung &amp; Winkel.</li>
        <li><b>⌖ Ziel:</b> dreht zum nächsten Gegner und stellt bei Granaten &amp; Co. gleich die passende Kraft ein.</li>
        <li><b>🔥 antippen</b> feuert mit der eingestellten Kraft (der Kreis zeigt den Einschlag). <b>🔥 halten</b> lädt die Kraft selbst auf – loslassen = Wurf.</li>` : `
        <li><b>W/S</b> gehen, <b>A/D</b> drehen, <b>Leertaste</b> hupfen, Maus ziehen = Kamera.</li>
        <li><b>F</b> oder <b>Rechtsklick</b> zielen, <b>Q</b> Waffenkammer, <b>1–9</b> Schnellwahl.</li>
        <li>Gewehre: Maus wird eingefangen – <b>Maus bewegen</b> = zielen, <b>Linksklick</b> = Feuer, <b>Rechtsklick</b> oder <b>Esc</b> = zurück.</li>
        <li>Wurfwaffen: <b>Maus aufs Ziel</b>, <b>Klick</b> = Wurf, <b>W/S</b> Bogen hoch/flach.</li>
        <li><b>E</b> dreht zum nächsten Gegner und stellt bei Granaten die passende Kraft ein, <b>M</b> zeigt die Karte.</li>
        <li><b>Enter</b> feuert mit der eingestellten Kraft (Kreis = Einschlag), <b>Leertaste halten</b> lädt die Kraft selbst auf.</li>`}
        <li>Das <b>Fadenkreuz</b> sitzt genau dort, wo der Schuss hingeht – <b style="color:#ff5a4a">rot</b> = Treffer. Bei Wurfwaffen zeigt der <b>Kreis</b> den Einschlag samt Wind.</li>
        <li>Pro Zug: <b>ein</b> Rindsviech bewegen und <b>einmal</b> angreifen. Die Ausdauer begrenzt den Weg.</li>
        <li>Achtung auf den <b>Wind</b> (oben) und aufs <b>Wasser</b> – wer reinfällt, ersauft.</li>
      </ul>
      <button class="btn primary tut-ok">Verstanden, Herr Wachtmeister!</button>
    </div>`;
    t.classList.remove('hidden');
    game.paused = true;
    t.querySelector('.tut-ok').addEventListener('click', () => {
      audio.unlock();
      t.classList.add('hidden');
      game.paused = false;
    });
  }
}
