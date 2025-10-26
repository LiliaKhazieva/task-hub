"use client";

import s from "./Auth.module.scss";
import { useState } from "react";
import cn from "clsx";
import { login, signup } from "./actions";
import { IAuthForm } from "./auth.interface";
import { SubmitHandler, useForm } from "react-hook-form";

export const Auth = () => {
  const [type, setType] = useState<"login" | "register">("login");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IAuthForm>({
    mode: "onChange",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  const onSubmit: SubmitHandler<IAuthForm> = ({ email, password }) => {
    if (type === "login") {
      login({ email, password });
    } else signup({ email, password });
  };

  return (
    <div className={s.auth}>
      <form onSubmit={handleSubmit(onSubmit)} className={s.authForm}>
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
          className={cn(s.input, { [s.errorBorder]: errors.email })}
          {...register("email", { required: "Email is required!" })}
          type="email"
          placeholder="Введите email:"
        />
        {errors.email?.message && (
          <p style={{ color: "red" }}>{errors.email?.message}</p>
        )}

        <input
          className={cn(s.input, { [s.errorBorder]: errors.password })}
          {...register("password", { required: "Password is required!" })}
          type="password"
          placeholder="Введите пароль:"
        />
        {errors.password?.message && (
          <p style={{ color: "red" }}>{errors.password.message}</p>
        )}

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
