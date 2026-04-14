import React, { useCallback, useRef, useState } from 'react';
import { useCircuitStore } from '../../store/circuitStore';
import { useSimulationStore } from '../../store/simulationStore';
import { useUIStore } from '../../store/uiStore';
import { GATE_REGISTRY } from '../../core/gates';
import type { PlacedGate } from '../../core/circuit';
import type { GateDefinition } from '../../core/gates';
import { CIRCUIT } from '../../utils/constants';
import { ParameterDialog } from './ParameterDialog';
import { OracleDialog } from './OracleDialog';

const { WIRE_SPACING, SLOT_WIDTH, SLOT_GAP, GATE_SIZE, WIRE_Y_OFFSET, LABEL_WIDTH, MIN_MOMENTS } = CIRCUIT;

const STATE_TRACK_HEIGHT = 28; // Extra height for ψ labels at bottom

/** X position of state ψ_k (the state after moment k-1, or initial state for k=0) */
function stateX(k: number): number {
  return LABEL_WIDTH + k * (SLOT_WIDTH + SLOT_GAP);
}

function gateAccent(color: string, selected: boolean): string {
  return selected ? color : color + '80';
}

// ─── Sub-components ────────────────────────────────────────────────

const Wire: React.FC<{ qubit: number; width: number }> = ({ qubit, width }) => {
  const y = WIRE_Y_OFFSET + qubit * WIRE_SPACING;
  return <line x1={LABEL_WIDTH} y1={y} x2={width} y2={y} stroke="#1e1e30" strokeWidth={1} />;
};

const QubitLabel: React.FC<{ qubit: number }> = ({ qubit }) => {
  const y = WIRE_Y_OFFSET + qubit * WIRE_SPACING;
  return (
    <g>
      <text x={10} y={y + 1} fill="#555568" fontSize={10}
        fontFamily="'JetBrains Mono', monospace" dominantBaseline="middle">
        q{qubit}
      </text>
      <text x={32} y={y + 1} fill="#2a2a3a" fontSize={9}
        fontFamily="'JetBrains Mono', monospace" dominantBaseline="middle">
        |0⟩
      </text>
    </g>
  );
};

// ─── Playhead + State Track ────────────────────────────────────────

const PlayheadAndStateTrack: React.FC<{
  numMoments: number;
  numQubits: number;
  currentStep: number;
  interpolationT: number;
  totalSteps: number;
  onClickState: (stateIndex: number) => void;
}> = ({ numMoments, numQubits, currentStep, interpolationT, totalSteps, onClickState }) => {
  const wireBottom = WIRE_Y_OFFSET + (numQubits - 1) * WIRE_SPACING + GATE_SIZE / 2 + 4;
  const trackY = wireBottom + 8;

  // Number of ψ states: moments.length + 1 (but only if there are moments)
  const numStates = Math.max(1, totalSteps + 1);

  // Playhead x position (smoothly interpolated)
  const playheadActive = totalSteps > 0 && currentStep >= 0;
  const playheadX = playheadActive
    ? stateX(currentStep) + interpolationT * (SLOT_WIDTH + SLOT_GAP)
    : stateX(0);

  return (
    <g>
      {/* Playhead vertical line */}
      {playheadActive && (
        <line
          x1={playheadX}
          y1={WIRE_Y_OFFSET - 16}
          x2={playheadX}
          y2={trackY + 14}
          stroke="rgba(255,255,255,0.08)"
          strokeWidth={1}
          strokeDasharray="2 3"
        />
      )}

      {/* State track: horizontal baseline */}
      <line
        x1={stateX(0)}
        y1={trackY}
        x2={stateX(Math.max(numMoments, totalSteps + 1))}
        y2={trackY}
        stroke="#1a1a28"
        strokeWidth={1}
      />

      {/* ψ state markers */}
      {Array.from({ length: numStates }, (_, k) => {
        const x = stateX(k);
        const isActive = playheadActive && (
          (currentStep === k - 1 && interpolationT >= 0.95) ||
          (currentStep === k && interpolationT < 0.05) ||
          (k === 0 && currentStep === 0 && interpolationT < 0.05) ||
          (k === totalSteps && currentStep === totalSteps - 1 && interpolationT >= 0.95)
        );
        const isPast = playheadActive && (
          k <= currentStep || (k === currentStep + 1 && interpolationT >= 0.95)
        );

        return (
          <g key={`psi-${k}`}
            onClick={(e) => { e.stopPropagation(); onClickState(k); }}
            style={{ cursor: 'pointer' }}>
            {/* Tick mark */}
            <line
              x1={x} y1={trackY - 3}
              x2={x} y2={trackY + 3}
              stroke={isActive ? 'rgba(255,255,255,0.5)' : isPast ? 'rgba(255,255,255,0.15)' : '#1e1e30'}
              strokeWidth={isActive ? 2 : 1}
            />
            {/* Dot */}
            <circle
              cx={x} cy={trackY}
              r={isActive ? 3 : 2}
              fill={isActive ? 'rgba(255,255,255,0.5)' : isPast ? 'rgba(255,255,255,0.12)' : '#1a1a28'}
              stroke={isActive ? 'rgba(255,255,255,0.3)' : 'none'}
              strokeWidth={1}
            />
            {/* ψ label */}
            <text
              x={x} y={trackY + 14}
              textAnchor="middle"
              fill={isActive ? 'rgba(255,255,255,0.45)' : isPast ? 'rgba(255,255,255,0.12)' : '#1a1a28'}
              fontSize={8}
              fontFamily="'JetBrains Mono', monospace"
              fontStyle="italic"
            >
              ψ{k === 0 ? '₀' : k === 1 ? '₁' : k === 2 ? '₂' : k === 3 ? '₃' : k === 4 ? '₄' :
                k === 5 ? '₅' : k === 6 ? '₆' : k === 7 ? '₇' : k === 8 ? '₈' : k === 9 ? '₉' : `${k}`}
            </text>
          </g>
        );
      })}

      {/* Animated playhead dot on the track */}
      {playheadActive && (
        <circle
          cx={playheadX}
          cy={trackY}
          r={4}
          fill="rgba(255,255,255,0.35)"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth={1}
        />
      )}
    </g>
  );
};

