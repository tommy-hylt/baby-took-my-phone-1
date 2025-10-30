import { useEffect, useState } from 'react';
import './Spot.css';
import type { SpotData } from './types';

interface SpotProps {
  spot: SpotData;
  isRemoving: boolean;
  onRemoved: (id: string) => void;
}

export const Spot = ({ spot, isRemoving, onRemoved }: SpotProps) => {
  const [phase, setPhase] = useState<'ripple' | 'breathing' | 'shrinking'>('ripple');

  useEffect(() => {
    // Transition from ripple to breathing after ripple animation completes
    const timer = setTimeout(() => {
      setPhase('breathing');
    }, 500); // Match ripple animation duration

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isRemoving) {
      setPhase('shrinking');
      // Remove from DOM after shrink animation completes
      const timer = setTimeout(() => {
        onRemoved(spot.id);
      }, 500); // Match shrink animation duration

      return () => clearTimeout(timer);
    }
  }, [isRemoving, onRemoved, spot.id]);

  return (
    <div
      className={`spot ${phase}`}
      style={{
        left: spot.x,
        top: spot.y,
      }}
    >
      <div className="circle circle-outer" style={{ backgroundColor: spot.color }} />
      <div className="circle circle-middle" style={{ backgroundColor: spot.color }} />
      <div className="circle circle-inner" style={{ backgroundColor: spot.color }} />
    </div>
  );
};
