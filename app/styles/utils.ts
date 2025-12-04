/**
 * Design System Utilities
 * Functional utilities for working with design tokens
 */

import {
  getColorVar,
  getSemanticVar,
  getSpacingVar,
  getSizingVar,
  getBorderRadiusVar,
  getShadowVar,
  getTextStyle,
  type ColorToken,
  type SemanticToken,
  type SpacingToken,
  type SizingToken,
  type BorderRadiusToken,
  type ShadowToken,
  type TextStyleToken,
  designTokens,
} from './tokens';

/**
 * Get inline style object with color from token
 */
export const getColorStyle = (token: ColorToken) => ({
  color: getColorVar(token),
});

/**
 * Get inline style object with background color from token
 */
export const getBackgroundStyle = (token: ColorToken | SemanticToken) => {
  const semanticTokens: SemanticToken[] = ['primary', 'secondary', 'success', 'error', 'warning', 'background', 'foreground'];
  const colorVar = semanticTokens.includes(token as SemanticToken)
    ? getSemanticVar(token as SemanticToken)
    : getColorVar(token as ColorToken);
  
  return {
    backgroundColor: colorVar,
  };
};

/**
 * Get CSS class name for Tailwind color utilities
 * Usage: className={getColorClass('blue')} -> 'text-blue'
 */
export const getColorClass = (token: ColorToken): string => {
  const classMap: Record<ColorToken, string> = {
    cyan: 'text-cyan',
    kellyGreen: 'text-kelly-green',
    coral: 'text-coral',
    hotRed: 'text-hot-red',
    purple: 'text-purple',
    white: 'text-white',
    blue: 'text-blue',
    black: 'text-black',
  };
  return classMap[token];
};

/**
 * Get CSS class name for Tailwind background color utilities
 */
export const getBackgroundClass = (token: ColorToken | SemanticToken): string => {
  const semanticClassMap: Record<SemanticToken, string> = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    success: 'bg-success',
    error: 'bg-error',
    warning: 'bg-warning',
    background: 'bg-background',
    foreground: 'bg-foreground',
  };

  const colorClassMap: Record<ColorToken, string> = {
    cyan: 'bg-cyan',
    kellyGreen: 'bg-kelly-green',
    coral: 'bg-coral',
    hotRed: 'bg-hot-red',
    purple: 'bg-purple',
    white: 'bg-white',
    blue: 'bg-blue',
    black: 'bg-black',
  };

  if (token in semanticClassMap) {
    return semanticClassMap[token as SemanticToken];
  }
  return colorClassMap[token as ColorToken] || '';
};

/**
 * Get inline style object with typography from text style token
 */
export const getTypographyStyle = (token: TextStyleToken) => {
  const style = getTextStyle(token);
  return {
    fontSize: style.fontSize,
    lineHeight: style.lineHeight,
    letterSpacing: style.letterSpacing,
    fontWeight: style.fontWeight,
    fontFamily: style.fontFamily,
  };
};

/**
 * Get inline style object with spacing (padding/margin)
 */
export const getSpacingStyle = (token: SpacingToken) => ({
  padding: getSpacingVar(token),
});

/**
 * Get inline style object with margin spacing
 */
export const getMarginStyle = (token: SpacingToken) => ({
  margin: getSpacingVar(token),
});

/**
 * Get inline style object with sizing (width/height)
 */
export const getSizingStyle = (token: SizingToken) => ({
  width: getSizingVar(token),
  height: getSizingVar(token),
});

/**
 * Get inline style object with border radius
 */
export const getRadiusStyle = (token: BorderRadiusToken) => ({
  borderRadius: getBorderRadiusVar(token),
});

/**
 * Get inline style object with shadow
 */
export const getShadowStyle = (token: ShadowToken) => ({
  boxShadow: getShadowVar(token),
});

/**
 * Get CSS class name for Tailwind typography text styles
 */
export const getTypographyClass = (token: TextStyleToken): string => {
  const classMap: Record<TextStyleToken, string> = {
    title: 'text-title',
    heading: 'text-heading',
    subheading: 'text-subheading',
    body: 'text-body',
    code: 'text-code',
  };
  return classMap[token];
};

/**
 * Get CSS class name for Tailwind spacing utilities
 */
export const getSpacingClass = (token: SpacingToken, type: 'p' | 'm' | 'px' | 'py' | 'mx' | 'my' | 'pt' | 'pb' | 'pl' | 'pr' | 'mt' | 'mb' | 'ml' | 'mr' = 'p'): string => {
  const prefix = type === 'p' ? 'p' : type === 'm' ? 'm' : type;
  const tokenMap: Record<SpacingToken, string> = {
    xs: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
    '2xl': '2xl',
    '3xl': '3xl',
    '4xl': '4xl',
    '5xl': '5xl',
    '6xl': '6xl',
    '7xl': '7xl',
    '8xl': '8xl',
  };
  return `${prefix}-${tokenMap[token]}`;
};

/**
 * Get responsive breakpoint value
 */
export const getBreakpoint = (token: 'sm' | 'md' | 'lg' | 'xl' | '2xl'): string => {
  return designTokens.breakpoints[token];
};

/**
 * Create media query string for breakpoint
 */
export const createMediaQuery = (token: 'sm' | 'md' | 'lg' | 'xl' | '2xl', minMax: 'min' | 'max' = 'min'): string => {
  const breakpoint = getBreakpoint(token);
  return `@media (${minMax}-width: ${breakpoint})`;
};

