"use client";
import styles from "./Dashboard.module.scss";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
} from "recharts";

export function Dashboard() {
  const data = [
    { month: "Jan", uv: 50 },
    { month: "Feb", uv: 27 },
    { month: "Mar", uv: 20 },
    { month: "Apr", uv: 30 },
    { month: "May", uv: 15 },
  ];

  return (
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
            <img src="images/working-hours.svg" alt="" />
            <div style={{ backgroundColor: "#ff8df28e" }}></div>
          </div>
        </div>
      </div>
      <div className={styles.chartWrapper}>
        <AreaChart
          width={540}
          height={300}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" />
          <YAxis />
          {/* <CartesianGrid /> */}
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
            activeDot={{ r: 8 }}
          />
        </AreaChart>
      </div>
    </div>
  );
}
