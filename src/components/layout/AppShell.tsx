import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Toolbar } from './Toolbar';
import { Sidebar } from './Sidebar';
import { StatusBar } from './StatusBar';
import { CircuitCanvas } from '../composer/CircuitCanvas';
import { VizContainer } from '../viz/VizContainer';
import { PlaybackBar } from '../controls/PlaybackBar';
import { CodeEditor } from '../code/CodeEditor';
import { useUIStore } from '../../store/uiStore';

const MIN_PANEL_PCT = 15; // Minimum panel size as percentage
const MAX_PANEL_PCT = 75;

export const AppShell: React.FC = () => {
  const showCodeEditor = useUIStore((s) => s.showCodeEditor);
  const [circuitPct, setCircuitPct] = useState(38); // Circuit panel height as % of available space
  const isDragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    isDragging.current = true;
    document.body.style.cursor = 'row-resize';
    document.body.style.userSelect = 'none';
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const y = e.clientY - rect.top;
      const pct = (y / rect.height) * 100;
      setCircuitPct(Math.max(MIN_PANEL_PCT, Math.min(MAX_PANEL_PCT, pct)));
    };

    const handleMouseUp = () => {
      if (isDragging.current) {
        isDragging.current = false;
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div className="h-screen flex flex-col bg-qc-bg overflow-hidden">
      <Toolbar />

      <div className="flex-1 flex overflow-hidden">
        <Sidebar />

        <div className="flex-1 flex flex-col overflow-hidden" ref={containerRef}>
          {/* Circuit panel */}
          <div className="flex-shrink-0 overflow-hidden" style={{ height: `${circuitPct}%` }}>
            <CircuitCanvas />
          </div>

          {/* Draggable divider */}
          <div
            className="flex-shrink-0 h-[5px] cursor-row-resize relative group"
            onMouseDown={handleMouseDown}
          >
            <div className="absolute inset-x-0 top-0 h-[1px] bg-qc-border" />
            {/* Visible grab handle */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                            w-10 h-[3px] rounded-full bg-white/[0.06] group-hover:bg-white/[0.15]
                            transition-colors" />
          </div>

          {/* Viz panel */}
          <div className="flex-1 flex flex-col overflow-hidden min-h-0">
            <VizContainer />
          </div>

          {/* Code editor (collapsible) */}
          {showCodeEditor && (
            <div className="flex-shrink-0 border-t border-qc-border" style={{ height: '28%' }}>
              <CodeEditor />
            </div>
          )}

          <PlaybackBar />
        </div>
      </div>

      <StatusBar />
    </div>
  );
};
