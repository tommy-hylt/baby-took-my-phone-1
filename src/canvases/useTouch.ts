import { useCallback, useRef } from 'react';
import type { SpotData } from '../spots/types';
import { getNextColor } from './colors';

interface UseTouchOptions {
  onAddSpot: (spot: SpotData) => void;
}

const MOVE_THRESHOLD = 50; // pixels

export const useTouch = ({ onAddSpot }: UseTouchOptions) => {
  const lastPositionRef = useRef<{ x: number; y: number } | null>(null);

  const createSpot = useCallback((x: number, y: number) => {
    const createdAt = Date.now();
    const newSpot: SpotData = {
      id: `${createdAt}-${Math.random()}`,
      x,
      y,
      color: getNextColor(createdAt),
      createdAt,
    };
    onAddSpot(newSpot);
    lastPositionRef.current = { x, y };
  }, [onAddSpot]);

  const handleTouchStart = useCallback((event: React.TouchEvent | React.MouseEvent) => {
    event.preventDefault();

    let x: number;
    let y: number;

    if ('touches' in event) {
      const touch = event.touches[0];
      x = touch.clientX;
      y = touch.clientY;
    } else {
      x = event.clientX;
      y = event.clientY;
    }

    createSpot(x, y);
  }, [createSpot]);

  const handleTouchMove = useCallback((event: React.TouchEvent | React.MouseEvent) => {
    event.preventDefault();

    let x: number;
    let y: number;

    if ('touches' in event) {
      const touch = event.touches[0];
      x = touch.clientX;
      y = touch.clientY;
    } else {
      x = event.clientX;
      y = event.clientY;
    }

    if (lastPositionRef.current) {
      const dx = x - lastPositionRef.current.x;
      const dy = y - lastPositionRef.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance >= MOVE_THRESHOLD) {
        createSpot(x, y);
      }
    }
  }, [createSpot]);

  const handleTouchEnd = useCallback(() => {
    lastPositionRef.current = null;
  }, []);

  return { handleTouchStart, handleTouchMove, handleTouchEnd };
};
