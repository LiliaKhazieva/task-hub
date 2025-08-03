"use client";
import { MousePointer2, Paperclip } from "lucide-react";
import { USERS } from "../tasks/tasks.data";
import styles from "./Chat.module.scss";
import cn from "clsx";
import { createClient } from "@/utils/supabase/client";
import { useCallback, useEffect, useRef, useState } from "react";
import { useProfile } from "@/hooks/useProfile";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "@/services/profile/profile-client.servisce";

const Chat = () => {
  const supabase = useRef(createClient());

  const user = getProfile();

  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    supabase.current
      .from("chat_message")
      .select("*")
      .order("created_at", { ascending: true })
      .then(({ data }) => {
        if (!data) return;
        setMessages(data);
      });
    const channel = supabase.current
      .channel("chat_messages")
      .on(
        "postgress_changes",
        { event: "INSERT", schema: "public", table: "chat_message" },
        (payload) => {
          const msg = payload.new;
          setMessages((prev) => [...prev, msg]);
        }
      )
      .subscribe();

    return () => {
      supabase.current.removeChannel(channel);
    };
  }, []);

  const sendMessage = async () => {
    if (!text.trim()) return;
    await supabase.current.auth.getUser().then(({ data }) => {
      if (!data.user) return;
      const userId = data.user.id;
      return supabase.current.from("chat_message").insert({
        text,
        user_id: userId,
      });
    });
    setText("");
  };

  const isOwner = useCallback(
    (userId: string) => {
      return user.id === userId;
    },
    [user]
  );
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
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(styles.message, {
                [styles.messageOwn]: isOwner,
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
                    [styles.headingOwn]: isOwner,
                  })}
                >
                  <h4>Me</h4>
                  <span>09.28 am</span>
                </div>
                <p
                  className={cn(styles.paragraf, {
                    [styles.paragrafOwn]: isOwner,
                  })}
                >
                  {message.text}
                </p>
              </div>
            </div>
          ))}
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
