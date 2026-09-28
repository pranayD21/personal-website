/* Frame-array playback adapted from AnimASCII.js by TheGreatRambler (MIT).
 * https://github.com/TheGreatRambler/AnimASCII.js
 * See AnimASCII-LICENSE.txt. Uses a preformatted text grid instead of ROT canvas.
 * Local changes: requestAnimationFrame timing, fixed-size frames, finite playback,
 * cancellation, and text rendering that inherits the site's color and font.
 */
window.AsciiPlayer = class AsciiPlayer {
  constructor({display, src, delay = 65}) {
    this.display = display;
    this.frames = src;
    this.delay = delay;
    this.frame = null;
    this.stopped = false;
    const height = src[0].length, width = src[0][0].length;
    if (!src.every(rows => rows.length === height && rows.every(row => row.length === width))) {
      throw new Error('ASCII frames must have equal dimensions');
    }
    this.start = null;
    const draw = now => {
      if (this.stopped) return;
      if (this.start === null) this.start = now;
      const index = Math.min(Math.floor((now - this.start) / delay), src.length - 1);
      display.textContent = src[index].join('\n');
      if (index < src.length - 1) this.frame = requestAnimationFrame(draw);
    };
    this.frame = requestAnimationFrame(draw);
  }
  stop() { this.stopped = true; cancelAnimationFrame(this.frame); }
};
