import { EditorView } from '@codemirror/view';
import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { tags } from '@lezer/highlight';

/** Dark editor theme matching QuantumCanvas palette */
export const qcEditorTheme = EditorView.theme({
  '&': {
    backgroundColor: '#0a0a0f',
    color: '#e8e8f0',
    fontSize: '12.5px',
    fontFamily: '"JetBrains Mono", "Fira Code", monospace',
  },
  '.cm-content': {
    caretColor: '#ff6b35',
    padding: '8px 0',
  },
  '.cm-cursor, .cm-dropCursor': {
    borderLeftColor: '#ff6b35',
    borderLeftWidth: '2px',
  },
  '&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection': {
    backgroundColor: '#ff6b3525',
  },
  '.cm-panels': {
    backgroundColor: '#141420',
    color: '#e8e8f0',
  },
  '.cm-panels.cm-panels-top': {
    borderBottom: '1px solid #2a2a40',
  },
  '.cm-searchMatch': {
    backgroundColor: '#ff6b3530',
    outline: '1px solid #ff6b3550',
  },
  '.cm-searchMatch.cm-searchMatch-selected': {
    backgroundColor: '#ff6b3550',
  },
  '.cm-activeLine': {
    backgroundColor: '#141420',
  },
  '.cm-selectionMatch': {
    backgroundColor: '#ff6b3518',
  },
  '.cm-matchingBracket, .cm-nonmatchingBracket': {
    backgroundColor: '#ff6b3530',
    outline: '1px solid #ff6b3560',
  },
  '.cm-gutters': {
    backgroundColor: '#0a0a0f',
    color: '#2a2a40',
    border: 'none',
    borderRight: '1px solid #1e1e30',
  },
  '.cm-activeLineGutter': {
    backgroundColor: '#141420',
    color: '#8888a0',
  },
  '.cm-foldPlaceholder': {
    backgroundColor: '#1e1e30',
    color: '#8888a0',
    border: 'none',
  },
  '.cm-tooltip': {
    backgroundColor: '#1e1e30',
    border: '1px solid #2a2a40',
    color: '#e8e8f0',
  },
  '.cm-tooltip .cm-tooltip-arrow:before': {
    borderTopColor: '#2a2a40',
    borderBottomColor: '#2a2a40',
  },
  '.cm-tooltip .cm-tooltip-arrow:after': {
    borderTopColor: '#1e1e30',
    borderBottomColor: '#1e1e30',
  },
  '.cm-tooltip-autocomplete': {
    '& > ul > li[aria-selected]': {
      backgroundColor: '#ff6b3520',
      color: '#e8e8f0',
    },
  },
  '.cm-line': {
    padding: '0 8px',
  },
});

/** Syntax highlighting colors */
export const qcHighlightStyle = syntaxHighlighting(
  HighlightStyle.define([
    { tag: tags.keyword, color: '#ff6b35', fontWeight: '600' },
    { tag: tags.typeName, color: '#08d9d6' },           // Gate names
    { tag: tags.variableName, color: '#6b5ce7' },       // q[0], c[0]
    { tag: tags.number, color: '#fde74c' },              // Numbers, pi
    { tag: tags.string, color: '#38b764' },              // Strings
    { tag: tags.comment, color: '#4a4a60', fontStyle: 'italic' },
    { tag: tags.punctuation, color: '#8888a0' },
    { tag: tags.operator, color: '#ff2e63' },
  ])
);
