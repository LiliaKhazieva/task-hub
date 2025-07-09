import s from "./Auth.module.scss";

export function Auth() {
  return (
    <div className={s.auth}>
      <form action="" className={s.authForm}>
        <h2>Личный кабинет</h2>
        <div className={s.header}>
          <span className={s.login}>Войти</span>
          <span className={s.register}>Зарегистрироваться</span>
        </div>
        <input className={s.input} type="email" placeholder="Введите email" />
        <input
          className={s.input}
          type="password"
          placeholder="Введите пароль"
        />
        <button className={s.button}>Войти</button>
      </form>
    </div>
  );
}
