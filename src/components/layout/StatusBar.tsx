import React, { useState } from 'react';
import { useCircuitStore } from '../../store/circuitStore';
import { useSimulationStore } from '../../store/simulationStore';
import { Keyboard } from 'lucide-react';

const SHORTCUTS = [
  ['Space', 'Play / pause'],
  ['Del / Bksp', 'Delete selected gate'],
  ['Esc', 'Deselect / close panels'],
  ['← →', 'Step through moments'],
  ['1 2 3 4', 'Switch viz tab'],
  ['⌘Z', 'Undo'],
  ['⌘⇧Z', 'Redo'],
  ['⌘E', 'Export QASM'],
  ['⌘⇧E', 'Export Qiskit Python'],
];

export const StatusBar: React.FC = () => {
  const circuit = useCircuitStore((s) => s.circuit);
  const isSimulated = useSimulationStore((s) => s.isSimulated);
  const dim = 1 << circuit.numQubits;
  const totalGates = circuit.moments.reduce((sum, m) => sum + m.gates.length, 0);
  const [showShortcuts, setShowShortcuts] = useState(false);

  return (
    <>
      <div className="h-6 flex items-center px-4 gap-4 border-t border-qc-border bg-qc-surface
                      text-[10px] text-qc-text-secondary/50 font-mono select-none">
        <span>{circuit.numQubits} qubit{circuit.numQubits !== 1 ? 's' : ''}</span>
        <span>·</span>
        <span>{circuit.moments.length} moment{circuit.moments.length !== 1 ? 's' : ''}</span>
        <span>·</span>
        <span>{totalGates} gate{totalGates !== 1 ? 's' : ''}</span>
        <span>·</span>
        <span>{dim} amplitudes</span>
        <div className="flex-1" />
        <button
          onClick={() => setShowShortcuts(!showShortcuts)}
          className="flex items-center gap-1 hover:text-qc-text-secondary transition-colors"
        >
          <Keyboard className="w-3 h-3" />
          Shortcuts
        </button>
        <span>·</span>
        <span>{isSimulated ? 'Simulated' : 'Not simulated'}</span>
      </div>

      {/* Shortcuts overlay */}
      {showShortcuts && (
        <div className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={() => setShowShortcuts(false)}>
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative bg-qc-elevated border border-qc-border rounded-xl shadow-2xl
                          p-5 w-72" onClick={(e) => e.stopPropagation()}>
            <div className="text-xs font-medium text-qc-text-primary mb-3">Keyboard Shortcuts</div>
            <div className="space-y-1.5">
              {SHORTCUTS.map(([key, desc]) => (
                <div key={key} className="flex items-center justify-between">
                  <span className="text-[10px] text-qc-text-secondary/60">{desc}</span>
                  <kbd className="text-[9px] font-mono bg-white/[0.04] border border-white/[0.08]
                                  rounded px-1.5 py-0.5 text-qc-text-secondary/80 ml-3 whitespace-nowrap">
                    {key}
                  </kbd>
                </div>
              ))}
            </div>
            <div className="mt-3 text-[9px] text-qc-text-secondary/30 text-center">
              Right-click a gate to delete it · Drag gates to rearrange
            </div>
          </div>
        </div>
      )}
    </>
  );
};
