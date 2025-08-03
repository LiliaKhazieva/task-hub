import { ITask } from "@/types/task.types";
import { USERS } from "../tasks/tasks.data";
import s from "./TodayTasks.module.scss";

export const HOURS_DATA: number[] = [9, 10, 11, 12, 1, 2, 3, 4, 5];

export function TodayTasks({ todayTasks }: { todayTasks: ITask[] }) {
  return (
    <div className={s.todayTasks}>
      <div className={s.header}>
        <h2 className={s.title}>Today Tasks</h2>
        <div className={s.users}>{}</div>
      </div>
      <div className={s.content}>
        <div className={s.dataWrapper}>
          {HOURS_DATA.map((hour, i) => (
            <div key={i}>
              <div className={s.data}>
                {hour > 12 ? `${hour - 12} pm` : `${hour} am`}
              </div>
              <div className={s.times}>
                <div className={s.time}></div>
              </div>
            </div>
          ))}
        </div>
        {todayTasks.length === 0
          ? "На сегодня задач нет"
          : todayTasks.map((task) => {
              let date = new Date(task.due_date);
              let start = date.getHours();

              return (
                <div
                  className={s.card}
                  style={{
                    left: `${Number(task.start_time.slice(0, 2)) * 2}%`,
                    width: `${
                      (Number(task.start_time) - Number(task.end_time)) * 5
                    }%`,
                  }}
                  key={task.id}
                >
                  <div className={s.top}>
                    {/* <img className={s.img} src={USERS[0].avatar} alt="" /> */}
                    <div className={s.heading}>
                      <h5>{task.title}</h5>
                      <span>{start}</span>
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
}
