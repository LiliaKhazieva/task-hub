import { LucideIcon } from "lucide-react";
import { IProfile } from "./profile.types";

export interface ISubTask {
  id?: string;
  title: string;
  is_completed?: boolean;
}

export interface ITask {
  id: string;
  owner_id: string;
  title: string;
  icon: LucideIcon;
  due_date: string;
  color: string;
  users: IProfile[];
  sub_tasks: ISubTask[];
  start_time: string;
  end_time: string;
  comments: string[];
  resources: string[];
  links: string[];
}

export type TTaskStatus = "all" | "not-started" | "in-progress" | "completed";
export type TTaskSortBy = "asc" | "desc";

export type TTaskFormData = Pick<ITask, "title" | "due_date">;

export type TSubTaskData = Pick<ISubTask, "title">;
