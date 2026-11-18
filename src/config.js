// Spieldaten: Waffen, Dienstgrade, Fraktionen, Landschaften, Feldzug.
export const WORLD_SIZE = 110;
export const GRAVITY = 18;
export const WIND_ACC = 7;
export const STAMINA_PER_M = 100 / 17;
export const WALK_SPEED = 3.4;

// --- Dienstgrade (Bundesheer) -------------------------------------------
export const RANKS = ['Rekrut', 'Gefreiter', 'Zugsführer', 'Wachtmeister', 'Leutnant', 'Hauptmann'];
export const RANK_SHORT = ['Rekr.', 'Gfr.', 'Zgf.', 'Wm.', 'Lt.', 'Hptm.'];
export const TIER_HP = [100, 110, 120, 135, 150, 170];
// Punkte, die für die Beförderung AUF diese Stufe nötig sind
export const PROMO_COST = [0, 3, 5, 7, 10, 14];

export const BRANCHES = {
  schwer: {
    name: 'Schwere Waffen', icon: '💥',
    titles: ['Kanonier', 'Mörserschütze', 'Artillerist'],
    desc: 'Bumst ordentlich: Panzerfaust, Granatwerfer, MG und am End die Haubitze.',
  },
  pionier: {
    name: 'Pioniere', icon: '🧨',
    titles: ['Pionier', 'Sprengmeister', 'Saboteur'],
    desc: 'Kuhfladen-Minen, Sprengladungen, Splittergranaten und der Obstler-Flammenwerfer.',
  },
  sani: {
    name: 'Sanität', icon: '🩹',
    titles: ['Sanitäter', 'Feldsanitäter', 'Sanitätsmeister'],
    desc: 'Flickt die eigenen Leut z\'samm – und schmeißt mit Gülle.',
  },
  jaeger: {
    name: 'Jäger', icon: '🎯',
    titles: ['Jäger', 'Scharfschütze', 'Jagdkommando'],
    desc: 'Präzise und hinterfotzig: Jagdflinte, Scharfschützengewehr, Fallschirm, Abfangjäger.',
  },
};
export const HERO_TITLES = ['Held', 'Legende'];

export function unitTitle(s) {
  if (s.tier === 0) return 'Rekrut';
  if (s.tier >= 4) return HERO_TITLES[s.tier - 4];
  return BRANCHES[s.branch].titles[s.tier - 1];
}
export function rankName(s) { return RANKS[s.tier]; }
export function shortName(s) { return `${RANK_SHORT[s.tier]} ${s.name}`; }

