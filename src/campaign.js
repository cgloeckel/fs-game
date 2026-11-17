// Feldzug: Truppe, Speicherstand, Beförderungen und Auswertung.
import { RNG } from './rng.js';
import {
  COW_NAMES, BULL_NAMES, COW_BREEDS, BULL_BREEDS, PROMO_COST, MISSIONS, FACTIONS, BRANCHES, factionById,
} from './config.js';

const KEY = 'rindsviecher_save_v1';
const SQUAD_SIZE = 8;
let SID = Math.floor(Math.random() * 1e6);

export function makeSoldier(rng, opts = {}) {
  const sex = opts.sex || (rng.next() < 0.5 ? 'kuh' : 'stier');
  const names = sex === 'kuh' ? COW_NAMES : BULL_NAMES;
  const used = opts.used || new Set();
  let name = rng.pick(names);
  for (let i = 0; i < 30 && used.has(name); i++) name = rng.pick(names);
  used.add(name);
  return {
    id: ++SID * 7 + Math.floor(rng.next() * 7),
    name,
    sex,
    breed: rng.pick(sex === 'kuh' ? COW_BREEDS : BULL_BREEDS),
    tier: opts.tier || 0,
    branch: opts.branch || null,
    points: 0,
    kills: 0,
    missions: 0,
    medals: [],
  };
}

export function soldierAtTier(rng, tier, used) {
  const s = makeSoldier(rng, { used });
  if (tier > 0) {
    s.branch = rng.pick(Object.keys(BRANCHES));
    s.tier = tier;
  }
  return s;
}

export function newCampaign(factionId) {
  const rng = new RNG(Date.now() & 0xffffff);
  const used = new Set();
  const squad = [];
  for (let i = 0; i < SQUAD_SIZE; i++) squad.push(makeSoldier(rng, { sex: i % 2 ? 'stier' : 'kuh', used }));
  return { v: 1, faction: factionId, mission: 0, squad, created: Date.now(), history: [], done: false };
}

export function save(c) {
  try { localStorage.setItem(KEY, JSON.stringify(c)); } catch (e) { /* privat-Modus */ }
}

export function load() {
  try {
    const s = localStorage.getItem(KEY);
    if (!s) return null;
    const c = JSON.parse(s);
    if (!c || c.v !== 1 || !Array.isArray(c.squad)) return null;
    return c;
  } catch (e) {
    return null;
  }
}

export function clearSave() {
  try { localStorage.removeItem(KEY); } catch (e) { /* egal */ }
}

export function enemyFactions(c, mIdx, count) {
  const others = FACTIONS.filter((f) => f.id !== c.faction);
  const res = [];
  for (let k = 0; k < count; k++) res.push(others[(mIdx * 3 + k * 4 + 1) % others.length].id);
  return res;
}

export function missionInfo(c, mIdx) {
  const m = MISSIONS[mIdx];
  const efs = enemyFactions(c, mIdx, m.enemies.length);
  const text = m.briefing
    .replace('{E1}', factionById(efs[0]).name)
    .replace('{E2}', efs[1] ? factionById(efs[1]).name : '');
  return { ...m, enemyFactions: efs, text, index: mIdx };
}

export function defaultSelection(c, count) {
  const sorted = [...c.squad].sort((a, b) => b.tier - a.tier || b.points - a.points);
  return sorted.slice(0, count).map((s) => s.id);
}

export function buildMissionOpts(c, mIdx, selectedIds) {
  const m = missionInfo(c, mIdx);
  const rng = new RNG(m.seed * 31 + 7);
  const player = c.squad.filter((s) => selectedIds.includes(s.id));
  const used = new Set(player.map((s) => s.name));
  const teams = [{ faction: c.faction, control: 'human', soldiers: player.map((s) => ({ ...s })) }];
  m.enemies.forEach((e, k) => {
    const soldiers = [];
    for (let i = 0; i < e.units; i++) soldiers.push(soldierAtTier(rng, rng.int(e.tiers[0], e.tiers[1]), used));
    teams.push({ faction: m.enemyFactions[k], control: 'cpu', difficulty: m.ai, soldiers });
  });
  return {
    mode: 'campaign',
    theme: m.theme,
    seed: m.seed,
    title: `Einsatz ${mIdx + 1}: ${m.title}`,
    teams,
    tutorial: !!m.tutorial,
    firstTeam: m.tutorial ? 0 : undefined,
    rules: {
      wind: m.wind, risingWater: m.risingWater || 0, mines: m.mines || 0, fog: !!m.fog, crates: true,
      maibaum: m.mines ? true : false, maxRounds: 30,
    },
  };
}

export function canPromote(s) {
  return s.tier < 5 && s.points >= PROMO_COST[s.tier + 1];
}

export function promote(s, branch) {
  if (!canPromote(s)) return false;
  if (s.tier === 0) {
    if (!branch || !BRANCHES[branch]) return false;
    s.branch = branch;
  }
  s.points -= PROMO_COST[s.tier + 1];
  s.tier++;
  return true;
}

export function applyResults(c, result) {
  const mine = result.teams[0];
  const won = result.winner === 0;
  const rng = new RNG(Date.now() & 0xffff);
  const report = { won, units: [], fallen: [], recruits: [], missionIdx: c.mission };
  let bestScore = -1, best = null;
  for (const r of mine.units) {
    const s = c.squad.find((x) => x.id === r.id);
    if (!s) continue;
    let pts = 0;
    if (r.alive) pts += 1;
    if (r.alive && won) pts += 1;
    pts += r.kills * 2;
    pts += Math.min(3, Math.floor(r.dmg / 30));
    const medals = [];
    if (r.kills >= 2) medals.push('killer');
    if (r.alive && r.hp < 20) medals.push('survivor');
    const sc = r.kills * 2 + r.dmg / 30;
    if (sc > bestScore && sc > 0) { bestScore = sc; best = { s, r }; }
    report.units.push({ s, r, pts, medals });
  }
  if (best) {
    const u = report.units.find((x) => x.s === best.s);
    u.medals.push('gold');
    u.pts += 1;
  }
  for (const u of report.units) {
    if (!u.r.alive) {
      report.fallen.push(u.s);
      continue;
    }
    u.s.points += u.pts;
    u.s.kills += u.r.kills;
    u.s.missions += 1;
    u.s.medals.push(...u.medals);
  }
  // Gefallene ersetzen
  const used = new Set(c.squad.map((s) => s.name));
  c.squad = c.squad.filter((s) => !report.fallen.includes(s));
  while (c.squad.length < SQUAD_SIZE) {
    const n = makeSoldier(rng, { used });
    c.squad.push(n);
    report.recruits.push(n);
  }
  c.history.push({ mission: c.mission, won, date: Date.now() });
  if (won) {
    c.mission++;
    if (c.mission >= MISSIONS.length) c.done = true;
  }
  save(c);
  return report;
}
