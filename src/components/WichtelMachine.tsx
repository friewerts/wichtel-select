import React from 'react';
import type { Participant } from '../types';

interface Props {
  drawNext: () => void;
  currentWinner: Participant | null;
  isDrawing: boolean;
  eligibleCount: number;
}

export const WichtelMachine: React.FC<Props> = ({
  drawNext,
  currentWinner,
  isDrawing,
  eligibleCount,
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div className="mb-8 h-48 w-full max-w-sm flex items-center justify-center perspective">
        {/* Placeholder for animation logic */}
        {isDrawing ? (
            <div className="text-center animate-pulse">
                <span className="text-6xl">🎁</span>
                <p className="mt-4 text-christmas-gold font-bold text-xl">Wichtel sucht...</p>
            </div>
        ) : currentWinner ? (
          <div className="bg-gradient-to-br from-christmas-red to-[#800000] p-8 rounded-2xl shadow-xl border-4 border-christmas-gold transform transition-all animate-bounce-slow text-center w-full">
            <p className="text-christmas-gold font-christmas text-2xl mb-2">Das Geschenk geht an:</p>
            <h2 className="text-4xl font-bold text-white break-words">{currentWinner.name}</h2>
          </div>
        ) : (
          <div className="text-center opacity-50">
            <span className="text-6xl grayscale">🎅</span>
            <p className="mt-2 text-slate-500">Bereit zum Wichteln</p>
          </div>
        )}
      </div>

      <button
        onClick={drawNext}
        disabled={isDrawing || eligibleCount === 0}
        className="group relative px-8 py-4 bg-christmas-red text-white text-xl font-bold rounded-full shadow-lg hover:bg-[#a00c12] active:transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed transition-all overflow-hidden"
      >
        <span className="relative z-10 flex items-center gap-2">
            {isDrawing ? 'Mische...' : 'Wer ist dran?'}
            {!isDrawing && <span className="text-2xl">✨</span>}
        </span>
        {/* Shine effect */}
        <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
      </button>
      
      {eligibleCount === 0 && (
          <p className="mt-4 text-christmas-green font-semibold">Alle Geschenke verteilt! Frohe Weihnachten! 🎄</p>
      )}
      {eligibleCount > 0 && !isDrawing && !currentWinner && (
          <p className="mt-4 text-slate-500 text-sm">{eligibleCount} Geschenke warten noch...</p>
      )}
    </div>
  );
};
