import styles from "./ProductPagination.module.css";
const ProductPagination = () => {
  return (
    <div className={styles.pagination}>
      <button
        className={`${styles.pagination__step} ${styles["pagination__step--active"]}`}
      >
        ۱
      </button>
      <button className={styles.pagination__step}>۲</button>
      <button className={styles.pagination__step}>۳</button>
    </div>
  );
};

export default ProductPagination;
