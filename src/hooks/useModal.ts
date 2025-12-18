import { useState, useCallback } from 'react';

interface ModalState {
  isOpen: boolean;
  title: string;
  message: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  isConfirm?: boolean; // If true, show Confirm/Cancel buttons. If false, just OK/Close.
}

export const useModal = () => {
  const [modalState, setModalState] = useState<ModalState>({
    isOpen: false,
    title: '',
    message: '',
  });

  const showModal = useCallback((title: string, message: string, onConfirm?: () => void, isConfirm = false) => {
    setModalState({
      isOpen: true,
      title,
      message,
      onConfirm: () => {
        if (onConfirm) onConfirm();
        closeModal();
      },
      onCancel: closeModal,
      isConfirm,
    });
  }, []);

  const closeModal = useCallback(() => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  }, []);

  return { modalState, showModal, closeModal };
};
