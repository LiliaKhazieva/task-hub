"use server";

import { ITask } from "@/types/task.types";
import { createClient } from "@/utils/supabase/server";

export async function taskServerGetAll() {
  console.log((await (await createClient()).auth.getUser()).data.user);
  return (await createClient()).from("task").select(`*, sub_task(*)`);
}

export async function taskServerGetById(id: string) {
  console.log((await (await createClient()).auth.getUser()).data.user);
  return (await createClient())
    .from("task")
    .select(`*, sub_task(*)`)
    .eq("id", id)
    .single();
}

export async function taskServerUpdate(id: string, task: any) {
  console.log((await (await createClient()).auth.getUser()).data.user);
  return (await createClient())
    .from("task")
    .update(task)
    .eq("id", id)
    .select(`*, sub_task(*)`)
    .single();
}

export async function taskServerCreate(task: any) {
  console.log((await (await createClient()).auth.getUser()).data.user);
  return (await createClient()).from("task").select(`*, sub_task(*)`).single();
}
export async function taskServerDelete(id: string) {
  console.log((await (await createClient()).auth.getUser()).data.user);
  return (await createClient())
    .from("task")
    .delete()
    .eq("id", id)
    .select(`*, sub_task(*)`)
    .single();
}

export async function createSubTask(taskId: string, subTask: any) {
  console.log((await (await createClient()).auth.getUser()).data.user);
  return (await createClient())
    .from("sub_task")
    .insert({ ...subTask, task_id: taskId })
    .select(`*`)
    .single();
}

export async function getTodayTasks() {
  console.log((await (await createClient()).auth.getUser()).data.user);
  return (await createClient())
    .from("task")
    .select(`*, sub_task(*)`)
    .eq("due_date", new Date().toISOString().split("T")[0]);
}
