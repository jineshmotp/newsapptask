import React, { createContext, useState, useContext } from 'react';

interface ThemeContextProps {
  isDarkTheme: boolean;
  toggleTheme: () => void;
  theme: ThemeConfig;
}

export const lightTheme: ThemeConfig = {
  backgroundColor: '#ffffff',
  textColor: '#000000',
  primaryColor: '#4caf50',
};

export const darkTheme: ThemeConfig = {
  backgroundColor: '#121212',
  textColor: '#ffffff',
  primaryColor: '#bb86fc',
};

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => setIsDarkTheme((prev) => !prev);

  const theme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export interface ThemeConfig {
  backgroundColor: string;
  textColor: string;
  primaryColor: string;
}