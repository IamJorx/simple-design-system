'use client';

import { useColorMode, ColorMode } from '../../contexts/ColorModeContext';
import { Button } from '../Button';

export const ColorModeSelector = () => {
  const { mode, setMode } = useColorMode();

  const modes: { value: ColorMode; label: string }[] = [
    { value: 'sds-light', label: 'SDS Light' },
    { value: 'sds-dark', label: 'SDS Dark' },
    { value: 'brand-b-light', label: 'Brand B Light' },
  ];

  return (
    <div style={{ 
      display: 'flex', 
      gap: '0.5rem', 
      alignItems: 'center',
      padding: '1rem',
      backgroundColor: 'var(--sds-color-background-default-secondary)',
      borderRadius: 'var(--radius-md)',
      marginBottom: '2rem',
      transition: 'background-color 0.2s ease-in-out'
    }}>
      <span style={{ 
        fontSize: 'var(--font-size-sm)', 
        fontWeight: 'var(--font-weight-medium)',
        color: 'var(--sds-color-page-text-secondary)',
        marginRight: '0.5rem',
        transition: 'color 0.2s ease-in-out'
      }}>
        Color Mode:
      </span>
      {modes.map((m) => (
        <Button
          key={m.value}
          variant={mode === m.value ? 'Primary' : 'Subtle'}
          size="Small"
          onClick={() => setMode(m.value)}
        >
          {m.label}
        </Button>
      ))}
    </div>
  );
};

