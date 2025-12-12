import { TbEdit, TbTrash } from "react-icons/tb";
import useModal from "@/hooks/useModal";
import styles from "./ProductItem.module.css";
const ProductItem = ({ name, quantity, price, id }) => {
  const { openModal } = useModal();
  return (
    <li className={styles.product}>
      <p className={styles.product__title}>{name}</p>
      <p className={styles.product__quantity}>{quantity}</p>
      <p className={styles.product__price}>
        {price} <span>{price < 1000000 ? "هزار تومان" : "میلیون تومان"}</span>
      </p>
      <p className={styles.product__id}>{id}</p>
      <div className={styles["product__action-group"]}>
        <TbEdit
          className={styles["product__action-icon"]}
          onClick={() =>
            openModal("edit-product", {
              id,
              initialValues: { name, quantity, price },
            })
          }
        />
        <TbTrash
          className={styles["product__action-icon"]}
          onClick={() => openModal("delete-product", { id })}
        />
      </div>
    </li>
  );
};

export default ProductItem;
