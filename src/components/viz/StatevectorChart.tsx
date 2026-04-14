import React, { useRef, useEffect, useCallback } from 'react';
import { useSimulationStore } from '../../store/simulationStore';
import { useCircuitStore } from '../../store/circuitStore';
import { Statevector } from '../../core/statevector';
import { phaseToColor } from '../../utils/colors';
import { ResizableInfoPanel } from '../shared/ResizableInfoPanel';

export const StatevectorChart: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const currentState = useSimulationStore((s) => s.currentState);
  const numQubits = useCircuitStore((s) => s.circuit.numQubits);
  const prevBarsRef = useRef<{ prob: number; phase: number }[]>([]);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const rect = container.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.scale(dpr, dpr);

    const width = rect.width;
    const height = rect.height;
    const padding = { top: 28, right: 20, bottom: 44, left: 48 };
    const chartW = width - padding.left - padding.right;
    const chartH = height - padding.top - padding.bottom;

    // Clear
    ctx.clearRect(0, 0, width, height);

    // Get data
    const state = currentState || new Statevector(numQubits);
    const probs = state.probabilities();
    const phases = state.phases();
    const dim = probs.length;

    // Smoothly interpolate from previous values
    if (prevBarsRef.current.length !== dim) {
      prevBarsRef.current = probs.map((p, i) => ({ prob: p, phase: phases[i] }));
    }

    const barWidth = Math.min(60, (chartW / dim) * 0.7);
    const barGap = (chartW - barWidth * dim) / (dim + 1);
    const maxProb = 1; // Always scale to 1

    // Axes
    ctx.strokeStyle = '#2a2a40';
    ctx.lineWidth = 1;

    // Y axis
    ctx.beginPath();
    ctx.moveTo(padding.left, padding.top);
    ctx.lineTo(padding.left, padding.top + chartH);
    ctx.stroke();

    // X axis
    ctx.beginPath();
    ctx.moveTo(padding.left, padding.top + chartH);
    ctx.lineTo(padding.left + chartW, padding.top + chartH);
    ctx.stroke();

    // Y axis labels
    ctx.fillStyle = '#8888a0';
    ctx.font = '10px "JetBrains Mono", monospace';
    ctx.textAlign = 'right';
    for (let i = 0; i <= 4; i++) {
      const val = i / 4;
      const y = padding.top + chartH - (val * chartH);
      ctx.fillText(val.toFixed(2), padding.left - 6, y + 3);
      // Grid line
      ctx.strokeStyle = '#1e1e30';
      ctx.beginPath();
      ctx.moveTo(padding.left + 1, y);
      ctx.lineTo(padding.left + chartW, y);
      ctx.stroke();
    }

    // Title
    ctx.fillStyle = '#8888a0';
    ctx.font = '10px "JetBrains Mono", monospace';
    ctx.textAlign = 'left';
    ctx.fillText('Probability', padding.left, padding.top - 10);

    // Bars
    for (let i = 0; i < dim; i++) {
      const prob = probs[i];
      const phase = phases[i];

      // Interpolate for smooth transitions
      const prev = prevBarsRef.current[i];
      const smoothProb = prev ? prev.prob + (prob - prev.prob) * 0.3 : prob;
      prevBarsRef.current[i] = { prob: smoothProb, phase };

      const x = padding.left + barGap + i * (barWidth + barGap);
      const barH = smoothProb * chartH;
      const y = padding.top + chartH - barH;

      // Bar fill with phase-based color
      const color = prob > 1e-10 ? phaseToColor(phase) : '#1e1e30';
      ctx.fillStyle = color;

      // Rounded top corners
      const radius = Math.min(4, barWidth / 4);
      if (barH > radius * 2) {
        ctx.beginPath();
        ctx.moveTo(x, y + barH);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);
        ctx.lineTo(x + barWidth - radius, y);
        ctx.quadraticCurveTo(x + barWidth, y, x + barWidth, y + radius);
        ctx.lineTo(x + barWidth, y + barH);
        ctx.closePath();
        ctx.fill();
      } else if (barH > 0.5) {
        ctx.fillRect(x, y, barWidth, barH);
      }

      // Glow effect for non-zero bars
      if (prob > 0.01) {
        ctx.shadowColor = color;
        ctx.shadowBlur = 8;
        ctx.fillStyle = color + '40';
        ctx.fillRect(x, y, barWidth, Math.min(3, barH));
        ctx.shadowBlur = 0;
      }

      // Probability value on top of bar
      if (prob > 0.005) {
        ctx.fillStyle = '#e8e8f0';
        ctx.font = `${Math.min(10, barWidth * 0.3)}px "JetBrains Mono", monospace`;
        ctx.textAlign = 'center';
        ctx.fillText(prob.toFixed(3), x + barWidth / 2, y - 4);
      }

      // Phase indicator (small colored circle below bar)
      if (prob > 0.005) {
        const phaseY = padding.top + chartH + 20;
        const phaseR = Math.min(6, barWidth / 4);
        ctx.beginPath();
        ctx.arc(x + barWidth / 2, phaseY, phaseR, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();

        // Phase angle line inside circle
        const angle = phase;
        ctx.strokeStyle = '#e8e8f0';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(x + barWidth / 2, phaseY);
        ctx.lineTo(
          x + barWidth / 2 + Math.cos(angle) * phaseR * 0.8,
          phaseY - Math.sin(angle) * phaseR * 0.8
        );
        ctx.stroke();
      }

      // Basis state label
      ctx.fillStyle = '#8888a0';
      ctx.font = `${Math.min(10, barWidth * 0.28)}px "JetBrains Mono", monospace`;
      ctx.textAlign = 'center';
      const label = '|' + i.toString(2).padStart(numQubits, '0') + '⟩';
      ctx.fillText(label, x + barWidth / 2, padding.top + chartH + 12);
    }

    // Phase legend
    const legendY = height - 6;
    ctx.fillStyle = '#8888a0';
    ctx.font = '9px "JetBrains Mono", monospace';
    ctx.textAlign = 'center';
    ctx.fillText('phase', width / 2, legendY);

  }, [currentState, numQubits]);

  // Redraw on state changes
  useEffect(() => {
    draw();
  }, [draw]);

  // Handle resize
  useEffect(() => {
    const observer = new ResizeObserver(() => draw());
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [draw]);

  return (
    <div ref={containerRef} className="w-full h-full relative">
      <canvas ref={canvasRef} className="w-full h-full" />

      <ResizableInfoPanel title="Amplitudes" position="top-right" defaultWidth={280} defaultHeight={120}>
        <div className="text-[12px] text-white/[0.75] font-mono space-y-1 leading-relaxed">
          <div>Probability |c_k|² for each basis state.</div>
          <div className="text-[11px] text-white/[0.55]">Bar height = measurement probability</div>
          <div className="text-[11px] text-white/[0.55]">Bar color = complex phase arg(c_k)</div>
          <div className="text-[11px] text-white/[0.55]">Phase wheels below show arg(c_k) direction</div>
        </div>
      </ResizableInfoPanel>
    </div>
  );
};
