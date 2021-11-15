import React, { useEffect, useState } from "react";

/* Constants */
const light = "light";
const dark = "dark";
const localStorageItem = "color-theme";

/* Interfaces */
type ThemeType = typeof light | typeof dark;

interface ThemeContextInterface {
  theme: ThemeType;
  toggleTheme: () => void
};

/* Context and Provider */
export const ThemeContext = React.createContext<ThemeContextInterface>(
  {} as ThemeContextInterface
);

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>(getInitialTheme());

  const toggleTheme = () => {
    setTheme(theme === light ? dark : light);
  };

  const rawSetTheme = (rawTheme: ThemeType) => {
    const root = window.document.documentElement;

    root.classList.remove(isDarkTheme(rawTheme) ? light : dark);
    root.classList.add(rawTheme);

    localStorage.setItem(localStorageItem, rawTheme);
  };

  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

/* Helpers */
const isThemeType = (theme: any) : theme is ThemeType => {
  return theme === light || theme === dark;
};

const isDarkTheme = (theme: ThemeType) : boolean => {
  return theme === dark;
};

const getInitialTheme = () : ThemeType => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem(localStorageItem);
    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");

    if (isThemeType(storedPrefs)) {
      return storedPrefs;
    }

    if (userMedia.matches) {
      return dark;
    }
  }

  return light; // light theme as the default;
};
