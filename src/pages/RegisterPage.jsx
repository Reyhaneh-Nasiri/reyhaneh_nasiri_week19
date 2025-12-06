import * as yup from "yup";

import AuthForm from "@/components/AuthForm/AuthForm";

import styles from "./RegisterPage.module.css";

const registerInputs = [
  { id: "username", name: "username", type: "text", placeholder: "نام کاربری" },
  {
    id: "password",
    name: "password",
    type: "password",
    placeholder: "رمز عبور",
  },
  {
    id: "confirm",
    name: "confirmPassword",
    type: "password",
    placeholder: "تکرار رمز عبور",
  },
];

const RegisterPage = () => {
  const handleRegister = (data) => {
    console.log(data)
  };

  const registerSchema = yup.object().shape({
    username: yup.string().required("نام کاربری الزامی است"),
    password: yup
      .string()
      .required("رمز عبور الزامی است")
      .min(4, "حداقل باید 4 کاراکتر باشد")
      .max(20, "حداکثر 20 کاراکتر مجاز است"),
    confirmPassword: yup
      .string()
      .required("تأیید رمز عبور الزامی است")
      .oneOf([yup.ref("password")], "رمز عبورها مطابقت ندارند"),
  });
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>بوت کمپ بوتواستارت</h1>
      <AuthForm
        onSubmit={handleRegister}
        title="فرم ثبت نام"
        inputs={registerInputs}
        button="ثبت نام"
        redirect="حساب کاربری دارید؟"
        path="/login"
        schema={registerSchema}
      />
    </div>
  );
};

export default RegisterPage;
