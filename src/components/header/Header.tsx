import { Moon } from "lucide-react";
import styles from "./Header.module.scss";

const Header = ({ title }: { title: string }) => {
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
      <div className={styles.toggle}>
        <Moon color="#9f9f9f" />
      </div>
    </header>
  );
};

export default Header;
