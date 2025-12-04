/**
 * Design System Tokens
 * Extracted from Figma Design System
 * 
 * These tokens provide type-safe access to design system variables
 */

export const designTokens = {
  colors: {
    cyan: '#00B6FF',
    kellyGreen: '#24CB71',
    coral: '#FF7676',
    hotRed: '#FF3737',
    purple: '#874FFF',
    white: '#FFFFFF',
    blue: '#4D49FC',
    black: '#000000',
  },
  semantic: {
    primary: '#4D49FC',
    secondary: '#874FFF',
    success: '#24CB71',
    error: '#FF3737',
    warning: '#FF7676',
    background: '#FFFFFF',
    foreground: '#000000',
  },
  typography: {
    fontFamily: {
      sans: "'Whyte', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      mono: "'Geist Mono', 'Courier New', monospace",
    },
    fontSize: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem',  // 36px
      '5xl': '3rem',     // 48px
      '6xl': '3.75rem',  // 60px
      '7xl': '4.5rem',   // 72px
      '8xl': '6rem',     // 96px
      '9xl': '11.75rem', // 188px - Title size from Figma
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
      display: '0.9', // From Figma design
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0em',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
      display: '-3.76px', // From Figma design
    },
    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
    },
    textStyles: {
      title: {
        fontSize: '11.75rem', // 188px
        lineHeight: '0.9',
        letterSpacing: '-3.76px',
        fontWeight: '400',
        fontFamily: "'Whyte', sans-serif",
      },
      heading: {
        fontSize: '3rem', // 48px
        lineHeight: '1.2',
        letterSpacing: '-0.02em',
        fontWeight: '600',
        fontFamily: "'Whyte', sans-serif",
      },
      subheading: {
        fontSize: '1.5rem', // 24px
        lineHeight: '1.4',
        letterSpacing: '-0.01em',
        fontWeight: '500',
        fontFamily: "'Whyte', sans-serif",
      },
      body: {
        fontSize: '1rem', // 16px
        lineHeight: '1.5',
        letterSpacing: '0em',
        fontWeight: '400',
        fontFamily: "'Whyte', sans-serif",
      },
      code: {
        fontSize: '0.875rem', // 14px
        lineHeight: '1.5',
        letterSpacing: '0em',
        fontWeight: '400',
        fontFamily: "'Geist Mono', monospace",
      },
    },
  },
  spacing: {
    xs: '0.25rem',   // 4px
    sm: '0.5rem',    // 8px
    md: '1rem',      // 16px
    lg: '1.25rem',   // 20px - From Figma gap
    xl: '1.5rem',    // 24px
    '2xl': '2rem',   // 32px
    '3xl': '3rem',   // 48px
    '4xl': '4rem',   // 64px
    '5xl': '4.5rem', // 72px
    '6xl': '5rem',   // 80px - From Figma padding
    '7xl': '5.625rem', // 90px - From Figma padding
    '8xl': '6.25rem',  // 100px - From Figma padding
  },
  sizing: {
    xs: '0.5rem',    // 8px
    sm: '1rem',      // 16px
    md: '1.5rem',    // 24px
    lg: '2rem',      // 32px
    xl: '3rem',      // 48px
    '2xl': '4rem',   // 64px
    '3xl': '6rem',   // 96px
    '4xl': '8rem',   // 128px
    '5xl': '12rem',  // 192px
    full: '100%',
    auto: 'auto',
  },
  borderRadius: {
    none: '0',
    sm: '0.25rem',   // 4px
    md: '0.5rem',    // 8px
    lg: '1rem',      // 16px
    xl: '1.5rem',    // 24px
    '2xl': '2.5rem', // 40px - From Figma
    '3xl': '12.5rem', // 200px - From Figma
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    none: 'none',
  },
  breakpoints: {
    sm: '640px',   // Mobile
    md: '768px',   // Tablet
    lg: '1024px',  // Desktop
    xl: '1280px', // Large Desktop
    '2xl': '1536px', // Extra Large Desktop
  },
  zIndex: {
    base: '0',
    dropdown: '1000',
    sticky: '1020',
    fixed: '1030',
    modalBackdrop: '1040',
    modal: '1050',
    popover: '1060',
    tooltip: '1070',
  },
} as const;

