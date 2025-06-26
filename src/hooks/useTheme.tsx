"use client";
import { useState, useEffect, useLayoutEffect } from "react";

export const useTheme = () => {
  const isDarkTheme = window?.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches; // является ли текущая тема темной
  const defailtTheme = isDarkTheme ? "dark" : "light";
  console.log("defailtTheme", defailtTheme);
  const [theme, setTheme] = useState(
    localStorage.getItem("app-theme") || defailtTheme
  );

  const setMode = (mode: string) => {
    window.localStorage.setItem("app-theme", mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    theme === "light" ? setMode("dark") : setMode("light");
  };

  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("app-theme", theme);
  }, [theme]);

  return { theme, toggleTheme };
};
