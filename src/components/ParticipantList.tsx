import React from 'react';
import type { Participant } from '../types';

interface Props {
  participants: Participant[];
  onRemove: (id: string) => void;
  onToggleReceived: (id: string, status: boolean) => void;
}

export const ParticipantList: React.FC<Props> = ({ participants, onRemove, onToggleReceived }) => {
  if (participants.length === 0) {
    return (
      <div className="text-center py-12 text-white/20 border-2 border-dashed border-white/5 rounded-2xl">
        <p>No participants yet.</p>
        <p className="text-sm mt-1">Add someone to start the magic!</p>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto max-h-[400px] pr-2 custom-scrollbar">
      <ul className="space-y-3">
        {participants.map((p) => (
          <li
            key={p.id}
            className={`group flex justify-between items-center p-4 rounded-xl border transition-all duration-300 ${
              p.hasReceived
                ? 'bg-white/5 border-transparent opacity-50'
                : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 hover:translate-x-1'
            }`}
          >
             <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    p.hasReceived ? 'bg-gray-700 text-gray-500' : 'bg-gradient-to-br from-christmas-gold to-orange-500 text-black shadow-lg shadow-orange-500/20'
                }`}>
                    {p.name.charAt(0).toUpperCase()}
                </div>
                <span className={`font-medium ${p.hasReceived ? 'line-through text-white/30' : 'text-white'}`}>
                    {p.name}
                </span>
            </div>

            <div className="flex items-center gap-2">
              {p.hasReceived && (
                <button
                   onClick={() => onToggleReceived(p.id, false)}
                   className="text-xs px-2 py-1 bg-white/5 hover:bg-white/10 rounded-md text-white/40 hover:text-christmas-gold transition-colors flex items-center gap-1 group/undo"
                   title="Reset status"
                >
                  Received
                  <span className="hidden group-hover/undo:inline">↺</span>
                </button>
              )}
              {!p.hasReceived && (
                  <button
                    onClick={() => onRemove(p.id)}
                    className="w-8 h-8 flex items-center justify-center rounded-lg text-white/20 hover:text-red-400 hover:bg-red-500/10 transition-colors opacity-0 group-hover:opacity-100"
                    aria-label="Remove participant"
                  >
                    ×
                  </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
