// Menüs: Titel, Feldzug, Kaserne, Briefing, Gefecht, Einstellungen, Anleitung, Ergebnisse.
import {
  FACTIONS, factionById, MISSIONS, THEMES, THEME_ORDER, BRANCHES, RANKS, TIER_HP, PROMO_COST, DIFFICULTY,
  unitTitle, WEAPONS, loadoutFor, WEAPON_ORDER,
} from './config.js';
import {
  newCampaign, load, save, clearSave, missionInfo, defaultSelection, buildMissionOpts, canPromote, promote, soldierAtTier,
} from './campaign.js';
import { MEDALS, RESULT_TEXT, pick } from './text.js';
import { RNG } from './rng.js';
import { el, esc } from './util.js';
import { audio } from './audio.js';
import { VERSION, BUILD_DATE } from './version.js';

const sexIcon = (s) => (s.sex === 'stier' ? '🐂' : '🐄');

export class Menus {
  constructor(app, root) {
    this.app = app;
    this.root = el('div', 'menus');
    root.appendChild(this.root);
    this.skirmish = {
      teams: [
        { faction: 'noe', control: 'human', difficulty: 'normal', units: 4 },
        { faction: 'tirol', control: 'cpu', difficulty: 'normal', units: 4 },
      ],
      theme: 'random', ranks: 'mixed', wind: 0.45, turnTime: 60, crates: true, mines: false, water: false, fog: false,
    };
    try {
      const s = JSON.parse(localStorage.getItem('rindsviecher_skirmish') || 'null');
      if (s && s.teams) this.skirmish = { ...this.skirmish, ...s };
    } catch (e) { /* egal */ }
  }

  clear() {
    this.root.innerHTML = '';
    this.root.classList.remove('hidden');
  }

  hide() {
    this.root.innerHTML = '';
    this.root.classList.add('hidden');
  }

  screen(cls, html) {
    this.clear();
    const s = el('div', `screen ${cls}`);
    s.innerHTML = html;
    this.root.appendChild(s);
    s.querySelectorAll('button, select, input').forEach((b) => b.addEventListener('pointerdown', () => audio.unlock()));
    s.querySelectorAll('button').forEach((b) => b.addEventListener('click', () => audio.click()));
    return s;
  }

  // --- Titel -----------------------------------------------------------------
  title() {
    const c = load();
    const canContinue = c && !c.done;
    const s = this.screen('title-screen', `
      <div class="logo">
        <div class="logo-sub">Die Kuh is no ned vom Eis</div>
        <h1 class="logo-main"><span>RINDS</span><span>VIECHER</span></h1>
        <div class="logo-tag">Rundenbasierte 3D-Rindviecherei · Remastered in Full HD</div>
      </div>
      <div class="menu">
        ${canContinue ? `<button class="btn primary" data-a="continue">Feldzug fortsetzen<small>Einsatz ${c.mission + 1} von ${MISSIONS.length} · ${esc(factionById(c.faction).short)}</small></button>` : ''}
        <button class="btn ${canContinue ? '' : 'primary'}" data-a="new">Neuer Feldzug</button>
        <button class="btn" data-a="skirmish">Schnelles Gefecht</button>
        <div class="row2">
          <button class="btn" data-a="howto">Anleitung</button>
          <button class="btn" data-a="settings">Einstellungen</button>
        </div>
        ${document.fullscreenEnabled ? '<button class="btn ghost" data-a="fs">⛶ Vollbild</button>' : ''}
      </div>
      <div class="foot"><span class="ver">v${VERSION}${BUILD_DATE ? ` · Update vom ${BUILD_DATE}` : ''}</span> · Fan-Remaster eines rundenbasierten Artillerie-Klassikers · Eigene Figuren, eigener Schmäh</div>
    `);
    s.querySelector('[data-a="new"]').onclick = () => this.newCampaign();
    if (canContinue) s.querySelector('[data-a="continue"]').onclick = () => { this.app.campaign = c; this.barracks(); };
    s.querySelector('[data-a="skirmish"]').onclick = () => this.skirmishSetup();
    s.querySelector('[data-a="howto"]').onclick = () => this.howto(() => this.title());
    s.querySelector('[data-a="settings"]').onclick = () => this.settings(() => this.title());
    const fs = s.querySelector('[data-a="fs"]');
    if (fs) fs.onclick = () => this.app.toggleFullscreen();
  }

