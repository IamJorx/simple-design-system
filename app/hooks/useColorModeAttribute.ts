'use client';

import { useState, useEffect } from 'react';

/**
 * Hook to listen for changes to the data-color-mode attribute
 * This ensures components re-render when the color mode changes
 */
export const useColorModeAttribute = () => {
  const [colorMode, setColorMode] = useState<string>(() => {
    if (typeof window === 'undefined') return 'sds-light';
    return document.documentElement.getAttribute('data-color-mode') || 'sds-light';
  });

  useEffect(() => {
    const updateColorMode = () => {
      const mode = document.documentElement.getAttribute('data-color-mode') || 'sds-light';
      setColorMode(mode);
    };

    // Initial check
    updateColorMode();

    // Watch for attribute changes
    const observer = new MutationObserver(updateColorMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-color-mode'],
    });

    return () => observer.disconnect();
  }, []);

  return colorMode;
};

