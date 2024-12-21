import React from 'react';

interface PopoverProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Popover: React.FC<PopoverProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed w-96 inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg p-6 w-80 max-w-full"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the popover
      >
        {children}
        <button
          className="mt-4 text-sm text-red-500 hover:underline"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popover;
