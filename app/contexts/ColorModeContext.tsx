'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type ColorMode = 'sds-light' | 'sds-dark' | 'brand-b-light';

interface ColorModeContextType {
  mode: ColorMode;
  setMode: (mode: ColorMode) => void;
}

const ColorModeContext = createContext<ColorModeContextType | undefined>(undefined);

export const useColorMode = () => {
  const context = useContext(ColorModeContext);
  if (!context) {
    throw new Error('useColorMode must be used within a ColorModeProvider');
  }
  return context;
};

interface ColorModeProviderProps {
  children: React.ReactNode;
  defaultMode?: ColorMode;
}

export const ColorModeProvider: React.FC<ColorModeProviderProps> = ({
  children,
  defaultMode = 'sds-light',
}) => {
  // Initialize mode from localStorage or default, checking on client side
  const getInitialMode = (): ColorMode => {
    if (typeof window === 'undefined') {
      return defaultMode;
    }
    
    try {
      const savedMode = localStorage.getItem('color-mode') as ColorMode | null;
      if (savedMode && ['sds-light', 'sds-dark', 'brand-b-light'].includes(savedMode)) {
        return savedMode;
      }
    } catch {
      // Ignore localStorage errors
    }
    
    // Check if mode is already set on document (from inline script)
    const docMode = document.documentElement.getAttribute('data-color-mode') as ColorMode | null;
    if (docMode && ['sds-light', 'sds-dark', 'brand-b-light'].includes(docMode)) {
      return docMode;
    }
    
    return defaultMode;
  };

  const [mode, setModeState] = useState<ColorMode>(getInitialMode);

  useEffect(() => {
    // Apply mode to document root immediately
    document.documentElement.setAttribute('data-color-mode', mode);
    
    // Store in localStorage for persistence
    try {
      localStorage.setItem('color-mode', mode);
    } catch {
      // Ignore localStorage errors
    }
  }, [mode]);

  const setMode = (newMode: ColorMode) => {
    setModeState(newMode);
    // Apply immediately for instant feedback
    document.documentElement.setAttribute('data-color-mode', newMode);
    try {
      localStorage.setItem('color-mode', newMode);
    } catch {
      // Ignore localStorage errors
    }
  };

  return (
    <ColorModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};