  // --- Feldzug -------------------------------------------------------------
  newCampaign() {
    const existing = load();
    let chosen = 'noe';
    const s = this.screen('faction-screen', `
      <div class="panel wide">
        <h2>Neuer Feldzug</h2>
        <p class="lead">Für welches Bundesland ziehst du ins Feld? Zwölf Einsätze, eine Truppe, Beförderungen nach Bundesheer-Art. Wer fällt, ist weg – a neuer Rekrut rückt nach.</p>
        <div class="factions">
          ${FACTIONS.map((f) => `<button class="fcard${f.id === chosen ? ' sel' : ''}" data-f="${f.id}" style="--c:${f.color}"><span class="fc-sw"></span><b>${esc(f.name)}</b><small>„${esc(f.motto)}“</small></button>`).join('')}
        </div>
        ${existing && !existing.done ? '<p class="warn">Achtung: Der bestehende Feldzug wird überschrieben.</p>' : ''}
        <div class="btns">
          <button class="btn" data-a="back">Zurück</button>
          <button class="btn primary" data-a="go">Ab in die Kaserne!</button>
        </div>
      </div>`);
    s.querySelectorAll('.fcard').forEach((b) => {
      b.onclick = () => {
        chosen = b.dataset.f;
        s.querySelectorAll('.fcard').forEach((x) => x.classList.toggle('sel', x === b));
      };
    });
    s.querySelector('[data-a="back"]').onclick = () => this.title();
    s.querySelector('[data-a="go"]').onclick = () => {
      const c = newCampaign(chosen);
      save(c);
      this.app.campaign = c;
      this.barracks();
    };
  }

  barracks() {
    const c = this.app.campaign;
    if (c.done) { this.campaignDone(); return; }
    const m = missionInfo(c, c.mission);
    const need = m.player;
    if (!this.selection || this.selection.mission !== c.mission || this.selection.ids.some((id) => !c.squad.find((s) => s.id === id))) {
      this.selection = { mission: c.mission, ids: defaultSelection(c, need) };
    }
    const sel = this.selection.ids;
    const f = factionById(c.faction);
    const s = this.screen('barracks-screen', `
      <div class="panel wide">
        <div class="ph">
          <h2><span class="sw" style="background:${f.color}"></span>Kaserne · ${esc(f.name)}</h2>
          <div class="sub">Nächster Einsatz: <b>${c.mission + 1}/${MISSIONS.length} – ${esc(m.title)}</b> · Aufstellung: <b class="selcount">${sel.length}/${need}</b></div>
        </div>
        <div class="squad">
          ${c.squad.map((so) => this.soldierCard(so, sel.includes(so.id))).join('')}
        </div>
        <p class="hint">Antippen = für den Einsatz aufstellen. Beförderungspunkte gibt's fürs Überleben, Treffer und Abschüsse.</p>
        <div class="btns">
          <button class="btn" data-a="menu">Hauptmenü</button>
          <button class="btn primary" data-a="brief">Zur Einsatzbesprechung</button>
        </div>
      </div>`);
    s.querySelectorAll('.scard').forEach((card) => {
      const id = Number(card.dataset.id);
      card.querySelector('.sc-main').onclick = () => {
        const i = sel.indexOf(id);
        if (i >= 0) sel.splice(i, 1);
        else {
          if (sel.length >= need) sel.shift();
          sel.push(id);
        }
        this.barracks();
      };
      const pb = card.querySelector('.promo');
      if (pb) pb.onclick = (e) => { e.stopPropagation(); this.promoteDialog(c.squad.find((x) => x.id === id)); };
    });
    s.querySelector('[data-a="menu"]').onclick = () => this.title();
    s.querySelector('[data-a="brief"]').onclick = () => {
      if (sel.length < need) {
        const rest = c.squad.filter((x) => !sel.includes(x.id)).slice(0, need - sel.length);
        rest.forEach((x) => sel.push(x.id));
      }
      this.briefing();
    };
  }

