"use client";
import { sidebarData } from "./sidebar.data";
import styles from "./Sidebar.module.scss";
import { projectsData } from "../sidebar/sidebar.data";
import { useEffect, useState } from "react";
import Link from "next/link";
import { LogOut, Pointer, PoundSterling } from "lucide-react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { PAGE } from "@/config/pages.config";
import { IProfile } from "@/types/profile.types";

export function Sidebar() {
  const [data, setData] = useState<IProfile>();
  const [active, setActive] = useState(0);
  const router = useRouter();

  async function signOut() {
    const { error } = await createClient().auth.signOut();
    if (!error) {
      router.push(PAGE.AUTH);
    }
  }

  useEffect(() => {
    // функция для выполнения запроса
    const fetchData = async () => {
      try {
        const { data } = await createClient().auth.getUser();
        const profile = await createClient()
          .from("profile")
          .select(`*`)
          .eq("id", data.user?.id)
          .single();
        if (!profile) {
          throw new Error(`Ошибка HTTP: ой ой`);
        }
        setData(profile.data);
      } catch (error) {
        console.error("Произошла ошибка:", error);
      }
    };

    fetchData();
  }, []);
  console.log(data);
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
        <LogOut onClick={signOut} style={{ cursor: "pointer" }} />
      </div>

      <div className={styles.user}>
        <img src={data ? data?.avatar_path : "/1234.jpeg"} alt="user" />
        <div className={styles.content}>
          <div>
            <span>{data ? data?.name : "User"}</span>
            <span>{data?.email}</span>
          </div>
        </div>
      </div>

      <div className={styles.sidebar}>
        <h3>Main menu</h3>
        <ul>
          {sidebarData.map((item, i) => (
            <li
              key={i}
              className={i === active ? styles.active : ""}
              onClick={() => setActive(i)}
            >
              <Link href={item.link}>
                <item.icon size={20} />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <section className={`${styles.sidebar} ${styles.projects}`}>
        <h3>Projects</h3>
        <ul>
          {projectsData.map((item, i) => (
            <li key={i}>
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
