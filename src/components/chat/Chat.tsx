import styles from "./Chat.module.scss";

const Chat = () => {
  return (
    <div className={styles.chat}>
      <div className={styles.top}>
        <img src="/images/chat-image.png" alt="" />
      </div>
      <div className={styles.bottom}></div>
    </div>
  );
};

export default Chat;