  soldierCard(so, selected) {
    const promo = canPromote(so);
    const next = so.tier < 5 ? PROMO_COST[so.tier + 1] : null;
    const medals = so.medals.reduce((acc, m) => { acc[m] = (acc[m] || 0) + 1; return acc; }, {});
    return `<div class="scard${selected ? ' sel' : ''}" data-id="${so.id}">
      <div class="sc-main">
        <div class="sc-ico">${sexIcon(so)}</div>
        <div class="sc-info">
          <b>${esc(RANKS[so.tier])} ${esc(so.name)}</b>
          <span>${esc(unitTitle(so))}${so.branch && so.tier < 4 ? ` · ${esc(BRANCHES[so.branch].name)}` : ''} · ${TIER_HP[so.tier]} LP</span>
          <small>${so.missions} Einsätze · ${so.kills} Abschüsse · Punkte ${so.points}${next ? `/${next}` : ''} ${Object.entries(medals).map(([k, n]) => `${MEDALS[k].icon}${n > 1 ? `×${n}` : ''}`).join(' ')}</small>
        </div>
        <div class="sc-check">${selected ? '✔' : ''}</div>
      </div>
      ${promo ? '<button class="btn small promo">⬆ Befördern</button>' : ''}
    </div>`;
  }

  promoteDialog(so) {
    const tierNext = so.tier + 1;
    const ov = el('div', 'overlay');
    if (so.tier === 0) {
      ov.innerHTML = `<div class="panel">
        <h2>${esc(so.name)} befördern</h2>
        <p class="lead">Beförderung zum Gefreiten – aber welche Laufbahn? Die Wahl is endgültig.</p>
        <div class="branches">
          ${Object.entries(BRANCHES).map(([k, b]) => `<button class="bcard" data-b="${k}"><b>${b.icon} ${esc(b.name)}</b><span>${esc(b.titles.join(' → '))}</span><small>${esc(b.desc)}</small><em>${this.loadoutText({ tier: 1, branch: k })}</em></button>`).join('')}
        </div>
        <div class="btns"><button class="btn" data-a="x">Abbrechen</button></div>
      </div>`;
      ov.querySelectorAll('.bcard').forEach((b) => {
        b.onclick = () => {
          promote(so, b.dataset.b);
          save(this.app.campaign);
          audio.bell(0.3);
          ov.remove();
          this.barracks();
        };
      });
    } else {
      const preview = { ...so, tier: tierNext };
      ov.innerHTML = `<div class="panel">
        <h2>${esc(so.name)} befördern</h2>
        <p class="lead">${esc(RANKS[so.tier])} → <b>${esc(RANKS[tierNext])}</b> · ${esc(unitTitle(preview))}</p>
        <p>Lebenspunkte: ${TIER_HP[so.tier]} → <b>${TIER_HP[tierNext]}</b></p>
        <p class="small">Ausrüstung: ${this.loadoutText(preview)}</p>
        <div class="btns"><button class="btn" data-a="x">Abbrechen</button><button class="btn primary" data-a="ok">Befördern!</button></div>
      </div>`;
      ov.querySelector('[data-a="ok"]').onclick = () => {
        promote(so);
        save(this.app.campaign);
        audio.bell(0.3);
        ov.remove();
        this.barracks();
      };
    }
    ov.querySelector('[data-a="x"]').onclick = () => ov.remove();
    this.root.appendChild(ov);
  }

  loadoutText(s) {
    const l = loadoutFor(s);
    return WEAPON_ORDER.filter((id) => l[id] !== undefined && id !== 'kopfnuss' && id !== 'pistole')
      .map((id) => `${WEAPONS[id].icon} ${WEAPONS[id].name} ×${l[id]}`).join(', ');
  }

  briefing() {
    const c = this.app.campaign;
    const m = missionInfo(c, c.mission);
    const T = THEMES[m.theme];
    const windTxt = m.wind > 0.8 ? 'Föhnsturm' : m.wind > 0.5 ? 'stark' : m.wind > 0.3 ? 'mittel' : 'schwach';
    const extras = [];
    if (m.fog) extras.push('🌫️ Nebel');
    if (m.risingWater) extras.push('🌊 Hochwasser');
    if (m.mines) extras.push('🟤 Minenfeld');
    if (m.enemies.length > 1) extras.push('⚔️ Drei Parteien');
    const s = this.screen('brief-screen', `
      <div class="panel">
        <div class="kicker">Einsatz ${c.mission + 1} von ${MISSIONS.length}</div>
        <h2>${esc(m.title)}</h2>
        <div class="facts">
          <span>🏔️ ${esc(T.name)}</span>
          <span>💨 Wind: ${windTxt}</span>
          <span>🤖 Gegner: ${esc(DIFFICULTY[m.ai].name)}</span>
          ${m.enemyFactions.map((id, k) => `<span><i class="sw" style="background:${factionById(id).color}"></i>${esc(factionById(id).name)} (${m.enemies[k].units})</span>`).join('')}
          ${extras.map((x) => `<span>${x}</span>`).join('')}
        </div>
        <blockquote class="brief">${esc(m.text)}</blockquote>
        <div class="btns">
          <button class="btn" data-a="back">Zur Kaserne</button>
          <button class="btn primary" data-a="go">Abmarsch!</button>
        </div>
      </div>`);
    s.querySelector('[data-a="back"]').onclick = () => this.barracks();
    s.querySelector('[data-a="go"]').onclick = () => {
      const opts = buildMissionOpts(c, c.mission, this.selection.ids);
      this.app.startMatch(opts, { kind: 'campaign' });
    };
  }

