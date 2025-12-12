import React from 'react';
import { useColorModeAttribute } from '../../hooks/useColorModeAttribute';

export type ButtonVariant = 'Primary' | 'Neutral' | 'Subtle';
export type ButtonState = 'Default' | 'Hover' | 'Disabled';
export type ButtonSize = 'Medium' | 'Small';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
  variant?: ButtonVariant;
  
  /**
   * State of the button
   * @default 'Default'
   */
  state?: ButtonState;
  
  /**
   * Size of the button
   * @default 'Medium'
   */
  size?: ButtonSize;
  
  /**
   * Whether the button takes full width of its container
   * @default false
   */
  fullWidth?: boolean;
  
  /**
   * Button content (alternative to label)
   */
  children?: React.ReactNode;
}

const getButtonStyles = (
  variant: ButtonVariant,
  state: ButtonState,
  size: ButtonSize
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
          backgroundColor: 'var(--sds-color-background-brand-hover)',
          borderColor: 'var(--sds-color-border-brand-default)',
          color: 'var(--sds-color-text-brand-on-brand)',
        };
      }
      return {
        ...baseStyles,
          backgroundColor: 'var(--sds-color-background-brand-default)',
          borderColor: 'var(--sds-color-border-brand-default)',
          color: 'var(--sds-color-text-brand-on-brand)',
      };
    
    case 'Neutral':
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
          backgroundColor: 'var(--sds-color-background-neutral-tertiary-hover)',
          borderColor: 'var(--sds-color-border-neutral-secondary)',
          color: 'var(--sds-color-text-default-default)',
        };
      }
      return {
        ...baseStyles,
          backgroundColor: 'var(--sds-color-background-neutral-tertiary)',
          borderColor: 'var(--sds-color-border-neutral-secondary)',
          color: 'var(--sds-color-text-default-default)',
      };
    
    case 'Subtle':
      if (isDisabled) {
        return {
          ...baseStyles,
          backgroundColor: 'var(--sds-color-background-disabled-default)',
          borderColor: 'var(--sds-color-border-disabled-default)',
          color: 'var(--sds-color-text-disabled-default)',
        };
      }
      if (isHover) {
        return {
          ...baseStyles,
          backgroundColor: 'transparent',
          borderColor: 'var(--sds-color-border-default-default)',
          color: 'var(--sds-color-text-default-default)',
        };
      }
      return {
        ...baseStyles,
        backgroundColor: 'transparent',
        border: 'none',
          color: 'var(--sds-color-text-neutral-default)',
      };
    
    default:
      return baseStyles;
  }
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
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
      fullWidth = false,
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
    
    const buttonStyles = getButtonStyles(variant, currentState, size);
    
    if (fullWidth) {
      buttonStyles.width = '100%';
    }
    
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

Button.displayName = 'Button';