// --- Waffen ---------------------------------------------------------------
// type: melee | hitscan | ballistic | place | cone | heal | jump | strike
export const WEAPONS = {
  kopfnuss: {
    name: 'Kopfnuss', icon: '🐮', type: 'melee', dmg: 22, dmgStier: 30, range: 2.3, knock: 8,
    desc: 'Hörner voraus! Stiere hauen fester zu. Ideal, um wen ins Wasser zu schupfen.',
  },
  pistole: {
    name: 'Dienstpistole', icon: '🔫', type: 'hitscan', shots: 2, dmg: 9, spread: 1.2, range: 45, interval: 0.28,
    desc: 'Klein, aber gemein. Geht nie aus.',
  },
  gewehr: {
    name: 'Sturmgewehr', icon: '🪖', type: 'hitscan', shots: 5, dmg: 8, spread: 1.8, range: 60, interval: 0.12,
    desc: 'Fünf Schuss, a bissl Streuung, viel Gfühl.',
  },
  mg: {
    name: 'Maschinengewehr', icon: '⚙️', type: 'hitscan', shots: 14, dmg: 5, spread: 3.2, range: 55, interval: 0.075,
    desc: 'Rattert wia a Traktor im Winter.',
  },
  flinte: {
    name: 'Jagdflinte', icon: '🦌', type: 'hitscan', shots: 1, pellets: 8, dmg: 6, spread: 6, range: 22, interval: 0,
    desc: 'Schrot auf kurze Distanz. Da Jäger sagt: Waidmannsheil!',
  },
  sniper: {
    name: 'Scharfschützengewehr', icon: '🎯', type: 'hitscan', shots: 1, dmg: 48, spread: 0, range: 130, interval: 0, zoom: true,
    desc: 'Ein Schuss, ein Treffer. Kopftreffer tun extra weh.',
  },
  granate: {
    name: 'Handgranate', icon: '💣', type: 'ballistic', speed: 19, fuse: 3, bounce: 0.42, radius: 3.6, dmg: 42, wind: 0.35,
    mesh: 'granate', throw: true,
    desc: 'Drei Sekunden Zünder. Hüpft gern no a bissl.',
  },
  splitter: {
    name: 'Splittergranate', icon: '🎆', type: 'ballistic', speed: 18, fuse: 2.5, bounce: 0.4, radius: 3, dmg: 26, wind: 0.35,
    cluster: { n: 5, radius: 2.4, dmg: 19 }, mesh: 'granate', throw: true,
    desc: 'Zerplatzt in fünf kleine Gemeinheiten.',
  },
  guelle: {
    name: 'Güllebombe', icon: '💩', type: 'ballistic', speed: 17, fuse: 2.5, bounce: 0.3, radius: 2.6, dmg: 12, wind: 0.4,
    gas: { radius: 4.6, dmg: 10, turns: 3 }, mesh: 'guelle', throw: true,
    desc: 'A Fassl frische Gülle. Die Wolke stinkt drei Runden lang und frisst Lebenspunkte.',
  },
  heiligekuh: {
    name: 'Heilige-Kuh-Bombe', icon: '🔔', type: 'ballistic', speed: 14, fuse: 4, bounce: 0.25, radius: 9, dmg: 95, wind: 0.2,
    mesh: 'glocke', throw: true,
    desc: 'A riesige Kuhglocke voller Sprengstoff. Heilig is do gar nix.',
  },
  panzerfaust: {
    name: 'Panzerfaust', icon: '🚀', type: 'ballistic', speed: 34, impact: true, radius: 3.8, dmg: 50, wind: 1.0,
    mesh: 'rakete', tube: true,
    desc: 'Explodiert beim Aufschlag. Da Wind mag sie besonders.',
  },
  moerser: {
    name: 'Granatwerfer', icon: '🎇', type: 'ballistic', speed: 27, impact: true, radius: 4.8, dmg: 58, wind: 0.8,
    mesh: 'moerser', tube: true, minPitch: 35,
    desc: 'Hoher Bogen, großes Loch. Über Hügel drüber schießen!',
  },
  mistgabel: {
    name: 'Mistgabel', icon: '🔱', type: 'ballistic', speed: 24, impact: true, pierce: true, radius: 1.2, dmg: 46, wind: 0.25,
    mesh: 'gabel', throw: true,
    desc: 'Frisch vom Misthaufen. Wer getroffen wird, hat drei Löcher mehr. Daneben bleibt sie halt im Boden stecken.',
  },
  wespen: {
    name: 'Wespennest', icon: '🐝', type: 'ballistic', speed: 18, impact: true, radius: 1.6, dmg: 6, wind: 0.4,
    swarm: { range: 16, dmg: 28, speed: 6.5, life: 7 }, mesh: 'nest', throw: true,
    desc: 'Nach dem Aufprall sucht si da Schwarm den nächsten Gegner im Umkreis. Stichig, grantig, unaufhaltsam.',
  },
  traktor: {
    name: 'Amok-Traktor', icon: '🚜', type: 'drive', speed: 6.5, time: 5.5, radius: 4.6, dmg: 56,
    desc: 'Ohne Fahrer, ohne Bremse, voller Sprengstoff. Fahrt gradaus, bis er wo anrennt – Hang, Baum oder Gegner.',
  },
  mine: {
    name: 'Kuhfladen-Mine', icon: '🟤', type: 'place', radius: 3.4, dmg: 45,
    desc: 'Schaut aus wia a Kuhfladen. Is aber kana. Scharf ab der nächsten Runde.',
  },
  tnt: {
    name: 'Sprengladung', icon: '🧨', type: 'place', fuse: 3, radius: 5.5, dmg: 65,
    desc: 'Hinlegen, weglaufen. Drei Sekunden, dann gibt\'s a Loch.', endsTurn: true,
  },
  flammen: {
    name: 'Obstler-Flammenwerfer', icon: '🔥', type: 'cone', range: 8, angle: 24, dmg: 34,
    desc: 'Selbstbrand vom Onkel, 80 Prozent. Brennt besser als er schmeckt.',
  },
  jause: {
    name: 'Brettljause', icon: '🥨', type: 'heal', amount: 40,
    desc: 'Speck, Kas und a Pfefferoni: +40 Lebenspunkte für den Schützen.',
  },
  lazarett: {
    name: 'Feldlazarett', icon: '🏥', type: 'heal', amount: 30, area: 9,
    desc: 'Heilt alle eigenen Leut im Umkreis um 30.',
  },
  sprung: {
    name: 'Fallschirmsprung', icon: '🪂', type: 'jump', range: 32, endsTurn: false,
    desc: 'Zielpunkt antippen und hinfliegen. Danach darfst no schießen.',
  },
  haubitze: {
    name: 'Haubitzenfeuer', icon: '🎯', type: 'strike', shells: 4, scatter: 4, radius: 4.5, dmg: 45,
    desc: 'Zielpunkt auf der Karte wählen. Vier Granaten vom Himmel.',
  },
  jet: {
    name: 'Abfangjäger', icon: '✈️', type: 'strike', bombs: 6, spacing: 3, radius: 3.6, dmg: 38, dudChance: 0.06,
    desc: 'Bombenteppich entlang der Blickrichtung. Falls er überhaupt startet.',
  },
};

