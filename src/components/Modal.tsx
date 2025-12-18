import React from 'react';

interface Props {
  isOpen: boolean;
  title: string;
  message: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  isConfirm?: boolean;
}

export const Modal: React.FC<Props> = ({ isOpen, title, message, onConfirm, onCancel, isConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onCancel}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-md bg-[#0f172a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden transform transition-all scale-100 animate-float">
        {/* Header */}
        <div className="bg-gradient-to-r from-christmas-red to-rose-700 p-4">
          <h3 className="text-xl font-bold text-white font-christmas tracking-wide">{title}</h3>
        </div>
        
        {/* Body */}
        <div className="p-6">
          <p className="text-gray-300 leading-relaxed">{message}</p>
        </div>

        {/* Footer */}
        <div className="p-4 bg-white/5 flex flex-row-reverse gap-3">
          {isConfirm ? (
            <>
              <button
                onClick={onConfirm}
                className="px-4 py-2 bg-christmas-green hover:bg-emerald-600 text-white rounded-lg shadow-lg transition-colors font-medium"
              >
                Confirm
              </button>
              <button
                onClick={onCancel}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors font-medium"
              >
                Cancel
              </button>
            </>
          ) : (
             <button
                onClick={onCancel}
                className="px-4 py-2 bg-christmas-red hover:bg-rose-600 text-white rounded-lg shadow-lg transition-colors font-medium"
              >
                Close
              </button>
          )}
        </div>
      </div>
    </div>
  );
};
