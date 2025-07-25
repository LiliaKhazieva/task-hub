import { MousePointer2, Paperclip } from "lucide-react";
import { USERS } from "../tasks/tasks.data";
import styles from "./Chat.module.scss";
import cn from "clsx";

const Chat = () => {
  const owner = true;
  return (
    <div className={styles.chat}>
      <div className={styles.top}>
        <img src="/images/chat-image.png" alt="image_bg" />
      </div>
      <div className={styles.bottom}>
        <div className={styles.header}>
          <img className={styles.img} src={USERS[0].avatar} alt="avatar" />
          <div className={styles.description}>
            <h4>{USERS[0].name}</h4>
            <p>Project Manager</p>
          </div>
        </div>
        <div className={styles.messages}>
          <div
            className={cn(styles.message, {
              [styles.messageOwn]: owner === true,
            })}
          >
            <img
              className={styles.imgMessage}
              src={USERS[0].avatar}
              alt="avatar"
            />
            <div className={styles.descr}>
              <div
                className={cn(styles.heading, {
                  [styles.headingOwn]: owner === true,
                })}
              >
                <h4>Me</h4>
                <span>09.28 am</span>
              </div>
              <p
                className={cn(styles.paragraf, {
                  [styles.paragrafOwn]: owner === true,
                })}
              >
                Morning! Working on the design
                elementsgnhfnhdmndhmndhmndnmdtgggggggggggggggggggggggggg
              </p>
            </div>
          </div>
          <div className={styles.message}>
            <img
              className={styles.imgMessage}
              src={USERS[1].avatar}
              alt="avatar"
            />
            <div className={styles.descr}>
              <div className={styles.heading}>
                <h4>{USERS[1].name}</h4>
                <span>09.40 am</span>
              </div>
              <p className={styles.paragraf}>
                That great to hear! I been focusing on market research.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.buttons}>
          <Paperclip />
          <input
            className={styles.input}
            type="text"
            placeholder="Type here..."
          />
          <MousePointer2 />
        </div>
      </div>
    </div>
  );
};

export default Chat;
