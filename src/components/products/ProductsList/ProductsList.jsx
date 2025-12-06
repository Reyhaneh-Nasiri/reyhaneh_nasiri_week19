import ProductItem from "../ProductItem/ProductItem";
import styles from "./ProductsList.module.css";

const products = [
  {
    title: "تیشرت طرح انگولار",
    quantity: "۲۹۳",
    price: "90",
    id: "1-90uf9g9h7895467g974",
  },
  {
    title: "تیشرت طرح انگولار",
    quantity: "۲۹۳",
    price: "90",
    id: "2-90uf9g9h7895467g974",
  },
  {
    title: "تیشرت طرح انگولار",
    quantity: "۲۹۳",
    price: "90",
    id: "3-90uf9g9h7895467g974",
  },
  {
    title: "تیشرت طرح انگولار",
    quantity: "۲۹۳",
    price: "90",
    id: "4-90uf9g9h7895467g974",
  },
  {
    title: "تیشرت طرح انگولار",
    quantity: "۲۹۳",
    price: "90",
    id: "5-90uf9g9h7895467g974",
  },
  {
    title: "تیشرت طرح انگولار",
    quantity: "۲۹۳",
    price: "90",
    id: "6-90uf9g9h7895467g974",
  },
];

const ProductsList = () => {
  return (
    <>
      <div className={styles["products-list"]}>
        <div className={styles["products-list__titles"]}>
          <p>نام کالا</p>
          <p>موجودی</p>
          <p>قیمت</p>
          <p>شناسه کالا</p>
          <p></p>
        </div>
        {products.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </div>
    </>
  );
};

export default ProductsList;