// ─── Gate rendering ────────────────────────────────────────────────

const GateBlock: React.FC<{
  gate: PlacedGate;
  momentIndex: number;
  selected: boolean;
  onSelect: () => void;
  onDelete: () => void;
}> = ({ gate, momentIndex, selected, onSelect, onDelete }) => {
  const allQubits = [...(gate.controls || []), ...gate.targets];
  const minQ = Math.min(...allQubits);
  const maxQ = Math.max(...allQubits);

  const cx = LABEL_WIDTH + momentIndex * (SLOT_WIDTH + SLOT_GAP) + SLOT_WIDTH / 2;
  const color = gate.gate.color;
  const accent = gateAccent(color, selected);
  const elements: JSX.Element[] = [];

  if (allQubits.length > 1) {
    elements.push(
      <line key="conn"
        x1={cx} y1={WIRE_Y_OFFSET + minQ * WIRE_SPACING}
        x2={cx} y2={WIRE_Y_OFFSET + maxQ * WIRE_SPACING}
        stroke={accent} strokeWidth={1.5} />
    );
  }

  if (gate.controls) {
    for (const cq of gate.controls) {
      elements.push(
        <circle key={`c-${cq}`} cx={cx} cy={WIRE_Y_OFFSET + cq * WIRE_SPACING} r={4} fill={accent} />
      );
    }
  }

  // Oracle gate: single tall box spanning all qubits
  const isOracle = gate.gate.symbol === 'Uf' && gate.targets.length > 2;
  if (isOracle) {
    const topY = WIRE_Y_OFFSET + minQ * WIRE_SPACING - GATE_SIZE / 2;
    const botY = WIRE_Y_OFFSET + maxQ * WIRE_SPACING + GATE_SIZE / 2;
    const oracleHeight = botY - topY;
    const half = GATE_SIZE / 2;

    elements.push(
      <g key="oracle">
        <rect x={cx - half} y={topY} width={GATE_SIZE} height={oracleHeight}
          rx={5} fill="#141420" stroke={selected ? '#555568' : '#2a2a3a'} strokeWidth={selected ? 1.5 : 1} />
        {/* Left accent bar */}
        <rect x={cx - half} y={topY + 4} width={2.5} height={oracleHeight - 8}
          rx={1} fill={accent} />
        {/* Uf label centered */}
        <text x={cx + 1} y={topY + oracleHeight / 2 - 6} textAnchor="middle" dominantBaseline="middle"
          fill="#c8c8d8" fontSize={12} fontFamily="'JetBrains Mono', monospace" fontWeight={600}>
          Uf
        </text>
        {/* Gate name below */}
        <text x={cx + 1} y={topY + oracleHeight / 2 + 8} textAnchor="middle" dominantBaseline="middle"
          fill="#555568" fontSize={7} fontFamily="'JetBrains Mono', monospace">
          {gate.gate.name.length > 12 ? gate.gate.name.slice(0, 12) + '…' : gate.gate.name}
        </text>
        {/* Qubit labels on the edges */}
        {gate.targets.map((tq, i) => {
          const ty = WIRE_Y_OFFSET + tq * WIRE_SPACING;
          return (
            <text key={`oq-${tq}`} x={cx + half + 4} y={ty + 1}
              dominantBaseline="middle" fill="#3a3a50" fontSize={7}
              fontFamily="'JetBrains Mono', monospace">
              {i < gate.gate.numQubits - (gate.gate.numQubits > 3 ? gate.gate.numQubits / 2 : 0)
                ? (i === 0 ? 'in' : '') : (i === gate.targets.length - 1 ? 'out' : '')}
            </text>
          );
        })}
      </g>
    );
  } else {
  // Standard gates: render per-target
  for (const tq of gate.targets) {
    const cy = WIRE_Y_OFFSET + tq * WIRE_SPACING;
    const half = GATE_SIZE / 2;

    if (gate.gate.name === 'CNOT' || gate.gate.name === 'Toffoli') {
      elements.push(
        <g key={`t-${tq}`}>
          <circle cx={cx} cy={cy} r={12} fill="transparent" stroke={accent} strokeWidth={selected ? 2 : 1.5} />
          <line x1={cx - 7} y1={cy} x2={cx + 7} y2={cy} stroke={accent} strokeWidth={1.5} />
          <line x1={cx} y1={cy - 7} x2={cx} y2={cy + 7} stroke={accent} strokeWidth={1.5} />
        </g>
      );
    } else if (gate.gate.name === 'SWAP') {
      elements.push(
        <g key={`s-${tq}`}>
          <line x1={cx - 6} y1={cy - 6} x2={cx + 6} y2={cy + 6} stroke={accent} strokeWidth={1.5} />
          <line x1={cx + 6} y1={cy - 6} x2={cx - 6} y2={cy + 6} stroke={accent} strokeWidth={1.5} />
        </g>
      );
    } else if (gate.gate.name === 'Measure') {
      elements.push(
        <g key={`m-${tq}`}>
          <rect x={cx - half} y={cy - half} width={GATE_SIZE} height={GATE_SIZE}
            rx={5} fill="#141420" stroke={selected ? '#555568' : '#2a2a3a'} strokeWidth={selected ? 1.5 : 1} />
          <path d={`M ${cx - 9} ${cy + 5} Q ${cx} ${cy - 8} ${cx + 9} ${cy + 5}`}
            fill="none" stroke="#555568" strokeWidth={1.2} />
          <line x1={cx} y1={cy + 5} x2={cx + 7} y2={cy - 5} stroke="#555568" strokeWidth={1.2} />
        </g>
      );
    } else {
      elements.push(
        <g key={`g-${tq}`}>
          <rect x={cx - half} y={cy - half} width={GATE_SIZE} height={GATE_SIZE}
            rx={5} fill="#141420" stroke={selected ? '#555568' : '#2a2a3a'} strokeWidth={selected ? 1.5 : 1} />
          <rect x={cx - half} y={cy - half + 4} width={2.5} height={GATE_SIZE - 8}
            rx={1} fill={accent} />
          <text x={cx + 1} y={cy + 1} textAnchor="middle" dominantBaseline="middle"
            fill="#c8c8d8" fontSize={gate.gate.symbol.length > 2 ? 9 : 11}
            fontFamily="'JetBrains Mono', monospace" fontWeight={500}>
            {gate.gate.symbol.length <= 2 ? gate.gate.symbol : gate.gate.name}
          </text>
          {gate.params && gate.params.length > 0 && (
            <text x={cx} y={cy + half + 9} textAnchor="middle" fill="#555568" fontSize={7}
              fontFamily="'JetBrains Mono', monospace">
              {formatAngleLabel(gate.params[0])}
            </text>
          )}
        </g>
      );
    }
  }
  } // end non-oracle else

  // Delete button when selected
  if (selected) {
    const topQ = Math.min(...allQubits);
    const btnY = WIRE_Y_OFFSET + topQ * WIRE_SPACING - GATE_SIZE / 2 - 10;
    elements.push(
      <g key="del" onClick={(e) => { e.stopPropagation(); onDelete(); }} style={{ cursor: 'pointer' }}>
        <circle cx={cx + GATE_SIZE / 2 - 2} cy={btnY} r={7} fill="#2a2a3a" stroke="#444" strokeWidth={0.5} />
        <line x1={cx + GATE_SIZE / 2 - 5} y1={btnY - 3} x2={cx + GATE_SIZE / 2 + 1} y2={btnY + 3}
          stroke="#888" strokeWidth={1.2} />
        <line x1={cx + GATE_SIZE / 2 + 1} y1={btnY - 3} x2={cx + GATE_SIZE / 2 - 5} y2={btnY + 3}
          stroke="#888" strokeWidth={1.2} />
      </g>
    );
  }

  // Drag handle overlay - sized to match the gate visual
  const primaryQ = gate.targets[0];
  const dragX = cx - GATE_SIZE / 2;
  const dragY = isOracle
    ? WIRE_Y_OFFSET + minQ * WIRE_SPACING - GATE_SIZE / 2
    : WIRE_Y_OFFSET + primaryQ * WIRE_SPACING - GATE_SIZE / 2;
  const dragH = isOracle
    ? (WIRE_Y_OFFSET + maxQ * WIRE_SPACING + GATE_SIZE / 2) - dragY
    : GATE_SIZE;

  return (
    <g>
      {elements}
      <foreignObject x={dragX} y={dragY} width={GATE_SIZE} height={dragH}
        style={{ overflow: 'visible' }}>
        <div
          draggable
          onDragStart={(e) => {
            e.dataTransfer.setData('move', gate.id);
            e.dataTransfer.effectAllowed = 'move';
            const ghost = document.createElement('div');
            ghost.style.cssText = 'width:36px;height:36px;background:rgba(20,20,32,0.9);border:1px solid #444;border-radius:5px;display:flex;align-items:center;justify-content:center;color:#c8c8d8;font:11px "JetBrains Mono",monospace;';
            ghost.textContent = gate.gate.symbol;
            document.body.appendChild(ghost);
            e.dataTransfer.setDragImage(ghost, 18, 18);
            requestAnimationFrame(() => document.body.removeChild(ghost));
          }}
          onClick={(e) => { e.stopPropagation(); onSelect(); }}
          onContextMenu={(e) => { e.preventDefault(); e.stopPropagation(); onDelete(); }}
          style={{ width: GATE_SIZE, height: dragH, cursor: 'grab', background: 'transparent' }}
          title="Drag to move · Right-click to delete"
        />
      </foreignObject>
    </g>
  );
};

