import React, { useRef, useCallback } from 'react';
import { Play, Pause, SkipBack, SkipForward, RotateCcw, Repeat } from 'lucide-react';
import { useAnimationStore } from '../../store/animationStore';
import { useSimulationStore } from '../../store/simulationStore';
import { useSimulation } from '../../hooks/useSimulation';

const SPEED_OPTIONS = [0.25, 0.5, 1, 2, 4];

/** Unicode subscript digits */
const SUB_DIGITS = ['₀', '₁', '₂', '₃', '₄', '₅', '₆', '₇', '₈', '₉'];
function subscript(n: number): string {
  if (n < 10) return SUB_DIGITS[n];
  return String(n).split('').map(d => SUB_DIGITS[parseInt(d)]).join('');
}

const TransportBtn: React.FC<{
  onClick: () => void;
  disabled?: boolean;
  active?: boolean;
  title: string;
  children: React.ReactNode;
}> = ({ onClick, disabled, active, title, children }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    title={title}
    className={`p-1.5 rounded-md transition-colors
               ${active ? 'bg-white/[0.08] text-qc-text-primary' : 'text-qc-text-secondary/60 hover:text-qc-text-secondary'}
               disabled:opacity-20 disabled:cursor-not-allowed`}
  >
    {children}
  </button>
);

// ─── Custom ψ Timeline ─────────────────────────────────────────────

const PsiTimeline: React.FC<{
  totalSteps: number;
  currentStep: number;
  interpolationT: number;
  onClickState: (stateIndex: number) => void;
}> = ({ totalSteps, currentStep, interpolationT, onClickState }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const numStates = totalSteps + 1;
  const hasSteps = totalSteps > 0;

  // Progress as a fraction [0, 1] across the full timeline
  const progress = hasSteps
    ? (currentStep + interpolationT) / totalSteps
    : 0;

  const handleTrackClick = useCallback((e: React.MouseEvent) => {
    if (!trackRef.current || !hasSteps) return;
    const rect = trackRef.current.getBoundingClientRect();
    const frac = (e.clientX - rect.left) / rect.width;
    // Snap to nearest ψ state
    const stateIndex = Math.round(frac * totalSteps);
    onClickState(Math.max(0, Math.min(totalSteps, stateIndex)));
  }, [totalSteps, hasSteps, onClickState]);

  if (!hasSteps) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <span className="text-[11px] text-qc-text-secondary/25 font-mono italic">
          ψ₀
        </span>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col justify-center gap-0.5 min-w-0">
      {/* Track area */}
      <div
        ref={trackRef}
        className="relative h-4 cursor-pointer"
        onClick={handleTrackClick}
      >
        {/* Background track line */}
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/[0.06] -translate-y-1/2" />

        {/* Progress fill */}
        <div
          className="absolute top-1/2 left-0 h-[1px] bg-white/[0.15] -translate-y-1/2 transition-[width] duration-75"
          style={{ width: `${progress * 100}%` }}
        />

        {/* ψ tick marks */}
        {Array.from({ length: numStates }, (_, k) => {
          const pct = totalSteps > 0 ? (k / totalSteps) * 100 : 0;
          const isActive = (
            (currentStep === k - 1 && interpolationT >= 0.9) ||
            (currentStep === k && interpolationT < 0.1) ||
            (k === 0 && currentStep === 0 && interpolationT < 0.1) ||
            (k === totalSteps && currentStep === totalSteps - 1 && interpolationT >= 0.9)
          );
          const isPast = k <= currentStep || (k === currentStep + 1 && interpolationT >= 0.9);

          return (
            <div
              key={k}
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center"
              style={{ left: `${pct}%` }}
              onClick={(e) => { e.stopPropagation(); onClickState(k); }}
            >
              {/* Tick dot */}
              <div
                className={`rounded-full transition-all duration-150 ${
                  isActive
                    ? 'w-2 h-2 bg-white/40'
                    : isPast
                    ? 'w-1.5 h-1.5 bg-white/15'
                    : 'w-1 h-1 bg-white/[0.06]'
                }`}
              />
            </div>
          );
        })}

        {/* Playhead thumb */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full
                     bg-white/30 border border-white/20 shadow transition-[left] duration-75"
          style={{ left: `${progress * 100}%` }}
        />
      </div>

      {/* ψ labels row */}
      <div className="relative h-5">
        {Array.from({ length: numStates }, (_, k) => {
          const pct = totalSteps > 0 ? (k / totalSteps) * 100 : 0;
          const isActive = (
            (currentStep === k - 1 && interpolationT >= 0.9) ||
            (currentStep === k && interpolationT < 0.1) ||
            (k === 0 && currentStep === 0 && interpolationT < 0.1) ||
            (k === totalSteps && currentStep === totalSteps - 1 && interpolationT >= 0.9)
          );
          const isPast = k <= currentStep || (k === currentStep + 1 && interpolationT >= 0.9);

          return (
            <span
              key={k}
              className={`absolute -translate-x-1/2 font-mono italic transition-colors cursor-pointer
                         hover:text-white/50 ${
                           isActive ? 'text-white/60 text-[14px]' : isPast ? 'text-white/25 text-[13px]' : 'text-white/[0.08] text-[12px]'
                         }`}
              style={{ left: `${pct}%` }}
              onClick={(e) => { e.stopPropagation(); onClickState(k); }}
            >
              ψ{subscript(k)}
            </span>
          );
        })}
      </div>
    </div>
  );
};

