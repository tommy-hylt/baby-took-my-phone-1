import { useState, useEffect } from 'react';
import './Canvas.css';
import { Spot } from '../spots/Spot';
import type { SpotData } from '../spots/types';
import { useTouch } from './useTouch';

const SPOT_LIFETIME = 30000; // 30 seconds

export const Canvas = () => {
  const [spots, setSpots] = useState<SpotData[]>([]);

  const handleAddSpot = (spot: SpotData) => {
    setSpots((prev) => [...prev, spot]);
  };

  const { handleTouch } = useTouch({ onAddSpot: handleAddSpot });

  // Remove spots after 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      setSpots((prev) => prev.filter((spot) => now - spot.createdAt < SPOT_LIFETIME));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="canvas"
      onTouchStart={handleTouch}
      onClick={handleTouch}
    >
      {spots.map((spot) => (
        <Spot key={spot.id} spot={spot} />
      ))}
    </div>
  );
};
