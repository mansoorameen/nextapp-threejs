'use client';

import { ReactNode, useState } from 'react';

interface PopupButtonProps {
  children: ReactNode;
}

const PopupButton: React.FC<PopupButtonProps> = ({children}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);


  const handleOpenPopup = (): void  => {
    setIsOpen(true);
  };

  const handleClosePopup = (): void => {
    setIsOpen(false);
  };

    return (
    <div>
      <button onClick={handleOpenPopup} className="px-4 py-2 bg-blue-500 text-white rounded">
        Open Popup
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative p-8 bg-white rounded shadow-lg">
            <button onClick={handleClosePopup} className="absolute top-2 right-2 px-2 py-1 bg-red-500 text-white rounded">
              Close
            </button>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupButton;