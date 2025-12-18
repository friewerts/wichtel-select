import { useState, useEffect } from 'react';
import type { Participant } from '../types';

const STORAGE_KEY = 'wichtel-participants';

export const useParticipants = () => {
  const [participants, setParticipants] = useState<Participant[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
        console.error("Failed to load participants", e);
        return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(participants));
  }, [participants]);

  const addParticipant = (name: string) => {
    if (!name.trim()) return;
    const newParticipant: Participant = {
      id: crypto.randomUUID(),
      name: name.trim(),
      hasReceived: false,
    };
    setParticipants((prev) => [...prev, newParticipant]);
  };

  const removeParticipant = (id: string) => {
    setParticipants((prev) => prev.filter((p) => p.id !== id));
  };

  const markAsReceived = (id: string) => {
    setParticipants((prev) =>
      prev.map((p) => (p.id === id ? { ...p, hasReceived: true } : p))
    );
  };
  
  const resetReceivedStatus = () => {
      setParticipants(prev => prev.map(p => ({ ...p, hasReceived: false })));
  }

  return { participants, addParticipant, removeParticipant, markAsReceived, resetReceivedStatus };
};
