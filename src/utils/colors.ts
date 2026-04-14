/** Sunset color ramp — maps a value in [0, 1] to a hex color */
const SUNSET_STOPS = [
  { t: 0.0, r: 26, g: 5, b: 51 },    // #1a0533
  { t: 0.25, r: 107, g: 29, b: 94 },  // #6b1d5e
  { t: 0.5, r: 201, g: 66, b: 119 },  // #c94277
  { t: 0.75, r: 242, g: 138, b: 46 }, // #f28a2e
  { t: 1.0, r: 253, g: 231, b: 76 },  // #fde74c
];

export function sunsetColor(t: number): string {
  const clamped = Math.max(0, Math.min(1, t));

  // Find the two stops to interpolate between
  for (let i = 0; i < SUNSET_STOPS.length - 1; i++) {
    const a = SUNSET_STOPS[i];
    const b = SUNSET_STOPS[i + 1];
    if (clamped >= a.t && clamped <= b.t) {
      const f = (clamped - a.t) / (b.t - a.t);
      const r = Math.round(a.r + (b.r - a.r) * f);
      const g = Math.round(a.g + (b.g - a.g) * f);
      const bl = Math.round(a.b + (b.b - a.b) * f);
      return `rgb(${r},${g},${bl})`;
    }
  }

  return 'rgb(253,231,76)';
}

/** Map a phase angle [-π, π] to a sunset color */
export function phaseToColor(phase: number): string {
  const normalized = (phase + Math.PI) / (2 * Math.PI); // [0, 1]
  return sunsetColor(normalized);
}

/** Map a phase angle to a hue value [0, 360] */
export function phaseToHue(phase: number): number {
  return ((phase + Math.PI) / (2 * Math.PI)) * 360;
}

/** Gate colors from the design spec */
export const GATE_COLORS: Record<string, string> = {
  H: '#ff6b35',
  X: '#ff2e63',
  Y: '#08d9d6',
  Z: '#6b5ce7',
  S: '#38b764',
  T: '#38b764',
  Rx: '#ff6b35',
  Ry: '#ff6b35',
  Rz: '#ff6b35',
  CNOT: '#ff2e63',
  CZ: '#6b5ce7',
  SWAP: '#08d9d6',
  Toffoli: '#ff2e63',
  Measure: '#8888a0',
};
