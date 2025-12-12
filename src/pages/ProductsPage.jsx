import { useState } from "react";
import ProductPagination from "@/components/products/ProductPagination/ProductPagination";
import ProductsHeader from "@/components/products/ProductsHeader/ProductsHeader";
import ProductsList from "@/components/products/ProductsList/ProductsList";
import SearchBar from "@/components/SearchBar/SearchBar";
import { useProducts } from "@/hooks/react-query/products/useProductsQuery";

const ProductsPage = () => {
  const [page, setPage] = useState(1);

  const { data, isPending, isError, isLoading } = useProducts(page);
  console.log(data);
  return (
    <div>
      <SearchBar />
      <ProductsHeader />
      <ProductsList
        data={data}
        isPending={isPending}
        isLoading={isLoading}
        isError={isError}
      />
      <ProductPagination
        page={page}
        setPage={setPage}
        totalPages={data?.totalPages}
      />
    </div>
  );
};

export default ProductsPage;
