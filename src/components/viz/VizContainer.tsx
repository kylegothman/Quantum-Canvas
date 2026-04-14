import React, { Suspense } from 'react';
import { useUIStore, type VizMode } from '../../store/uiStore';
import { StatevectorChart } from './StatevectorChart';
import { BarChart3, Circle, Atom, Sparkles } from 'lucide-react';

const BlochSphere = React.lazy(() =>
  import('./BlochSphere').then((m) => ({ default: m.BlochSphere }))
);
const OrbitalDensity = React.lazy(() =>
  import('./OrbitalDensity').then((m) => ({ default: m.OrbitalDensity }))
);
const AbstractViz = React.lazy(() =>
  import('./AbstractViz').then((m) => ({ default: m.AbstractViz }))
);

const VIZ_TABS: { mode: VizMode; label: string; icon: React.ReactNode }[] = [
  { mode: 'orbital', label: 'Orbital', icon: <Atom className="w-3.5 h-3.5" /> },
  { mode: 'bars', label: 'Amplitudes', icon: <BarChart3 className="w-3.5 h-3.5" /> },
  { mode: 'bloch', label: 'Bloch', icon: <Circle className="w-3.5 h-3.5" /> },
  { mode: 'abstract', label: 'Q-Sphere', icon: <Sparkles className="w-3.5 h-3.5" /> },
];

const LoadingFallback: React.FC<{ label: string }> = ({ label }) => (
  <div className="flex items-center justify-center h-full gap-2">
    <div className="w-3.5 h-3.5 border-[1.5px] border-qc-text-secondary/30 border-t-qc-text-secondary/80 rounded-full animate-spin" />
    <span className="text-qc-text-secondary/50 text-xs">Loading {label}…</span>
  </div>
);

export const VizContainer: React.FC = () => {
  const { activeViz, setActiveViz } = useUIStore();

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Tab bar */}
      <div className="flex items-center gap-0.5 px-3 py-1.5 border-b border-qc-border bg-qc-surface">
        {VIZ_TABS.map((tab) => (
          <button
            key={tab.mode}
            onClick={() => setActiveViz(tab.mode)}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-medium
                       transition-colors ${
                         activeViz === tab.mode
                           ? 'bg-white/[0.08] text-qc-text-primary'
                           : 'text-qc-text-secondary/60 hover:text-qc-text-secondary hover:bg-white/[0.03]'
                       }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Viz content */}
      <div className="flex-1 overflow-hidden bg-qc-bg">
        {activeViz === 'bars' && <StatevectorChart />}
        {activeViz === 'bloch' && (
          <Suspense fallback={<LoadingFallback label="3D engine" />}>
            <BlochSphere />
          </Suspense>
        )}
        {activeViz === 'orbital' && (
          <Suspense fallback={<LoadingFallback label="orbital shader" />}>
            <OrbitalDensity />
          </Suspense>
        )}
        {activeViz === 'abstract' && (
          <Suspense fallback={<LoadingFallback label="ray marcher" />}>
            <AbstractViz />
          </Suspense>
        )}
      </div>
    </div>
  );
};
