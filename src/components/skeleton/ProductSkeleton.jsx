import Skeleton from "react-loading-skeleton";
import styles from "./ProductSkeleton.module.css";

const ProductSkeleton = () => {
  return (
    <li className={styles.skeleton}>
      <Skeleton className={styles.col} />
      <Skeleton className={styles.col} />
      <Skeleton className={styles.col} />
      <Skeleton className={styles.colLong} />
      <Skeleton className={styles.icon} />
    </li>
  );
};

export default ProductSkeleton;
