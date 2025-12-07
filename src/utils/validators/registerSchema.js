import * as yup from "yup";

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

export { registerSchema };
