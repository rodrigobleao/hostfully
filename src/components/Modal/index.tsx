import React, { ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';
import CustomButton, { buttonStyleVariantType } from '../Button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  leftButtonLabel?: string;
  onLeftButtonAction?: () => void | null;
  isLeftActionDisabled?: boolean;
  leftButtonStyle?: buttonStyleVariantType;
  rightButtonLabel: string;
  onRightButtonAction: () => void | null;
  isRightActionDisabled?: boolean;
  rightButtonStyle?: buttonStyleVariantType;
  children: ReactNode;
}

const CustomModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  leftButtonLabel,
  onLeftButtonAction,
  isLeftActionDisabled,
  leftButtonStyle,
  rightButtonLabel,
  onRightButtonAction,
  rightButtonStyle,
  isRightActionDisabled,
  children,
}) => {
  return isOpen
    ? ReactDOM.createPortal(
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-md modal-content relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={onClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
            {children}
            <div className="mt-4 flex justify-end gap-3">
              {leftButtonLabel && onLeftButtonAction && (
                <CustomButton
                  onClick={onLeftButtonAction}
                  disabled={isLeftActionDisabled}
                  styleVariant={leftButtonStyle}
                >
                  {leftButtonLabel}
                </CustomButton>
              )}
              <CustomButton
                onClick={onRightButtonAction}
                disabled={isRightActionDisabled}
                styleVariant={rightButtonStyle}
              >
                {rightButtonLabel}
              </CustomButton>
            </div>
          </div>
        </div>,
        document.body
      )
    : null;
};

export default CustomModal;
