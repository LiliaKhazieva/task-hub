import { LucideIcon } from "lucide-react";
import { IProfile } from "./profile.types";

export interface ISubTask {
  id: string;
  title: string;
  isCompleted: boolean;
}

export interface ITask extends Omit<ISubTask, "isCompleted"> {
  id: string;
  title: string;
  icon: LucideIcon;
  dueDate: Date;
  users: IProfile[];
  subTasks: ISubTask[];
  comments: string[];
  resources: string[];
  links: string[];
}
