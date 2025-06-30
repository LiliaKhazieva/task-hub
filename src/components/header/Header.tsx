"use client";
import { Bell, Moon, Sun } from "lucide-react";
import styles from "./Header.module.scss";
import { useContext } from "react";
import { ThemeContext } from "@/providers/ThemeProvider";

const Header = ({ title }: { title: string }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
      <div className={styles.searchContainer}>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search something..."
        />
      </div>
      <div>
        <div className={styles.toggle} onClick={toggleTheme}>
          {theme === "light" ? (
            <Moon color="#9f9f9f" />
          ) : (
            <Sun color="#9f9f9f" />
          )}
        </div>
        <div className={styles.toggle}>
          <Bell color="#9f9f9f" />
        </div>
      </div>
    </header>
  );
};

export default Header;
