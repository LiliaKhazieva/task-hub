import { LucideIcon } from "lucide-react";
import { IProfile } from "./profile.types";

export interface ISubTask {
  id: string;
  title: string;
  isCompleted: boolean;
}

export interface ITask {
  id: string;
  title: string;
  icon: LucideIcon;
  dueDate: string;
  color: string;
  users: IProfile[];
  subTasks: ISubTask[];
  comments: string[];
  resources: string[];
  links: string[];
}

export type TTaskStatus = "not-started" | "in-progress" | "completed";
export type TTaskSortBy = "asc" | "desc";

export type TTaskFormData = Pick<ITask, "title" | "dueDate">;

export type TSubTaskData = Pick<ISubTask, "title">;
