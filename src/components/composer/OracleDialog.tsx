import React, { useState, useMemo, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import {
  bernsteinVaziraniOracle,
  simonsOracle,
  groverOracle,
  deutschJozsaOracle,
  customOracle,
  createOracleGate,
  type OracleConfig,
} from '../../core/oracle';
import type { GateDefinition } from '../../core/gates';

interface OracleDialogProps {
  maxQubits: number;
  onConfirm: (gate: GateDefinition, totalQubits: number) => void;
  onCancel: () => void;
}

type AlgorithmType = 'simon' | 'bv' | 'grover' | 'dj' | 'custom';

export const OracleDialog: React.FC<OracleDialogProps> = ({ maxQubits, onConfirm, onCancel }) => {
  const [algorithm, setAlgorithm] = useState<AlgorithmType>('simon');
  const [numBits, setNumBits] = useState(2);
  const [secretValue, setSecretValue] = useState('11');
  const [groverTarget, setGroverTarget] = useState('11');
  const [djType, setDjType] = useState<'constant-0' | 'constant-1' | 'balanced'>('balanced');
  const [customTable, setCustomTable] = useState('');
  const [customOutBits, setCustomOutBits] = useState(1);
  const dialogRef = useRef<HTMLDivElement>(null);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onCancel(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onCancel]);

  // Max input bits based on algorithm and qubit limit
  const maxInputBits = useMemo(() => {
    switch (algorithm) {
      case 'simon': return Math.floor(maxQubits / 2); // n input + n output
      case 'bv': return maxQubits - 1; // n input + 1 output
      case 'grover': return maxQubits - 1;
      case 'dj': return maxQubits - 1;
      case 'custom': return maxQubits - customOutBits;
    }
  }, [algorithm, maxQubits, customOutBits]);

  // Clamp numBits
  useEffect(() => {
    if (numBits > maxInputBits) setNumBits(Math.max(1, maxInputBits));
  }, [maxInputBits, numBits]);

  // Build oracle config from current settings
  const oracleConfig = useMemo((): OracleConfig | null => {
    try {
      switch (algorithm) {
        case 'simon': {
          const s = parseInt(secretValue, 2);
          if (isNaN(s) || s >= (1 << numBits)) return null;
          return simonsOracle(s, numBits);
        }
        case 'bv': {
          const s = parseInt(secretValue, 2);
          if (isNaN(s) || s >= (1 << numBits)) return null;
          return bernsteinVaziraniOracle(s, numBits);
        }
        case 'grover': {
          const t = parseInt(groverTarget, 2);
          if (isNaN(t) || t >= (1 << numBits)) return null;
          return groverOracle(t, numBits);
        }
        case 'dj':
          return deutschJozsaOracle(djType, numBits);
        case 'custom': {
          const values = customTable.split(',').map(s => parseInt(s.trim()));
          if (values.length !== (1 << numBits) || values.some(isNaN)) return null;
          return customOracle('Custom', numBits, customOutBits, values);
        }
      }
    } catch { return null; }
  }, [algorithm, numBits, secretValue, groverTarget, djType, customTable, customOutBits]);

  const totalQubits = oracleConfig
    ? oracleConfig.inputBits + oracleConfig.outputBits
    : 0;

  const handleConfirm = () => {
    if (!oracleConfig) return;
    const gate = createOracleGate(oracleConfig);
    onConfirm(gate, totalQubits);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" onClick={onCancel}>
      <div className="absolute inset-0 bg-black/60" />
      <div ref={dialogRef}
        className="relative bg-qc-elevated border border-white/[0.08] rounded-xl shadow-2xl w-[420px] max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}>

        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06]">
          <span className="text-sm font-medium text-qc-text-primary">Oracle Gate (Uf)</span>
          <button onClick={onCancel} className="p-1 rounded text-qc-text-secondary hover:text-qc-text-primary">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Algorithm selector */}
        <div className="px-4 py-3 border-b border-white/[0.04]">
          <label className="text-[10px] uppercase tracking-wider text-white/[0.35] font-mono">Algorithm</label>
          <div className="grid grid-cols-5 gap-1 mt-2">
            {([
              ['simon', "Simon's"],
              ['bv', 'B-V'],
              ['grover', 'Grover'],
              ['dj', 'D-J'],
              ['custom', 'Custom'],
            ] as [AlgorithmType, string][]).map(([key, label]) => (
              <button key={key}
                onClick={() => setAlgorithm(key)}
                className={`px-2 py-1.5 rounded text-[10px] font-mono transition-colors ${
                  algorithm === key
                    ? 'bg-white/[0.1] text-white'
                    : 'bg-white/[0.03] text-white/[0.4] hover:text-white/[0.6]'
                }`}>
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Parameters */}
        <div className="px-4 py-3 space-y-3">
          {/* Input bits */}
          <div>
            <label className="text-[10px] uppercase tracking-wider text-white/[0.35] font-mono">
              Input bits (n = {numBits}, total qubits = {totalQubits || '?'})
            </label>
            <input type="range" min={1} max={maxInputBits} step={1} value={numBits}
              onChange={(e) => setNumBits(parseInt(e.target.value))}
              className="w-full mt-1 accent-gray-500" />
            {totalQubits > maxQubits && (
              <div className="text-[10px] text-red-400 mt-1">
                Exceeds {maxQubits}-qubit limit. Reduce input bits.
              </div>
            )}
          </div>

          {/* Algorithm-specific parameters */}
          {(algorithm === 'simon' || algorithm === 'bv') && (
            <div>
              <label className="text-[10px] uppercase tracking-wider text-white/[0.35] font-mono">
                Secret string s (binary, {numBits} bits)
              </label>
              <input type="text" value={secretValue}
                onChange={(e) => setSecretValue(e.target.value.replace(/[^01]/g, '').slice(0, numBits))}
                placeholder={'1'.repeat(numBits)}
                className="w-full mt-1 px-2 py-1.5 rounded-md text-xs font-mono
                           bg-qc-bg border border-white/[0.06] text-qc-text-primary
                           focus:outline-none focus:border-white/[0.15]" />
              {algorithm === 'simon' && (
                <div className="text-[9px] text-white/[0.25] mt-1">
                  f(x) = f(x ⊕ s). Set s = {'0'.repeat(numBits)} for 1-to-1 function.
                </div>
              )}
            </div>
          )}

          {algorithm === 'grover' && (
            <div>
              <label className="text-[10px] uppercase tracking-wider text-white/[0.35] font-mono">
                Target state (binary, {numBits} bits)
              </label>
              <input type="text" value={groverTarget}
                onChange={(e) => setGroverTarget(e.target.value.replace(/[^01]/g, '').slice(0, numBits))}
                placeholder={'1'.repeat(numBits)}
                className="w-full mt-1 px-2 py-1.5 rounded-md text-xs font-mono
                           bg-qc-bg border border-white/[0.06] text-qc-text-primary
                           focus:outline-none focus:border-white/[0.15]" />
            </div>
          )}

          {algorithm === 'dj' && (
            <div>
              <label className="text-[10px] uppercase tracking-wider text-white/[0.35] font-mono">
                Oracle type
              </label>
              <div className="flex gap-1 mt-1">
                {(['constant-0', 'constant-1', 'balanced'] as const).map((t) => (
                  <button key={t} onClick={() => setDjType(t)}
                    className={`px-2 py-1 rounded text-[10px] font-mono transition-colors ${
                      djType === t ? 'bg-white/[0.1] text-white' : 'bg-white/[0.03] text-white/[0.4]'
                    }`}>
                    {t}
                  </button>
                ))}
              </div>
            </div>
          )}

          {algorithm === 'custom' && (
            <>
              <div>
                <label className="text-[10px] uppercase tracking-wider text-white/[0.35] font-mono">
                  Output bits (m)
                </label>
                <input type="range" min={1} max={Math.min(numBits, maxQubits - numBits)} step={1}
                  value={customOutBits}
                  onChange={(e) => setCustomOutBits(parseInt(e.target.value))}
                  className="w-full mt-1 accent-gray-500" />
                <span className="text-[10px] text-white/[0.3] font-mono">{customOutBits}</span>
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-wider text-white/[0.35] font-mono">
                  Truth table (comma-separated: f(0), f(1), ..., f({(1 << numBits) - 1}))
                </label>
                <input type="text" value={customTable}
                  onChange={(e) => setCustomTable(e.target.value)}
                  placeholder={Array.from({ length: 1 << numBits }, (_, i) => i % (1 << customOutBits)).join(',')}
                  className="w-full mt-1 px-2 py-1.5 rounded-md text-xs font-mono
                             bg-qc-bg border border-white/[0.06] text-qc-text-primary
                             focus:outline-none focus:border-white/[0.15]" />
              </div>
            </>
          )}
        </div>

        {/* Truth table preview */}
        {oracleConfig && (
          <div className="px-4 py-3 border-t border-white/[0.04]">
            <label className="text-[10px] uppercase tracking-wider text-white/[0.35] font-mono">
              Truth table preview
            </label>
            <div className="mt-1 max-h-28 overflow-y-auto font-mono text-[10px] grid grid-cols-4 gap-x-3 gap-y-0.5">
              {oracleConfig.functionTable.map((fx, x) => (
                <div key={x} className="flex gap-1">
                  <span className="text-white/[0.3]">
                    {x.toString(2).padStart(oracleConfig.inputBits, '0')}→
                  </span>
                  <span className="text-white/[0.6]">
                    {fx.toString(2).padStart(oracleConfig.outputBits, '0')}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-2 px-4 py-3 border-t border-white/[0.06]">
          <button onClick={onCancel}
            className="flex-1 px-3 py-2 rounded-md text-xs font-medium
                       bg-white/[0.03] text-white/[0.5] hover:text-white/[0.7] transition-colors">
            Cancel
          </button>
          <button onClick={handleConfirm}
            disabled={!oracleConfig || totalQubits > maxQubits}
            className="flex-1 px-3 py-2 rounded-md text-xs font-medium
                       bg-white/[0.08] text-white/[0.8] hover:bg-white/[0.12]
                       disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
            Place Oracle ({totalQubits} qubits)
          </button>
        </div>
      </div>
    </div>
  );
};