export const WEAPON_ORDER = [
  'kopfnuss', 'pistole', 'gewehr', 'mg', 'flinte', 'sniper', 'mistgabel',
  'granate', 'splitter', 'guelle', 'wespen', 'panzerfaust', 'moerser', 'heiligekuh', 'traktor',
  'mine', 'tnt', 'flammen', 'jause', 'lazarett', 'sprung', 'haubitze', 'jet',
];

const LOADOUTS = {
  rekrut: { gewehr: 2, granate: 2, mistgabel: 1 },
  schwer: [
    { gewehr: 3, granate: 2, panzerfaust: 2, mistgabel: 1 },
    { gewehr: 3, granate: 2, panzerfaust: 3, moerser: 2, mg: 2, mistgabel: 1 },
    { gewehr: 3, granate: 3, panzerfaust: 3, moerser: 3, mg: 3, haubitze: 1, traktor: 1 },
  ],
  pionier: [
    { gewehr: 2, granate: 3, mine: 2, mistgabel: 1 },
    { gewehr: 2, granate: 3, mine: 3, tnt: 2, splitter: 2, traktor: 1 },
    { gewehr: 3, granate: 3, mine: 3, tnt: 3, splitter: 3, flammen: 2, traktor: 2 },
  ],
  sani: [
    { gewehr: 2, granate: 2, jause: 2, guelle: 1, mistgabel: 1 },
    { gewehr: 2, granate: 2, jause: 3, guelle: 2, lazarett: 1, wespen: 1 },
    { gewehr: 3, granate: 2, jause: 3, guelle: 3, lazarett: 2, splitter: 2, wespen: 2 },
  ],
  jaeger: [
    { flinte: 3, sniper: 1, granate: 2, mistgabel: 2 },
    { flinte: 3, sniper: 3, granate: 2, sprung: 2, mistgabel: 2, wespen: 1 },
    { flinte: 3, sniper: 4, granate: 2, sprung: 3, mine: 2, jet: 1, mistgabel: 3, wespen: 1 },
  ],
  held: {
    gewehr: 3, granate: 3, panzerfaust: 3, moerser: 2, mg: 2, sniper: 2, splitter: 2, jause: 2, sprung: 2, mine: 2,
    mistgabel: 2, wespen: 1, traktor: 1,
  },
  legende: {
    gewehr: 3, granate: 3, panzerfaust: 4, moerser: 3, mg: 2, sniper: 3, splitter: 2, jause: 2, sprung: 2, mine: 2,
    heiligekuh: 1, haubitze: 1, jet: 1, mistgabel: 2, wespen: 2, traktor: 2,
  },
};

