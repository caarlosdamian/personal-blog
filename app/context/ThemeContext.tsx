'use client';

import React, { createContext, useState, useEffect, useCallback } from 'react';

export interface ThemeContextType {
  mode: 'light' | 'dark';
  setMode: (mode: 'light' | 'dark') => void;
  handleToogle: (mode?: string) => void;
  isDarkMode: boolean;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<'light' | 'dark'>('dark');

  const handleToogle = (newMode?: string) => {
    if (newMode === 'light' || mode === 'dark') {
      setMode('light');
      document.documentElement.removeAttribute('data-theme');
      return;
    }
    setMode('dark');
    document.documentElement.setAttribute('data-theme', 'dark');
  };

  const handleThemeChange = useCallback(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      handleToogle('dark');
    } else {
      handleToogle('light');
    }
  }, []);

  useEffect(() => {
    handleThemeChange();
  }, [handleThemeChange]);

  const isDarkMode = mode === 'dark';

  return (
    <ThemeContext.Provider value={{ mode, setMode, handleToogle, isDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
