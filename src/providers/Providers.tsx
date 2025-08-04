import { ReactNode } from "react";

import ThemeProvider from "./ThemeProvider";
import { Toaster } from "sonner";
import { AuthProvider } from "./AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      {children}
      <Toaster />
    </ThemeProvider>
  );
}
