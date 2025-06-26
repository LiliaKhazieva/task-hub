import Header from "@/components/header/Header";
import { Dashboard } from "@/components/dashboard/Dashboard";

export default function HomePage() {
  return (
    <div>
      <Header title={"Dashboard"} />
      <Dashboard />
    </div>
  );
}
