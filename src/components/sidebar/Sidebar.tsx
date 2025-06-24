"use client";
import { sidebarData } from "./sidebar.data";
import styles from "./Sidebar.module.scss";
import { projectsData } from "../sidebar/sidebar.data";
import { useState } from "react";
import Link from "next/link";

export const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <section className={styles.sidebarContainer}>
      <h3>Account</h3>
      <div className={styles.userContainer}>
        <div className={styles.user}>
          <img
            src="https://images.unsplash.com/vector-1745847439151-58e18d3c676b?q=80&w=2726&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="user"
          />
          <div className={styles.userContent}>
            <div>
              <span>Dark Soul</span>
              <span>darkens@gmail.com</span>
            </div>
            <img src="/down.svg" alt="arrow-down" />
          </div>
        </div>
      </div>
      <div className={`${styles.sidebar}`}>
        <h3>Main menu</h3>
        <ul>
          {sidebarData.map((item, i) => (
            <li key={`icon_${i}`}>
              <Link href={item.link}>
                <item.icon size={20} />

                <div
                  style={{
                    display: "flex",
                    width: "80%",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <span>{item.label}</span>
                  {item.number && (
                    <span
                      style={{
                        fontSize: "13px",
                        backgroundColor: "#D8DCFA",
                        padding: "0 8px",
                        borderRadius: "10px",
                      }}
                    >
                      {item.number}
                    </span>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <section className={`${styles.sidebar} ${styles.projects}`}>
        <h3>Projects</h3>
        <ul>
          {projectsData.map((item, i) => (
            <li key={`project_${i}`}>
              <div
                style={{
                  backgroundColor: `${item.icon}`,
                  width: "15px",
                  height: "15px",
                }}
              ></div>
              {item.label}
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};
