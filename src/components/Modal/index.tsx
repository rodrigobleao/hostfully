import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import CustomButton, { CustomButtonProps } from '../Button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  buttons: CustomButtonProps[];
  children: ReactNode;
}

const CustomModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  buttons,
  children,
}) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
      <div className="flex flex-col bg-white p-4 rounded shadow-md">
        <button
          className="self-end text-gray-500 hover:text-gray-800"
          onClick={onClose}
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 p-1 hover:bg-gray-200 duration-300 rounded-full"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="flex self-start p-8 w-full">{children}</div>
        <div className="mt-4 flex justify-end gap-3">
          {buttons.map((button, index) => (
            <CustomButton
              key={index}
              onClick={button.onClick}
              disabled={button.disabled}
              styleVariant={button.styleVariant}
              label={button.label}
            />
          ))}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default CustomModal;
