import styles from "./ProductForm.module.css";

const INPUT_CONFIG = [
  {
    id: "name",
    name: "name",
    label: "نام کالا",
    placeholder: "نام کالا",
    type: "text",
  },
  {
    id: "quantity",
    name: "quantity",
    label: "تعداد موجودی",
    placeholder: "تعداد",
    type: "number",
  },
  {
    id: "price",
    name: "price",
    label: "قیمت",
    placeholder: "قیمت",
    type: "number",
  },
];

const ProductForm = ({ title, confirmButton, initialValues, onSubmit }) => {
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
          className={`${styles["product-form__button"]} ${styles["product-form__button--submit"]}`}
        >
          {confirmButton}
        </button>
        <button
          type="button"
          className={`${styles["product-form__button"]} ${styles["product-form__button--cancel"]}`}
        >
          انصراف
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
