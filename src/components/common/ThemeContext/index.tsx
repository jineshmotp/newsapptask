import { colors } from '@/theme';
import React, { createContext, useState, useContext } from 'react';

interface ThemeContextProps {
  isDarkTheme: boolean;
  toggleTheme: () => void;
  theme: ThemeConfig;
}

export const lightTheme: ThemeConfig = {
  backgroundColor: colors.white,
  textColor: colors.black,
  iconColor: colors.black,
  selectionColor:colors.primary,
  primaryColor: colors.primary,

  bottomTabColor:colors.primary,
  bottomTabicon:colors.white,
  
  drawerColor:colors.white,
  
};

export const darkTheme: ThemeConfig = {
  backgroundColor: colors.black,
  textColor: colors.white,
  iconColor: colors.white,
  selectionColor:colors.gray,
  primaryColor: colors.primary,

  bottomTabColor:colors.gray,
  bottomTabicon:colors.white,

  drawerColor:colors.black,
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
  iconColor:string;
  selectionColor:string;
  primaryColor: string;

  bottomTabColor:string;
  bottomTabicon:string,

  drawerColor:string;

}