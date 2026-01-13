import React from 'react';
import {
  Button as RACButton,
  ButtonProps as RACButtonProps,
  composeRenderProps,
} from 'react-aria-components';

export interface ButtonProps extends RACButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
}

const sizeClasses = {
  small: 'text-xs py-2.5 px-4',
  medium: 'text-sm py-2.5 px-5',
  large: 'text-base py-3 px-6',
};

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  size = 'medium',
  className,
  ...props
}: ButtonProps) => {
  const baseClasses =
    'font-sans font-bold border-0 rounded-full cursor-pointer inline-flex items-center justify-center leading-none transition-colors';
  const modeClasses = primary
    ? 'text-white bg-[#1ea7fd] hover:bg-[#1a96e8] pressed:bg-[#1585d1]'
    : 'text-gray-700 bg-transparent shadow-[inset_0_0_0_1px_rgba(0,0,0,0.15)] hover:bg-gray-100 pressed:bg-gray-200';
  const focusClasses = 'outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1ea7fd]';
  const disabledClasses = 'disabled:opacity-50 disabled:cursor-not-allowed';

  return (
    <RACButton
      {...props}
      className={composeRenderProps(className, (className) =>
        `${baseClasses} ${sizeClasses[size]} ${modeClasses} ${focusClasses} ${disabledClasses} ${className ?? ''}`
      )}
    />
  );
};
