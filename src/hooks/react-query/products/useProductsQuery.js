import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/services/products";

const useProducts = (page) => {
  return useQuery({
    queryKey: ["products", page],
    queryFn: () => getProducts(page).then((res) => res.data),
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
    keepPreviousData: true,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};

export { useProducts };
