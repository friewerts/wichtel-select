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
    <form onSubmit={handleSubmit} className="relative w-full group">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter participant name..."
        className="w-full pl-6 pr-24 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-christmas-red/50 focus:border-christmas-red/50 transition-all shadow-inner"
      />
      <button
        type="submit"
        disabled={!name.trim()}
        className="absolute right-2 top-2 bottom-2 px-6 bg-gradient-to-r from-christmas-green to-emerald-600 hover:from-emerald-500 hover:to-emerald-400 text-white rounded-xl font-medium shadow-lg hover:shadow-emerald-500/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-95"
      >
        Add
      </button>
    </form>
  );
};
