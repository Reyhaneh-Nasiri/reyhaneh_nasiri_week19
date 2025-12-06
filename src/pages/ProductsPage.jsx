import ProductPagination from "@/components/products/ProductPagination/ProductPagination";
import ProductsHeader from "@/components/products/ProductsHeader/ProductsHeader";
import ProductsList from "@/components/products/ProductsList/ProductsList";
import SearchBar from "@/components/SearchBar/SearchBar";

const ProductsPage = () => {
  return (
    <div>
      <SearchBar />
      <ProductsHeader />
      <ProductsList />
      <ProductPagination />
    </div>
  );
};

export default ProductsPage;
