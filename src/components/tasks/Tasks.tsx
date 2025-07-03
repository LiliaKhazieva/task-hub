import { Image, Link, MessageSquareText, Pencil, Plus } from "lucide-react";
import styles from "./Tasks.module.scss";
import { TASKS } from "./tasks.data";
import { useContext, useMemo, useState } from "react";
import { ThemeContext } from "@/providers/ThemeProvider";
import { Task } from "./task/Task";
import { CustomSelect } from "../custom-select/CustomSelect";

export interface ISelect {
  label: string;
  value: string;
}
export function Tasks() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [sort, setSort] = useState<ISelect>({
    label: "Asc",
    value: "asc",
  });
  const [selectedOption, setSelectedOption] = useState<ISelect>({
    label: "All",
    value: "all",
  });

  const selectData: ISelect[] = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "Not Started",
      value: "not-started",
    },
    {
      label: "In Progress",
      value: "in-progress",
    },
    {
      label: "Completed",
      value: "completed",
    },
  ];

  const sortData: ISelect[] = [
    {
      label: "Asc",
      value: "asc",
    },
    {
      label: "Desc",
      value: "desc",
    },
  ];

  const filteredTask = useMemo(() => {
    const filtered = !setSelectedOption
      ? TASKS
      : TASKS.filter((task) => {
          switch (selectedOption?.value) {
            case "all":
              return TASKS;
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
    const sortedTasks = filtered.sort((a, b) => {
      const dateA = new Date(a.dueDate).getTime();
      const dateB = new Date(b.dueDate).getTime();

      if (sort.value === "asc") {
        return dateA - dateB;
      } else {
        return dateB - dateA;
      }
    });
    return sortedTasks;
  }, [selectedOption.value, sort]);

  return (
    <>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Last Tasks ({filteredTask.length})</h2>
        <div className={styles.sortContent}>
          <CustomSelect
            options={selectData}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
          <CustomSelect
            options={sortData}
            selectedOption={sort}
            setSelectedOption={setSort}
          />
        </div>
      </div>

      <div className={styles.tasks}>
        {filteredTask.length
          ? filteredTask.map((task) => (
              <Task task={task} theme={theme} key={task.id} />
            ))
          : "Нет данных"}
      </div>
    </>
  );
}
