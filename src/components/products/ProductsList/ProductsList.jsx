import ProductItem from "../ProductItem/ProductItem";
import styles from "./ProductsList.module.css";

const ProductsList = ({ data, isPending, isError }) => {
  if (isPending) return <p>Loading...</p>;
  if (isError) return <p>مشکلی پیش آمد</p>;

  return (
    <>
      {
        <div className={styles["products-list"]}>
          <div className={styles["products-list__titles"]}>
            <p>نام کالا</p>
            <p>موجودی</p>
            <p>قیمت</p>
            <p>شناسه کالا</p>
            <p></p>
          </div>
          {data?.data.map((product) => (
            <ProductItem key={product.id} {...product} />
          ))}
        </div>
      }
    </>
  );
};

export default ProductsList;
