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
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex-1 flex items-center justify-center w-full perspective-1000">
        
        {isDrawing ? (
            <div className="text-center relative">
                <div className="w-32 h-32 rounded-full border-4 border-christmas-gold/30 border-t-christmas-gold animate-spin mb-8 mx-auto"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl">🎁</div>
                <p className="text-xl text-christmas-gold font-light animate-pulse tracking-widest uppercase">
                    Selecting...
                </p>
            </div>
        ) : currentWinner ? (
          <div className="text-center animate-bounce-slow transform transition-all duration-500 hover:scale-105">
            <div className="inline-block mb-4 p-4 bg-gradient-to-br from-christmas-red to-rose-600 rounded-full shadow-[0_0_50px_rgba(225,29,72,0.4)]">
                 <span className="text-5xl">🎅</span>
            </div>
            <p className="text-christmas-gold font-christmas text-3xl mb-4">The gift goes to</p>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight drop-shadow-2xl bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-400">
                {currentWinner.name}
            </h2>
          </div>
        ) : (
          <div className="text-center opacity-30 hover:opacity-100 transition-opacity duration-500">
            <span className="text-8xl block mb-6 filter drop-shadow-lg">🎄</span>
            <p className="text-xl font-light tracking-wider">READY TO DRAW</p>
          </div>
        )}
      </div>

      <div className="mt-12 w-full max-w-xs z-10">
          {eligibleCount > 0 ? (
             <button
                onClick={drawNext}
                disabled={isDrawing}
                className="w-full py-5 bg-gradient-to-r from-christmas-red to-rose-600 text-white text-xl font-bold rounded-2xl shadow-lg hover:shadow-rose-600/30 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:scale-100 transition-all duration-300 relative overflow-hidden group"
            >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                {isDrawing ? 'Searching...' : 'Draw Next Person'}
            </button>
          ) : (
             <div className="text-center p-6 bg-white/5 rounded-2xl border border-christmas-green/20">
                 <h3 className="text-2xl text-christmas-green font-bold mb-2">Complete!</h3>
                 <p className="text-sm text-gray-400">All gifts have been assigned.</p>
             </div>
          )}
          
          {eligibleCount > 0 && !isDrawing && (
              <p className="mt-6 text-center text-white/30 text-sm">
                  {eligibleCount} {eligibleCount === 1 ? 'person' : 'people'} remaining
              </p>
          )}
      </div>
    </div>
  );
};
