import { TChartSelect } from "@/components/chart/chart.data";
import { TASKS } from "@/components/tasks/tasks.data";
import {
  ITask,
  TSubTaskData,
  TTaskFormData,
  TTaskSortBy,
  TTaskStatus,
} from "@/types/task.types";
import { makeAutoObservable } from "mobx";

class TaskStore {
  tasks: ITask[] = TASKS;
  status: string | null = "all";
  sortByDueDate: TTaskSortBy | null = "asc";
  chartSelect: TChartSelect = "month";

  constructor() {
    makeAutoObservable(this);
  }

  getTaksById(id: string): ITask | undefined {
    return this.tasks.find((taks) => taks.id === id);
  }

  updateTask(id: string, updateTask: TTaskFormData): void {
    const index = this.tasks.findIndex((task) => task.id === id);
    if (index === -1) return;
    this.tasks[index] = { ...this.tasks[index], ...updateTask }; //объект с текущей задачей и новые ее данные
  }

  addSubTask(taskId: string, subTasks: TSubTaskData): void {
    const task = this.getTaksById(taskId);
    if (!task) return;
    if (!task.subTasks) {
      task.subTasks = [];
    }
    task.subTasks.push({
      id: crypto.randomUUID(),
      title: subTasks.title,
      isCompleted: false,
    });
  }
  setStatus(status: TTaskStatus | null): void {
    this.status = status;
  }
  setSortByDueDate(sortBy: TTaskSortBy): void {
    this.sortByDueDate = sortBy;
  }

  setChartSelect(select: TChartSelect): void {
    this.chartSelect = select;
  }

  get filteredTasks(): ITask[] {
    let filtered = this.tasks;

    if (this.status) {
      filtered = filtered.filter((task) => {
        switch (this.status) {
          case "all":
            return filtered;
          case "not-started":
            return task.subTasks.every((subTask) => !subTask.isCompleted); // не выполнены каждая

          case "in-progress":
            return task.subTasks.some((subTask) => !subTask.isCompleted); //хотя бы одна выполнена

          case "completed":
            return task.subTasks.every((subTask) => subTask.isCompleted); // выполнена каждая

          default:
            return true;
        }
      });
    }
    return filtered.slice().sort((a, b) => {
      const dateA = new Date(a.dueDate).getTime();
      const dateB = new Date(b.dueDate).getTime();

      if (this.sortByDueDate === "asc") {
        return dateA - dateB;
      } else {
        return dateB - dateA;
      }
    });
  }
}
export const taskStore = new TaskStore();