function formatAngleLabel(radians: number): string {
  const ratio = radians / Math.PI;
  if (Math.abs(ratio - 1) < 1e-6) return 'π';
  if (Math.abs(ratio + 1) < 1e-6) return '−π';
  if (Math.abs(ratio - 0.5) < 1e-6) return 'π/2';
  if (Math.abs(ratio + 0.5) < 1e-6) return '−π/2';
  if (Math.abs(ratio - 0.25) < 1e-6) return 'π/4';
  if (Math.abs(ratio) < 1e-6) return '0';
  return `${ratio.toFixed(2)}π`;
}

// ─── Drop Zone ─────────────────────────────────────────────────────

const DropZone: React.FC<{
  momentIndex: number;
  qubit: number;
  highlight: 'none' | 'pending';
  onDrop: (m: number, q: number, data: { type: 'new'; gate: string } | { type: 'move'; gateId: string }, e: React.DragEvent) => void;
  onClick: () => void;
}> = ({ momentIndex, qubit, highlight, onDrop, onClick }) => {
  const [isOver, setIsOver] = useState(false);
  const cx = LABEL_WIDTH + momentIndex * (SLOT_WIDTH + SLOT_GAP) + SLOT_WIDTH / 2;
  const cy = WIRE_Y_OFFSET + qubit * WIRE_SPACING;
  const half = SLOT_WIDTH / 2 - 4;
  const active = isOver || highlight === 'pending';

  return (
    <rect x={cx - half} y={cy - half} width={half * 2} height={half * 2} rx={5}
      fill={active ? 'rgba(255,255,255,0.03)' : 'transparent'}
      stroke={active ? 'rgba(255,255,255,0.08)' : 'transparent'}
      strokeWidth={1} strokeDasharray={active ? '3 2' : undefined}
      onDragOver={(e) => { e.preventDefault(); e.dataTransfer.dropEffect = e.dataTransfer.types.includes('move') ? 'move' : 'copy'; setIsOver(true); }}
      onDragLeave={() => setIsOver(false)}
      onDrop={(e) => {
        e.preventDefault(); setIsOver(false);
        const moveId = e.dataTransfer.getData('move');
        const newGate = e.dataTransfer.getData('gate');
        if (moveId) onDrop(momentIndex, qubit, { type: 'move', gateId: moveId }, e);
        else if (newGate) onDrop(momentIndex, qubit, { type: 'new', gate: newGate }, e);
      }}
      onClick={onClick}
      style={{ cursor: highlight === 'pending' ? 'pointer' : 'default' }}
    />
  );
};

