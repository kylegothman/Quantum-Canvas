import { useEffect } from 'react';
import { useCircuitStore } from '../store/circuitStore';
import { useAnimationStore } from '../store/animationStore';
import { useSimulationStore } from '../store/simulationStore';
import { useUIStore } from '../store/uiStore';
import type { VizMode } from '../store/uiStore';
import { exportQasm, exportQiskit } from '../utils/export';

/**
 * Global keyboard shortcuts.
 *
 * Space          Play / pause animation
 * Delete/Bksp    Delete selected gate
 * Escape         Deselect gate / close code editor
 * ← →           Step backward / forward
 * 1 2 3 4        Switch viz tab
 * Ctrl+E         Export QASM
 * Ctrl+Shift+E   Export Qiskit Python
 * Ctrl+Z         Undo
 * Ctrl+Shift+Z   Redo
 */
export function useKeyboard() {
  const { selectedGateId, removeGate, selectGate, circuit, undo, redo } = useCircuitStore();
  const { togglePlay, isPlaying } = useAnimationStore();
  const { result, currentStep, setStep } = useSimulationStore();
  const { setActiveViz, showCodeEditor, toggleCodeEditor } = useUIStore();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const target = e.target;
      // Don't capture when typing in inputs/textareas/codemirror
      if (
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        (target instanceof HTMLElement && target.closest('.cm-editor'))
      ) {
        // Only allow Escape in editors
        if (e.key !== 'Escape') return;
      }

      switch (e.key) {
        case 'Delete':
        case 'Backspace':
          if (selectedGateId) {
            e.preventDefault();
            removeGate(selectedGateId);
          }
          break;

        case ' ':
          e.preventDefault();
          togglePlay();
          break;

        case 'Escape':
          selectGate(null);
          if (showCodeEditor) toggleCodeEditor();
          break;

        case 'ArrowRight':
          if (result && currentStep < result.steps.length - 1) {
            e.preventDefault();
            setStep(currentStep + 1);
          }
          break;

        case 'ArrowLeft':
          if (currentStep > 0) {
            e.preventDefault();
            setStep(currentStep - 1);
          }
          break;

        case '1':
          if (!e.ctrlKey && !e.metaKey) setActiveViz('orbital');
          break;
        case '2':
          if (!e.ctrlKey && !e.metaKey) setActiveViz('bars');
          break;
        case '3':
          if (!e.ctrlKey && !e.metaKey) setActiveViz('bloch');
          break;
        case '4':
          if (!e.ctrlKey && !e.metaKey) setActiveViz('abstract');
          break;

        case 'e':
        case 'E':
          if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            if (e.shiftKey) {
              exportQiskit(circuit);
            } else {
              exportQasm(circuit);
            }
          }
          break;

        case 'z':
        case 'Z':
          if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            if (e.shiftKey) {
              redo();
            } else {
              undo();
            }
          }
          break;
      }
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [
    selectedGateId, removeGate, selectGate, togglePlay, isPlaying,
    result, currentStep, setStep, setActiveViz, showCodeEditor, toggleCodeEditor, circuit,
    undo, redo,
  ]);
}
