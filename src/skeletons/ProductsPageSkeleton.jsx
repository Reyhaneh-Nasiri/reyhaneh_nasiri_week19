import ProductsHeaderSkeleton from "./ProductsHeaderSkeleton";
import ProductsListSkeleton from "./ProductsListSkeleton";
import SearchBarSkeleton from "./SearchBarSkeleton";
import styles from "./ProductsPageSkeleton.module.css";
import PaginationSkeleton from "./PaginationSkeleton";

const ProductsPageSkeleton = () => {
  return (
    <div className={styles.ProductsPageSkeleton}>
      <SearchBarSkeleton />
      <ProductsHeaderSkeleton />
      <ProductsListSkeleton />
      <PaginationSkeleton />
    </div>
  );
};

export default ProductsPageSkeleton;
