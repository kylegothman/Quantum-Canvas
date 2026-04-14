import type { Circuit } from '../core/circuit';
import { circuitToQasm } from '../core/qasm';

/** Export circuit as QASM 2.0 text file */
export function exportQasm(circuit: Circuit): void {
  const qasm = circuitToQasm(circuit);
  downloadText(qasm, 'circuit.qasm', 'text/plain');
}

/** Export circuit as Qiskit Python script */
export function exportQiskit(circuit: Circuit): void {
  const lines: string[] = [];
  lines.push('from qiskit import QuantumCircuit');

  // Check if we need numpy for angle expressions
  const hasParametric = circuit.moments.some(m =>
    m.gates.some(g => g.params && g.params.length > 0)
  );
  if (hasParametric) {
    lines.push('import numpy as np');
  }

  lines.push('');
  lines.push(`qc = QuantumCircuit(${circuit.numQubits}, ${circuit.numQubits})`);
  lines.push('');

  for (const moment of circuit.moments) {
    for (const gate of moment.gates) {
      const targets = gate.targets;
      const controls = gate.controls || [];
      const name = gate.gate.name;

      switch (name) {
        case 'H':
          lines.push(`qc.h(${targets[0]})`);
          break;
        case 'X':
          lines.push(`qc.x(${targets[0]})`);
          break;
        case 'Y':
          lines.push(`qc.y(${targets[0]})`);
          break;
        case 'Z':
          lines.push(`qc.z(${targets[0]})`);
          break;
        case 'S':
          lines.push(`qc.s(${targets[0]})`);
          break;
        case 'T':
          lines.push(`qc.t(${targets[0]})`);
          break;
        case 'Rx':
          lines.push(`qc.rx(${formatPythonAngle(gate.params?.[0] ?? Math.PI)}, ${targets[0]})`);
          break;
        case 'Ry':
          lines.push(`qc.ry(${formatPythonAngle(gate.params?.[0] ?? Math.PI)}, ${targets[0]})`);
          break;
        case 'Rz':
          lines.push(`qc.rz(${formatPythonAngle(gate.params?.[0] ?? Math.PI)}, ${targets[0]})`);
          break;
        case 'CNOT':
          lines.push(`qc.cx(${controls[0]}, ${targets[0]})`);
          break;
        case 'CZ':
          lines.push(`qc.cz(${targets[0]}, ${targets[1]})`);
          break;
        case 'SWAP':
          lines.push(`qc.swap(${targets[0]}, ${targets[1]})`);
          break;
        case 'Toffoli':
          lines.push(`qc.ccx(${controls[0]}, ${controls[1] ?? targets[0]}, ${targets[targets.length - 1]})`);
          break;
        case 'Measure':
          lines.push(`qc.measure(${targets[0]}, ${targets[0]})`);
          break;
        default:
          lines.push(`# Unknown gate: ${name}`);
      }
    }
  }

  lines.push('');
  lines.push('# Draw the circuit');
  lines.push('print(qc.draw())');
  lines.push('');

  downloadText(lines.join('\n'), 'circuit.py', 'text/x-python');
}

/** Export current visualization as PNG screenshot */
export function exportPng(): void {
  // Try to find the active canvas element (works for all viz modes)
  const canvases = document.querySelectorAll('canvas');

  // Prefer the largest canvas (the viz panel)
  let bestCanvas: HTMLCanvasElement | null = null;
  let bestArea = 0;
  canvases.forEach((canvas) => {
    const area = canvas.width * canvas.height;
    if (area > bestArea) {
      bestArea = area;
      bestCanvas = canvas;
    }
  });

  if (!bestCanvas) {
    // Fallback: screenshot the viz container via html2canvas-style approach
    alert('No visualization canvas found. Switch to a visualization tab first.');
    return;
  }

  const link = document.createElement('a');
  link.download = 'quantum-canvas.png';
  link.href = (bestCanvas as HTMLCanvasElement).toDataURL('image/png');
  link.click();
}

/** Export circuit as JSON (for save/load) */
export function exportJson(circuit: Circuit): void {
  // Serialize circuit with gate names instead of full definitions
  const serializable = {
    numQubits: circuit.numQubits,
    moments: circuit.moments.map(m => ({
      gates: m.gates.map(g => ({
        id: g.id,
        gate: g.gate.name,
        targets: g.targets,
        controls: g.controls,
        params: g.params,
      })),
    })),
  };
  downloadText(JSON.stringify(serializable, null, 2), 'circuit.json', 'application/json');
}

// ─── Helpers ───────────────────────────────────────────────────────

function downloadText(content: string, filename: string, mimeType: string): void {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

function formatPythonAngle(radians: number): string {
  const ratio = radians / Math.PI;
  if (Math.abs(ratio - 1) < 1e-10) return 'np.pi';
  if (Math.abs(ratio + 1) < 1e-10) return '-np.pi';
  if (Math.abs(ratio - 0.5) < 1e-10) return 'np.pi/2';
  if (Math.abs(ratio + 0.5) < 1e-10) return '-np.pi/2';
  if (Math.abs(ratio - 0.25) < 1e-10) return 'np.pi/4';
  if (Math.abs(ratio + 0.25) < 1e-10) return '-np.pi/4';
  return radians.toFixed(6);
}
