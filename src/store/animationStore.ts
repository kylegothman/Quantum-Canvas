import { create } from 'zustand';
import { ANIMATION } from '../utils/constants';

interface AnimationState {
  isPlaying: boolean;
  speed: number;        // Multiplier: 0.25, 0.5, 1, 2, 4
  currentTime: number;  // Total animation time elapsed
  looping: boolean;

  // Actions
  play: () => void;
  pause: () => void;
  togglePlay: () => void;
  setSpeed: (speed: number) => void;
  resetTime: () => void;
  setCurrentTime: (t: number) => void;
  toggleLoop: () => void;
}

export const useAnimationStore = create<AnimationState>((set, get) => ({
  isPlaying: false,
  speed: ANIMATION.DEFAULT_SPEED,
  currentTime: 0,
  looping: false,

  play: () => set({ isPlaying: true }),
  pause: () => set({ isPlaying: false }),
  togglePlay: () => set((s) => ({ isPlaying: !s.isPlaying })),
  setSpeed: (speed) => set({ speed: Math.max(ANIMATION.MIN_SPEED, Math.min(ANIMATION.MAX_SPEED, speed)) }),
  resetTime: () => set({ currentTime: 0, isPlaying: false }),
  setCurrentTime: (t) => set({ currentTime: t }),
  toggleLoop: () => set((s) => ({ looping: !s.looping })),
}));
