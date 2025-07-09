import { Bug } from "lucide-react";
import { TASKS, USERS } from "../tasks/tasks.data";
import s from "./TodayTasks.module.scss";

export function TodayTasks() {
  const firstUsers = USERS.slice(0, 4);
  const threeUsers = USERS.slice(0, 3);
  return (
    <div className={s.todayTasks}>
      <div className={s.header}>
        <h4 className={s.title}>Today tasks</h4>
        <div className={s.users}>
          {firstUsers.map((user) => (
            <img key={user.id} className={s.user} src={user.avatar} />
          ))}
          <div className={s.usersCount}>
            <span>+{USERS.length - 4}</span>
          </div>
        </div>
      </div>
      <div className={s.content}>
        <div className={s.dataWrapper}>
          <span className={s.data}>9 am</span>
          <span className={s.data}>10 am</span>
          <span className={s.data}>11 am</span>
          <span className={s.data}>12 am</span>
          <span className={s.data}>1 pm</span>
          <span className={s.data}>2 pm</span>
          <span className={s.data}>3 pm</span>
          <span className={s.data}>4 pm</span>
          <span className={s.data}>5 pm</span>
        </div>
        <div className={s.times}>
          <div className={s.time}></div>
          <div className={s.time}></div>
          <div className={s.time}></div>
          <div className={s.time}></div>
          <div className={s.time}></div>
          <div className={s.time}></div>
          <div className={s.time}></div>
          <div className={s.time}></div>
          <div className={s.time}></div>
        </div>
        <div className={s.card}>
          <div className={s.top}>
            <div className={s.img}>
              <Bug color="#d8befc" size={17} />
            </div>
            <div className={s.heading}>
              <h5>{TASKS[2].title}</h5>
              <span>10 am - 12 pm</span>
            </div>
          </div>
          <div className={s.bottom}>
            {threeUsers.map((user) => (
              <img key={user.id} className={s.userCard} src={user.avatar} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
