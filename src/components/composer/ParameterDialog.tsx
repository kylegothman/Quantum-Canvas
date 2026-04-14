import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface ParameterDialogProps {
  gateName: string;
  position: { x: number; y: number };
  onConfirm: (params: number[]) => void;
  onCancel: () => void;
}

const ANGLE_PRESETS = [
  { label: 'π/6', value: Math.PI / 6 },
  { label: 'π/4', value: Math.PI / 4 },
  { label: 'π/3', value: Math.PI / 3 },
  { label: 'π/2', value: Math.PI / 2 },
  { label: '2π/3', value: (2 * Math.PI) / 3 },
  { label: '3π/4', value: (3 * Math.PI) / 4 },
  { label: 'π', value: Math.PI },
  { label: '−π/2', value: -Math.PI / 2 },
];

export const ParameterDialog: React.FC<ParameterDialogProps> = ({
  gateName,
  position,
  onConfirm,
  onCancel,
}) => {
  const [angle, setAngle] = useState(Math.PI / 2);
  const [customInput, setCustomInput] = useState('pi/2');
  const [useCustom, setUseCustom] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input on open
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dialogRef.current && !dialogRef.current.contains(e.target as Node)) {
        onCancel();
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [onCancel]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onCancel();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onCancel]);

  const parseAngle = (input: string): number | null => {
    const trimmed = input.trim().toLowerCase();
    if (trimmed === 'pi' || trimmed === 'π') return Math.PI;
    if (trimmed === '-pi' || trimmed === '-π') return -Math.PI;

    // pi/N or π/N
    const piDivMatch = trimmed.match(/^(-?)[pπ]i?\s*\/\s*(\d+)$/);
    if (piDivMatch) {
      const sign = piDivMatch[1] === '-' ? -1 : 1;
      return (sign * Math.PI) / parseInt(piDivMatch[2]);
    }

    // N*pi/M
    const nPiMMatch = trimmed.match(/^(-?\d+)\s*\*?\s*[pπ]i?\s*\/\s*(\d+)$/);
    if (nPiMMatch) {
      return (parseInt(nPiMMatch[1]) * Math.PI) / parseInt(nPiMMatch[2]);
    }

    // N*pi
    const nPiMatch = trimmed.match(/^(-?\d+\.?\d*)\s*\*?\s*[pπ]i?$/);
    if (nPiMatch) {
      return parseFloat(nPiMatch[1]) * Math.PI;
    }

    // Plain number
    const num = parseFloat(trimmed);
    return isNaN(num) ? null : num;
  };

  const handleSubmit = () => {
    if (useCustom) {
      const parsed = parseAngle(customInput);
      if (parsed !== null) {
        onConfirm([parsed]);
      }
    } else {
      onConfirm([angle]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
    }
  };

  // Clamp dialog position to viewport
  const left = Math.min(position.x, window.innerWidth - 260);
  const top = Math.min(position.y, window.innerHeight - 320);

  return (
    <div className="fixed inset-0 z-50" style={{ background: 'transparent' }}>
      <div
        ref={dialogRef}
        className="absolute w-56 bg-qc-elevated border border-qc-border rounded-xl shadow-2xl overflow-hidden"
        style={{ left, top }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-3 py-2 border-b border-qc-border">
          <span className="text-xs font-semibold text-qc-text-primary">
            {gateName} angle (θ)
          </span>
          <button
            onClick={onCancel}
            className="p-0.5 rounded text-qc-text-secondary hover:text-qc-text-primary"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Preset angles */}
        <div className="px-3 py-2">
          <span className="text-[9px] uppercase tracking-wider text-qc-text-secondary font-medium">
            Quick Select
          </span>
          <div className="grid grid-cols-4 gap-1 mt-1.5">
            {ANGLE_PRESETS.map((preset) => (
              <button
                key={preset.label}
                onClick={() => {
                  setAngle(preset.value);
                  setUseCustom(false);
                }}
                className={`px-1.5 py-1 rounded text-[10px] font-mono transition-colors ${
                  !useCustom && Math.abs(angle - preset.value) < 1e-10
                    ? 'bg-qc-accent-orange/20 text-qc-accent-orange border border-qc-accent-orange/40'
                    : 'bg-qc-surface text-qc-text-secondary hover:text-qc-text-primary border border-qc-border'
                }`}
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>

        {/* Custom input */}
        <div className="px-3 py-2 border-t border-qc-border">
          <span className="text-[9px] uppercase tracking-wider text-qc-text-secondary font-medium">
            Custom (supports pi expressions)
          </span>
          <input
            ref={inputRef}
            type="text"
            value={customInput}
            onChange={(e) => {
              setCustomInput(e.target.value);
              setUseCustom(true);
              const parsed = parseAngle(e.target.value);
              if (parsed !== null) setAngle(parsed);
            }}
            onKeyDown={handleKeyDown}
            placeholder="e.g. pi/4, 3*pi/2, 1.57"
            className="w-full mt-1.5 px-2 py-1.5 rounded-md text-xs font-mono
                       bg-qc-bg border border-qc-border text-qc-text-primary
                       placeholder:text-qc-text-secondary/40
                       focus:outline-none focus:border-qc-accent-orange/50"
          />

          {/* Preview */}
          <div className="mt-1.5 text-[10px] text-qc-text-secondary font-mono">
            = {angle.toFixed(4)} rad ≈ {((angle * 180) / Math.PI).toFixed(1)}°
          </div>
        </div>

        {/* Slider */}
        <div className="px-3 pb-2">
          <input
            type="range"
            min={-Math.PI}
            max={Math.PI}
            step={0.01}
            value={angle}
            onChange={(e) => {
              const val = parseFloat(e.target.value);
              setAngle(val);
              setUseCustom(false);
            }}
            className="w-full h-1 accent-qc-accent-orange cursor-pointer"
          />
          <div className="flex justify-between text-[8px] text-qc-text-secondary font-mono mt-0.5">
            <span>−π</span>
            <span>0</span>
            <span>π</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2 px-3 py-2 border-t border-qc-border">
          <button
            onClick={onCancel}
            className="flex-1 px-3 py-1.5 rounded-md text-xs font-medium
                       bg-qc-surface text-qc-text-secondary hover:text-qc-text-primary
                       transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="flex-1 px-3 py-1.5 rounded-md text-xs font-medium
                       bg-qc-accent-orange/15 text-qc-accent-orange hover:bg-qc-accent-orange/25
                       transition-colors"
          >
            Place Gate
          </button>
        </div>
      </div>
    </div>
  );
};
