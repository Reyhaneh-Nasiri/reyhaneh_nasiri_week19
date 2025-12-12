import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProduct } from "@/services/products";
import { toast } from "react-toastify";

export const useCreateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => createProduct(data),

    onSuccess: () => {
      toast.success("محصول با موفقیت اضافه شد ");
      queryClient.invalidateQueries(["products"]);
    },

    onError: (err) => {
      toast.error(err?.response?.data?.message || "خطایی رخ داد");
    },
  });
};
