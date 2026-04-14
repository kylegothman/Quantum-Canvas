import type { Circuit, PlacedGate, Moment } from './circuit';
import { nextGateId } from './circuit';
import { GATE_REGISTRY, H, X, Y, Z, S, T, Rx, Ry, Rz, CNOT, CZ, SWAP, TOFFOLI, MEASURE } from './gates';
import type { GateDefinition } from './gates';

// ─── Serializer: Circuit → QASM ────────────────────────────────────

export function circuitToQasm(circuit: Circuit): string {
  const lines: string[] = [];
  lines.push('OPENQASM 2.0;');
  lines.push('include "qelib1.inc";');
  lines.push('');
  lines.push(`qreg q[${circuit.numQubits}];`);
  lines.push(`creg c[${circuit.numQubits}];`);
  lines.push('');

  for (const moment of circuit.moments) {
    // Add barrier comment for readability if multiple gates in moment
    if (moment.gates.length > 1) {
      lines.push('// parallel gates');
    }

    for (const gate of moment.gates) {
      const qasmLine = gateToQasm(gate);
      if (qasmLine) lines.push(qasmLine);
    }
  }

  return lines.join('\n') + '\n';
}

function gateToQasm(pg: PlacedGate): string | null {
  const name = pg.gate.name;
  const targets = pg.targets;
  const controls = pg.controls || [];

  switch (name) {
    case 'H':
      return `h q[${targets[0]}];`;
    case 'X':
      return `x q[${targets[0]}];`;
    case 'Y':
      return `y q[${targets[0]}];`;
    case 'Z':
      return `z q[${targets[0]}];`;
    case 'S':
      return `s q[${targets[0]}];`;
    case 'T':
      return `t q[${targets[0]}];`;
    case 'Rx':
      return `rx(${formatAngle(pg.params?.[0] ?? Math.PI)}) q[${targets[0]}];`;
    case 'Ry':
      return `ry(${formatAngle(pg.params?.[0] ?? Math.PI)}) q[${targets[0]}];`;
    case 'Rz':
      return `rz(${formatAngle(pg.params?.[0] ?? Math.PI)}) q[${targets[0]}];`;
    case 'CNOT':
      return `cx q[${controls[0]}], q[${targets[0]}];`;
    case 'CZ':
      return `cz q[${targets[0]}], q[${targets[1]}];`;
    case 'SWAP':
      return `swap q[${targets[0]}], q[${targets[1]}];`;
    case 'Toffoli':
      return `ccx q[${controls[0]}], q[${controls[1] ?? targets[0]}], q[${targets[targets.length - 1]}];`;
    case 'Measure':
      return `measure q[${targets[0]}] -> c[${targets[0]}];`;
    default:
      return `// unknown gate: ${name}`;
  }
}

function formatAngle(radians: number): string {
  // Check for clean fractions of pi
  const piRatio = radians / Math.PI;
  if (Math.abs(piRatio - 1) < 1e-10) return 'pi';
  if (Math.abs(piRatio + 1) < 1e-10) return '-pi';
  if (Math.abs(piRatio - 0.5) < 1e-10) return 'pi/2';
  if (Math.abs(piRatio + 0.5) < 1e-10) return '-pi/2';
  if (Math.abs(piRatio - 0.25) < 1e-10) return 'pi/4';
  if (Math.abs(piRatio + 0.25) < 1e-10) return '-pi/4';
  if (Math.abs(piRatio - 0.75) < 1e-10) return '3*pi/4';
  if (Math.abs(piRatio - 1 / 3) < 1e-10) return 'pi/3';
  if (Math.abs(piRatio - 1 / 6) < 1e-10) return 'pi/6';
  // Fall back to decimal
  return radians.toFixed(6).replace(/\.?0+$/, '');
}

// ─── Parser: QASM → Circuit ────────────────────────────────────────

export interface QasmParseResult {
  circuit: Circuit | null;
  errors: QasmError[];
}

export interface QasmError {
  line: number;
  message: string;
}

export function qasmToCircuit(qasm: string): QasmParseResult {
  const lines = qasm.split('\n');
  const errors: QasmError[] = [];
  let numQubits = 0;
  const moments: Moment[] = [];

  // Current moment: we put each gate statement into its own moment for simplicity.
  // A smarter approach would pack non-overlapping gates into the same moment.
  const gateQueue: PlacedGate[] = [];

  for (let i = 0; i < lines.length; i++) {
    const lineNum = i + 1;
    const raw = lines[i].trim();

    // Skip empty lines and comments
    if (!raw || raw.startsWith('//') || raw.startsWith('OPENQASM') || raw.startsWith('include')) {
      continue;
    }

    // Parse qreg
    const qregMatch = raw.match(/^qreg\s+\w+\[(\d+)\];$/);
    if (qregMatch) {
      numQubits = parseInt(qregMatch[1]);
      continue;
    }

    // Skip creg
    if (raw.startsWith('creg')) continue;

    // Parse barrier
    if (raw.startsWith('barrier')) {
      // Flush pending gates into a moment
      if (gateQueue.length > 0) {
        moments.push({ gates: [...gateQueue] });
        gateQueue.length = 0;
      }
      continue;
    }

    // Parse gate statements
    const parsed = parseGateLine(raw, lineNum, numQubits);
    if (parsed.error) {
      errors.push(parsed.error);
    } else if (parsed.gate) {
      // Check if this gate conflicts with any gate in the current queue
      const newQubits = [...parsed.gate.targets, ...(parsed.gate.controls || [])];
      const conflicts = gateQueue.some(g => {
        const existing = [...g.targets, ...(g.controls || [])];
        return newQubits.some(q => existing.includes(q));
      });

      if (conflicts) {
        // Flush and start new moment
        moments.push({ gates: [...gateQueue] });
        gateQueue.length = 0;
      }

      gateQueue.push(parsed.gate);
    }
  }

  // Flush remaining gates
  if (gateQueue.length > 0) {
    moments.push({ gates: [...gateQueue] });
  }

  if (numQubits === 0 && moments.length > 0) {
    errors.push({ line: 1, message: 'No qreg declaration found' });
    return { circuit: null, errors };
  }

  return {
    circuit: numQubits > 0 ? { numQubits, moments } : null,
    errors,
  };
}