// ─── Main PlaybackBar ──────────────────────────────────────────────

export const PlaybackBar: React.FC = () => {
  const { isPlaying, speed, looping, togglePlay, setSpeed, resetTime, toggleLoop } = useAnimationStore();
  const { currentStep, interpolationT } = useSimulationStore();
  const { stepForward, stepBackward, totalSteps } = useSimulation();
  const setStep = useSimulationStore((s) => s.setStep);

  const hasSteps = totalSteps > 0;

  const handleClickState = useCallback((stateIndex: number) => {
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
    <div className="h-[72px] flex items-center gap-1.5 px-3 border-t border-qc-border bg-qc-surface">
      {/* Transport controls */}
      <TransportBtn onClick={() => { resetTime(); if (hasSteps) setStep(0); }} disabled={!hasSteps} title="Reset">
        <RotateCcw className="w-3 h-3" />
      </TransportBtn>
      <TransportBtn onClick={stepBackward} disabled={!hasSteps || currentStep <= 0} title="Step back">
        <SkipBack className="w-3 h-3" />
      </TransportBtn>
      <TransportBtn onClick={togglePlay} disabled={!hasSteps} active={isPlaying} title={isPlaying ? 'Pause' : 'Play'}>
        {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
      </TransportBtn>
      <TransportBtn onClick={stepForward} disabled={!hasSteps || currentStep >= totalSteps - 1} title="Step forward">
        <SkipForward className="w-3 h-3" />
      </TransportBtn>
      <TransportBtn onClick={toggleLoop} active={looping} title="Loop">
        <Repeat className="w-3 h-3" />
      </TransportBtn>

      <div className="w-px h-5 bg-qc-border mx-0.5" />

      {/* State counter */}
      <span className="text-[13px] text-qc-text-secondary/40 font-mono italic min-w-[36px]">
        {hasSteps ? `ψ${subscript(currentStep + (interpolationT >= 0.9 ? 1 : 0))}` : 'ψ₀'}
      </span>

      {/* ψ timeline */}
      <PsiTimeline
        totalSteps={totalSteps}
        currentStep={currentStep}
        interpolationT={interpolationT}
        onClickState={handleClickState}
      />

      <div className="w-px h-5 bg-qc-border mx-0.5" />

      {/* Speed */}
      <div className="flex items-center gap-0.5">
        {SPEED_OPTIONS.map((s) => (
          <button
            key={s}
            onClick={() => setSpeed(s)}
            className={`px-1.5 py-0.5 rounded text-[9px] font-mono transition-colors ${
              Math.abs(speed - s) < 0.01
                ? 'bg-white/[0.08] text-qc-text-primary'
                : 'text-qc-text-secondary/40 hover:text-qc-text-secondary'
            }`}
          >
            {s}×
          </button>
        ))}
      </div>
    </div>
  );
};
