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

export const Task = ({ task }: { task: any }) => {
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isOpenAdd, setIsOpenAdd] = useState(false);

  const completedTask =
    task?.sub_task?.filter((t) => t.is_completed).length || 0;
  const totalCount = task?.sub_task?.length || 0;
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
          {task.task_participants
            .filter((u) => Boolean(u.profile))
            .map(({ profile }) => (
              <img
                key={profile.id}
                src={profile?.avatar_path || ""}
                alt={profile?.name || ""}
              />
            ))}
        </div>
      </div>
      <div className={styles.progress}>
        <div
          className={styles.progressBar}
          style={{
            width: `${progress}%`,
            backgroundColor: `${task.color}`,
          }}
        >
          {progress === 100 ? "Done" : `${progress}%`}
          {progress === 0 && `0%`}
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
              <CreateTask id={task.id} onClose={() => setIsOpenAdd(false)} />
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
