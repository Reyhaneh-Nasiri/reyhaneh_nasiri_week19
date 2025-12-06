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
  const handleRegister = async (data) => {
    console.log(data);
  };

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
      />
    </div>
  );
};

export default RegisterPage;
