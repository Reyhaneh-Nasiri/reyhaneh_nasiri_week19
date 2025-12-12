import { useQueryClient } from "@tanstack/react-query";
import styles from "./ProductPagination.module.css";
const ProductPagination = ({ page, setPage, totalPages }) => {
  const queryClient = useQueryClient();

  const buttons = [];
  for (let i = 1; i <= totalPages; i++) {
    buttons.push(
      <button
        key={i}
        className={`${styles.pagination__step} ${
          i == page ? styles["pagination__step--active"] : ""
        }`}
        onClick={() => {
          queryClient.invalidateQueries(["products"]);
          setPage(i);
        }}
      >
        {i}
      </button>
    );
  }
  return <div className={styles.pagination}>{buttons}</div>;
};

export default ProductPagination;