// ─── Pending state types ───────────────────────────────────────────

interface MultiQubitPending { gateName: string; gateDef: GateDefinition; firstQubit: number; momentIndex: number; }
interface ParametricPending { gateDef: GateDefinition; momentIndex: number; qubit: number; screenX: number; screenY: number; }

// ─── Main Canvas ───────────────────────────────────────────────────

export const CircuitCanvas: React.FC = () => {
  const { circuit, addGate, addMultiQubitGate, addOracleGate, removeGate, moveGate, selectGate, selectedGateId } = useCircuitStore();
  const { currentStep, interpolationT, result } = useSimulationStore();
  const { showOracleDialog, setShowOracleDialog } = useUIStore();
  const setStep = useSimulationStore((s) => s.setStep);
  const scrollRef = useRef<HTMLDivElement>(null);

  const numQubits = circuit.numQubits;
  const numMoments = Math.max(MIN_MOMENTS, circuit.moments.length + 2);
  const svgWidth = LABEL_WIDTH + numMoments * (SLOT_WIDTH + SLOT_GAP) + 40;
  const svgHeight = WIRE_Y_OFFSET + numQubits * WIRE_SPACING + STATE_TRACK_HEIGHT + 8;
  const totalSteps = result?.steps.length ?? 0;

  const [multiPending, setMultiPending] = useState<MultiQubitPending | null>(null);
  const [paramPending, setParamPending] = useState<ParametricPending | null>(null);

  const handleOracleConfirm = useCallback((gate: GateDefinition, totalQubits: number) => {
    addOracleGate(gate, totalQubits);
    setShowOracleDialog(false);
  }, [addOracleGate, setShowOracleDialog]);

  const handleDrop = useCallback((
    momentIndex: number, qubit: number,
    data: { type: 'new'; gate: string } | { type: 'move'; gateId: string },
    event: React.DragEvent
  ) => {
    if (data.type === 'move') { moveGate(data.gateId, momentIndex, qubit); return; }
    const gateDef = GATE_REGISTRY[data.gate];
    if (!gateDef) return;
    if (gateDef.numQubits === 1) {
      if (gateDef.parametric) setParamPending({ gateDef, momentIndex, qubit, screenX: event.clientX, screenY: event.clientY });
      else addGate(momentIndex, qubit, gateDef);
    } else if (gateDef.numQubits >= 2) {
      setMultiPending({ gateName: data.gate, gateDef, firstQubit: qubit, momentIndex });
    }
  }, [addGate, moveGate]);

  const handleSlotClick = useCallback((momentIndex: number, qubit: number) => {
    if (!multiPending) return;
    if (momentIndex !== multiPending.momentIndex || qubit === multiPending.firstQubit) return;
    addMultiQubitGate(multiPending.momentIndex, [multiPending.firstQubit, qubit], multiPending.gateDef);
    setMultiPending(null);
  }, [multiPending, addMultiQubitGate]);

  const handleParamConfirm = useCallback((params: number[]) => {
    if (!paramPending) return;
    addGate(paramPending.momentIndex, paramPending.qubit, paramPending.gateDef, params);
    setParamPending(null);
  }, [paramPending, addGate]);

  const handleBgClick = useCallback(() => { selectGate(null); setMultiPending(null); }, [selectGate]);

  const handleClickState = useCallback((stateIndex: number) => {
    // ψ_k → jump to step k-1 (after moment k-1) at t=1, or step 0 at t=0 for ψ₀
    if (totalSteps === 0) return;
    if (stateIndex === 0) {
      setStep(0);
      useSimulationStore.getState().setInterpolationT(0);
    } else {
      setStep(Math.min(stateIndex - 1, totalSteps - 1));
      useSimulationStore.getState().setInterpolationT(1);
    }
  }, [totalSteps, setStep]);

  return (
    <div ref={scrollRef} className="w-full h-full overflow-auto bg-qc-bg relative">
      {multiPending && (
        <div className="absolute top-2 left-1/2 -translate-x-1/2 z-10 px-4 py-1.5 rounded-full
                        bg-qc-elevated border border-white/[0.06]
                        text-qc-text-secondary text-[10px] font-medium shadow-lg flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-qc-text-secondary animate-pulse" />
          Click target qubit for {multiPending.gateName}
          <button onClick={() => setMultiPending(null)}
            className="ml-1 px-1.5 py-0.5 rounded text-[9px] bg-white/[0.04] text-qc-text-secondary/60 hover:text-qc-text-primary">
            Cancel
          </button>
        </div>
      )}

      <svg width={svgWidth} height={svgHeight} className="select-none" onClick={handleBgClick}>
        {/* Wires */}
        {Array.from({ length: numQubits }, (_, q) => <Wire key={q} qubit={q} width={svgWidth} />)}
        {Array.from({ length: numQubits }, (_, q) => <QubitLabel key={`l-${q}`} qubit={q} />)}

        {/* Moment column numbers */}
        {Array.from({ length: numMoments }, (_, m) => (
          <text key={`m-${m}`}
            x={LABEL_WIDTH + m * (SLOT_WIDTH + SLOT_GAP) + SLOT_WIDTH / 2} y={14}
            textAnchor="middle" fill="#1e1e30" fontSize={8}
            fontFamily="'JetBrains Mono', monospace">
            {m}
          </text>
        ))}

        {/* Drop zones */}
        {Array.from({ length: numMoments }, (_, m) =>
          Array.from({ length: numQubits }, (_, q) => (
            <DropZone key={`d-${m}-${q}`} momentIndex={m} qubit={q}
              highlight={multiPending && m === multiPending.momentIndex && q !== multiPending.firstQubit ? 'pending' : 'none'}
              onDrop={handleDrop} onClick={() => handleSlotClick(m, q)} />
          ))
        )}

        {/* Multi-qubit pending ring */}
        {multiPending && (() => {
          const px = LABEL_WIDTH + multiPending.momentIndex * (SLOT_WIDTH + SLOT_GAP) + SLOT_WIDTH / 2;
          const py = WIRE_Y_OFFSET + multiPending.firstQubit * WIRE_SPACING;
          return (
            <circle cx={px} cy={py} r={16} fill="none" stroke="rgba(255,255,255,0.15)"
              strokeWidth={1.5} strokeDasharray="4 3">
              <animateTransform attributeName="transform" type="rotate"
                from={`0 ${px} ${py}`} to={`360 ${px} ${py}`} dur="4s" repeatCount="indefinite" />
            </circle>
          );
        })()}

        {/* Placed gates */}
        {circuit.moments.map((moment, mi) =>
          moment.gates.map((gate) => (
            <GateBlock key={gate.id} gate={gate} momentIndex={mi}
              selected={selectedGateId === gate.id}
              onSelect={() => selectGate(selectedGateId === gate.id ? null : gate.id)}
              onDelete={() => removeGate(gate.id)} />
          ))
        )}

        {/* ψ state track + playhead */}
        <PlayheadAndStateTrack
          numMoments={numMoments}
          numQubits={numQubits}
          currentStep={currentStep}
          interpolationT={interpolationT}
          totalSteps={totalSteps}
          onClickState={handleClickState}
        />
      </svg>

      {paramPending && (
        <ParameterDialog
          gateName={paramPending.gateDef.name}
          position={{ x: paramPending.screenX, y: paramPending.screenY }}
          onConfirm={handleParamConfirm}
          onCancel={() => setParamPending(null)} />
      )}

      {showOracleDialog && (
        <OracleDialog
          maxQubits={6}
          onConfirm={handleOracleConfirm}
          onCancel={() => setShowOracleDialog(false)} />
      )}
    </div>
  );
};
