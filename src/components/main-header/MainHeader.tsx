import React from "react";
import styles from "./MainHeader.module.scss";
import Button from "../button/Button";
import cn from "clsx";
import Link from "next/link";
import { PAGE } from "@/config/pages.config";

type Props = {};

export const MainHeader = (props: Props) => {
  return (
    <div className="container">
      <header className={styles.header}>
        <span style={{ fontSize: "25px" }}>TodayTask</span>
        <div className={styles.nav}>
          <Link href={PAGE.AUTH}>
            <Button text="Sign Up" bgColor="#1E90FF" />
          </Link>
          <Link href={PAGE.AUTH}>
            <Button text="Sign In" bgColor="#7B68EE" />
          </Link>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.banner}>
          <div className={styles.title}>
            <h1>Готовое решение для вашего бизнеса</h1>
            <p>Проекты, задачи, документы</p>
          </div>
          <img className={styles.img} src="images/banner.jpeg" alt="banner" />
        </div>
      </main>
    </div>
  );
};
