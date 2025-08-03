"use server";

import { createClient } from "@/utils/supabase/server";

export async function taskServerGetAll() {
  const client = await createClient();
  return client
    .from("task")
    .select(`*, sub_task(*), task_participants(profile(*))`);
}

export async function getTodayTasks() {
  const client = await createClient();
  return client
    .from("task")
    .select(`*, sub_task(*)`)
    .eq("due_date", new Date().toISOString().split("T")[0]);
}
