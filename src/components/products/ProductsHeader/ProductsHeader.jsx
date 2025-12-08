import { LuSettings2 } from "react-icons/lu";
import styles from "./ProductsHeader.module.css";

const ProductsHeader = () => {
  return (
    <div className={styles["products-header"]}>
      <h2 className={styles["products-header__title"]}>
        <LuSettings2 className={styles["products-header__icon"]} />
        مدیریت کالا
      </h2>
      <button className={`${styles["products-header__button"]} primary-button`}>
        افزودن محصول
      </button>
    </div>
  );
};

export default ProductsHeader;
