import { create } from 'zustand';

export type VizMode = 'bars' | 'bloch' | 'orbital' | 'abstract';

interface UIState {
  activeViz: VizMode;
  showCodeEditor: boolean;
  sidebarCollapsed: boolean;
  showOracleDialog: boolean;
  draggedGate: string | null;

  // Actions
  setActiveViz: (mode: VizMode) => void;
  toggleCodeEditor: () => void;
  toggleSidebar: () => void;
  setDraggedGate: (gateName: string | null) => void;
  setShowOracleDialog: (show: boolean) => void;
}

export const useUIStore = create<UIState>((set) => ({
  activeViz: 'orbital',
  showCodeEditor: false,
  sidebarCollapsed: false,
  showOracleDialog: false,
  draggedGate: null,

  setActiveViz: (mode) => set({ activeViz: mode }),
  toggleCodeEditor: () => set((s) => ({ showCodeEditor: !s.showCodeEditor })),
  toggleSidebar: () => set((s) => ({ sidebarCollapsed: !s.sidebarCollapsed })),
  setDraggedGate: (gateName) => set({ draggedGate: gateName }),
  setShowOracleDialog: (show) => set({ showOracleDialog: show }),
}));