  campaignResult(report, result) {
    const c = this.app.campaign;
    const won = report.won;
    const promoAvail = c.squad.some(canPromote);
    const s = this.screen('result-screen', `
      <div class="panel wide">
        <div class="kicker">Einsatz ${report.missionIdx + 1}: ${esc(MISSIONS[report.missionIdx].title)}</div>
        <h2 class="${won ? 'win' : 'lose'}">${won ? 'SIEG!' : 'NIEDERLAGE'}</h2>
        <p class="lead">${esc(pick(RESULT_TEXT[won ? 'win' : 'lose']))}</p>
        <table class="stats">
          <tr><th></th><th>Soldat</th><th>Status</th><th>Abschüsse</th><th>Schaden</th><th>Punkte</th></tr>
          ${report.units.map((u) => `<tr class="${u.r.alive ? '' : 'dead'}">
            <td>${sexIcon(u.s)}</td>
            <td>${esc(RANKS[u.s.tier])} ${esc(u.s.name)} ${u.medals.map((m) => `<span title="${esc(MEDALS[m].name)}">${MEDALS[m].icon}</span>`).join('')}</td>
            <td>${u.r.alive ? `✔ ${u.r.hp} LP` : '✝ gefallen'}</td>
            <td>${u.r.kills}</td><td>${u.r.dmg}</td><td>${u.r.alive ? `+${u.pts}` : '–'}</td></tr>`).join('')}
        </table>
        ${report.fallen.length ? `<p class="memorial">In Gedenken: ${report.fallen.map((f) => esc(f.name)).join(', ')}. Möge die Alm ewig grün sein.</p>` : ''}
        ${report.recruits.length ? `<p class="small">Neue Rekruten eingerückt: ${report.recruits.map((f) => `${sexIcon(f)} ${esc(f.name)}`).join(', ')}</p>` : ''}
        ${report.units.some((u) => u.medals.length) ? `<p class="small">${report.units.filter((u) => u.medals.length).map((u) => u.medals.map((m) => `${MEDALS[m].icon} ${esc(MEDALS[m].name)} für ${esc(u.s.name)}`).join(' · ')).join(' · ')}</p>` : ''}
        ${promoAvail ? '<p class="promo-hint">⬆ Es gibt Beförderungen in der Kaserne!</p>' : ''}
        <div class="btns">
          ${won ? '' : '<button class="btn" data-a="retry">Nochmal versuchen</button>'}
          <button class="btn primary" data-a="next">${c.done ? 'Zum Finale' : 'Zur Kaserne'}</button>
        </div>
      </div>`);
    s.querySelector('[data-a="next"]').onclick = () => (c.done ? this.campaignDone() : this.barracks());
    const r = s.querySelector('[data-a="retry"]');
    if (r) r.onclick = () => this.barracks();
  }

  campaignDone() {
    const c = this.app.campaign;
    const f = factionById(c.faction);
    const s = this.screen('result-screen', `
      <div class="panel">
        <div class="kicker">Feldzug abgeschlossen</div>
        <h2 class="win">Die ${esc(f.name)} san Meister!</h2>
        <p class="lead">Alle zwölf Einsätze überstanden. Da Bauer hat a Freibier spendiert, die Blasmusi spielt, und im Heimatmuseum hängt jetzt a Foto von eich. Mit Hörnern.</p>
        <p>Überlebende Veteranen: ${c.squad.filter((x) => x.missions > 0).map((x) => `${sexIcon(x)} ${esc(RANKS[x.tier])} ${esc(x.name)}`).join(', ') || '–'}</p>
        <div class="btns">
          <button class="btn" data-a="menu">Hauptmenü</button>
          <button class="btn primary" data-a="new">Neuer Feldzug</button>
        </div>
      </div>`);
    s.querySelector('[data-a="menu"]').onclick = () => this.title();
    s.querySelector('[data-a="new"]').onclick = () => { clearSave(); this.newCampaign(); };
  }

