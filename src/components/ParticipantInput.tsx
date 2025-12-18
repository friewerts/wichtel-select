import React, { useState } from 'react';

interface Props {
  onAdd: (name: string) => void;
}

export const ParticipantInput: React.FC<Props> = ({ onAdd }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onAdd(name);
      setName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md flex gap-2">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name des Teilnehmers..."
        className="flex-1 px-4 py-2 rounded-lg border-2 border-christmas-green/20 focus:border-christmas-red focus:outline-none bg-white text-slate-800 placeholder-slate-400 shadow-sm transition-colors"
      />
      <button
        type="submit"
        disabled={!name.trim()}
        className="px-6 py-2 bg-christmas-green text-snow-white rounded-lg font-semibold shadow-md hover:bg-[#1e3421] active:transform active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Add
      </button>
    </form>
  );
};