interface GateParseResult {
  gate: PlacedGate | null;
  error: QasmError | null;
}

function parseGateLine(line: string, lineNum: number, numQubits: number): GateParseResult {
  const fail = (msg: string): GateParseResult => ({
    gate: null,
    error: { line: lineNum, message: msg },
  });

  // Remove trailing semicolon
  const stmt = line.replace(/;$/, '').trim();

  // Measurement: measure q[0] -> c[0]
  const measureMatch = stmt.match(/^measure\s+q\[(\d+)\]\s*->\s*c\[(\d+)\]$/);
  if (measureMatch) {
    const qubit = parseInt(measureMatch[1]);
    if (qubit >= numQubits) return fail(`Qubit index ${qubit} out of range (max ${numQubits - 1})`);
    return { gate: { id: nextGateId(), gate: MEASURE, targets: [qubit] }, error: null };
  }

  // Single-qubit: name q[i] or name(param) q[i]
  const single = stmt.match(/^(\w+)(?:\(([^)]+)\))?\s+q\[(\d+)\]$/);
  if (single) {
    const [, name, paramStr, qubitStr] = single;
    const qubit = parseInt(qubitStr);
    if (qubit >= numQubits) return fail(`Qubit index ${qubit} out of range`);

    const gateDef = resolveGateName(name);
    if (!gateDef) return fail(`Unknown gate: ${name}`);
    if (gateDef.numQubits !== 1) return fail(`${name} is not a single-qubit gate`);

    const params = paramStr ? [parseAngleExpr(paramStr)] : undefined;
    if (params && isNaN(params[0])) return fail(`Invalid angle expression: ${paramStr}`);

    return { gate: { id: nextGateId(), gate: gateDef, targets: [qubit], params }, error: null };
  }

  // Two-qubit: name q[i], q[j]
  const two = stmt.match(/^(\w+)\s+q\[(\d+)\],\s*q\[(\d+)\]$/);
  if (two) {
    const [, name, q0Str, q1Str] = two;
    const q0 = parseInt(q0Str);
    const q1 = parseInt(q1Str);
    if (q0 >= numQubits || q1 >= numQubits) return fail(`Qubit index out of range`);

    const gateDef = resolveGateName(name);
    if (!gateDef) return fail(`Unknown gate: ${name}`);

    if (gateDef.name === 'CNOT') {
      return { gate: { id: nextGateId(), gate: CNOT, targets: [q1], controls: [q0] }, error: null };
    }

    return { gate: { id: nextGateId(), gate: gateDef, targets: [q0, q1] }, error: null };
  }

  // Three-qubit: ccx q[i], q[j], q[k]
  const three = stmt.match(/^(\w+)\s+q\[(\d+)\],\s*q\[(\d+)\],\s*q\[(\d+)\]$/);
  if (three) {
    const [, name, q0Str, q1Str, q2Str] = three;
    const q0 = parseInt(q0Str);
    const q1 = parseInt(q1Str);
    const q2 = parseInt(q2Str);
    if (q0 >= numQubits || q1 >= numQubits || q2 >= numQubits) return fail(`Qubit index out of range`);

    if (name === 'ccx') {
      return { gate: { id: nextGateId(), gate: TOFFOLI, targets: [q2], controls: [q0, q1] }, error: null };
    }

    return fail(`Unknown 3-qubit gate: ${name}`);
  }

  return fail(`Could not parse: ${line}`);
}

function resolveGateName(name: string): GateDefinition | null {
  const map: Record<string, GateDefinition> = {
    h: H, x: X, y: Y, z: Z, s: S, t: T,
    rx: Rx, ry: Ry, rz: Rz,
    cx: CNOT, cnot: CNOT,
    cz: CZ,
    swap: SWAP,
    ccx: TOFFOLI,
    measure: MEASURE,
  };
  return map[name.toLowerCase()] || null;
}

function parseAngleExpr(expr: string): number {
  const trimmed = expr.trim();

  // Handle pi expressions
  if (trimmed === 'pi') return Math.PI;
  if (trimmed === '-pi') return -Math.PI;

  // pi/N
  const piDivMatch = trimmed.match(/^(-?)pi\s*\/\s*(\d+)$/);
  if (piDivMatch) {
    const sign = piDivMatch[1] === '-' ? -1 : 1;
    return (sign * Math.PI) / parseInt(piDivMatch[2]);
  }

  // N*pi/M
  const nPiMMatch = trimmed.match(/^(-?\d+)\s*\*\s*pi\s*\/\s*(\d+)$/);
  if (nPiMMatch) {
    return (parseInt(nPiMMatch[1]) * Math.PI) / parseInt(nPiMMatch[2]);
  }

  // N*pi
  const nPiMatch = trimmed.match(/^(-?\d+\.?\d*)\s*\*\s*pi$/);
  if (nPiMatch) {
    return parseFloat(nPiMatch[1]) * Math.PI;
  }

  // Plain number
  const num = parseFloat(trimmed);
  return num;
}