  // --- Schnelles Gefecht ---------------------------------------------------------
  skirmishSetup() {
    const k = this.skirmish;
    const used = k.teams.map((t) => t.faction);
    const factionOpts = (cur) => FACTIONS.map((f) => `<option value="${f.id}"${f.id === cur ? ' selected' : ''}>${esc(f.name)}</option>`).join('');
    const ctrlOpts = (t) => [['human', 'Mensch'], ['easy', 'CPU leicht'], ['normal', 'CPU normal'], ['hard', 'CPU schwer']]
      .map(([v, n]) => `<option value="${v}"${(t.control === 'human' ? 'human' : t.difficulty) === v ? ' selected' : ''}>${n}</option>`).join('');
    const opt = (list, cur) => list.map(([v, n]) => `<option value="${v}"${String(cur) === String(v) ? ' selected' : ''}>${n}</option>`).join('');
    const s = this.screen('skirmish-screen', `
      <div class="panel wide">
        <h2>Schnelles Gefecht</h2>
        <div class="teams-setup">
          ${k.teams.map((t, i) => `<div class="trow" data-i="${i}">
            <span class="sw" style="background:${factionById(t.faction).color}"></span>
            <select data-k="faction">${factionOpts(t.faction)}</select>
            <select data-k="control">${ctrlOpts(t)}</select>
            <select data-k="units">${opt([2, 3, 4, 5, 6].map((n) => [n, `${n} Viecher`]), t.units)}</select>
            ${k.teams.length > 2 ? '<button class="btn small x" data-a="rm">✖</button>' : ''}
          </div>`).join('')}
          ${k.teams.length < 4 ? '<button class="btn small" data-a="add">+ Team dazu</button>' : ''}
        </div>
        <div class="opts">
          <label>Gelände<select data-o="theme">${opt([['random', 'Zufall'], ...THEME_ORDER.map((t) => [t, THEMES[t].name])], k.theme)}</select></label>
          <label>Dienstgrade<select data-o="ranks">${opt([['rekrut', 'Nur Rekruten'], ['mixed', 'Gemischt'], ['veteran', 'Veteranen'], ['hero', 'Helden']], k.ranks)}</select></label>
          <label>Wind<select data-o="wind">${opt([[0, 'Windstill'], [0.25, 'Schwach'], [0.45, 'Mittel'], [0.7, 'Stark'], [1, 'Föhnsturm']], k.wind)}</select></label>
          <label>Rundenzeit<select data-o="turnTime">${opt([[30, '30 s'], [45, '45 s'], [60, '60 s'], [90, '90 s'], [9999, 'Unbegrenzt']], k.turnTime)}</select></label>
          <label class="chk"><input type="checkbox" data-o="crates"${k.crates ? ' checked' : ''}> Kisten vom Himmel</label>
          <label class="chk"><input type="checkbox" data-o="mines"${k.mines ? ' checked' : ''}> Minenfeld</label>
          <label class="chk"><input type="checkbox" data-o="water"${k.water ? ' checked' : ''}> Hochwasser</label>
          <label class="chk"><input type="checkbox" data-o="fog"${k.fog ? ' checked' : ''}> Nebel</label>
        </div>
        <p class="hint">Mehrere „Mensch“-Teams = Hot-Seat: ihr spielt abwechselnd am selben Gerät.</p>
        <div class="btns">
          <button class="btn" data-a="back">Zurück</button>
          <button class="btn primary" data-a="go">Los geht's!</button>
        </div>
      </div>`);
    s.querySelectorAll('.trow').forEach((row) => {
      const i = Number(row.dataset.i);
      row.querySelectorAll('select').forEach((sel) => {
        sel.onchange = () => {
          const t = k.teams[i];
          if (sel.dataset.k === 'faction') t.faction = sel.value;
          if (sel.dataset.k === 'units') t.units = Number(sel.value);
          if (sel.dataset.k === 'control') {
            if (sel.value === 'human') t.control = 'human';
            else { t.control = 'cpu'; t.difficulty = sel.value; }
          }
          this.skirmishSetup();
        };
      });
      const rm = row.querySelector('[data-a="rm"]');
      if (rm) rm.onclick = () => { k.teams.splice(i, 1); this.skirmishSetup(); };
    });
    const add = s.querySelector('[data-a="add"]');
    if (add) {
      add.onclick = () => {
        const free = FACTIONS.find((f) => !used.includes(f.id));
        k.teams.push({ faction: free.id, control: 'cpu', difficulty: 'normal', units: 4 });
        this.skirmishSetup();
      };
    }
    s.querySelectorAll('[data-o]').forEach((inp) => {
      inp.onchange = () => {
        const key = inp.dataset.o;
        if (inp.type === 'checkbox') k[key] = inp.checked;
        else k[key] = ['wind', 'turnTime'].includes(key) ? Number(inp.value) : inp.value;
      };
    });
    s.querySelector('[data-a="back"]').onclick = () => this.title();
    s.querySelector('[data-a="go"]').onclick = () => {
      const fs = k.teams.map((t) => t.faction);
      if (new Set(fs).size !== fs.length) {
        this.app.toastMenu('Zwa Teams mit derselben Fraktion geht ned. Bitte unterschiedliche wählen.');
        return;
      }
      try { localStorage.setItem('rindsviecher_skirmish', JSON.stringify(k)); } catch (e) { /* egal */ }
      this.app.startMatch(this.buildSkirmish(), { kind: 'skirmish' });
    };
  }

