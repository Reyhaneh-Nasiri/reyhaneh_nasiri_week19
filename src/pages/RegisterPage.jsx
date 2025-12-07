import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import AuthForm from "@/components/AuthForm/AuthForm";
import { register } from "@/services/auth";
import { registerSchema } from "@/utils/validators/registerSchema";

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
  const navigate = useNavigate();
  const handleRegister = async (data) => {
    delete data.confirmPassword;
    await register(data);
    toast.success("ثبت‌نام با موفقیت انجام شد");
    navigate("/login");
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
        schema={registerSchema}
      />
    </div>
  );
};

export default RegisterPage;
