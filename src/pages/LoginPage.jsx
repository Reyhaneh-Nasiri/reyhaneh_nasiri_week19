import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import AuthForm from "@/components/AuthForm/AuthForm";
import { login } from "@/services/auth";
import { setCookie } from "@/utils/cookie";
import { loginSchema } from "@/utils/validators/loginSchema";

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
