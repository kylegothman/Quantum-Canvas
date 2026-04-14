import React from 'react';
import { Plus, Minus, ChevronLeft, ChevronRight } from 'lucide-react';
import { GATE_PALETTE } from '../../core/gates';
import type { GateDefinition } from '../../core/gates';
import { useCircuitStore } from '../../store/circuitStore';
import { useUIStore } from '../../store/uiStore';
import { MAX_QUBITS, MIN_QUBITS } from '../../utils/constants';

const GateButton: React.FC<{
  gate: GateDefinition;
  onDragStart: () => void;
  onDragEnd: () => void;
}> = ({ gate, onDragStart, onDragEnd }) => (
  <div
    draggable
    onDragStart={(e) => {
      e.dataTransfer.setData('gate', gate.name);
      e.dataTransfer.effectAllowed = 'copy';
      onDragStart();
    }}
    onDragEnd={onDragEnd}
    className="h-9 flex items-center justify-center rounded-md cursor-grab
               active:cursor-grabbing border border-white/[0.06] bg-white/[0.03]
               hover:bg-white/[0.06] hover:border-white/[0.1]
               transition-all duration-100 group relative"
    title={gate.description}
  >
    <span className="text-[11px] font-mono font-medium text-qc-text-primary/80 group-hover:text-qc-text-primary">
      {gate.symbol.length <= 2 ? gate.symbol : gate.name}
    </span>

    {/* Tooltip */}
    <div className="absolute left-full ml-2 px-2 py-1 bg-qc-elevated border border-qc-border
                    rounded text-[10px] text-qc-text-secondary whitespace-nowrap
                    opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50
                    leading-tight max-w-[160px]">
      {gate.description}
    </div>
  </div>
);

const SectionLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="text-[9px] uppercase tracking-widest text-qc-text-secondary/50 font-medium mb-2">
    {children}
  </div>
);

export const Sidebar: React.FC = () => {
  const { circuit, setNumQubits } = useCircuitStore();
  const { sidebarCollapsed, toggleSidebar, setDraggedGate, setShowOracleDialog } = useUIStore();
  const numQubits = circuit.numQubits;

  if (sidebarCollapsed) {
    return (
      <div className="w-8 flex flex-col items-center pt-3 border-r border-qc-border bg-qc-surface">
        <button
          onClick={toggleSidebar}
          className="p-1 rounded text-qc-text-secondary hover:text-qc-text-primary"
        >
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    );
  }

  return (
    <div className="w-[152px] flex flex-col border-r border-qc-border bg-qc-surface overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2.5 border-b border-qc-border">
        <span className="text-[10px] font-medium uppercase tracking-wider text-qc-text-secondary/60">
          Gates
        </span>
        <button
          onClick={toggleSidebar}
          className="p-0.5 rounded text-qc-text-secondary/40 hover:text-qc-text-secondary"
        >
          <ChevronLeft className="w-3 h-3" />
        </button>
      </div>

      {/* Single-qubit */}
      <div className="px-3 pt-3 pb-1">
        <SectionLabel>Single</SectionLabel>
        <div className="grid grid-cols-3 gap-1.5">
          {GATE_PALETTE.single.map((gate) => (
            <GateButton
              key={gate.name}
              gate={gate}
              onDragStart={() => setDraggedGate(gate.name)}
              onDragEnd={() => setDraggedGate(null)}
            />
          ))}
        </div>
      </div>

      {/* Parametric */}
      <div className="px-3 pt-3 pb-1">
        <SectionLabel>Rotation</SectionLabel>
        <div className="grid grid-cols-3 gap-1.5">
          {GATE_PALETTE.parametric.map((gate) => (
            <GateButton
              key={gate.name}
              gate={gate}
              onDragStart={() => setDraggedGate(gate.name)}
              onDragEnd={() => setDraggedGate(null)}
            />
          ))}
        </div>
      </div>

      {/* Multi-qubit */}
      <div className="px-3 pt-3 pb-1">
        <SectionLabel>Multi-Qubit</SectionLabel>
        <div className="grid grid-cols-2 gap-1.5">
          {GATE_PALETTE.multi.map((gate) => (
            <GateButton
              key={gate.name}
              gate={gate}
              onDragStart={() => setDraggedGate(gate.name)}
              onDragEnd={() => setDraggedGate(null)}
            />
          ))}
        </div>
      </div>

      {/* Measurement */}
      <div className="px-3 pt-3 pb-2">
        <SectionLabel>Measure</SectionLabel>
        <div className="grid grid-cols-3 gap-1.5">
          {GATE_PALETTE.other.map((gate) => (
            <GateButton
              key={gate.name}
              gate={gate}
              onDragStart={() => setDraggedGate(gate.name)}
              onDragEnd={() => setDraggedGate(null)}
            />
          ))}
        </div>
      </div>

      {/* Oracle */}
      <div className="px-3 pt-3 pb-2">
        <SectionLabel>Oracle</SectionLabel>
        <button
          onClick={() => setShowOracleDialog(true)}
          className="w-full h-9 flex items-center justify-center rounded-md cursor-pointer
                     border border-white/[0.06] bg-white/[0.03]
                     hover:bg-white/[0.06] hover:border-white/[0.1]
                     transition-all duration-100"
          title="Quantum function evaluation gate Uf"
        >
          <span className="text-[11px] font-mono font-medium text-qc-text-primary/80">
            Uf Oracle
          </span>
        </button>
        <div className="text-[8px] text-white/[0.2] font-mono mt-1 leading-tight">
          Simon's, B-V, Grover, D-J, custom
        </div>
      </div>

      <div className="flex-1" />

      {/* Qubit controls */}
      <div className="px-3 py-3 border-t border-qc-border">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[9px] uppercase tracking-widest text-qc-text-secondary/50 font-medium">
            Qubits
          </span>
          <span className="text-[11px] font-mono text-qc-text-primary/70">{numQubits}</span>
        </div>
        <div className="flex gap-1.5">
          <button
            onClick={() => setNumQubits(Math.max(MIN_QUBITS, numQubits - 1))}
            disabled={numQubits <= MIN_QUBITS}
            className="flex-1 flex items-center justify-center h-7 rounded-md
                       bg-white/[0.03] border border-white/[0.06] text-qc-text-secondary
                       hover:bg-white/[0.06] hover:text-qc-text-primary
                       disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
          >
            <Minus className="w-3 h-3" />
          </button>
          <button
            onClick={() => setNumQubits(Math.min(MAX_QUBITS, numQubits + 1))}
            disabled={numQubits >= MAX_QUBITS}
            className="flex-1 flex items-center justify-center h-7 rounded-md
                       bg-white/[0.03] border border-white/[0.06] text-qc-text-secondary
                       hover:bg-white/[0.06] hover:text-qc-text-primary
                       disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
          >
            <Plus className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
