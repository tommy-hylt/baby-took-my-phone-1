import { useCallback } from 'react';
import type { SpotData } from '../spots/types';
import { getNextColor } from '../spots/colors';

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

    const newSpot: SpotData = {
      id: `${Date.now()}-${Math.random()}`,
      x,
      y,
      color: getNextColor(),
      createdAt: Date.now(),
    };

    onAddSpot(newSpot);
  }, [onAddSpot]);

  return { handleTouch };
};
