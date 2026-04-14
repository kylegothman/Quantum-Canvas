import React from 'react';
import { AppShell } from './components/layout/AppShell';
import { useSimulation } from './hooks/useSimulation';
import { useAnimation } from './hooks/useAnimation';
import { useKeyboard } from './hooks/useKeyboard';

const App: React.FC = () => {
  // Initialize hooks at the top level
  useSimulation();
  useAnimation();
  useKeyboard();

  return <AppShell />;
};

export default App;
