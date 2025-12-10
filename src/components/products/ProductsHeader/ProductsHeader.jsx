import { LuSettings2 } from "react-icons/lu";
import useModal from "@/hooks/useModal";
import styles from "./ProductsHeader.module.css";

const ProductsHeader = () => {
  const { openModal } = useModal();
  return (
    <div className={styles["products-header"]}>
      <h2 className={styles["products-header__title"]}>
        <LuSettings2 className={styles["products-header__icon"]} />
        مدیریت کالا
      </h2>
      <button
        className={`${styles["products-header__button"]} primary-button`}
        onClick={() => openModal("add-product")}
      >
        افزودن محصول
      </button>
    </div>
  );
};

export default ProductsHeader;
