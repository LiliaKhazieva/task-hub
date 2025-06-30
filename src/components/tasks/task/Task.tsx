import { ITask } from "@/types/task.types";
import styles from "../Tasks.module.scss";
import { Image, Link, MessageSquareText, Pencil, Plus } from "lucide-react";
export function Task({ task, theme }: { task: ITask; theme: string }) {
  const completedTask = task.subTasks.filter((task) => task.isCompleted).length;
  const totalCount = task.subTasks.length;
  const progress = Math.round((completedTask / totalCount) * 100);

  return (
    <div
      className={theme === "dark" ? `${styles.task} task` : `${styles.task}`}
      key={task.id}
    >
      <div className={styles.top}>
        <p className={styles.icon}>
          <task.icon color="#8C7DDD" />
        </p>
        <div className={styles.content}>
          <h4>{task.title}</h4>
          <span>Due: {task.dueDate.toString()} day</span>
        </div>
        <div className={styles.users}>
          {task.users.map((user) => (
            <img key={user.id} src={user.avatar} alt={user.name} />
          ))}
        </div>
      </div>
      <div className={styles.progress}>
        <div
          className={styles.progressBar}
          style={{
            width: `${progress}%`,
            backgroundImage: `${task.color}`,
          }}
        >
          {progress}%
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.left}>
          <span className={styles.icon}>
            <MessageSquareText />
            {task.comments.length}
          </span>
          <span className={styles.icon}>
            <Image /> {task.subTasks.length}
          </span>
          <span className={styles.icon}>
            <Link />
            {task.resources.length}
          </span>
        </div>
        <div className={styles.rigth}>
          <span className={styles.btn}>
            <Plus size={13} color="#8C7DDD" />
          </span>
          <span className={styles.btn}>
            <Pencil size={13} color="#8C7DDD" />
          </span>
        </div>
      </div>
    </div>
  );
}
