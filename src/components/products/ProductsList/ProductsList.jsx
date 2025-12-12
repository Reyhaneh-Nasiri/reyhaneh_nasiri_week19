import ProductItem from "../ProductItem/ProductItem";
import styles from "./ProductsList.module.css";

const ProductsList = ({ data, isPending, isError, error }) => {
  if (isError) return <p>Error: {error.message}</p>;
  const products = data?.data || [];
  return (
    <div className={styles["products-list"]}>
      <div className={styles["products-list__titles"]}>
        <p>نام کالا</p>
        <p>موجودی</p>
        <p>قیمت</p>
        <p>شناسه کالا</p>
        <p></p>
      </div>

      {isPending
        ? [...Array(10)].map((_, i) => <ProductItem key={i} isPending={true} />)
        : products.map((product) => (
            <ProductItem key={product.id} {...product} isPending={false} />
          ))}
    </div>
  );
};

export default ProductsList;
