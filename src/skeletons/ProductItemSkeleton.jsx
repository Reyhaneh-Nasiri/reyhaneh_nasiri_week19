import Skeleton from "./Skeleton";
import styles from "./ProductItemSkeleton.module.css";

const ProductItemSkeleton = () => {
  return (
    <div className={styles.tableRow}>
      {/* Column: نام کالا */}
      <div className={styles.columnName}>
        <Skeleton width="80%" height="0.8em" />
      </div>

      {/* Column: موجودی */}
      <div className={styles.columnStock}>
        <Skeleton width="40px" height="0.8em" />
      </div>

      {/* Column: قیمت */}
      <div className={styles.columnPrice}>
        <Skeleton width="70%" height="0.8em" />
      </div>
      {/* Column: شناسه کالا */}
      <div className={styles.columnId}>
        <Skeleton width="90%" height="0.8em" />
      </div>

      {/* Action Icons Placeholder */}
      <div className={styles.actionIcons}>
        <Skeleton width="24px" height="24px" />
        <Skeleton width="24px" height="24px" />
      </div>
    </div>
  );
};

export default ProductItemSkeleton;
