// Eingabe: Tastatur, Maus, Touch-Gesten und virtueller Joystick.
import { clamp } from './util.js';

export class Input {
  constructor(canvas) {
    this.canvas = canvas;
    this.keys = new Set();
    this.joy = { x: 0, y: 0, active: false };
    this.pointers = new Map();
    this.listeners = {};
    this.pinchDist = 0;
    this.enabled = true;
    // Maus "einfangen" (Pointer-Lock) für Desktop-Zielen wie in einem Shooter
    this.locked = false;
    this.unlockTime = 0;
    this.canLock = !!canvas.requestPointerLock && window.matchMedia && window.matchMedia('(any-pointer: fine)').matches;
    document.addEventListener('pointerlockchange', () => {
      const was = this.locked;
      this.locked = document.pointerLockElement === canvas;
      if (was && !this.locked) this.unlockTime = performance.now();
      if (was !== this.locked) this.emit('lockchange', this.locked);
    });
    document.addEventListener('pointerlockerror', () => this.emit('lockerror'));
    document.addEventListener('mousemove', (e) => {
      if (this.locked && (e.movementX || e.movementY)) this.emit('look', e.movementX, e.movementY);
    });
    document.addEventListener('mousedown', (e) => {
      if (!this.locked) return;
      e.preventDefault();
      this.emit('lockbutton', e.button, true);
    });
    document.addEventListener('mouseup', (e) => {
      if (this.locked) this.emit('lockbutton', e.button, false);
    });

    window.addEventListener('keydown', (e) => {
      if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT')) return;
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space', 'Tab'].includes(e.code)) e.preventDefault();
      if (!this.keys.has(e.code)) this.emit('keydown', e.code, e);
      this.keys.add(e.code);
    });
    window.addEventListener('keyup', (e) => {
      this.keys.delete(e.code);
      this.emit('keyup', e.code, e);
    });
    window.addEventListener('blur', () => this.keys.clear());

    this.mouseX = -1;
    this.mouseY = -1;
    this.mouseMoved = 0;
    window.addEventListener('pointermove', (e) => {
      if (e.pointerType === 'mouse' && !this.locked) {
        this.mouseMoved += Math.abs(e.clientX - this.mouseX) + Math.abs(e.clientY - this.mouseY);
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;
      }
    });
    canvas.addEventListener('pointerdown', (e) => this.onDown(e));
    window.addEventListener('pointermove', (e) => this.onMove(e));
    window.addEventListener('pointerup', (e) => this.onUp(e));
    window.addEventListener('pointercancel', (e) => this.onUp(e));
    canvas.addEventListener('wheel', (e) => {
      e.preventDefault();
      this.emit('wheel', e.deltaY > 0 ? 1 : -1, e);
    }, { passive: false });
    canvas.addEventListener('contextmenu', (e) => e.preventDefault());
    document.addEventListener('contextmenu', (e) => { if (this.locked) e.preventDefault(); });
  }

  on(name, fn) { (this.listeners[name] = this.listeners[name] || []).push(fn); }
  off(name) { delete this.listeners[name]; }
  emit(name, ...args) { (this.listeners[name] || []).forEach((f) => f(...args)); }

  requestLock() {
    if (!this.canLock || this.locked) return;
    try {
      const p = this.canvas.requestPointerLock({ unadjustedMovement: true });
      if (p && p.catch) p.catch(() => { try { this.canvas.requestPointerLock(); } catch (e) { /* egal */ } });
    } catch (e) {
      try { this.canvas.requestPointerLock(); } catch (e2) { /* egal */ }
    }
  }

  exitLock() {
    if (this.locked && document.exitPointerLock) document.exitPointerLock();
  }

  onDown(e) {
    if (this.locked) return;
    this.canvas.setPointerCapture && this.canvas.setPointerCapture(e.pointerId);
    this.pointers.set(e.pointerId, { x: e.clientX, y: e.clientY, sx: e.clientX, sy: e.clientY, t: performance.now(), button: e.button, moved: 0 });
    if (this.pointers.size === 2) {
      const [a, b] = [...this.pointers.values()];
      this.pinchDist = Math.hypot(a.x - b.x, a.y - b.y);
    }
    this.emit('anypointer');
  }

  onMove(e) {
    if (this.locked) return;
    const p = this.pointers.get(e.pointerId);
    if (!p) return;
    const dx = e.clientX - p.x, dy = e.clientY - p.y;
    p.x = e.clientX; p.y = e.clientY;
    p.moved += Math.abs(dx) + Math.abs(dy);
    if (this.pointers.size === 2) {
      const [a, b] = [...this.pointers.values()];
      const d = Math.hypot(a.x - b.x, a.y - b.y);
      if (this.pinchDist > 0 && d > 0) this.emit('zoom', this.pinchDist / d);
      this.pinchDist = d;
      return;
    }
    if (p.moved > 6) this.emit('drag', dx, dy, p.button, e.pointerType);
  }

  onUp(e) {
    if (this.locked) { this.pointers.clear(); return; }
    const p = this.pointers.get(e.pointerId);
    if (!p) return;
    this.pointers.delete(e.pointerId);
    if (p.moved < 10 && performance.now() - p.t < 450 && this.pointers.size === 0) {
      const r = this.canvas.getBoundingClientRect();
      const nx = ((e.clientX - r.left) / r.width) * 2 - 1;
      const ny = -((e.clientY - r.top) / r.height) * 2 + 1;
      this.emit('tap', nx, ny, e);
    }
    if (this.pointers.size < 2) this.pinchDist = 0;
  }

  bindJoystick(base, knob) {
    let id = null;
    let cx = 0, cy = 0, rad = 50;
    const set = (x, y) => {
      let dx = x - cx, dy = y - cy;
      const d = Math.hypot(dx, dy);
      if (d > rad) { dx = (dx / d) * rad; dy = (dy / d) * rad; }
      knob.style.transform = `translate(${dx}px, ${dy}px)`;
      const nx = dx / rad, ny = -dy / rad;
      // kleine Totzone
      this.joy.x = Math.abs(nx) < 0.12 ? 0 : nx;
      this.joy.y = Math.abs(ny) < 0.12 ? 0 : ny;
    };
    base.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      e.stopPropagation();
      id = e.pointerId;
      base.setPointerCapture(e.pointerId);
      const r = base.getBoundingClientRect();
      cx = r.left + r.width / 2;
      cy = r.top + r.height / 2;
      rad = r.width * 0.38;
      this.joy.active = true;
      set(e.clientX, e.clientY);
    });
    base.addEventListener('pointermove', (e) => {
      if (e.pointerId !== id) return;
      e.preventDefault();
      set(e.clientX, e.clientY);
    });
    const end = (e) => {
      if (e.pointerId !== id) return;
      id = null;
      this.joy.x = 0; this.joy.y = 0; this.joy.active = false;
      knob.style.transform = 'translate(0px, 0px)';
    };
    base.addEventListener('pointerup', end);
    base.addEventListener('pointercancel', end);
  }

  axis() {
    let x = 0, y = 0;
    const k = this.keys;
    if (k.has('KeyA') || k.has('ArrowLeft')) x -= 1;
    if (k.has('KeyD') || k.has('ArrowRight')) x += 1;
    if (k.has('KeyW') || k.has('ArrowUp')) y += 1;
    if (k.has('KeyS') || k.has('ArrowDown')) y -= 1;
    x += this.joy.x;
    y += this.joy.y;
    return { x: clamp(x, -1, 1), y: clamp(y, -1, 1), fine: k.has('ShiftLeft') || k.has('ShiftRight') };
  }
}
