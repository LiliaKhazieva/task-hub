import Header from "@/components/header/Header";
import { Dashboard } from "@/components/dashboard/Dashboard";
import ThemeProvider from "@/providers/ThemeProvider";

export default function HomePage() {
  return (
    <ThemeProvider>
      <div>
        <Header title={"Dashboard"} />
        <Dashboard />
      </div>
    </ThemeProvider>
  );
}
