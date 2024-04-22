import React from 'react';
import { Button, ButtonProps } from '@mui/material';

export type buttonStyleVariantType = 'normal' | 'secondary' | 'danger';

interface CustomButtonProps extends ButtonProps {
  children: React.ReactNode;
  styleVariant?: buttonStyleVariantType;
  className?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  styleVariant,
  className,
  ...buttonProps
}) => {
  let buttonStyle =
    'text-white rounded bg-blue-600 hover:bg-blue-400 normal-case transition-colors duration-300 p-2';

  switch (styleVariant) {
    case 'secondary':
      buttonStyle += `${buttonStyle} bg-gray-200 hover:bg-gray-300`;
      break;

    case 'danger':
      buttonStyle += `${buttonStyle} bg-red-500 hover:bg-red-400 text-white`;
      break;

    default:
      break;
  }

  const combinedClasses = `${buttonStyle} ${className} ${
    buttonProps.disabled ? 'opacity-50' : ''
  }`;

  return (
    <Button {...buttonProps} className={combinedClasses}>
      {children}
    </Button>
  );
};

export default CustomButton;