export function loadoutFor(s) {
  let l;
  if (s.tier === 0) l = LOADOUTS.rekrut;
  else if (s.tier === 4) l = LOADOUTS.held;
  else if (s.tier === 5) l = LOADOUTS.legende;
  else l = LOADOUTS[s.branch][s.tier - 1];
  return { kopfnuss: -1, pistole: -1, ...l };
}

export const CRATE_WEAPONS = [
  ['granate', 2], ['panzerfaust', 1], ['moerser', 1], ['splitter', 1], ['sniper', 1], ['mine', 1],
  ['guelle', 1], ['sprung', 1], ['gewehr', 2], ['flammen', 1], ['jet', 1], ['heiligekuh', 1],
  ['mistgabel', 2], ['wespen', 1], ['traktor', 1],
];

// --- Fraktionen -------------------------------------------------------------
export const FACTIONS = [
  { id: 'wien', name: 'Wiener Grantlergarde', short: 'Wien', color: '#e53935', motto: 'Passt scho. Oder ah ned.' },
  { id: 'noe', name: 'Weinviertler Landwehr', short: 'NÖ', color: '#1e88e5', motto: 'A Achterl geht imma.' },
  { id: 'ooe', name: 'Mühlviertler Mostschädln', short: 'OÖ', color: '#fb8c00', motto: 'Most is a Grundnahrungsmittel.' },
  { id: 'stmk', name: 'Steirische Kernölkompanie', short: 'Stmk', color: '#43a047', motto: 'Glück auf und Kernöl drauf!' },
  { id: 'sbg', name: 'Salzburger Nockerl-Kommando', short: 'Sbg', color: '#ec407a', motto: 'Süß, aber hinterfotzig.' },
  { id: 'tirol', name: 'Tiroler Almjäger', short: 'Tirol', color: '#00acc1', motto: 'Zruck geht\'s nur bergab.' },
  { id: 'vbg', name: 'Gsiberger Käsknöpfle-Korps', short: 'Vbg', color: '#fdd835', motto: 'Schaffa, schaffa, Watschn verteila.' },
  { id: 'ktn', name: 'Kärntner Kasnudl-Kavallerie', short: 'Ktn', color: '#8e24aa', motto: 'Z\'erst gsungen, dann gschossn.' },
  { id: 'bgld', name: 'Seewinkler Weinbrigade', short: 'Bgld', color: '#8d6e63', motto: 'Flach is des Land, scharf is da Stier.' },
];
export const factionById = (id) => FACTIONS.find((f) => f.id === id) || FACTIONS[0];

export const COW_NAMES = ['Resi', 'Mitzi', 'Burgi', 'Gretl', 'Liesl', 'Vroni', 'Zenzi', 'Kathi', 'Fanny', 'Rosl', 'Leni', 'Traudl',
  'Hermine', 'Gusti', 'Mali', 'Moni', 'Steffi', 'Elfi', 'Erna', 'Frieda', 'Hedi', 'Lotti', 'Waltraud', 'Christl', 'Anni', 'Wetti'];
export const BULL_NAMES = ['Ferdl', 'Sepp', 'Schorsch', 'Wastl', 'Toni', 'Franzl', 'Gustl', 'Hias', 'Pepi', 'Rudi', 'Bertl',
  'Karli', 'Lois', 'Poldi', 'Hansi', 'Ernstl', 'Fredl', 'Willi', 'Bartl', 'Sigi', 'Mundl', 'Kurtl', 'Joschi', 'Edi', 'Heinzi'];

export const COW_BREEDS = ['fleckvieh', 'holstein', 'pinzgauer', 'grauvieh', 'braunvieh'];
export const BULL_BREEDS = ['schwarz', 'braunvieh', 'grauvieh', 'fleckvieh'];