  buildSkirmish() {
    const k = this.skirmish;
    const seed = (Date.now() & 0xffff) + 1;
    const rng = new RNG(seed);
    const theme = k.theme === 'random' ? rng.pick(THEME_ORDER) : k.theme;
    const used = new Set();
    const tierFor = () => {
      switch (k.ranks) {
        case 'rekrut': return 0;
        case 'veteran': return rng.int(2, 3);
        case 'hero': return rng.int(3, 5);
        default: return rng.int(0, 2);
      }
    };
    const humans = k.teams.filter((t) => t.control === 'human').length;
    let hn = 0;
    const teams = k.teams.map((t) => {
      const soldiers = [];
      const tiers = [];
      for (let i = 0; i < t.units; i++) tiers.push(tierFor());
      for (let i = 0; i < t.units; i++) soldiers.push(soldierAtTier(rng, tiers[i], used));
      const f = factionById(t.faction);
      if (t.control === 'human') hn++;
      return {
        faction: t.faction, control: t.control, difficulty: t.difficulty, soldiers,
        label: humans > 1 && t.control === 'human' ? `Spieler ${hn} · ${f.short}` : undefined,
      };
    });
    return {
      mode: 'skirmish', theme, seed, title: 'Schnelles Gefecht', teams,
      rules: {
        wind: k.wind, turnTime: k.turnTime, crates: k.crates, mines: k.mines ? 12 : 0, risingWater: k.water ? 0.3 : 0, fog: k.fog,
        maibaum: k.mines, maxRounds: 40,
      },
    };
  }

  skirmishResult(result) {
    const w = result.winner >= 0 ? result.teams[result.winner] : null;
    const humanWon = w && w.human;
    const anyHuman = result.teams.some((t) => t.human);
    const s = this.screen('result-screen', `
      <div class="panel wide">
        <div class="kicker">Schnelles Gefecht · ${result.rounds} Runden</div>
        <h2 class="${humanWon || !anyHuman ? 'win' : 'lose'}">${w ? `${esc(w.name)} gewinnt!` : 'Unentschieden!'}</h2>
        <p class="lead">${esc(pick(RESULT_TEXT[!w ? 'draw' : (humanWon || !anyHuman) ? 'win' : 'lose']))}</p>
        <div class="team-results">
          ${result.teams.map((t) => `<div class="tres"><h3><span class="sw" style="background:${factionById(t.faction).color}"></span>${esc(t.name)}${t.human ? ' (Mensch)' : ''}</h3>
            <table class="stats">${t.units.map((u) => `<tr class="${u.alive ? '' : 'dead'}"><td>${esc(u.name)}</td><td>${u.alive ? `✔ ${u.hp}` : '✝'}</td><td>${u.kills} 💀</td><td>${u.dmg} 💥</td></tr>`).join('')}</table></div>`).join('')}
        </div>
        <div class="btns">
          <button class="btn" data-a="menu">Hauptmenü</button>
          <button class="btn" data-a="setup">Einstellungen ändern</button>
          <button class="btn primary" data-a="again">Revanche!</button>
        </div>
      </div>`);
    s.querySelector('[data-a="menu"]').onclick = () => this.title();
    s.querySelector('[data-a="setup"]').onclick = () => this.skirmishSetup();
    s.querySelector('[data-a="again"]').onclick = () => this.app.startMatch(this.buildSkirmish(), { kind: 'skirmish' });
  }

