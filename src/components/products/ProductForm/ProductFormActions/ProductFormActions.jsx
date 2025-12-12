import useModal from "@/hooks/useModal";
import styles from "./ProductsFormAction.module.css";

const ProductFormActions = ({ isPending, confirmButton }) => {
  const { closeModal } = useModal();
  return (
    <div className={styles["product-form__buttons"]}>
      <button
        disabled={isPending}
        type="submit"
        className={`${styles["product-form__button"]} primary-button`}
      >
        {isPending ? "در حال پردازش..." : confirmButton}
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
