"use client";
import { ReactNode } from "react";

import ThemeProvider from "./ThemeProvider";
import { Toaster } from "sonner";
import { AuthProvider } from "./AuthProvider";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      {children}
      <Toaster />
    </ThemeProvider>
  );
}