export type ColorToken = keyof typeof designTokens.colors;
export type SemanticToken = keyof typeof designTokens.semantic;
export type FontSizeToken = keyof typeof designTokens.typography.fontSize;
export type LineHeightToken = keyof typeof designTokens.typography.lineHeight;
export type LetterSpacingToken = keyof typeof designTokens.typography.letterSpacing;
export type FontWeightToken = keyof typeof designTokens.typography.fontWeight;
export type SpacingToken = keyof typeof designTokens.spacing;
export type SizingToken = keyof typeof designTokens.sizing;
export type BorderRadiusToken = keyof typeof designTokens.borderRadius;
export type ShadowToken = keyof typeof designTokens.shadows;
export type BreakpointToken = keyof typeof designTokens.breakpoints;
export type TextStyleToken = keyof typeof designTokens.typography.textStyles;

/**
 * Get CSS variable name for a color token
 */
export const getColorVariable = (token: ColorToken): string => {
  const variableMap: Record<ColorToken, string> = {
    cyan: '--color-cyan',
    kellyGreen: '--color-kelly-green',
    coral: '--color-coral',
    hotRed: '--color-hot-red',
    purple: '--color-purple',
    white: '--color-white',
    blue: '--color-blue',
    black: '--color-black',
  };
  return variableMap[token];
};

/**
 * Get CSS variable name for a semantic token
 */
export const getSemanticVariable = (token: SemanticToken): string => {
  const variableMap: Record<SemanticToken, string> = {
    primary: '--color-primary',
    secondary: '--color-secondary',
    success: '--color-success',
    error: '--color-error',
    warning: '--color-warning',
    background: '--background',
    foreground: '--foreground',
  };
  return variableMap[token];
};

/**
 * Get CSS variable name for typography tokens
 */
export const getTypographyVariable = (category: 'fontSize' | 'lineHeight' | 'letterSpacing' | 'fontWeight', token: string): string => {
  return `--typography-${category}-${token}`;
};

/**
 * Get CSS variable name for spacing token
 */
export const getSpacingVariable = (token: SpacingToken): string => {
  return `--spacing-${token}`;
};

/**
 * Get CSS variable name for sizing token
 */
export const getSizingVariable = (token: SizingToken): string => {
  return `--sizing-${token}`;
};

/**
 * Get CSS variable name for border radius token
 */
export const getBorderRadiusVariable = (token: BorderRadiusToken): string => {
  return `--radius-${token}`;
};

/**
 * Get CSS variable name for shadow token
 */
export const getShadowVariable = (token: ShadowToken): string => {
  return `--shadow-${token}`;
};

/**
 * Get color value as CSS variable reference
 */
export const getColorVar = (token: ColorToken): string => {
  return `var(${getColorVariable(token)})`;
};

/**
 * Get semantic color value as CSS variable reference
 */
export const getSemanticVar = (token: SemanticToken): string => {
  return `var(${getSemanticVariable(token)})`;
};

/**
 * Get spacing value as CSS variable reference
 */
export const getSpacingVar = (token: SpacingToken): string => {
  return `var(${getSpacingVariable(token)})`;
};

/**
 * Get sizing value as CSS variable reference
 */
export const getSizingVar = (token: SizingToken): string => {
  return `var(${getSizingVariable(token)})`;
};

/**
 * Get border radius value as CSS variable reference
 */
export const getBorderRadiusVar = (token: BorderRadiusToken): string => {
  return `var(${getBorderRadiusVariable(token)})`;
};

/**
 * Get shadow value as CSS variable reference
 */
export const getShadowVar = (token: ShadowToken): string => {
  return `var(${getShadowVariable(token)})`;
};

/**
 * Get typography style object for a text style token
 */
export const getTextStyle = (token: TextStyleToken) => {
  return designTokens.typography.textStyles[token];
};

