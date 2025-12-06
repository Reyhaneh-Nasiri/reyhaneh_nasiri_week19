import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import AuthForm from "@/components/AuthForm/AuthForm";
import { register } from "@/services/auth";

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
