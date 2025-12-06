import { TbEdit, TbTrash } from "react-icons/tb";
import styles from "./ProductItem.module.css";
const ProductItem = ({ title, quantity, price, id }) => {
  return (
    <li className={styles.product}>
      <p className={styles.product__title}>{title}</p>
      <p className={styles.product__quantity}>{quantity}</p>
      <p className={styles.product__price}>
        {price} <span>هزار تومان</span>
      </p>
      <p className={styles.product__id}>{id}</p>
      <div className={styles["product__action-group"]}>
        <TbEdit className={styles["product__action-icon"]} />
        <TbTrash className={styles["product__action-icon"]} />
      </div>
    </li>
  );
};

export default ProductItem;
