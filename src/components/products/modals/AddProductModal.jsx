import { useCreateProduct } from "@/hooks/react-query/products/useCreateProduct";
import useModal from "@/hooks/useModal";
import ProductForm from "../ProductForm/ProductForm";

const AddProductModal = () => {
  const { closeModal } = useModal();
  const { mutate, isPending } = useCreateProduct();
  const submitHandler = async (data, e) => {
    e.preventDefault();
    mutate(data, {
      onSuccess: () => closeModal(),
    });
  };
  return (
    <ProductForm
      title="ایجاد محصول جدید"
      confirmButton="ایجاد"
      onSubmit={submitHandler}
      isPending={isPending}
    />
  );
};

export default AddProductModal;
