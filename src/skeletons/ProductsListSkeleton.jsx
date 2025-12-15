import ProductItemSkeleton from "./ProductItemSkeleton";
import Skeleton from "./Skeleton";
import styles from "./ProductsListSkeleton.module.css";
const TableRowSkeleton = () => (
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
  </div>
);

const ProductsListSkeleton = () => {
  return (
    <div className={styles.container}>
      <TableRowSkeleton />
      {Array(10)
        .fill(0)
        .map((_, index) => (
          <ProductItemSkeleton key={index} />
        ))}
    </div>
  );
};

export default ProductsListSkeleton;
