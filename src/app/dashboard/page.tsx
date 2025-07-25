import { Chart } from "@/components/chart/Chart";
import { Dashboard } from "@/components/dashboard/Dashboard";
import Header from "@/components/header/Header";

import { Providers } from "@/providers/Providers";
import { taskServerGetAll } from "@/services/tasks/task-server.service";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function DashboardPage() {
  const { data } = await taskServerGetAll();
  console.log(data);
  return (
    <Providers>
      <div>
        <Header title="Dashboard" />
        <Dashboard />
      </div>
    </Providers>
  );
}