  // --- Einstellungen & Anleitung ------------------------------------------------
  settings(back) {
    const st = this.app.settings;
    const opt = (list, cur) => list.map(([v, n]) => `<option value="${v}"${String(cur) === String(v) ? ' selected' : ''}>${n}</option>`).join('');
    const s = this.screen('settings-screen', `
      <div class="panel">
        <h2>Einstellungen</h2>
        <div class="opts col">
          <label>Grafik<select data-s="quality">${opt([['auto', 'Automatisch'], ['low', 'Niedrig (schwache Handys)'], ['medium', 'Mittel'], ['high', 'Hoch (Full HD+)']], st.quality)}</select></label>
          <label>Effekte <input type="range" min="0" max="1" step="0.05" data-s="sfx" value="${st.sfx}"></label>
          <label>Musik <input type="range" min="0" max="1" step="0.05" data-s="music" value="${st.music}"></label>
          <label>Zielhilfe<select data-s="aimHelp">${opt([['full', 'Voll: Flugbahn, Wind & Einschlag (empfohlen)'], ['short', 'Kurz: nur Abwurfrichtung'], ['off', 'Aus (wie anno dazumal)']], st.aimHelp)}</select></label>
          <label>Rundenzeit (Feldzug)<select data-s="turnTime">${opt([[45, '45 s'], [60, '60 s'], [90, '90 s'], [9999, 'Unbegrenzt']], st.turnTime)}</select></label>
          <label>Kamera-/Ziel-Empfindlichkeit <input type="range" min="0.4" max="2" step="0.1" data-s="camSens" value="${st.camSens}"></label>
          <label class="chk"><input type="checkbox" data-s="showFps"${st.showFps ? ' checked' : ''}> FPS anzeigen</label>
        </div>
        <p class="small">Grafikänderungen wirken ab dem nächsten Gefecht.</p>
        <div class="btns"><button class="btn primary" data-a="back">Fertig</button></div>
      </div>`);
    s.querySelectorAll('[data-s]').forEach((inp) => {
      inp.oninput = inp.onchange = () => {
        const key = inp.dataset.s;
        let v = inp.type === 'checkbox' ? inp.checked : inp.value;
        if (['sfx', 'music', 'camSens', 'turnTime'].includes(key)) v = Number(v);
        this.app.setSetting(key, v);
      };
    });
    s.querySelector('[data-a="back"]').onclick = back;
  }

