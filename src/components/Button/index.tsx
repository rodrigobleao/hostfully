import React from 'react';
import { Button, ButtonProps } from '@mui/material';

export type ButtonStyleVariantType = 'normal' | 'secondary' | 'danger';

export interface CustomButtonProps extends ButtonProps {
  label: string;
  styleVariant?: ButtonStyleVariantType;
  className?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  styleVariant,
  className,
  ...buttonProps
}) => {
  let buttonStyle =
    'text-white disabled:text-white rounded bg-blue-600 hover:bg-blue-400 normal-case transition-colors duration-300 p-2 ';

  switch (styleVariant) {
    case 'secondary':
      buttonStyle += `bg-gray-200 hover:bg-gray-300`;
      break;

    case 'danger':
      buttonStyle += `bg-red-500 hover:bg-red-400 text-white`;
      break;

    default:
      break;
  }

  const combinedClasses = `${buttonStyle} ${className} ${
    buttonProps.disabled ? 'opacity-50' : ''
  }`;

  return (
    <Button {...buttonProps} className={combinedClasses}>
      {label}
    </Button>
  );
};

export default CustomButton;
