import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProduct } from "@/services/products";
import { toast } from "react-toastify";

export function useUpdateProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }) => updateProduct(id, data),

    onSuccess: () => {
      toast.success("محصول با موفقیت ویرایش شد");
      queryClient.invalidateQueries(["products"]);
    },

    onError: (err) => {
      toast.error(err?.response?.data?.message || "خطایی رخ داد");
    },
  });
}
