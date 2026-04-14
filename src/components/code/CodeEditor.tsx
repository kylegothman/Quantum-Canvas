import React, { useRef, useEffect, useCallback, useState } from 'react';
import { EditorView, keymap, lineNumbers, drawSelection, highlightActiveLine, highlightActiveLineGutter } from '@codemirror/view';
import { EditorState } from '@codemirror/state';
import { defaultKeymap, history, historyKeymap } from '@codemirror/commands';
import { bracketMatching, foldGutter } from '@codemirror/language';
import { searchKeymap, highlightSelectionMatches } from '@codemirror/search';
import { qasm } from './qasmHighlight';
import { qcEditorTheme, qcHighlightStyle } from './editorTheme';
import { circuitToQasm, qasmToCircuit } from '../../core/qasm';
import { useCircuitStore } from '../../store/circuitStore';
import { AlertTriangle, Check, RefreshCw } from 'lucide-react';
import type { QasmError } from '../../core/qasm';

export const CodeEditor: React.FC = () => {
  const editorRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<EditorView | null>(null);
  const circuit = useCircuitStore((s) => s.circuit);
  const loadCircuit = useCircuitStore((s) => s.loadCircuit);

  const [errors, setErrors] = useState<QasmError[]>([]);
  const [syncDirection, setSyncDirection] = useState<'idle' | 'from-circuit' | 'from-code'>('idle');

  // Track whether code was changed by user (not by circuit sync)
  const userEditedRef = useRef(false);
  const suppressSyncRef = useRef(false);

  // Initialize CodeMirror
  useEffect(() => {
    if (!editorRef.current) return;

    const initialQasm = circuitToQasm(circuit);

    const updateListener = EditorView.updateListener.of((update) => {
      if (update.docChanged) {
        userEditedRef.current = true;
      }
    });

    const state = EditorState.create({
      doc: initialQasm,
      extensions: [
        lineNumbers(),
        highlightActiveLineGutter(),
        history(),
        foldGutter(),
        drawSelection(),
        EditorState.allowMultipleSelections.of(true),
        bracketMatching(),
        highlightActiveLine(),
        highlightSelectionMatches(),
        keymap.of([...defaultKeymap, ...historyKeymap, ...searchKeymap]),
        qasm(),
        qcEditorTheme,
        qcHighlightStyle,
        updateListener,
        EditorView.lineWrapping,
      ],
    });

    const view = new EditorView({
      state,
      parent: editorRef.current,
    });

    viewRef.current = view;

    return () => {
      view.destroy();
      viewRef.current = null;
    };
    // Only run once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Sync circuit → code (when circuit changes from drag-and-drop)
  useEffect(() => {
    if (suppressSyncRef.current) {
      suppressSyncRef.current = false;
      return;
    }

    const view = viewRef.current;
    if (!view || userEditedRef.current) return;

    const newQasm = circuitToQasm(circuit);
    const currentDoc = view.state.doc.toString();

    if (newQasm !== currentDoc) {
      view.dispatch({
        changes: { from: 0, to: currentDoc.length, insert: newQasm },
      });
      setErrors([]);
      setSyncDirection('from-circuit');
      setTimeout(() => setSyncDirection('idle'), 1000);
    }
  }, [circuit]);

  // Apply code → circuit
  const applyCodeToCircuit = useCallback(() => {
    const view = viewRef.current;
    if (!view) return;

    const code = view.state.doc.toString();
    const result = qasmToCircuit(code);

    if (result.errors.length > 0) {
      setErrors(result.errors);
      return;
    }

    if (result.circuit) {
      setErrors([]);
      suppressSyncRef.current = true;
      userEditedRef.current = false;
      loadCircuit(result.circuit);
      setSyncDirection('from-code');
      setTimeout(() => setSyncDirection('idle'), 1000);
    }
  }, [loadCircuit]);

  // Reset code from circuit
  const syncFromCircuit = useCallback(() => {
    const view = viewRef.current;
    if (!view) return;

    const newQasm = circuitToQasm(circuit);
    view.dispatch({
      changes: { from: 0, to: view.state.doc.toString().length, insert: newQasm },
    });
    userEditedRef.current = false;
    setErrors([]);
    setSyncDirection('from-circuit');
    setTimeout(() => setSyncDirection('idle'), 1000);
  }, [circuit]);

  return (
    <div className="flex flex-col h-full border-t border-qc-border">
      {/* Header bar */}
      <div className="flex items-center gap-2 px-3 py-1.5 bg-qc-surface border-b border-qc-border">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-qc-text-secondary">
          QASM 2.0
        </span>

        <div className="flex-1" />

        {/* Sync status */}
        {syncDirection === 'from-circuit' && (
          <span className="text-[9px] text-qc-accent-green flex items-center gap-1">
            <Check className="w-3 h-3" /> Synced from circuit
          </span>
        )}
        {syncDirection === 'from-code' && (
          <span className="text-[9px] text-qc-accent-cyan flex items-center gap-1">
            <Check className="w-3 h-3" /> Applied to circuit
          </span>
        )}

        {/* Sync from circuit button */}
        <button
          onClick={syncFromCircuit}
          className="flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium
                     text-qc-text-secondary hover:text-qc-text-primary hover:bg-qc-elevated
                     transition-colors"
          title="Reset code from circuit"
        >
          <RefreshCw className="w-3 h-3" />
          Reset
        </button>

        {/* Apply code to circuit button */}
        <button
          onClick={applyCodeToCircuit}
          className="flex items-center gap-1 px-2 py-1 rounded text-[10px] font-medium
                     bg-qc-accent-cyan/15 text-qc-accent-cyan hover:bg-qc-accent-cyan/25
                     transition-colors"
          title="Apply code changes to circuit (Ctrl+Enter)"
        >
          Apply
        </button>
      </div>

      {/* Editor */}
      <div ref={editorRef} className="flex-1 overflow-auto" />

      {/* Error panel */}
      {errors.length > 0 && (
        <div className="px-3 py-2 bg-red-950/30 border-t border-red-900/40 max-h-20 overflow-y-auto">
          {errors.map((err, i) => (
            <div key={i} className="flex items-start gap-1.5 text-[10px] text-red-400 py-0.5">
              <AlertTriangle className="w-3 h-3 mt-0.5 flex-shrink-0" />
              <span>
                Line {err.line}: {err.message}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
