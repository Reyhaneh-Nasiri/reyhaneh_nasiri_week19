import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { productSchema } from "@/utils/validators/productsSchema";
import { INPUT_CONFIG } from "./productForm.config";
import useModal from "@/hooks/useModal";
import styles from "./ProductForm.module.css";

const ProductForm = ({ title, confirmButton, initialValues, onSubmit }) => {
  const { closeModal } = useModal();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: initialValues ?? { name: "", quantity: null, price: null },
    resolver: zodResolver(productSchema),
  });
  return (
    <form className={styles["product-form"]} onSubmit={handleSubmit(onSubmit)}>
      <h3 className={styles["product-form__title"]}>{title}</h3>

      {/* fields */}
      <div className={styles["product-form__fields"]}>
        {INPUT_CONFIG.map(({ label, ...inputProps }) => (
          <div className={styles["product-form__field"]} key={inputProps.id}>
            <label
              htmlFor={inputProps.name}
              className={styles["product-form__label"]}
            >
              {label}
            </label>

            <input
              {...inputProps}
              {...register(inputProps.name)}
              className={`${styles["product-form__input"]} ${
                errors[inputProps.name]
                  ? styles["product-form__input--error"]
                  : ""
              }`}
            />
            {errors[inputProps.name] && (
              <p className={styles["product-form__error"]}>
                {errors[inputProps.name]?.message}
              </p>
            )}
          </div>
        ))}
      </div>
      {/* actions */}
      <div className={styles["product-form__buttons"]}>
        <button
          disabled={isSubmitting}
          type="submit"
          className={`${styles["product-form__button"]} primary-button`}
        >
          {isSubmitting ? "در حال پردازش..." : confirmButton}
        </button>
        <button
          type="button"
          className={`${styles["product-form__button"]} cancel-button`}
          onClick={closeModal}
        >
          انصراف
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
