import { Loader } from "lucide-react";
import styles from "./Preloader.module.scss";
export function Preloader() {
  return (
    <div className={styles.wrapper}>
      <Loader size={40} />
    </div>
  );
}
