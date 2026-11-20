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
