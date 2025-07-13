"use client";

import { Chart } from "../chart/Chart";
import { Tasks } from "../tasks/Tasks";
import { TodayTasks } from "../today-tasks/TodayTasks";
import styles from "./Dashboard.module.scss";

export function Dashboard() {
  return (
    <>
      <div className={styles.dashboard}>
        <div className={styles.content}>
          {" "}
          <div className={styles.task} style={{ backgroundColor: "#E1CDFE" }}>
            <div>
              {" "}
              <h3>92</h3>
              <span>Active Project</span>
            </div>
            <div className={styles.imgWrapper}>
              <img src="images/active-projects.svg" alt="" />
              <div style={{ backgroundColor: "#C5A8FF" }}></div>
            </div>
          </div>
          <div className={styles.task} style={{ backgroundColor: "#FDE252" }}>
            <div>
              {" "}
              <h3>35</h3>
              <span>On Goung Project</span>
            </div>
            <div className={styles.imgWrapper}>
              <img src="images/ongoing-projects.svg" alt="" />
              <div style={{ backgroundColor: "#FCBF26" }}></div>
            </div>
          </div>
          <div className={styles.task} style={{ backgroundColor: "#FDC1F6" }}>
            <div>
              {" "}
              <h3>19h 9m</h3>
              <span>Working hours</span>
            </div>
            <div className={styles.imgWrapper}>
              <img src="images/working-hours.svg" alt="image" />
              <div style={{ backgroundColor: "#ff8df28e" }}></div>
            </div>
          </div>
        </div>
        <Chart />
      </div>
      <Tasks />
      <TodayTasks />
    </>
  );
}
