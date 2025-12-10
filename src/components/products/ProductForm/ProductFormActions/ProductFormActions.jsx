import useModal from "@/hooks/useModal";
import styles from "./ProductsFormAction.module.css"

const ProductFormActions = ({ isSubmitting, confirmButton }) => {
  const { closeModal } = useModal();
  return (
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
  );
};

export default ProductFormActions;
