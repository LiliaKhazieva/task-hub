import Header from "@/components/header/Header";
import { Dashboard } from "@/components/dashboard/Dashboard";
import ThemeProvider from "@/providers/ThemeProvider";

import { Providers } from "@/providers/Providers";
import { Sidebar } from "lucide-react";
import Chat from "@/components/chat/Chat";

export default function HomePage() {
  return (
    <Providers>
      <div>
        <Header title={"Dashboard"} />
        <Dashboard />
      </div>
    </Providers>
  );
}
