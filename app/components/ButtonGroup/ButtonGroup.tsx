import React from 'react';
import { Button } from '../Button';

export type ButtonGroupAlign = 'Justify' | 'Start' | 'End' | 'Center' | 'Stack';

export interface ButtonGroupProps {
  /**
   * Whether to show the start button
   * @default true
   */
  buttonStart?: boolean;
  
  /**
   * Whether to show the end button
   * @default true
   */
  buttonEnd?: boolean;
  
  /**
   * Alignment of buttons in the group
   * @default 'Justify'
   */
  align?: ButtonGroupAlign;
  
  /**
   * Custom start button component
   */
  startButton?: React.ReactNode;
  
  /**
   * Custom end button component
   */
  endButton?: React.ReactNode;
  
  /**
   * Additional className for the container
   */
  className?: string;
  
  /**
   * Additional styles for the container
   */
  style?: React.CSSProperties;
}

const getContainerStyles = (align: ButtonGroupAlign): React.CSSProperties => {
  const baseStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--sds-size-space-400, 16px)',
    width: '240px',
  };
  
  switch (align) {
    case 'Start':
      return {
        ...baseStyles,
        justifyContent: 'flex-start',
      };
    
    case 'End':
      return {
        ...baseStyles,
        justifyContent: 'flex-end',
      };
    
    case 'Center':
      return {
        ...baseStyles,
        justifyContent: 'center',
      };
    
    case 'Stack':
      return {
        ...baseStyles,
        flexDirection: 'column',
        alignItems: 'flex-start',
      };
    
    case 'Justify':
    default:
      return {
        ...baseStyles,
        justifyContent: 'stretch',
      };
  }
};

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  buttonStart = true,
  buttonEnd = true,
  align = 'Justify',
  startButton,
  endButton,
  className = '',
  style,
}) => {
  const containerStyles = getContainerStyles(align);
  
  const defaultStartButton = (
    <Button variant="Subtle" size="Medium">
      Button
    </Button>
  );
  
  const defaultEndButton = (
    <Button variant="Primary" size="Medium">
      Button
    </Button>
  );
  
  const renderStartButton = () => {
    if (!buttonStart) return null;
    
    if (startButton) {
      return <div style={align === 'Justify' ? { flex: '1 1 0', minWidth: 0 } : {}}>{startButton}</div>;
    }
    
    return (
      <div style={align === 'Justify' ? { flex: '1 1 0', minWidth: 0 } : align === 'Stack' ? { width: '100%' } : {}}>
        {defaultStartButton}
      </div>
    );
  };
  
  const renderEndButton = () => {
    if (!buttonEnd) return null;
    
    if (endButton) {
      return <div style={align === 'Justify' ? { flex: '1 1 0', minWidth: 0 } : align === 'Stack' ? { width: '100%' } : {}}>{endButton}</div>;
    }
    
    return (
      <div style={align === 'Justify' ? { flex: '1 1 0', minWidth: 0 } : align === 'Stack' ? { width: '100%' } : {}}>
        {defaultEndButton}
      </div>
    );
  };
  
  return (
    <div className={className} style={{ ...containerStyles, ...style }}>
      {renderStartButton()}
      {renderEndButton()}
    </div>
  );
};

ButtonGroup.displayName = 'ButtonGroup';

