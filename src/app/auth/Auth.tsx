"use client";
import cn from "clsx";
import s from "./Auth.module.scss";
import { authStore } from "@/store/auth.store";
import { SubmitHandler, useForm } from "react-hook-form";

import { IAuthInput } from "./auth.interface";
import { useState } from "react";
import { validEmail } from "@/constants/regex";
import { observer } from "mobx-react-lite";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { PAGE } from "@/config/pages.config";
export const Auth = observer(() => {
  const [type, setType] = useState<"login" | "register">("login");
  const router = useRouter();
  const {
    register: registerInput,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IAuthInput>({ mode: "onChange" });

  const login = (data: any) => {
    console.table(data);
  };
  const register = (data: any) => {
    console.log(data);
  };

  const onSubmit: SubmitHandler<IAuthInput> = (data) => {
    if (type === "login") login(data);
    else if (type === "register") register(data);
    authStore.login();
    reset();

    if (authStore.isLoggedIn) {
      toast.success(
        type === "login" ? "Logged in successfully" : "Registered successfully"
      );
      router.replace(PAGE.BASE);
    }
  };

  console.log(type);
  return (
    <div className={s.auth}>
      <form onSubmit={handleSubmit(onSubmit)} className={s.authForm}>
        <h2>Личный кабинет</h2>
        <div className={s.header}>
          {/* <Toggle /> */}
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
          className={cn(s.input, { [s.errorBorder]: errors.email })}
          {...registerInput("email", {
            required: true,
            pattern: {
              value: validEmail,
              message: "Пожалуйста введите правильный email",
            },
          })}
          type="email"
          placeholder="Введите email"
        />

        <p className={cn(s.error, { [s.showError]: errors.email })}>
          {errors.email && errors.email.message}
        </p>

        <input
          {...registerInput("password", {
            required: true,
          })}
          className={s.input}
          type="password"
          placeholder="Введите пароль"
        />

        <p className={cn(s.error, { [s.showError]: errors.password })}>
          {errors.password && errors.password.message}
        </p>
        <button type="submit" className={s.button}>
          {type === "login" ? "Войти" : "Зарегистрироваться"}
        </button>
      </form>
    </div>
  );
});
