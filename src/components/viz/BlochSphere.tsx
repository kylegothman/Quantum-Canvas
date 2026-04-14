import React, { useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useSimulationStore } from '../../store/simulationStore';
import { useCircuitStore } from '../../store/circuitStore';
import { computeBlochVectors } from '../../core/bloch';
import { Statevector } from '../../core/statevector';
import { partialTrace, trace } from '../../core/matrix';
import type { Complex } from '../../core/complex';
import { SingleBlochSphere } from './SingleBlochSphere';
import { EntanglementLine } from './EntanglementLines';
import { ResizableInfoPanel } from '../shared/ResizableInfoPanel';

/**
 * Compute a simple entanglement measure between two qubits.
 * Uses linear entropy of the reduced density matrix as a proxy for concurrence.
 * Returns 0 for product states, ~1 for maximally entangled.
 */
function computeEntanglement(
  amplitudes: Complex[],
  q1: number,
  q2: number,
  numQubits: number
): number {
  if (numQubits < 2) return 0;

  // Trace out everything except q1
  const traceOut1 = [];
  for (let i = 0; i < numQubits; i++) {
    if (i !== q1) traceOut1.push(i);
  }
  const rho1 = partialTrace(amplitudes, traceOut1, numQubits);

  // Linear entropy: S_L = 1 - Tr(ρ²)
  // For pure states of the full system, this directly measures entanglement
  const rhoSq = [
    [rho1[0][0].mul(rho1[0][0]).add(rho1[0][1].mul(rho1[1][0])),
     rho1[0][0].mul(rho1[0][1]).add(rho1[0][1].mul(rho1[1][1]))],
    [rho1[1][0].mul(rho1[0][0]).add(rho1[1][1].mul(rho1[1][0])),
     rho1[1][0].mul(rho1[0][1]).add(rho1[1][1].mul(rho1[1][1]))],
  ];
  const tr = trace(rhoSq).re;
  const linearEntropy = 1 - tr;

  // Scale: maximally entangled gives linearEntropy = 0.5 for qubits
  // Normalize to [0, 1]
  return Math.min(1, linearEntropy * 2);
}

// ─── Scene contents (inside Canvas) ────────────────────────────────

const BlochScene: React.FC = () => {
  const currentState = useSimulationStore((s) => s.currentState);
  const numQubits = useCircuitStore((s) => s.circuit.numQubits);

  const state = currentState || new Statevector(numQubits);
  const blochVectors = useMemo(
    () => computeBlochVectors(state.amplitudes, state.numQubits),
    [state.amplitudes, state.numQubits]
  );

  // Compute entanglement between all pairs
  const entanglementPairs = useMemo(() => {
    if (numQubits < 2) return [];
    const pairs: { q1: number; q2: number; strength: number }[] = [];
    for (let i = 0; i < numQubits; i++) {
      for (let j = i + 1; j < numQubits; j++) {
        const strength = computeEntanglement(state.amplitudes, i, j, numQubits);
        if (strength > 0.02) {
          pairs.push({ q1: i, q2: j, strength });
        }
      }
    }
    return pairs;
  }, [state.amplitudes, numQubits]);

  // Arrange spheres in a row with spacing based on qubit count
  const spacing = numQubits <= 3 ? 3.5 : numQubits <= 5 ? 3.0 : 2.6;
  const totalWidth = (numQubits - 1) * spacing;
  const startX = -totalWidth / 2;

  const spherePositions: [number, number, number][] = useMemo(
    () => Array.from({ length: numQubits }, (_, i) => [startX + i * spacing, 0, 0] as [number, number, number]),
    [numQubits, startX, spacing]
  );

  return (
    <>
      {/* Ambient light for basic visibility */}
      <ambientLight intensity={0.3} />

      {/* Bloch spheres */}
      {blochVectors.map((coords, i) => (
        <SingleBlochSphere
          key={`bloch-${i}`}
          coords={coords}
          label={`q${i}`}
          position={spherePositions[i]}
        />
      ))}

      {/* Entanglement tendrils */}
      {entanglementPairs.map(({ q1, q2, strength }) => (
        <EntanglementLine
          key={`ent-${q1}-${q2}`}
          from={spherePositions[q1]}
          to={spherePositions[q2]}
          strength={strength}
        />
      ))}

      {/* Camera controls */}
      <OrbitControls
        enableDamping
        dampingFactor={0.08}
        rotateSpeed={0.5}
        zoomSpeed={0.8}
        minDistance={3}
        maxDistance={20}
        enablePan={false}
      />
    </>
  );
};

// ─── Exported component ────────────────────────────────────────────

export const BlochSphere: React.FC = () => {
  const numQubits = useCircuitStore((s) => s.circuit.numQubits);

  const camZ = numQubits <= 2 ? 5 : numQubits <= 4 ? 7 : 9;

  return (
    <div className="w-full h-full relative">
      <Canvas
        camera={{ position: [2, 2, camZ], fov: 45, near: 0.1, far: 100 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ background: '#0a0a0f' }}
      >
        <BlochScene />
      </Canvas>

      <ResizableInfoPanel title="Bloch Spheres" position="top-left" defaultWidth={280} defaultHeight={160}>
        <div className="text-[12px] text-white/[0.75] font-mono space-y-1 leading-relaxed">
          <div>One sphere per qubit via partial trace of the full statevector.</div>
          <div className="text-[11px] text-white/[0.55]">Arrow = Bloch vector (rₓ, rᵧ, rz)</div>
          <div className="text-[11px] text-white/[0.55]">|r⃗| &lt; 1 → qubit is entangled (mixed state)</div>
          <div className="text-[11px] text-white/[0.55]">|r⃗| = 1 → qubit is in a pure state</div>
          <div className="text-[11px] text-white/[0.55]">Pink arcs = quantum coherence between qubits</div>
          <div className="text-[11px] text-white/[0.55]">Coordinates shown below each sphere</div>
        </div>
      </ResizableInfoPanel>

      <div className="absolute bottom-2 right-2 text-[9px] text-white/[0.12] font-mono">
        drag to rotate · scroll to zoom
      </div>
    </div>
  );
};
