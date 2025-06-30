"use client";
import { Preloader } from "@/components/preloader/Preloader";
import { THEME_STORAGE_KEY } from "@/constants/constants";
import React, {
  createContext,
  ReactNode,
  Suspense,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";

export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

const getStorage =
  typeof window !== "undefined" &&
  window?.localStorage.getItem(THEME_STORAGE_KEY);

function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState(getStorage || "light");

  const setMode = (mode: string) => {
    window && window.localStorage.setItem(THEME_STORAGE_KEY, mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    setMode(theme === "light" ? "dark" : "light");
  };

  const themeContextValue = {
    theme,
    toggleTheme,
  };

  useLayoutEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.toggle(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
