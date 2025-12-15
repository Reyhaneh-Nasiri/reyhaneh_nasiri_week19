import styles from "./ProductsHeaderSkeleton.module.css";
import Skeleton from "./Skeleton";

const ProductsHeaderSkeleton = () => {
  return (
    <div className={styles.container}>
      <Skeleton width="15%" height="16px" />
      <Skeleton width="15%" height="16px" />
    </div>
  );
};

export default ProductsHeaderSkeleton;
