import useModal from "@/hooks/useModal";
import { INPUT_CONFIG } from "./productForm.config";
import styles from "./ProductForm.module.css";

const ProductForm = ({ title, confirmButton, initialValues, onSubmit }) => {
  const { closeModal } = useModal();
  const changeHandler = (e) => {
    console.log(e.target.name, e.target.value);
  };
  return (
    <form className={styles["product-form"]} onSubmit={onSubmit}>
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
              value={initialValues?.[inputProps.name] ?? ""}
              onChange={changeHandler}
              className={styles["product-form__input"]}
            />
          </div>
        ))}
      </div>

      {/* actions */}
      <div className={styles["product-form__buttons"]}>
        <button
          type="submit"
          className={`${styles["product-form__button"]} primary-button`}
        >
          {confirmButton}
        </button>
        <button
          type="button"
          className={`${styles["product-form__button"]} cancel-button`}
          onClick={() => closeModal()}
        >
          انصراف
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
