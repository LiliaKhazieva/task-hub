import { Dashboard } from "@/components/dashboard/Dashboard";
import Header from "@/components/header/Header";
import {
  getTodayTasks,
  taskServerGetAll,
} from "@/services/tasks/task-server.service";

import { Providers } from "@/providers/Providers";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function DashboardPage() {
  const [data, todayTasks] = await Promise.all([
    taskServerGetAll(),
    getTodayTasks(),
  ]);
  if (data.error) {
    return <div>Failed to load data</div>;
  }
  if (todayTasks.error) {
    return <div>Failed to load today tasks</div>;
  }
  return (
    <Providers>
      <div>
        <Header title="Dashboard" />
        <Dashboard tasks={data.data || []} todayTasks={todayTasks.data || []} />
      </div>
    </Providers>
  );
}