  howto(back) {
    const s = this.screen('howto-screen', `
      <div class="panel wide scroll">
        <h2>Wie geht's?</h2>
        <h3>Das Prinzip</h3>
        <p>Zwei bis vier Trupps Rindsviecher bekriegen sich auf einer Insel. Reihum is a Team dran. Pro Zug steuerst du <b>ein</b> Viech: gehen (so weit die Ausdauer reicht), hupfen, dann <b>ein Angriff</b>. Danach is der Nächste dran. Wer zuletzt noch steht, gewinnt.</p>
        <h3>Steuerung am Handy &amp; Tablet</h3>
        <ul>
          <li>Joystick links unten: gehen und drehen. Wischen: Kamera drehen. Zwei Finger: Zoom.</li>
          <li>🎯 <b>Zielen</b> → wischen oder Joystick für Richtung und Winkel. ⌖ dreht zum nächsten Gegner.</li>
          <li>Das <b>Fadenkreuz</b> zeigt genau, wo der Schuss hingeht – rot heißt Treffer. Bei Granaten &amp; Co. zeigt der <b>Kreis</b> den Einschlag inklusive Wind; ⌖ setzt dazu eine Markierung am Kraftbalken.</li>
          <li>🔥 <b>Antippen</b> feuert Wurfwaffen mit der eingestellten Kraft (der Kreis zeigt den Einschlag), <b>Halten</b> lädt die Kraft selbst auf.</li>
          <li>Luftschläge &amp; Fallschirm: aufs Ziel tippen, nochmal tippen oder 🔥 = los.</li>
        </ul>
        <h3>Steuerung am Computer</h3>
        <ul>
          <li><b>W/S</b> gehen · <b>A/D</b> drehen · <b>Leertaste</b> hupfen · Maus ziehen = Kamera · Mausrad = Zoom</li>
          <li><b>F</b> zielen · <b>Q</b> Waffenkammer · <b>1–9</b> Waffe direkt · <b>Tab</b> Einheit wechseln (vor dem ersten Schritt)</li>
          <li>Beim Zielen: <b>A/D</b> + <b>W/S</b> oder Maus ziehen · <b>Shift</b> = fein · <b>Leertaste halten</b> = Kraft · <b>E</b> nächstes Ziel</li>
          <li><b>M</b> Karte · <b>X</b> Zug beenden · <b>P</b>/<b>Esc</b> Pause</li>
        </ul>
        <h3>Dienstgrade &amp; Beförderung</h3>
        <p>Jeder fängt als <b>Rekrut</b> an. Mit Punkten aus den Einsätzen wird befördert: ${RANKS.join(' → ')}. Bei der ersten Beförderung wählst du die Laufbahn:</p>
        <ul>${Object.values(BRANCHES).map((b) => `<li>${b.icon} <b>${esc(b.name)}</b> (${esc(b.titles.join(' → '))}): ${esc(b.desc)}</li>`).join('')}</ul>
        <p>Ab Wachtmeister geht's weiter zum <b>Held</b> (Leutnant) und zur <b>Legende</b> (Hauptmann) – mit dem Besten aus allen Laufbahnen und der berüchtigten Heiligen-Kuh-Bombe.</p>
        <h3>Tipps vom Spieß</h3>
        <ul>
          <li>Der <b>Wind</b> (oben in der Mitte) treibt Panzerfaust und Granaten ab. Der Pfeil zeigt relativ zur Kamera.</li>
          <li>Wasser is tödlich. A g'scheite <b>Kopfnuss</b> am Ufer wirkt Wunder – Stiere stoßen stärker.</li>
          <li>Kisten vom Himmel: 🥨 = Brettljause (Lebenspunkte), grüne Kiste = Munition. Manchmal is a Falle drin.</li>
          <li>Kuhfladen-Minen werden erst in der nächsten Runde scharf. Echte Kuhfladen nie.</li>
          <li>Krater verändern das Gelände – nutz das!</li>
        </ul>
        <div class="btns"><button class="btn primary" data-a="back">Alles klar</button></div>
      </div>`);
    s.querySelector('[data-a="back"]').onclick = back;
  }

  pause(game) {
    const ov = el('div', 'overlay pause');
    const isCampaign = game.opts.mode === 'campaign';
    ov.innerHTML = `<div class="panel">
      <h2>Pause</h2>
      <div class="menu">
        <button class="btn primary" data-a="resume">Weiter</button>
        <button class="btn" data-a="settings">Einstellungen</button>
        <button class="btn" data-a="howto">Anleitung</button>
        <button class="btn" data-a="quit">${isCampaign ? 'Rückzug zur Kaserne' : 'Gefecht abbrechen'}</button>
      </div>
      ${isCampaign ? '<p class="small">Rückzug zählt ned als Niederlage – aber Punkte gibt\'s a kane.</p>' : ''}
    </div>`;
    this.root.classList.remove('hidden');
    this.root.appendChild(ov);
    const close = () => { ov.remove(); this.app.resume(); };
    ov.querySelector('[data-a="resume"]').onclick = close;
    ov.querySelector('[data-a="settings"]').onclick = () => {
      ov.remove();
      this.settings(() => { this.hide(); this.pause(game); });
    };
    ov.querySelector('[data-a="howto"]').onclick = () => {
      ov.remove();
      this.howto(() => { this.hide(); this.pause(game); });
    };
    ov.querySelector('[data-a="quit"]').onclick = () => {
      ov.remove();
      this.app.quitMatch();
    };
  }
}