// --- Landschaften ------------------------------------------------------------
export const THEMES = {
  alm: {
    name: 'Hochalm', amp: 12, freq: 2.0, oct: 5, base: 1.6, pow: 1.4,
    peaks: [{ x: 0.22, z: -0.18, h: 8, r: 0.15 }],
    colors: { seabed: '#5d6b4a', sand: '#cdb98a', grass1: '#4c8a2c', grass2: '#7aae45', rock: '#86827a', snow: '#f2f5f7', dirt: '#4a3626' },
    snowLine: 17, water: '#2a7aa6', waterOpacity: 0.8,
    sky: { top: '#2f74d0', horizon: '#cfe4f5' }, fog: [90, 470],
    sun: { color: '#fff1d6', intensity: 2.7, elev: 48, azim: 40 },
    hemi: { sky: '#cfe8ff', ground: '#4f6236', intensity: 1.15 },
    props: { pine: 55, broad: 12, rock: 20, bale: 8, silo: 6, stadl: 2, marterl: 2, grass: 700, flowers: 260 },
    mountains: true,
  },
  weinberg: {
    name: 'Weinberg', amp: 9, freq: 1.7, oct: 4, base: 1.8, pow: 1.2, terrace: 1.4, terraceSharp: 0.6,
    colors: { seabed: '#6a6550', sand: '#d8c48e', grass1: '#6f9334', grass2: '#97ae4c', rock: '#9b8a6e', snow: '#ffffff', dirt: '#5a4030' },
    snowLine: 99, water: '#3a7f8f', waterOpacity: 0.82,
    sky: { top: '#3b7bd6', horizon: '#f3dfc0' }, fog: [90, 460],
    sun: { color: '#ffdcae', intensity: 2.7, elev: 30, azim: -50 },
    hemi: { sky: '#ffe9cc', ground: '#5f5a36', intensity: 1.1 },
    props: { vine: 230, broad: 14, rock: 8, bale: 5, stadl: 2, marterl: 1, grass: 450, flowers: 160 },
    mountains: true,
  },
  au: {
    name: 'Donau-Au', amp: 4.5, freq: 2.6, oct: 4, base: 1.15, pow: 1.0, ponds: 3.4,
    colors: { seabed: '#4c5638', sand: '#8a7f55', grass1: '#457529', grass2: '#679140', rock: '#6f6a5a', snow: '#ffffff', dirt: '#3e3222' },
    snowLine: 99, water: '#3d6b5a', waterOpacity: 0.88,
    sky: { top: '#7f9fb8', horizon: '#d6dfe0' }, fog: [45, 280],
    sun: { color: '#f4f0e0', intensity: 2.0, elev: 35, azim: 120 },
    hemi: { sky: '#dfe8ee', ground: '#475a32', intensity: 1.25 },
    props: { willow: 30, broad: 18, reed: 280, rock: 5, grass: 800, flowers: 120, stadl: 1 },
    mountains: false,
  },
  kukuruz: {
    name: 'Kukuruzfeld', amp: 4.2, freq: 1.4, oct: 3, base: 1.8, pow: 1.0,
    colors: { seabed: '#6b6a4c', sand: '#d5c48d', grass1: '#7c9236', grass2: '#a3a648', rock: '#8f8670', snow: '#ffffff', dirt: '#5b4430' },
    snowLine: 99, water: '#3b7a92', waterOpacity: 0.82,
    sky: { top: '#3d82dc', horizon: '#e9e6cf' }, fog: [90, 470],
    sun: { color: '#fff0c8', intensity: 2.8, elev: 55, azim: 10 },
    hemi: { sky: '#e6f0ff', ground: '#6b6a3a', intensity: 1.1 },
    props: { corn: 650, pumpkin: 60, broad: 10, bale: 10, silo: 8, stadl: 3, marterl: 1, grass: 350, flowers: 80 },
    mountains: false,
  },
  steinbruch: {
    name: 'Steinbruch', amp: 15, freq: 2.4, oct: 4, base: 1.6, pow: 1.3, terrace: 3.2, terraceSharp: 0.55, rockBias: 0.4,
    colors: { seabed: '#56584c', sand: '#c9bfa8', grass1: '#6f7f4c', grass2: '#8e9566', rock: '#a29d93', snow: '#ffffff', dirt: '#55493d' },
    snowLine: 99, water: '#3a7290', waterOpacity: 0.84,
    sky: { top: '#4d82c4', horizon: '#e4ddd0' }, fog: [80, 430],
    sun: { color: '#fff3dd', intensity: 2.6, elev: 42, azim: -120 },
    hemi: { sky: '#e9eef4', ground: '#6d665a', intensity: 1.1 },
    props: { rock: 70, pine: 12, broad: 4, grass: 220, flowers: 30, stadl: 1 },
    mountains: true,
  },
  gletscher: {
    name: 'Gletscher', amp: 15, freq: 2.0, oct: 5, base: 1.8, pow: 1.3,
    peaks: [{ x: -0.2, z: 0.15, h: 7, r: 0.15 }],
    colors: { seabed: '#3a5068', sand: '#d9e2ea', grass1: '#eef3f8', grass2: '#dce6ef', rock: '#6f7c8c', snow: '#ffffff', dirt: '#59616b' },
    snowLine: -10, water: '#3c78a8', waterOpacity: 0.86,
    sky: { top: '#4f88d4', horizon: '#e8f1fa' }, fog: [70, 420],
    sun: { color: '#ffffff', intensity: 2.3, elev: 28, azim: 70 },
    hemi: { sky: '#e6f0ff', ground: '#9aa8b8', intensity: 1.2 },
    props: { pineSnow: 40, rock: 28, stadl: 1, marterl: 1 },
    mountains: true,
  },
};
export const THEME_ORDER = ['alm', 'weinberg', 'au', 'kukuruz', 'steinbruch', 'gletscher'];

