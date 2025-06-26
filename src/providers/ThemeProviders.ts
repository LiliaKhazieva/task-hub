import { ReactNode, useEffect, useState } from "react";

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    document.documentElement;
  });
};
