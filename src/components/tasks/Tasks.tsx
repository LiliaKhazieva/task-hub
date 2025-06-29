import { Pencil, Plane, Plus } from "lucide-react";
import styles from "./Tasks.module.scss";
import { TASKS } from "./tasks.data";
export function Tasks() {
  return (
    <>
      <h2 className={styles.title}>Last Tasks (3)</h2>
      <div className={styles.tasks}>
        {TASKS.map((task) => (
          <div className={styles.task} key={task.id}>
            <div className={styles.top}>
              <p className={styles.icon}>
                <task.icon color="#8C7DDD" />
              </p>
              <div className={styles.content}>
                <h4>{task.title}</h4>
                <span>Due: 5 days</span>
              </div>
              <div className={styles.users}>
                {task.users.map((user) => (
                  <img key={user.id} src={user.avatar} alt={user.name} />
                ))}
              </div>
            </div>
            <div className={styles.progress}>
              <span>52%</span>
            </div>
            <div className={styles.bottom}>
              <span>
                <Plus size={15} color="#8C7DDD" />
              </span>
              <span>
                <Pencil size={15} color="#8C7DDD" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
