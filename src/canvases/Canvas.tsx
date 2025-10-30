import { useState, useEffect, useCallback } from 'react';
import './Canvas.css';
import { Spot } from '../spots/Spot';
import type { SpotData } from '../spots/types';
import { useTouch } from './useTouch';

const SPOT_LIFETIME = 10000; // 10 seconds

export const Canvas = () => {
  const [spots, setSpots] = useState<SpotData[]>([]);
  const [removingSpots, setRemovingSpots] = useState<Set<string>>(new Set());

  const handleAddSpot = (spot: SpotData) => {
    setSpots((prev) => [...prev, spot]);
  };

  const { handleTouch } = useTouch({ onAddSpot: handleAddSpot });

  const handleRemoveSpot = useCallback((id: string) => {
    setSpots((prev) => prev.filter((spot) => spot.id !== id));
    setRemovingSpots((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  }, []);

  // Mark spots for removal after 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      setSpots((prev) => {
        prev.forEach((spot) => {
          if (now - spot.createdAt >= SPOT_LIFETIME) {
            setRemovingSpots((r) => new Set(r).add(spot.id));
          }
        });
        return prev;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="canvas"
      onTouchStart={handleTouch}
      onClick={handleTouch}
    >
      {spots.map((spot) => (
        <Spot
          key={spot.id}
          spot={spot}
          isRemoving={removingSpots.has(spot.id)}
          onRemoved={handleRemoveSpot}
        />
      ))}
    </div>
  );
};
