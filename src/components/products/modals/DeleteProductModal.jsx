import closeIcon from "@/assets/icons/close.svg";
import useModal from "@/hooks/useModal";
import { useDeleteProduct } from "@/hooks/react-query/products/useDeleteProduct";
import styles from "./DeleteProductModal.module.css";

const DeleteProductModal = ({ id }) => {
  const { mutate: deleteProductMutate } = useDeleteProduct();
  const { closeModal } = useModal();

  const deleteHandler = () => {
    deleteProductMutate(id, {
      onSuccess: () => closeModal(),
    });
  };
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
          onClick={deleteHandler}
        >
          حذف
        </button>
        <button
          type="button"
          className={`${styles.modal__button} cancel-button`}
          onClick={() => closeModal()}
        >
          لغو
        </button>
      </div>
    </div>
  );
};

export default DeleteProductModal;
