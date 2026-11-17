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

    canvas.addEventListener('pointerdown', (e) => this.onDown(e));
    window.addEventListener('pointermove', (e) => this.onMove(e));
    window.addEventListener('pointerup', (e) => this.onUp(e));
    window.addEventListener('pointercancel', (e) => this.onUp(e));
    canvas.addEventListener('wheel', (e) => {
      e.preventDefault();
      this.emit('zoom', e.deltaY > 0 ? 1.1 : 0.9);
    }, { passive: false });
    canvas.addEventListener('contextmenu', (e) => e.preventDefault());
  }

  on(name, fn) { (this.listeners[name] = this.listeners[name] || []).push(fn); }
  off(name) { delete this.listeners[name]; }
  emit(name, ...args) { (this.listeners[name] || []).forEach((f) => f(...args)); }

  onDown(e) {
    this.canvas.setPointerCapture && this.canvas.setPointerCapture(e.pointerId);
    this.pointers.set(e.pointerId, { x: e.clientX, y: e.clientY, sx: e.clientX, sy: e.clientY, t: performance.now(), button: e.button, moved: 0 });
    if (this.pointers.size === 2) {
      const [a, b] = [...this.pointers.values()];
      this.pinchDist = Math.hypot(a.x - b.x, a.y - b.y);
    }
    this.emit('anypointer');
  }

  onMove(e) {
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
