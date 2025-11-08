"use client";
import { sidebarData } from "./sidebar.data";
import styles from "./Sidebar.module.scss";
import { projectsData } from "../sidebar/sidebar.data";
import { useEffect, useState } from "react";
import Link from "next/link";
import cn from "clsx";
import { observer } from "mobx-react-lite";
import { authStore } from "@/store/auth.store";
import { LogOut } from "lucide-react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { PAGE } from "@/config/pages.config";
import { getProfile } from "@/services/profile/profile-client.servisce";
import { error, profile } from "console";
import { useQuery } from "@tanstack/react-query";
import { getServerAuth } from "@/utils/supabase/get-server-auth";
import { SupabaseClient } from "@supabase/supabase-js";

export function Sidebar() {
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();

  async function signOut() {
    const { error } = await createClient().auth.signOut();
    if (!error) {
      router.push(PAGE.AUTH);
    }
  }

  const [data, setData] = useState(null);

  console.log(data);

  useEffect(() => {
    // функция для выполнения запроса
    const fetchData = async () => {
      try {
        const { data, error } = await createClient().auth.getUser();
        const profile = await createClient()
          .from("profile")
          .select(`*`)
          .eq("id", data.user?.id)
          .single(); // Замените на ваш URL
        if (!profile) {
          throw new Error(`Ошибка HTTP: ой ой`);
        }
        setData(profile.data);
      } catch (error) {
        console.error("Произошла ошибка:", error);
      }
    };

    fetchData();
  }, []); // Пустой массив зависимостей означает, что эффект выполнится только один раз при монтировании компонента

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
        <img src={data?.avatar_path} alt="user" />
        <div className={styles.content}>
          <div>
            <span>{data?.name}</span>
            <span>darkens@gmail.com</span>
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
}
