import { z } from "zod";

export const productSchema = z.object({
  name: z
    .string({required_error: "قیمت ضروری است",})
    .min(2, "نام کالا باید حداقل ۲ حرف باشد")
    .max(50, "نام کالا نمی‌تواند بیشتر از ۵۰ حرف باشد"),

  quantity: z.coerce
    .number({
      required_error: "تعداد موجودی ضروری است",
      invalid_type_error: "تعداد باید عدد باشد",
    })
    .min(1, "حداقل تعداد ۱ است"),
  price: z.coerce
    .number({
      required_error: "قیمت ضروری است",
      invalid_type_error: "قیمت باید عدد باشد",
    })
    .min(1000, "حداقل قیمت ۱۰۰۰ تومان است")
    .max(10_000_000, "حداکثر قیمت ۱۰ میلیون تومان است"),
});
