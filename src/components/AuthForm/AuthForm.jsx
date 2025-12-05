import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import BotostartIcon from "@/assets/icons/botostart-logo.svg";

import styles from "./AuthForm.module.css";

const AuthForm = ({
  title,
  inputs,
  button,
  redirect,
  path,
  onSubmit,
  schema,
}) => {
  const { register, handleSubmit } = useForm({
    resolver: schema ? yupResolver(schema) : undefined,
  });
  return (
    <form className={styles.authForm} onSubmit={handleSubmit(onSubmit)}>
      <img
        src={BotostartIcon}
        alt="Botostart brand logo"
        className={styles.authForm__icon}
      />
      <h3 className={styles.authForm__title}>{title}</h3>
      <div className={styles.authForm__inputs}>
        {inputs.map((input) => (
          <input
            key={input.id || input.name}
            type={input.type || "text"}
            name={input.name}
            placeholder={input.placeholder}
            className={styles.authForm__input}
            {...register(input.name)}
          />
        ))}
      </div>
      <button className={styles.authForm__button} type="submit">
        {button}
      </button>
      <Link className={styles.authForm__redirect} to={path}>
        {redirect}
      </Link>
    </form>
  );
};

export default AuthForm;
