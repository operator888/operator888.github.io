// Theme colors for the terminal interface
export const theme = {
  // Background colors
  bgDark: '#0a0e17',
  bgDarker: '#060a14',
  bgLight: '#0f1620',
  
  // Text colors
  textPrimary: '#e3f6ff',
  textSecondary: '#8da1b9',
  textTertiary: '#5a6d85',
  
  // Accent colors
  accentBlue: '#5dd8ff',
  accentPink: '#ff7bbf',
  accentGreen: '#5aff81',
  accentYellow: '#ffd166',
  accentPurple: '#c792ea',
  
  // UI elements
  borderColor: '#1a2639',
  highlightColor: '#1a2639',
  
  // Terminal specific
  terminalBg: '#0a0e17',
  terminalHeaderBg: '#0a0e17',
  terminalBorder: '#1a2639',
  terminalText: '#e3f6ff',
  terminalPrompt: '#5dd8ff',
  terminalCommand: '#5aff81',
  terminalOutput: '#8da1b9',
  
  // Fonts
  fontMono: '"Fira Code", "Courier New", monospace',
  fontSans: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
  
  // Transitions
  transition: 'all 0.2s ease-in-out',
  
  // Shadows
  shadowSm: '0 1px 2px rgba(0, 0, 0, 0.25)',
  shadowMd: '0 4px 6px rgba(0, 0, 0, 0.25)',
  shadowLg: '0 10px 15px rgba(0, 0, 0, 0.25)',
  
  // Border radius
  borderRadius: '6px',
  borderRadiusLg: '10px',
  
  // Spacing
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
    '3xl': '64px',
  },
};

export type ThemeType = typeof theme;
