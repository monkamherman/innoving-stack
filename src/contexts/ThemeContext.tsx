import React, { createContext, useState, useContext } from 'react';
import type { ReactNode } from 'react';

// Define the structure of a theme
export interface Theme {
  primary: string;
  secondary: string;
  bg: string;
  text: string;
  cardBg: string;
  name: string;
}

// Define the structure of the context
interface ThemeContextType {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

// Define the themes
 const themes: Record<string, Theme> = {
  futurist: {
    primary: '#6e8efb',
    secondary: '#a777e3',
    bg: '#0f172a',
    text: '#f8fafc',
    cardBg: '#1e293b',
    name: 'Futurist'
  },
  nature: {
    primary: '#4ade80',
    secondary: '#22d3ee',
    bg: '#052e16',
    text: '#f0fdf4',
    cardBg: '#14532d',
    name: 'Nature'
  },
  neonRed: {
    primary: '#ff0000',
    secondary: '#ff00ff',
    bg: '#0a0a0a',
    text: '#ffffff',
    cardBg: '#1a1a1a',
    name: 'Neon Rouge'
  },
  prestige: {
    primary: '#d4af37',
    secondary: '#c0c0c0',
    bg: '#1a1a1a',
    text: '#f8f8f8',
    cardBg: '#2a2a2a',
    name: 'Prestige'
  },
  childish: {
    primary: '#ff6b6b',
    secondary: '#4ecdc4',
    bg: '#f7fff7',
    text: '#292f36',
    cardBg: '#ffffff',
    name: 'Enfantin'
  }
};

// Create the context with a default value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

interface CustomCSSProperties extends React.CSSProperties {
  '--primary'?: string;
  '--secondary'?: string;
  '--bg'?: string;
  '--text'?: string;
  '--card-bg'?: string;
  '--custom-property-1'?: string;
  '--custom-property-2'?: string;
}

export const ThemeProviderCustome: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>('futurist');
  
  return (
    <ThemeContext.Provider value={{ theme: themes[theme], setTheme }}>
      <div style={{
        '--primary': themes[theme].primary,
        '--secondary': themes[theme].secondary,
        '--bg': themes[theme].bg,
        '--text': themes[theme].text,
        '--card-bg': themes[theme].cardBg,
        '--custom-property-1': 'value1',
        '--custom-property-2': 'value2'
      } as CustomCSSProperties}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};