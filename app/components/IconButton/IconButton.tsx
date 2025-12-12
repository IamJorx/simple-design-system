import React from 'react';
import { useColorModeAttribute } from '../../hooks/useColorModeAttribute';

export type IconButtonVariant = 'Primary' | 'Neutral' | 'Subtle';
export type IconButtonState = 'Default' | 'Hover' | 'Disabled';
export type IconButtonSize = 'Medium' | 'Small';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Icon to display in the button
   */
  icon?: React.ReactNode | null;
  
  /**
   * Visual variant of the button
   * @default 'Primary'
   */
  variant?: IconButtonVariant;
  
  /**
   * State of the button
   * @default 'Default'
   */
  state?: IconButtonState;
  
  /**
   * Size of the button
   * @default 'Medium'
   */
  size?: IconButtonSize;
  
  /**
   * Accessible label for the button
   */
  'aria-label'?: string;
}

const getIconButtonStyles = (
  variant: IconButtonVariant,
  state: IconButtonState,
  size: IconButtonSize
): React.CSSProperties => {
  const isDisabled = state === 'Disabled';
  const isHover = state === 'Hover';
  
  const padding = size === 'Small' 
    ? 'var(--sds-size-space-200, 8px)' 
    : 'var(--sds-size-space-300, 12px)';
  
  const buttonSize = size === 'Small' 
    ? 'var(--sds-typography-scale-06, 32px)' 
    : 'var(--sds-typography-scale-07, 40px)';
  
  const baseStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding,
    borderRadius: 'var(--sds-typography-scale-06, 32px)',
    border: 'var(--sds-size-stroke-border, 1px) solid',
    fontFamily: 'var(--sds-typography-body-font-family)',
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s ease-in-out',
    width: variant === 'Subtle' && size === 'Medium' ? buttonSize : 'auto',
    height: variant === 'Subtle' && size === 'Medium' ? buttonSize : 'auto',
    minWidth: variant !== 'Subtle' || size === 'Small' ? buttonSize : undefined,
    minHeight: variant !== 'Subtle' || size === 'Small' ? buttonSize : undefined,
  };
  
  switch (variant) {
    case 'Primary':
      if (isDisabled) {
        return {
          ...baseStyles,
          backgroundColor: 'var(--sds-color-background-disabled-default)',
          borderColor: 'var(--sds-color-border-disabled-default)',
        };
      }
      if (isHover) {
        return {
          ...baseStyles,
          backgroundColor: 'var(--sds-color-background-brand-hover)',
          borderColor: 'var(--sds-color-border-brand-default)',
        };
      }
      return {
        ...baseStyles,
        backgroundColor: 'var(--sds-color-background-brand-default)',
        borderColor: 'var(--sds-color-border-brand-default)',
      };
    
    case 'Neutral':
      if (isDisabled) {
        return {
          ...baseStyles,
          backgroundColor: 'var(--sds-color-background-disabled-default)',
          borderColor: 'var(--sds-color-border-disabled-default)',
        };
      }
      if (isHover) {
        return {
          ...baseStyles,
          backgroundColor: 'var(--sds-color-background-default-secondary-hover)',
          borderColor: 'var(--sds-color-border-default-default)',
        };
      }
      return {
        ...baseStyles,
        backgroundColor: 'var(--sds-color-background-default-secondary)',
        borderColor: 'var(--sds-color-border-default-default)',
      };
    
    case 'Subtle':
      if (isDisabled) {
        return {
          ...baseStyles,
          backgroundColor: 'var(--sds-color-background-disabled-default)',
          borderColor: 'var(--sds-color-border-disabled-default)',
        };
      }
      if (isHover) {
        return {
          ...baseStyles,
          backgroundColor: 'var(--sds-color-background-default-default-hover)',
          border: 'none',
        };
      }
      return {
        ...baseStyles,
        backgroundColor: 'transparent',
        border: 'none',
      };
    
    default:
      return baseStyles;
  }
};

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      icon = null,
      variant = 'Primary',
      state = 'Default',
      size = 'Medium',
      disabled,
      className = '',
      style,
      onMouseEnter,
      onMouseLeave,
      ...props
    },
    ref
  ) => {
    const [isHovered, setIsHovered] = React.useState(false);
    // Listen for color mode changes to force re-render
    useColorModeAttribute();
    
    const isDisabled = disabled || state === 'Disabled';
    const currentState = isDisabled ? 'Disabled' : (isHovered ? 'Hover' : state);
    
    const buttonStyles = getIconButtonStyles(variant, currentState, size);
    
    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!isDisabled) {
        setIsHovered(true);
      }
      onMouseEnter?.(e);
    };
    
    const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
      setIsHovered(false);
      onMouseLeave?.(e);
    };
    
    const iconSize = size === 'Small' ? '20px' : '20px';
    
    return (
      <button
        ref={ref}
        type="button"
        disabled={isDisabled}
        className={className}
        style={{ ...buttonStyles, ...style }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {icon || (
          <span 
            style={{ 
              width: iconSize, 
              height: iconSize,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }} 
          />
        )}
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';

