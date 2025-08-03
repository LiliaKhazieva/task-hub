"use client";
import { ISubTask, ITask } from "@/types/task.types";
import { createClient } from "@/utils/supabase/client";

export async function taskClientGetById(id: string) {
  const client = createClient();
  const { data, error } = await client
    .from("task")
    .select(`*, sub_task(*)`)
    .eq("id", id)
    .single();
  if (error || !data) throw new Error(error?.message || "Task not found");
  return data;
}

export async function taskClientCreate(task: any) {
  const client = createClient();
  const { data, error } = await client
    .from("task")
    .insert(task)
    .select(`*, sub_task(*)`)
    .single();
  if (error || !data) throw new Error(error?.message || "Task not found");
  return data;
}

export async function taskClientDelete(id: string) {
  const client = createClient();
  const { data, error } = await client
    .from("task")
    .delete()
    .eq("id", id)
    .select(`*, sub_task(*)`)
    .single();
  if (error || !data) throw new Error(error?.message || "Task not found");
  return data;
}

export async function taskClientUpdate(id: string, { title, due_date }) {
  const client = createClient();
  const { data, error } = await client
    .from("task")
    .update({ title, due_date })
    .eq("id", id)
    .select(`*, sub_task(*)`)
    .single();
  if (error || !data)
    throw new Error(error?.message || "Failed to update task");
  return data;
}

export async function createSubTask(taskId: string, subTask: ISubTask) {
  const client = createClient();
  const { data, error } = await client
    .from("sub_task")
    .insert({ ...subTask, task_id: taskId })
    .select(`*`)
    .single();
  if (error || !data)
    throw new Error(error?.message || "Failed to update task");
  return data;
}
