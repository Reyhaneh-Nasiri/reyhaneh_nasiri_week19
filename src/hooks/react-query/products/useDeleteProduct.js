import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct } from "@/services/products";
import { toast } from "react-toastify";

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => deleteProduct(id),

    onSuccess: () => {
      toast.success("محصول با موفقیت حذف شد");
      queryClient.invalidateQueries(["products"]);
    },

    onError: (err) => {
      toast.error(err?.response?.data?.message || "خطایی رخ داد");
    },
  });
};
