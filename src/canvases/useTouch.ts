import { useCallback } from 'react';
import type { SpotData } from '../spots/types';
import { getNextColor } from './colors';

interface UseTouchOptions {
  onAddSpot: (spot: SpotData) => void;
}

export const useTouch = ({ onAddSpot }: UseTouchOptions) => {
  const handleTouch = useCallback((event: React.TouchEvent | React.MouseEvent) => {
    event.preventDefault();

    let x: number;
    let y: number;

    if ('touches' in event) {
      // Touch event
      const touch = event.touches[0];
      x = touch.clientX;
      y = touch.clientY;
    } else {
      // Mouse event
      x = event.clientX;
      y = event.clientY;
    }

    const createdAt = Date.now();
    const newSpot: SpotData = {
      id: `${createdAt}-${Math.random()}`,
      x,
      y,
      color: getNextColor(createdAt),
      createdAt,
    };

    onAddSpot(newSpot);
  }, [onAddSpot]);

  return { handleTouch };
};
