import { useState } from 'react';
import type { Participant } from '../types';

export const useWichtel = (
  participants: Participant[],
  markAsReceived: (id: string) => void
) => {
  const [currentWinner, setCurrentWinner] = useState<Participant | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  // Logic to draw a winner
  const drawNext = () => {
    const eligible = participants.filter((p) => !p.hasReceived);
    if (eligible.length === 0) {
      // Logic handled in UI (button disabled), but safe return here
      return false;
    }

    setIsDrawing(true);
    setCurrentWinner(null);

    // Artificial delay for suspense (can be handled in UI too, but logic here helps)
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * eligible.length);
      const winner = eligible[randomIndex];
      
      setCurrentWinner(winner);
      markAsReceived(winner.id);
      setIsDrawing(false);
    }, 2000); // 2 second suspense
  };

  return { currentWinner, isDrawing, drawNext };
};
