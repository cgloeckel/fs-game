// Komplett synthetischer Sound: Explosionen, Schüsse, Muhen, Kuhglocken und a Polka.
class AudioEngine {
  constructor() {
    this.ctx = null;
    this.vol = { sfx: 0.8, music: 0.45 };
    this.muted = false;
    this.musicOn = false;
    this.lastPlay = {};
  }

  unlock() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') this.ctx.resume();
      return;
    }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    try {
      this.ctx = new AC();
    } catch (e) {
      return;
    }
    const c = this.ctx;
    this.master = c.createGain();
    this.master.gain.value = 0.9;
    this.comp = c.createDynamicsCompressor();
    this.comp.threshold.value = -14;
    this.comp.ratio.value = 4;
    this.master.connect(this.comp).connect(c.destination);
    this.sfxGain = c.createGain();
    this.sfxGain.gain.value = this.vol.sfx;
    this.sfxGain.connect(this.master);
    // Stimmen-Bus mit Alm-Echo
    this.vocalBus = c.createGain();
    this.vocalBus.gain.value = 1;
    this.vocalBus.connect(this.sfxGain);
    this.echo = c.createDelay(1.5);
    this.echo.delayTime.value = 0.36;
    this.echoLp = c.createBiquadFilter();
    this.echoLp.type = 'lowpass';
    this.echoLp.frequency.value = 1500;
    this.echoFb = c.createGain();
    this.echoFb.gain.value = 0.32;
    this.echoWet = c.createGain();
    this.echoWet.gain.value = this.echoAmount || 0.12;
    this.vocalBus.connect(this.echo);
    this.echo.connect(this.echoLp);
    this.echoLp.connect(this.echoFb).connect(this.echo);
    this.echoLp.connect(this.echoWet).connect(this.sfxGain);
    this.musicGain = c.createGain();
    this.musicGain.gain.value = this.vol.music * 0.5;
    this.musicGain.connect(this.master);
    const len = c.sampleRate * 2;
    this.noiseBuf = c.createBuffer(1, len, c.sampleRate);
    const d = this.noiseBuf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    if (this.wantMusic) this.startMusic();
  }

  setVolumes(sfx, music) {
    this.vol.sfx = sfx;
    this.vol.music = music;
    if (this.sfxGain) this.sfxGain.gain.value = sfx;
    if (this.musicGain) this.musicGain.gain.value = music * 0.5;
  }

  get ok() { return this.ctx && !this.muted && this.ctx.state === 'running'; }

  throttle(key, ms) {
    const now = performance.now();
    if (this.lastPlay[key] && now - this.lastPlay[key] < ms) return false;
    this.lastPlay[key] = now;
    return true;
  }

  noise({ dur = 0.3, freq = 1000, freqEnd, q = 0.7, type = 'lowpass', gain = 0.5, attack = 0.005, delay = 0, dest }) {
    const c = this.ctx, t = c.currentTime + delay;
    const src = c.createBufferSource();
    src.buffer = this.noiseBuf;
    src.playbackRate.value = 0.8 + Math.random() * 0.4;
    const f = c.createBiquadFilter();
    f.type = type;
    f.Q.value = q;
    f.frequency.setValueAtTime(freq, t);
    if (freqEnd) f.frequency.exponentialRampToValueAtTime(Math.max(20, freqEnd), t + dur);
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(gain, t + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(f).connect(g).connect(dest || this.sfxGain);
    src.start(t, Math.random() * 1.5);
    src.stop(t + dur + 0.05);
  }

  tone({ freq = 440, freqEnd, dur = 0.2, type = 'sine', gain = 0.3, attack = 0.005, delay = 0, dest, release }) {
    const c = this.ctx, t = c.currentTime + delay;
    const o = c.createOscillator();
    o.type = type;
    o.frequency.setValueAtTime(freq, t);
    if (freqEnd) o.frequency.exponentialRampToValueAtTime(Math.max(20, freqEnd), t + dur);
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(gain, t + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t + (release || dur));
    o.connect(g).connect(dest || this.sfxGain);
    o.start(t);
    o.stop(t + (release || dur) + 0.05);
    return o;
  }

  // --- Effekte ---------------------------------------------------------
  explosion(size = 1, distFactor = 1) {
    if (!this.ok) return;
    const v = Math.min(1, size) * distFactor;
    if (v < 0.03) return;
    this.noise({ dur: 0.9 + size * 0.6, freq: 1800, freqEnd: 60, q: 0.5, gain: 0.9 * v, attack: 0.004 });
    this.noise({ dur: 0.25, freq: 4000, freqEnd: 400, type: 'bandpass', q: 0.8, gain: 0.5 * v });
    this.tone({ freq: 90, freqEnd: 30, dur: 0.7 + size * 0.3, type: 'sine', gain: 0.9 * v });
  }

  shot(kind = 'gewehr') {
    if (!this.ok) return;
    if (kind === 'sniper') {
      this.noise({ dur: 0.5, freq: 3000, freqEnd: 200, q: 0.6, gain: 0.8 });
      this.tone({ freq: 160, freqEnd: 50, dur: 0.3, type: 'triangle', gain: 0.6 });
    } else if (kind === 'flinte') {
      this.noise({ dur: 0.4, freq: 2500, freqEnd: 150, q: 0.5, gain: 0.85 });
      this.tone({ freq: 120, freqEnd: 40, dur: 0.25, gain: 0.6 });
    } else if (kind === 'pistole') {
      this.noise({ dur: 0.16, freq: 3500, freqEnd: 600, type: 'bandpass', q: 0.9, gain: 0.6 });
    } else {
      this.noise({ dur: 0.13, freq: 2600, freqEnd: 500, type: 'bandpass', q: 0.7, gain: 0.55 });
      this.tone({ freq: 140, freqEnd: 60, dur: 0.08, type: 'square', gain: 0.12 });
    }
  }

  whoosh() {
    if (!this.ok) return;
    this.noise({ dur: 0.7, freq: 600, freqEnd: 2500, type: 'bandpass', q: 1.5, gain: 0.4, attack: 0.05 });
  }

  thump() {
    if (!this.ok) return;
    this.tone({ freq: 110, freqEnd: 45, dur: 0.25, type: 'sine', gain: 0.8 });
    this.noise({ dur: 0.2, freq: 900, freqEnd: 100, gain: 0.4 });
  }

  throwSnd() {
    if (!this.ok) return;
    this.noise({ dur: 0.25, freq: 800, freqEnd: 1800, type: 'bandpass', q: 2, gain: 0.25, attack: 0.03 });
  }

  bounce() {
    if (!this.ok || !this.throttle('bounce', 60)) return;
    this.tone({ freq: 300 + Math.random() * 80, freqEnd: 180, dur: 0.08, type: 'triangle', gain: 0.25 });
  }

  splash() {
    if (!this.ok || !this.throttle('splash', 80)) return;
    this.noise({ dur: 0.6, freq: 1500, freqEnd: 300, type: 'bandpass', q: 0.6, gain: 0.6, attack: 0.01 });
    this.tone({ freq: 400, freqEnd: 900, dur: 0.15, type: 'sine', gain: 0.15, delay: 0.05 });
  }

  hit() {
    if (!this.ok || !this.throttle('hit', 50)) return;
    this.noise({ dur: 0.12, freq: 900, freqEnd: 200, gain: 0.5 });
    this.tone({ freq: 220, freqEnd: 110, dur: 0.12, type: 'square', gain: 0.12 });
  }

  moo(pitch = 1, gain = 0.5) {
    if (!this.ok || !this.throttle('moo', 400)) return;
    const c = this.ctx, t = c.currentTime;
    const f0 = 130 * pitch;
    const o = c.createOscillator();
    o.type = 'sawtooth';
    o.frequency.setValueAtTime(f0 * 0.9, t);
    o.frequency.linearRampToValueAtTime(f0 * 1.12, t + 0.25);
    o.frequency.linearRampToValueAtTime(f0 * 0.82, t + 1.0);
    const lfo = c.createOscillator();
    lfo.frequency.value = 5.5;
    const lfoG = c.createGain();
    lfoG.gain.value = 3 * pitch;
    lfo.connect(lfoG).connect(o.frequency);
    const f1 = c.createBiquadFilter();
    f1.type = 'bandpass'; f1.frequency.value = 520; f1.Q.value = 2.5;
    const f2 = c.createBiquadFilter();
    f2.type = 'lowpass';
    f2.frequency.setValueAtTime(500, t);
    f2.frequency.linearRampToValueAtTime(1300, t + 0.3);
    f2.frequency.linearRampToValueAtTime(600, t + 1.0);
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(gain, t + 0.12);
    g.gain.setValueAtTime(gain, t + 0.7);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 1.1);
    o.connect(f2).connect(g).connect(this.sfxGain);
    o.connect(f1).connect(g);
    o.start(t); lfo.start(t);
    o.stop(t + 1.2); lfo.stop(t + 1.2);
  }

  bell(gain = 0.35, delay = 0, pitch = 1) {
    if (!this.ok) return;
    const base = 520 * pitch;
    [1, 1.47, 2.09, 2.76].forEach((m, i) => {
      this.tone({ freq: base * m, dur: 0.02, release: 0.9 - i * 0.15, type: i ? 'sine' : 'triangle', gain: gain / (i + 1), delay });
    });
  }

  click() {
    if (!this.ok) return;
    this.tone({ freq: 900, freqEnd: 600, dur: 0.05, type: 'square', gain: 0.08 });
  }

  jump() {
    if (!this.ok) return;
    this.tone({ freq: 220, freqEnd: 420, dur: 0.18, type: 'triangle', gain: 0.18 });
  }

  heal() {
    if (!this.ok) return;
    [523, 659, 784, 1047].forEach((f, i) => this.tone({ freq: f, dur: 0.25, type: 'sine', gain: 0.18, delay: i * 0.08 }));
  }

  pickup() {
    if (!this.ok) return;
    [660, 880, 1320].forEach((f, i) => this.tone({ freq: f, dur: 0.15, type: 'square', gain: 0.07, delay: i * 0.06 }));
  }

  beep() {
    if (!this.ok || !this.throttle('beep', 120)) return;
    this.tone({ freq: 1400, dur: 0.08, type: 'square', gain: 0.1 });
  }

  fizz() {
    if (!this.ok) return;
    this.noise({ dur: 1.2, freq: 5000, freqEnd: 2000, type: 'highpass', gain: 0.12, attack: 0.05 });
  }

  flame() {
    if (!this.ok) return;
    this.noise({ dur: 1.0, freq: 700, freqEnd: 300, q: 0.5, gain: 0.6, attack: 0.08 });
  }

  plane() {
    if (!this.ok) return;
    this.noise({ dur: 2.8, freq: 300, freqEnd: 2200, type: 'bandpass', q: 0.7, gain: 0.5, attack: 0.9 });
  }

  buzz() {
    if (!this.ok || !this.throttle('buzz', 260)) return;
    const c = this.ctx, t = c.currentTime;
    const o = c.createOscillator();
    o.type = 'sawtooth';
    o.frequency.setValueAtTime(210 + Math.random() * 40, t);
    const lfo = c.createOscillator();
    lfo.frequency.value = 30;
    const lg = c.createGain();
    lg.gain.value = 25;
    lfo.connect(lg).connect(o.frequency);
    const f = c.createBiquadFilter();
    f.type = 'bandpass'; f.frequency.value = 900; f.Q.value = 1.5;
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.12, t + 0.05);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.3);
    o.connect(f).connect(g).connect(this.sfxGain);
    o.start(t); lfo.start(t);
    o.stop(t + 0.32); lfo.stop(t + 0.32);
  }

  engine() {
    if (!this.ok || !this.throttle('engine', 110)) return;
    this.tone({ freq: 70 + Math.random() * 10, freqEnd: 55, dur: 0.09, type: 'square', gain: 0.12 });
    this.noise({ dur: 0.08, freq: 400, freqEnd: 150, gain: 0.15 });
  }

  sting() {
    if (!this.ok) return;
    this.tone({ freq: 1200, freqEnd: 600, dur: 0.12, type: 'sawtooth', gain: 0.1 });
  }

  // Jedes Team hat seinen eigenen Kuhglocken-Ton
  turnStart(pitch = 1) {
    if (!this.ok) return;
    this.bell(0.25, 0, pitch);
    this.bell(0.2, 0.18, pitch * 1.26);
    if (Math.random() < 0.5) this.bell(0.14, 0.36, pitch * 1.5);
  }

  setEcho(amount) {
    this.echoAmount = amount;
    if (this.echoWet) this.echoWet.gain.value = amount;
  }

  // --- Rindsviech-Stimmen ---------------------------------------------------------
  // Ein Laut: Sägezahn-Quelle, Mund-Tiefpass, Formanten, Knurren, Atem, Hüllkurve
  voice(o) {
    const c = this.ctx;
    const t0 = c.currentTime + (o.delay || 0);
    const dur = o.dur;
    const at = (k) => t0 + k * dur;
    const osc = c.createOscillator();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(o.f0 * o.pitch[0][1], t0);
    for (const [k, m] of o.pitch.slice(1)) osc.frequency.linearRampToValueAtTime(o.f0 * m, at(k));
    const stops = [];
    if (o.vibrato) {
      const lfo = c.createOscillator();
      lfo.frequency.value = o.vibRate || 5.5;
      const lg = c.createGain();
      lg.gain.value = o.f0 * o.vibrato;
      lfo.connect(lg).connect(osc.frequency);
      stops.push(lfo);
    }
    const lp = c.createBiquadFilter();
    lp.type = 'lowpass';
    lp.Q.value = 1.1;
    lp.frequency.setValueAtTime(o.open[0][1], t0);
    for (const [k, f] of o.open.slice(1)) lp.frequency.linearRampToValueAtTime(f, at(k));
    osc.connect(lp);
    const mix = c.createGain();
    for (const [f, q, g] of o.formants) {
      const bp = c.createBiquadFilter();
      bp.type = 'bandpass';
      bp.frequency.value = f;
      bp.Q.value = q;
      const bg = c.createGain();
      bg.gain.value = g;
      lp.connect(bp).connect(bg).connect(mix);
    }
    const direct = c.createGain();
    direct.gain.value = 0.35;
    lp.connect(direct).connect(mix);
    const env = c.createGain();
    env.gain.setValueAtTime(0.0001, t0);
    for (const [k, g] of o.amp) env.gain.linearRampToValueAtTime(Math.max(0.0001, g * (o.gain || 1)), at(k));
    if (o.growl) {
      const am = c.createGain();
      am.gain.value = 1 - o.growl * 0.5;
      const lfo2 = c.createOscillator();
      lfo2.frequency.value = o.growlRate || 27;
      const lg2 = c.createGain();
      lg2.gain.value = o.growl * 0.5;
      lfo2.connect(lg2).connect(am.gain);
      stops.push(lfo2);
      mix.connect(am).connect(env);
    } else {
      mix.connect(env);
    }
    if (o.breath) {
      const src = c.createBufferSource();
      src.buffer = this.noiseBuf;
      const bp = c.createBiquadFilter();
      bp.type = 'bandpass';
      bp.frequency.value = 1500;
      bp.Q.value = 0.7;
      const ng = c.createGain();
      ng.gain.value = o.breath;
      src.connect(bp).connect(ng).connect(env);
      src.start(t0, Math.random());
      src.stop(t0 + dur + 0.05);
    }
    env.connect(this.vocalBus);
    osc.start(t0);
    osc.stop(t0 + dur + 0.1);
    for (const n of stops) { n.start(t0); n.stop(t0 + dur + 0.1); }
  }

  snort(delay = 0, gain = 0.4) {
    this.noise({ dur: 0.2, freq: 1900, freqEnd: 650, type: 'bandpass', q: 1.1, gain, attack: 0.015, delay });
    this.noise({ dur: 0.12, freq: 500, freqEnd: 200, gain: gain * 0.5, attack: 0.01, delay });
  }

  // Bausteine, je nach Stimme (p = Tonhöhe, k = Klangfarbe) und mit Zufallsvariation
  cattleSound(kind, v, g = 1) {
    const r = (a, b) => a + Math.random() * (b - a);
    const p = (v.p || 1) * r(0.95, 1.06);
    const k = (v.k || 1) * r(0.96, 1.05);
    const u = [[420 * k, 3, 1.6], [960 * k, 4, 0.9]];
    const a = [[680 * k, 3, 1.4], [1250 * k, 4, 0.8]];
    switch (kind) {
      case 'muh':
        this.voice({ f0: 125 * p, dur: r(0.95, 1.35), gain: g, pitch: [[0, 0.85], [0.15, 1.0], [0.45, 1.12], [1, 0.78]],
          open: [[0, 330], [0.18, 1800 * k], [0.8, 1400 * k], [1, 450]], amp: [[0.08, 0.32], [0.22, 0.6], [0.75, 0.52], [1, 0]],
          formants: u, vibrato: 0.02, breath: 0.05 });
        break;
      case 'muhmuh':
        for (let i = 0; i < 2; i++) {
          this.voice({ f0: 128 * p * (i ? 1.08 : 1), dur: r(0.42, 0.52), delay: i * 0.5, gain: g, pitch: [[0, 0.9], [0.3, 1.1], [1, 0.85]],
            open: [[0, 330], [0.25, 1700 * k], [1, 500]], amp: [[0.1, 0.35], [0.3, 0.58], [1, 0]], formants: u, breath: 0.04 });
        }
        break;
      case 'muuuh':
        this.voice({ f0: 108 * p, dur: r(1.6, 2.1), gain: g, pitch: [[0, 0.9], [0.2, 1.0], [0.7, 0.96], [1, 0.7]],
          open: [[0, 320], [0.15, 1500 * k], [0.85, 1300 * k], [1, 380]], amp: [[0.1, 0.35], [0.25, 0.55], [0.85, 0.5], [1, 0]],
          formants: u, vibrato: 0.035, vibRate: 4.8, breath: 0.06 });
        break;
      case 'mh':
        this.voice({ f0: 130 * p, dur: r(0.3, 0.42), gain: g, pitch: [[0, 0.95], [0.5, 1.06], [1, 0.88]],
          open: [[0, 300], [0.4, 900], [1, 350]], amp: [[0.15, 0.4], [0.6, 0.45], [1, 0]], formants: [[300 * k, 2, 1.3]] });
        break;
      case 'brummeln':
        this.voice({ f0: 100 * p, dur: r(0.6, 0.85), gain: g, pitch: [[0, 1.0], [0.3, 0.9], [0.6, 1.02], [1, 0.82]],
          open: [[0, 300], [0.4, 650], [1, 280]], amp: [[0.15, 0.4], [0.7, 0.38], [1, 0]], formants: [[320 * k, 2, 1.4]], growl: 0.35 });
        break;
      case 'schnauben':
        this.snort(0, 0.65 * g);
        if (Math.random() < 0.6) this.snort(r(0.25, 0.35), 0.5 * g);
        break;
      case 'bruellen':
        this.voice({ f0: 92 * p, dur: r(1.2, 1.6), gain: g, pitch: [[0, 0.78], [0.25, 1.05], [0.6, 1.0], [1, 0.7]],
          open: [[0, 400], [0.2, 2400 * k], [0.7, 1500 * k], [1, 400]], amp: [[0.08, 0.4], [0.25, 0.7], [0.8, 0.6], [1, 0]],
          formants: [[560 * k, 2.5, 1.4], [1200 * k, 3, 0.9]], growl: 0.6, growlRate: 30, breath: 0.12 });
        break;
      case 'aua':
        this.voice({ f0: 165 * p, dur: r(0.32, 0.45), gain: g, pitch: [[0, 1.15], [0.3, 1.32], [1, 0.85]],
          open: [[0, 600], [0.25, 2300 * k], [1, 700]], amp: [[0.05, 0.5], [0.4, 0.55], [1, 0]], formants: a, breath: 0.08 });
        break;
      case 'stoehnen':
        this.voice({ f0: 118 * p, dur: r(1.8, 2.3), gain: g, pitch: [[0, 1.0], [0.2, 1.06], [1, 0.48]],
          open: [[0, 500], [0.15, 1600 * k], [1, 260]], amp: [[0.1, 0.45], [0.4, 0.5], [1, 0]], formants: u, vibrato: 0.05, vibRate: 4, breath: 0.1 });
        break;
      case 'gurgeln':
        this.voice({ f0: 115 * p, dur: r(1.0, 1.3), gain: g, pitch: [[0, 1.0], [1, 0.75]], open: [[0, 900], [1, 260]],
          amp: [[0.1, 0.45], [0.7, 0.35], [1, 0]], formants: u, vibrato: 0.12, vibRate: 13 });
        for (let i = 0; i < 4; i++) this.tone({ freq: r(300, 600), freqEnd: r(700, 1100), dur: 0.06, type: 'sine', gain: 0.08, delay: 0.2 + i * r(0.12, 0.2) });
        break;
      case 'jubel':
        for (let i = 0; i < 2; i++) {
          this.voice({ f0: 130 * p * (i ? 1.18 : 1), dur: r(0.45, 0.6), delay: i * 0.52, gain: g, pitch: [[0, 0.9], [0.5, 1.25], [1, 1.12]],
            open: [[0, 400], [0.3, 2200 * k], [1, 900]], amp: [[0.08, 0.45], [0.5, 0.6], [1, 0]], formants: a, breath: 0.05 });
        }
        break;
      default:
        break;
    }
  }

  // Passenden Laut zum Anlass wählen – nie zweimal hintereinander derselbe
  cattle(event, v = {}, gain = 1) {
    if (!this.ok) return;
    const thr = { hurt: 220, select: 300, turnEnd: 600, attack: 300, triumph: 500 }[event];
    if (thr && !this.throttle(`cattle-${event}`, thr)) return;
    const bull = !!v.stier;
    const pools = {
      select: bull ? ['bruellen', 'schnauben', 'muh', 'brummeln', 'muuuh', 'mh'] : ['muh', 'muhmuh', 'mh', 'muuuh', 'brummeln', 'muh'],
      hurt: bull ? ['schnauben', 'aua', 'brummeln'] : ['aua', 'mh', 'aua'],
      attack: bull ? ['bruellen', 'schnauben'] : ['muh', 'aua'],
      death: ['stoehnen', 'muuuh', 'stoehnen'],
      drown: ['gurgeln'],
      triumph: bull ? ['bruellen', 'jubel'] : ['jubel', 'muhmuh'],
      turnEnd: ['brummeln', 'schnauben', 'mh'],
    };
    const pool = pools[event] || pools.select;
    this.lastVoice = this.lastVoice || {};
    let kind = pool[Math.floor(Math.random() * pool.length)];
    for (let i = 0; i < 4 && kind === this.lastVoice[event] && pool.length > 1; i++) kind = pool[Math.floor(Math.random() * pool.length)];
    this.lastVoice[event] = kind;
    this.cattleSound(kind, v, gain);
  }

  victory() {
    if (!this.ok) return;
    const notes = [523, 659, 784, 1047, 784, 1047];
    notes.forEach((f, i) => {
      this.tone({ freq: f, dur: 0.22, type: 'square', gain: 0.1, delay: i * 0.14 });
      this.tone({ freq: f / 2, dur: 0.22, type: 'triangle', gain: 0.15, delay: i * 0.14 });
    });
    this.bell(0.3, 0.9, 1);
  }

  defeat() {
    if (!this.ok) return;
    [392, 370, 349, 262].forEach((f, i) => this.tone({ freq: f, dur: 0.4, type: 'triangle', gain: 0.2, delay: i * 0.3 }));
  }

  // --- Polka-Musik --------------------------------------------------------
  startMusic() {
    this.wantMusic = true;
    if (!this.ctx || this.musicOn) return;
    this.musicOn = true;
    const c = this.ctx;
    const bpm = 132;
    const beat = 60 / bpm / 2; // Achtel
    let step = 0;
    let next = c.currentTime + 0.1;
    // Harmonien: C F G C | C F G C | F C G C | F C G C
    const prog = [0, 5, 7, 0, 0, 5, 7, 0, 5, 0, 7, 0, 5, 0, 7, 0];
    const mel = [
      [12, 16, 19, 16], [17, 21, 17, 14], [19, 17, 14, 11], [12, -1, 12, -1],
      [12, 16, 19, 24], [21, 17, 21, 24], [23, 19, 17, 14], [12, -1, -1, -1],
      [17, 21, 24, 21], [19, 16, 12, 16], [14, 17, 19, 17], [16, 12, -1, 12],
      [17, 21, 24, 26], [24, 19, 16, 19], [17, 14, 11, 14], [12, -1, -1, -1],
    ];
    const root = 130.81; // C3
    const hz = (semi) => root * Math.pow(2, semi / 12);
    const sched = () => {
      if (!this.musicOn) return;
      while (next < c.currentTime + 0.25) {
        const bar = Math.floor(step / 4) % 16;
        const pos = step % 4;
        const ch = prog[bar];
        const g = this.musicGain;
        if (pos === 0 || pos === 2) {
          const bassNote = pos === 0 ? ch - 12 : ch - 5;
          scheduleTone(this, hz(bassNote), next, beat * 1.6, 'triangle', 0.32, g);
        } else {
          [0, 4, 7].forEach((iv) => scheduleTone(this, hz(ch + iv + 12), next, beat * 0.7, 'square', 0.035, g));
        }
        const m = mel[bar][pos];
        if (m >= 0) scheduleTone(this, hz(m + 12), next, beat * 0.9, 'square', 0.045, g);
        next += beat;
        step++;
      }
    };
    this._musicTimer = setInterval(sched, 60);
    sched();
  }

  stopMusic() {
    this.wantMusic = false;
    this.musicOn = false;
    if (this._musicTimer) clearInterval(this._musicTimer);
    this._musicTimer = null;
  }
}

function scheduleTone(a, freq, t, dur, type, gain, dest) {
  const c = a.ctx;
  const o = c.createOscillator();
  o.type = type;
  o.frequency.value = freq;
  const g = c.createGain();
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(gain, t + 0.01);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g).connect(dest);
  o.start(t);
  o.stop(t + dur + 0.02);
}

export const audio = new AudioEngine();
