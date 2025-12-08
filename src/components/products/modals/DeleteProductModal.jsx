import closeIcon from "@/assets/icons/close.svg";

import styles from "./DeleteProductModal.module.css";

const DeleteProductModal = () => {
  return (
    <div className={styles.modal}>
      <img
        src={closeIcon}
        alt="close modal"
        className={styles["modal__header-icon"]}
      />
      <p className={styles.modal__description}>آیا از حذف این محصول مطمئنید؟</p>
      <div className={styles.modal__buttons}>
        <button
          type="button"
          className={`${styles.modal__button} danger-button`}
        >
          حذف
        </button>
        <button
          type="button"
          className={`${styles.modal__button} cancel-button`}
        >
          لغو
        </button>
      </div>
    </div>
  );
};

export default DeleteProductModal;
