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
  dueDate: number;
  color: string;
  users: IProfile[];
  subTasks: ISubTask[];
  comments: string[];
  resources: string[];
  links: string[];
}
