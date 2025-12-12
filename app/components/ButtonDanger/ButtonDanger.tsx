import React from 'react';
import { useColorModeAttribute } from '../../hooks/useColorModeAttribute';

export type ButtonDangerVariant = 'Primary' | 'Subtle';
export type ButtonDangerState = 'Default' | 'Hover' | 'Disabled';
export type ButtonDangerSize = 'Medium' | 'Small';

export interface ButtonDangerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button label text
   * @default 'Button'
   */
  label?: string;
  
  /**
   * Icon to display before the label
   */
  iconStart?: React.ReactNode | null;
  
  /**
   * Icon to display after the label
   */
  iconEnd?: React.ReactNode | null;
  
  /**
   * Whether to show icon at start (for conditional rendering)
   */
  hasIconStart?: boolean;
  
  /**
   * Whether to show icon at end (for conditional rendering)
   */
  hasIconEnd?: boolean;
  
  /**
   * Visual variant of the button
   * @default 'Primary'
   */
  variant?: ButtonDangerVariant;
  
  /**
   * State of the button
   * @default 'Default'
   */
  state?: ButtonDangerState;
  
  /**
   * Size of the button
   * @default 'Medium'
   */
  size?: ButtonDangerSize;
  
  /**
   * Button content (alternative to label)
   */
  children?: React.ReactNode;
}

const getButtonDangerStyles = (
  variant: ButtonDangerVariant,
  state: ButtonDangerState,
  size: ButtonDangerSize
): React.CSSProperties => {
  const isDisabled = state === 'Disabled';
  const isHover = state === 'Hover';
  
  const padding = size === 'Small' 
    ? 'var(--sds-size-space-200, 8px)' 
    : 'var(--sds-size-space-300, 12px)';
  
  const baseStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--sds-size-space-200, 8px)',
    padding,
    borderRadius: 'var(--sds-size-radius-200, 8px)',
    border: 'var(--sds-size-stroke-border, 1px) solid',
    fontFamily: 'var(--sds-typography-body-font-family)',
    fontSize: 'var(--sds-typography-body-size-medium, 16px)',
    fontWeight: 'var(--sds-typography-body-font-weight-regular, 400)',
    lineHeight: 1,
    letterSpacing: 0,
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s ease-in-out',
    whiteSpace: 'nowrap',
  };
  
  switch (variant) {
    case 'Primary':
      if (isDisabled) {
        return {
          ...baseStyles,
          backgroundColor: 'var(--sds-color-background-disabled-default)',
          borderColor: 'var(--sds-color-border-disabled-default)',
          color: 'var(--sds-color-text-disabled-on-disabled)',
        };
      }
      if (isHover) {
        return {
          ...baseStyles,
          backgroundColor: 'var(--sds-color-background-danger-hover)',
          borderColor: 'var(--sds-color-border-danger-default)',
          color: 'var(--sds-color-text-danger-on-danger)',
        };
      }
      return {
        ...baseStyles,
        backgroundColor: 'var(--sds-color-background-danger-default)',
        borderColor: 'var(--sds-color-border-danger-secondary)',
        color: 'var(--sds-color-text-danger-on-danger)',
      };
    
    case 'Subtle':
      if (isDisabled) {
        return {
          ...baseStyles,
          backgroundColor: 'var(--sds-color-background-disabled-default, #d9d9d9)',
          borderColor: 'var(--sds-color-border-disabled-default, #b3b3b3)',
          color: 'var(--sds-color-text-disabled-default)',
        };
      }
      if (isHover) {
        return {
          ...baseStyles,
          backgroundColor: 'var(--sds-color-background-danger-tertiary-hover)',
          borderColor: 'var(--sds-color-border-danger-default)',
          color: 'var(--sds-color-text-danger-default)',
        };
      }
      return {
        ...baseStyles,
        backgroundColor: 'transparent',
        border: 'none',
        color: 'var(--sds-color-text-danger-default)',
      };
    
    default:
      return baseStyles;
  }
};

export const ButtonDanger = React.forwardRef<HTMLButtonElement, ButtonDangerProps>(
  (
    {
      label = 'Button',
      iconStart = null,
      iconEnd = null,
      hasIconStart = false,
      hasIconEnd = false,
      variant = 'Primary',
      state = 'Default',
      size = 'Medium',
      children,
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
    
    const buttonStyles = getButtonDangerStyles(variant, currentState, size);
    
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
    
    const displayIconStart = (hasIconStart || iconStart) && !isDisabled;
    const displayIconEnd = (hasIconEnd || iconEnd) && !isDisabled;
    
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
        {displayIconStart && (iconStart || <span style={{ width: '16px', height: '16px' }} />)}
        <span>{children || label}</span>
        {displayIconEnd && (iconEnd || <span style={{ width: '16px', height: '16px' }} />)}
      </button>
    );
  }
);

ButtonDanger.displayName = 'ButtonDanger';

