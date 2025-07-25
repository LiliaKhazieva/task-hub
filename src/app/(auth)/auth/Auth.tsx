"use client";
import s from "./Auth.module.scss";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import client from "@/api/client";
import { PAGE } from "@/config/pages.config";
import { toast } from "sonner";
import cn from "clsx";
import { useForm } from "react-hook-form";
import { login, signup } from "./actions";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const [type, setType] = useState<"login" | "register">("login");

  const handleSignup = (e) => {
    e.preventDefault();
    const email = e.target[0]?.value;
    const password = e.target[1]?.value;
    if (!email || !password) {
      toast.error("Please enter email and password");
      return;
    }

    router.push(PAGE.BASE);

    console.log(email, password);

    if (type === "login") {
      login({ email, password });
      // if (error) toast.error("Unable to sign in. Please try again");
    } else if (type === "register") {
      signup({ email, password });
      // if (data) toast.success("Success. Please register now");
      // if (error) toast.error("Unable to sign up. Please try again");
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
          className={cn(s.input, { [s.errorBorder]: email })}
          // {...register("email", {
          //   required: true,
          //   pattern: {
          //     value: validEmail,
          //     message: "Пожалуйста введите правильный email",
          //   },
          // })}
          id="email"
          type="email"
          placeholder="Введите email"
        />
        <p className={cn(s.error, { [s.showError]: email })}></p>

        <input
          // {...register("password", {
          //   required: true,
          // })}
          className={s.input}
          type="password"
          id="password"
          placeholder="Введите пароль"
        />
        <p className={cn(s.error, { [s.showError]: password })}></p>
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
    // <form onSubmit={handleSignup}>
    //   <label htmlFor="email">Email:</label>
    //   <input id="email" name="email" type="email" required />
    //   <label htmlFor="password">Password:</label>
    //   <input id="password" name="password" type="password" required />
    //   <button type="submit">Log in</button>
    // </form>
  );
};
