import { Image, Link, MessageSquareText, Pencil, Plus } from "lucide-react";
import styles from "./Tasks.module.scss";
import { TASKS } from "./tasks.data";
import { useContext, useMemo, useState } from "react";
import { ThemeContext } from "@/providers/ThemeProvider";
import { Task } from "./task/Task";
import { CustomSelect } from "../custom-select/CustomSelect";
import { observer } from "mobx-react-lite";
import { taskStore } from "@/store/store";
import { TTaskSortBy, TTaskStatus } from "@/types/task.types";

export interface ISelect {
  label: string;
  value: string;
}
export const Tasks = observer(() => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const filteredTask = taskStore.filteredTasks;
  console.log("jgnjdgnj", filteredTask);

  // const dispatch = useDispatch();
  // const items = useSelector((state) => state.task.items);

  const selectData: Array<TTaskStatus | "all"> = [
    "all",
    "not-started",
    "in-progress",
    "completed",
  ];

  const sortData: Array<TTaskSortBy | "asc"> = ["asc", "desc"];

  return (
    <>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Last Tasks ({filteredTask.length})</h2>
        <div className={styles.sortContent}>
          <CustomSelect options={selectData} />
          <CustomSelect options={sortData} />
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
});
