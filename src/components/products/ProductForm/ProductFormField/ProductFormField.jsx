import styles from "./ProductFormField.module.css"

const ProductFormField = ({errors, inputProps, label, register}) => {
  return (
              <div className={styles["product-form__field"]}>
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
  )
}

export default ProductFormField