// --- Feldzug -----------------------------------------------------------------
export const MISSIONS = [
  {
    title: 'Grundwehrdienst', theme: 'alm', seed: 101, player: 3, ai: 'easy', wind: 0.25,
    enemies: [{ units: 2, tiers: [0, 0] }], tutorial: true,
    briefing: 'Servus, Rekrut! Willkommen beim Rindsviech-Bundesheer. Drüben auf da Nachbaralm hocken zwa Gfraster von der {E1} und fressen unser Heu. Des is a Frechheit. Geh umi und erklär eana des – zur Not mit da Dienstpistoln. Und bitte: ned ins Wasser rennen, a Schwimmabzeichen is ned budgetiert.',
  },
  {
    title: 'Heuraub im Weinberg', theme: 'weinberg', seed: 202, player: 4, ai: 'easy', wind: 0.35,
    enemies: [{ units: 3, tiers: [0, 1] }],
    briefing: 'Die {E1} ham unsern Heuvorrat gstohln und verstecken si jetzt zwischen de Weinstöck. Da Wirt sagt, wer an Weinstock z\'sammschießt, zahlt. Uns wurscht – des Heu kummt z\'ruck!',
  },
  {
    title: 'Nebel in da Au', theme: 'au', seed: 303, player: 4, ai: 'normal', wind: 0.3, fog: true,
    enemies: [{ units: 3, tiers: [0, 1] }],
    briefing: 'In da Donau-Au siehst die eigenen Hufe ned. Überall Wasser, Gelsen und {E1}. Wer ersauft, kriegt ka Begräbnis mit Blasmusi. Also schau, wo du hintrittst.',
  },
  {
    title: 'Föhnsturm', theme: 'alm', seed: 404, player: 4, ai: 'normal', wind: 0.95,
    enemies: [{ units: 4, tiers: [0, 1] }],
    briefing: 'Da Föhn bläst so stark, dass die Kuhfladen waagrecht fliegen. Rechnet\'s den Wind ein, sonst trefft\'s höchstens an Bauern im nächsten Tal. Die {E1} san scho seit gestern grantig.',
  },
  {
    title: 'Die Kukuruz-Offensive', theme: 'kukuruz', seed: 505, player: 4, ai: 'normal', wind: 0.4,
    enemies: [{ units: 4, tiers: [1, 2] }],
    briefing: 'Im Maisfeld san die {E1} eingegrabn wia da Erdäpfelkäfer. Holt\'s es raus – und wenn\'s geht, ohne dass des ganze Popcorn z\'früh aufgeht.',
  },
  {
    title: 'Hochwasser!', theme: 'au', seed: 606, player: 5, ai: 'normal', wind: 0.4, risingWater: 0.32,
    enemies: [{ units: 4, tiers: [1, 2] }],
    briefing: 'Es schüttet seit drei Tag. Jede Runde steigt\'s Wasser. Wer z\'lang trödelt, kann si glei als Karpfen bewerben. Tempo, Rindsviecher – die {E1} san ah scho nervös!',
  },
  {
    title: 'Im alten Steinbruch', theme: 'steinbruch', seed: 707, player: 5, ai: 'normal', wind: 0.45,
    enemies: [{ units: 5, tiers: [1, 2] }],
    briefing: 'Im Steinbruch san die Wänd steil und die {E1} bis obenhin voller Munition. Granatwerfer mitnehmen, Hirn einschalten, ned obi fallen.',
  },
  {
    title: 'Gletscherpatrouille', theme: 'gletscher', seed: 808, player: 5, ai: 'hard', wind: 0.55,
    enemies: [{ units: 5, tiers: [1, 3] }],
    briefing: 'Am Gletscher is so kalt, dass da Euter einfriert. Die {E1} ham si do obn verschanzt. Ziagt\'s eich warm an – oder schießt\'s eich warm.',
  },
  {
    title: 'Kirtagsrauferei', theme: 'weinberg', seed: 909, player: 5, ai: 'hard', wind: 0.45,
    enemies: [{ units: 4, tiers: [1, 3] }, { units: 4, tiers: [1, 3] }],
    briefing: 'Heut gibt\'s a Rauferei mit drei Parteien. Die {E1} und die {E2} können si a ned leiden. Lass die zwa ruhig aufeinander los – und dann putz ma die Reste weg.',
  },
  {
    title: 'Minenfeld am Kirtagsplatz', theme: 'alm', seed: 1010, player: 5, ai: 'hard', wind: 0.4, mines: 14,
    enemies: [{ units: 5, tiers: [2, 3] }],
    briefing: 'Irgendwer hat am Kirtagsplatz Kuhfladen-Minen verteilt. Oder es san echte Kuhfladen. Wer\'s genau wissen will, tritt drauf. Die {E1} warten scho beim Bierzelt.',
  },
  {
    title: 'Schlacht am Glockner', theme: 'gletscher', seed: 1111, player: 6, ai: 'hard', wind: 0.6,
    enemies: [{ units: 6, tiers: [2, 4] }],
    briefing: 'Höher geht\'s nimma. Die {E1} schicken ihre Veteranen. Wer do obn verliert, rollt bis nach Heiligenblut obi.',
  },
  {
    title: 'Die Mutter aller Watschn', theme: 'steinbruch', seed: 1212, player: 6, ai: 'hard', wind: 0.5,
    enemies: [{ units: 4, tiers: [3, 5] }, { units: 4, tiers: [3, 5] }],
    briefing: 'Jetzt geht\'s um die Wurscht – und zwar um die ganze Extrawurscht. Die Elite von {E1} und {E2} gegen eich. Wer des überlebt, kriegt an Orden, a Freibier und an Platz im Heimatmuseum.',
  },
];

export const DIFFICULTY = {
  // yaw/pitch: Streuung in Grad (Standardabweichung), power: Streuung der Kraft,
  // blunder: Chance auf einen groben Patzer, windErr: wie falsch der Wind eingeschätzt wird,
  // sloppy: Chance, ned die beste, sondern a schlechtere Idee zu nehmen
  easy: { name: 'Leicht', yaw: 7, pitch: 6, power: 0.11, think: 0.7, smart: 0.4, blunder: 0.3, windErr: 0.6, sloppy: 0.4 },
  normal: { name: 'Normal', yaw: 3.5, pitch: 3, power: 0.06, think: 1, smart: 0.75, blunder: 0.16, windErr: 0.35, sloppy: 0.2 },
  hard: { name: 'Schwer', yaw: 1.6, pitch: 1.3, power: 0.028, think: 1, smart: 1, blunder: 0.07, windErr: 0.15, sloppy: 0.08 },
};

export const DEFAULT_SETTINGS = {
  quality: 'auto', // auto | low | medium | high
  sfx: 0.8,
  music: 0.45,
  aimHelp: 'full', // off | short | full
  turnTime: 60,
  camSens: 1,
  showFps: false,
  v: 2,
};
