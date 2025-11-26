import { ITask } from "@/types/task.types";
import styles from "../Tasks.module.scss";
import {
  Image,
  Link,
  MessageSquareText,
  Pencil,
  Plus,
  Table,
  Table2,
  TableIcon,
} from "lucide-react";
import { useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { CreateTask } from "@/components/formCreateSubTask/CreateTask";

import { FormEditTask } from "@/components/formEditTask/FormEditTask";
import { USERS } from "../tasks.data";

export const Task = ({ task }: { task: ITask }) => {
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false); // Состояние для отслеживания видимости
  const visibleItems = USERS.slice(0, 3); // Первые 3 элемента
  const remainingItems = USERS.slice(3); // Остальные элементы

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded); // Изменяем состояние при клике на кнопку
  };
  const completedTask =
    task?.sub_tasks?.filter((t) => t.is_completed).length || 0;
  const totalCount = task?.sub_tasks?.length || 0;
  const progress = Math.round((completedTask / totalCount) * 100) || 0;

  const correctDate = new Date(task.due_date);

  const dueDate = useMemo(
    () => Math.ceil((+correctDate - Date.now()) / (1000 * 60 * 60 * 24)),
    [task.due_date]
  );

  return (
    <div className={styles.task} key={task.id}>
      <div className={styles.top}>
        <p className={styles.icon}>
          <Table2 color="#755ff2" />
        </p>
        <div className={styles.content}>
          <h4>{task.title}</h4>
          <span>Due: {dueDate} days</span>
        </div>
        <div className={styles.users}>
          {USERS &&
            visibleItems.map((user) => (
              <img
                key={user.id}
                src={user?.avatar || ""}
                alt={user?.name || ""}
              />
            ))}
          <div className={styles.img}>{`+${remainingItems.length}`}</div>
        </div>
      </div>
      <div className={styles.progress}>
        <div
          className={styles.progressBar}
          style={{
            width: `${progress === 0 ? 100 : progress}%`,
            backgroundColor: `${task.color}`,
          }}
        >
          {progress === 100 ? "Done" : `${progress}%`}
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.left}>
          <span className={styles.icon}>
            <MessageSquareText />4
          </span>
          <span className={styles.icon}>
            <Image /> 2
          </span>
          <span className={styles.icon}>
            <Link />3
          </span>
        </div>
        <div className={styles.rigth}>
          <span className={styles.btn}>
            <Plus
              size={13}
              color="#fff"
              onClick={() => {
                setIsOpenAdd(true);
              }}
            />
            {isOpenAdd && (
              <CreateTask
                subTask={task.sub_tasks && task?.sub_tasks[0]?.title}
                onClose={() => setIsOpenAdd(false)}
              />
            )}
          </span>
          <span
            className={styles.btn}
            onClick={() => {
              setIsOpenEdit(true);
            }}
          >
            <Pencil size={13} color="#8C7DDD" />
            {isOpenEdit && (
              <FormEditTask
                task={task}
                isOpen={isOpenEdit}
                onClose={() => setIsOpenEdit(false)}
              />
            )}
          </span>
        </div>
      </div>
    </div>
  );
};
