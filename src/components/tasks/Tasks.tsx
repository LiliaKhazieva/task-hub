import { Image, Link, MessageSquareText, Pencil, Plus } from "lucide-react";
import styles from "./Tasks.module.scss";
import { TASKS } from "./tasks.data";
import { useContext, useMemo, useState } from "react";
import { ThemeContext } from "@/providers/ThemeProvider";
import { Task } from "./task/Task";
import { CustomSelect } from "../custom-select/CustomSelect";
import { observer } from "mobx-react-lite";
import { taskStore } from "@/store/store";
import { ITask, TTaskSortBy, TTaskStatus } from "@/types/task.types";
import { CustomSort } from "../custom-select/CustomSort";
import Dropdown from "../custom-select/Dropdown";
import DropdownStore from "@/store/filter.store";

export const Tasks = observer(({ tasks }: { tasks: ITask[] }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  // const filteredTask = taskStore.filteredTasks;
  const currentStatus = taskStore.status;
  const currentSort = taskStore.sortByDueDate;

  // const dispatch = useDispatch();
  // const items = useSelector((state) => state.task.items);

  const selectData = new DropdownStore([
    { value: "msk", label: "all" },
    { value: "spb", label: "not-started" },
    { value: "ekb", label: "in-progress" },
    { value: "1", label: "completed" },
  ]);

  const sortData = new DropdownStore([
    { value: "asc", label: "asc" },
    { value: "desc", label: "desc" },
  ]);

  return (
    <>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Last Tasks ({tasks?.length})</h2>
        <div className={styles.sortContent}>
          <Dropdown store={selectData} />
          <Dropdown store={sortData} />
        </div>
      </div>

      <div className={styles.tasks}>
        {tasks?.length
          ? tasks.map((task: any) => <Task task={task} key={task.id} />)
          : "Нет данных"}
      </div>
    </>
  );
});
