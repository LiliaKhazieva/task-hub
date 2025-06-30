import { Image, Link, MessageSquareText, Pencil, Plus } from "lucide-react";
import styles from "./Tasks.module.scss";
import { TASKS } from "./tasks.data";
import { useContext } from "react";
import { ThemeContext } from "@/providers/ThemeProvider";
import { Task } from "./task/Task";
export function Tasks() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <h2 className={styles.title}>Last Tasks ({TASKS.length})</h2>
      <div className={styles.tasks}>
        {TASKS.length
          ? TASKS.map((task) => (
              <Task task={task} theme={theme} key={task.id} />
            ))
          : "Нет данных"}
      </div>
    </>
  );
}
