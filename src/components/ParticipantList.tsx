import React from 'react';
import type { Participant } from '../types';

interface Props {
  participants: Participant[];
  onRemove: (id: string) => void;
}

export const ParticipantList: React.FC<Props> = ({ participants, onRemove }) => {
  if (participants.length === 0) {
    return (
      <div className="text-center text-slate-500 italic mt-8">
        Noch keine Teilnehmer eingetragen. <br />
        No participants yet.
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mt-6 space-y-2">
      <h3 className="text-xl font-christmas text-christmas-red mb-4 text-center">
        Teilnehmerliste ({participants.length})
      </h3>
      <ul className="space-y-2 max-h-[30vh] overflow-y-auto px-2">
        {participants.map((p) => (
          <li
            key={p.id}
            className={`flex justify-between items-center p-3 rounded-lg shadow-sm border ${
              p.hasReceived
                ? 'bg-gray-100 text-gray-400 border-gray-200'
                : 'bg-white text-slate-800 border-christmas-green/10'
            }`}
          >
            <span className="font-medium truncate">{p.name}</span>
            <div className="flex items-center gap-2">
              {p.hasReceived && (
                <span className="text-xs px-2 py-1 bg-gray-200 rounded-full">
                  Hat schon
                </span>
              )}
              <button
                onClick={() => onRemove(p.id)}
                className="text-gray-400 hover:text-christmas-red transition-colors p-1"
                aria-label="Remove participant"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
