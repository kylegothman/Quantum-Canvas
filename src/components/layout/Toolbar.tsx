import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, RotateCcw, Download, Code, BookOpen, FileText, FileCode, Image, Braces, Undo2, Redo2 } from 'lucide-react';
import { useCircuitStore } from '../../store/circuitStore';
import { useSimulationStore } from '../../store/simulationStore';
import { useAnimationStore } from '../../store/animationStore';
import { useUIStore } from '../../store/uiStore';
import { PRESETS } from '../../core/presets';
import { exportQasm, exportQiskit, exportPng, exportJson } from '../../utils/export';

const ToolbarButton: React.FC<{
  onClick?: () => void;
  active?: boolean;
  children: React.ReactNode;
}> = ({ onClick, active, children }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium
               transition-colors ${
                 active
                   ? 'bg-white/[0.08] text-qc-text-primary'
                   : 'text-qc-text-secondary hover:text-qc-text-primary hover:bg-white/[0.04]'
               }`}
  >
    {children}
  </button>
);

function useDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);
  return { open, setOpen, ref };
}

export const Toolbar: React.FC = () => {
  const circuit = useCircuitStore((s) => s.circuit);
  const clearCircuit = useCircuitStore((s) => s.clearCircuit);
  const loadCircuit = useCircuitStore((s) => s.loadCircuit);
  const undo = useCircuitStore((s) => s.undo);
  const redo = useCircuitStore((s) => s.redo);
  const historyIndex = useCircuitStore((s) => s.historyIndex);
  const historyLength = useCircuitStore((s) => s.history.length);
  const simulate = useSimulationStore((s) => s.simulate);
  const resetSim = useSimulationStore((s) => s.reset);
  const { togglePlay, isPlaying, resetTime } = useAnimationStore();
  const toggleCodeEditor = useUIStore((s) => s.toggleCodeEditor);
  const showCodeEditor = useUIStore((s) => s.showCodeEditor);

  const canUndo = historyIndex >= 0;
  const canRedo = historyIndex < historyLength - 1;

  const presets = useDropdown();
  const exports = useDropdown();

  const handleRun = () => simulate(circuit);
  const handleReset = () => { clearCircuit(); resetSim(circuit.numQubits); resetTime(); };
  const handleLoadPreset = (index: number) => { loadCircuit(PRESETS[index].build()); presets.setOpen(false); };

  // Group presets by category
  const categories = ['basics', 'algorithms', 'error-correction'] as const;
  const categoryLabels: Record<string, string> = {
    'basics': 'Basics',
    'algorithms': 'Algorithms',
    'error-correction': 'Error Correction',
  };

  return (
    <div className="h-11 flex items-center px-4 border-b border-qc-border bg-qc-surface gap-1">
      <div className="flex items-center gap-2 mr-3">
        <span className="text-[13px] font-semibold tracking-tight text-qc-text-primary">
          QuantumCanvas
        </span>
      </div>

      <div className="w-px h-5 bg-qc-border mx-1" />

      <ToolbarButton onClick={handleRun}>
        <Play className="w-3 h-3" /> Run
      </ToolbarButton>

      <ToolbarButton onClick={togglePlay} active={isPlaying}>
        {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
        {isPlaying ? 'Pause' : 'Animate'}
      </ToolbarButton>

      <ToolbarButton onClick={handleReset}>
        <RotateCcw className="w-3 h-3" /> Reset
      </ToolbarButton>

      <div className="w-px h-5 bg-qc-border mx-1" />

      <button onClick={undo} disabled={!canUndo} title="Undo (⌘Z)"
        className={`p-1.5 rounded-md transition-colors
          ${canUndo ? 'text-qc-text-secondary/60 hover:text-qc-text-secondary hover:bg-white/[0.04]' : 'text-qc-text-secondary/20 cursor-not-allowed'}`}>
        <Undo2 className="w-3.5 h-3.5" />
      </button>
      <button onClick={redo} disabled={!canRedo} title="Redo (⌘⇧Z)"
        className={`p-1.5 rounded-md transition-colors
          ${canRedo ? 'text-qc-text-secondary/60 hover:text-qc-text-secondary hover:bg-white/[0.04]' : 'text-qc-text-secondary/20 cursor-not-allowed'}`}>
        <Redo2 className="w-3.5 h-3.5" />
      </button>

      <div className="w-px h-5 bg-qc-border mx-1" />

      {/* Presets dropdown */}
      <div className="relative" ref={presets.ref}>
        <ToolbarButton onClick={() => presets.setOpen(!presets.open)} active={presets.open}>
          <BookOpen className="w-3 h-3" /> Presets
        </ToolbarButton>

        {presets.open && (
          <div className="absolute top-full left-0 mt-1 w-60 bg-qc-elevated border border-qc-border
                          rounded-lg shadow-2xl z-50 py-1 max-h-[420px] overflow-y-auto">
            {categories.map((cat) => {
              const items = PRESETS.map((p, i) => ({ ...p, index: i })).filter(p => p.category === cat);
              if (items.length === 0) return null;
              return (
                <div key={cat}>
                  <div className="px-3 pt-2 pb-1 text-[8px] uppercase tracking-widest text-qc-text-secondary/40 font-medium">
                    {categoryLabels[cat]}
                  </div>
                  {items.map((preset) => (
                    <button
                      key={preset.name}
                      onClick={() => handleLoadPreset(preset.index)}
                      className="w-full text-left px-3 py-1.5 hover:bg-white/[0.04] transition-colors"
                    >
                      <div className="text-[11px] font-medium text-qc-text-primary">{preset.name}</div>
                      <div className="text-[9px] text-qc-text-secondary/60 mt-0.5 leading-tight">{preset.description}</div>
                    </button>
                  ))}
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="flex-1" />

      <ToolbarButton onClick={toggleCodeEditor} active={showCodeEditor}>
        <Code className="w-3 h-3" /> QASM
      </ToolbarButton>

      {/* Export dropdown */}
      <div className="relative" ref={exports.ref}>
        <ToolbarButton onClick={() => exports.setOpen(!exports.open)} active={exports.open}>
          <Download className="w-3 h-3" /> Export
        </ToolbarButton>

        {exports.open && (
          <div className="absolute top-full right-0 mt-1 w-48 bg-qc-elevated border border-qc-border
                          rounded-lg shadow-2xl z-50 py-1">
            <button
              onClick={() => { exportQasm(circuit); exports.setOpen(false); }}
              className="w-full text-left px-3 py-2 hover:bg-white/[0.04] transition-colors flex items-center gap-2"
            >
              <FileText className="w-3.5 h-3.5 text-qc-text-secondary/50" />
              <div>
                <div className="text-[11px] text-qc-text-primary">QASM 2.0</div>
                <div className="text-[9px] text-qc-text-secondary/50">circuit.qasm</div>
              </div>
            </button>
            <button
              onClick={() => { exportQiskit(circuit); exports.setOpen(false); }}
              className="w-full text-left px-3 py-2 hover:bg-white/[0.04] transition-colors flex items-center gap-2"
            >
              <FileCode className="w-3.5 h-3.5 text-qc-text-secondary/50" />
              <div>
                <div className="text-[11px] text-qc-text-primary">Qiskit Python</div>
                <div className="text-[9px] text-qc-text-secondary/50">circuit.py</div>
              </div>
            </button>
            <button
              onClick={() => { exportPng(); exports.setOpen(false); }}
              className="w-full text-left px-3 py-2 hover:bg-white/[0.04] transition-colors flex items-center gap-2"
            >
              <Image className="w-3.5 h-3.5 text-qc-text-secondary/50" />
              <div>
                <div className="text-[11px] text-qc-text-primary">Screenshot</div>
                <div className="text-[9px] text-qc-text-secondary/50">PNG of current viz</div>
              </div>
            </button>
            <button
              onClick={() => { exportJson(circuit); exports.setOpen(false); }}
              className="w-full text-left px-3 py-2 hover:bg-white/[0.04] transition-colors flex items-center gap-2"
            >
              <Braces className="w-3.5 h-3.5 text-qc-text-secondary/50" />
              <div>
                <div className="text-[11px] text-qc-text-primary">Circuit JSON</div>
                <div className="text-[9px] text-qc-text-secondary/50">Save / share</div>
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
