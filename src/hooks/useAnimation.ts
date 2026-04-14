import { useEffect, useRef } from 'react';
import { useAnimationStore } from '../store/animationStore';
import { useSimulationStore } from '../store/simulationStore';
import { ANIMATION } from '../utils/constants';

/**
 * Drives the animation loop. When playing, advances through simulation
 * steps with smooth interpolation.
 *
 * Uses refs for values that change mid-animation to avoid restarting
 * the rAF loop on every step transition.
 */
export function useAnimation() {
  const isPlaying = useAnimationStore((s) => s.isPlaying);
  const speed = useAnimationStore((s) => s.speed);
  const looping = useAnimationStore((s) => s.looping);
  const pause = useAnimationStore((s) => s.pause);

  const result = useSimulationStore((s) => s.result);
  const setStep = useSimulationStore((s) => s.setStep);
  const setInterpolationT = useSimulationStore((s) => s.setInterpolationT);

  // Refs for values that change during animation (avoids effect re-trigger)
  const rafRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);
  const progressRef = useRef<number>(0);
  const stepRef = useRef<number>(0);
  const speedRef = useRef(speed);
  const loopingRef = useRef(looping);

  // Keep refs in sync
  speedRef.current = speed;
  loopingRef.current = looping;

  // Sync step ref from store when not playing
  const currentStep = useSimulationStore((s) => s.currentStep);
  useEffect(() => {
    if (!isPlaying) {
      stepRef.current = currentStep;
    }
  }, [currentStep, isPlaying]);

  useEffect(() => {
    if (!isPlaying || !result || result.steps.length === 0) return;

    const totalSteps = result.steps.length;
    stepRef.current = Math.max(0, stepRef.current);
    progressRef.current = 0;
    lastTimeRef.current = 0;

    const animate = (timestamp: number) => {
      if (!lastTimeRef.current) {
        lastTimeRef.current = timestamp;
        rafRef.current = requestAnimationFrame(animate);
        return;
      }

      const delta = timestamp - lastTimeRef.current;
      lastTimeRef.current = timestamp;

      const stepDuration = ANIMATION.GATE_DURATION_MS / speedRef.current;
      progressRef.current += delta / stepDuration;

      if (progressRef.current >= 1) {
        // Finished current step — advance
        setInterpolationT(1);
        const nextStep = stepRef.current + 1;

        if (nextStep >= totalSteps) {
          if (loopingRef.current) {
            stepRef.current = 0;
            setStep(0);
            setInterpolationT(0);
            progressRef.current = 0;
          } else {
            pause();
            return;
          }
        } else {
          stepRef.current = nextStep;
          setStep(nextStep);
          setInterpolationT(0);
          progressRef.current = 0;
        }
      } else {
        // Smooth easing within step
        const eased = easeInOutCubic(progressRef.current);
        setInterpolationT(eased);
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
    };
    // Only restart the loop when play state or simulation result changes
  }, [isPlaying, result, setStep, setInterpolationT, pause]);
}

function easeInOutCubic(t: number): number {
  return t < 0.5
    ? 4 * t * t * t
    : 1 - Math.pow(-2 * t + 2, 3) / 2;
}
