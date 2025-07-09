"use client";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import ThemeProvider from "./ThemeProvider";
import { Toaster } from "sonner";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      {children}
      <Toaster />
    </ThemeProvider>
  );
}
