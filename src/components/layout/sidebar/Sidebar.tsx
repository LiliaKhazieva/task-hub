"use client";
import { sidebarData } from "./sidebar.data";
import styles from "./Sidebar.module.scss";
import { projectsData } from "../sidebar/sidebar.data";
import { useState } from "react";
import Link from "next/link";
import cn from "clsx";
import { observer } from "mobx-react-lite";
import { authStore } from "@/store/auth.store";
import { LogOut } from "lucide-react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { PAGE } from "@/config/pages.config";

export const Sidebar = observer(() => {
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();

  async function signOut() {
    const { error } = await createClient().auth.signOut();
    if (!error) {
      router.push(PAGE.AUTH);
    }
  }

  return (
    <section className={styles.container}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 0",
        }}
      >
        {" "}
        <h3>Account</h3>
        <LogOut onClick={signOut} />
      </div>

      <div className={styles.user}>
        <img
          src="https://yaart-web-alice-images.s3.yandex.net/3162f1d7b27211f080d50ed853a713d3:1"
          alt="user"
        />
        <div className={styles.content}>
          <div>
            <span>Dark Soul</span>
            <span>darkens@gmail.com</span>
          </div>

          <img src="/down.svg" alt="arrow-down" />
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
                  width: "12px",
                  height: "12px",
                }}
              ></div>
              {item.label}
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
});
