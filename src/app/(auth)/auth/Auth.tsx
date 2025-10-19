"use client";

import s from "./Auth.module.scss";
import { useState } from "react";
import { toast } from "sonner";
import cn from "clsx";
import { login, signup } from "./actions";

export const Auth = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const [type, setType] = useState<"login" | "register">("login");
  const [isValid, setIsValid] = useState(true);

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s_@]+$/;
    return regex.test(email);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    if (newEmail.trim() === "") {
      setError("Поле не может быть пустым");
    } else {
      setError("");
    }
    setEmail(newEmail);
    setIsValid(validateEmail(newEmail));
  };

  const handleSignup = (e: any) => {
    e.preventDefault();
    const email = e.target[0]?.value;
    const password = e.target[1]?.value;
    if (!email || !password) {
      toast.error("Please enter email and password");
      return;
    }
    if (type === "login") {
      login({ email, password });
      if (error) toast.error("Unable to sign in. Please try again");
    } else if (type === "register") {
      signup({ email, password });
      if (error) toast.error("Unable to sign up. Please try again");
    }
  };

  return (
    <div className={s.auth}>
      <form onSubmit={handleSignup} className={s.authForm}>
        <h2>Личный кабинет</h2>
        <div className={s.header}>
          <span
            onClick={() => setType("login")}
            className={cn(s.login, { [s.active]: type === "login" })}
          >
            Войти
          </span>
          <span
            onClick={() => setType("register")}
            className={cn(s.register, { [s.active]: type === "register" })}
          >
            Зарегистрироваться
          </span>
        </div>
        <input
          className={cn(s.input, { [s.errorBorder]: !isValid })}
          value={email}
          onChange={handleInputChange}
          id="email"
          type="email"
          placeholder="Введите email"
          required
        />
        <p className={cn(s.error, { [s.showError]: !isValid })}>
          {error ? error : "Некорректный email"}
        </p>

        <input
          className={cn(s.input, { [s.errorBorder]: error })}
          value={password}
          onChange={(e) => {
            if (e.target.value.trim() === "") {
              setError("Поле не может быть пустым");
            } else {
              setError("");
            }
            setPassword(e.target.value);
          }}
          type="password"
          id="password"
          placeholder="Введите пароль"
          minLength={6}
          required
        />
        <p className={cn(s.error, { [s.showError]: error })}>
          Пароль не может быть пустым
        </p>
        {type === "login" ? (
          <button type="submit" className={s.button}>
            Войти
          </button>
        ) : (
          <button type="submit" className={s.button}>
            Зарегистрироваться
          </button>
        )}
      </form>
    </div>
  );
};
