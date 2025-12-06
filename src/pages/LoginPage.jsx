import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import AuthForm from "@/components/AuthForm/AuthForm";
import { login } from "@/services/auth";
import { setCookie } from "@/utils/cookie";

import styles from "./LoginPage.module.css";

const loginInputs = [
  { id: "username", name: "username", type: "text", placeholder: "نام کاربری" },
  {
    id: "password",
    name: "password",
    type: "password",
    placeholder: "رمز عبور",
  },
];

const LoginPage = () => {
  const navigate = useNavigate()
  const handleLogin = async (data) => {
    try {
      const res = await login(data);
      setCookie("token", res.data.token);
      toast.success("با موفقیت وارد شدید")
      navigate("/products");
    } catch {
      // error handled globally in interceptor
    }
  };

  const loginSchema = yup.object().shape({
    username: yup.string().required("نام کاربری الزامی است"),
    password: yup
      .string()
      .required("رمز عبور الزامی است")
      .min(4, "حداقل باید 4 کاراکتر باشد")
      .max(20, "حداکثر 20 کاراکتر مجاز است"),
  });
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>بوت کمپ بوتواستارت</h1>
      <AuthForm
        onSubmit={handleLogin}
        title="فرم ورود"
        inputs={loginInputs}
        button="ورود"
        redirect="ایجاد حساب کاربری!"
        path="/register"
        schema={loginSchema}
      />
    </div>
  );
};

export default LoginPage;
