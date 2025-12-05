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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
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
          <div className={styles.authForm__field} key={input.id || input.name}>
            <input
              type={input.type || "text"}
              name={input.name}
              placeholder={input.placeholder}
              className={`${styles.authForm__input} ${
                errors[input.name] ? styles["authForm__input--error"] : ""
              }`}
              {...register(input.name)}
            />
            <p className={styles.authForm__error}>
              {errors[input.name]?.message}
            </p>
          </div>
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
