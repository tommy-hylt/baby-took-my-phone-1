import { useEffect, useState } from 'react';
import './Spot.css';
import type { SpotData } from './types';

interface SpotProps {
  spot: SpotData;
}

export const Spot = ({ spot }: SpotProps) => {
  const [phase, setPhase] = useState<'ripple' | 'breathing'>('ripple');

  useEffect(() => {
    // Transition from ripple to breathing after ripple animation completes
    const timer = setTimeout(() => {
      setPhase('breathing');
    }, 500); // Match ripple animation duration

    return () => clearTimeout(timer);
  }, []);

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
