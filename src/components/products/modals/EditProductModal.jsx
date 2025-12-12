import useModal from "@/hooks/useModal";
import ProductForm from "../ProductForm/ProductForm";
import { useUpdateProduct } from "@/hooks/react-query/products/useUpdateProduct";

const EditProductModal = ({ id, initialValues }) => {
  const { mutate: updateProductMutate, isPending } = useUpdateProduct();

  const { closeModal } = useModal();
  const submitHandler = async (data, e) => {
    e.preventDefault();
    updateProductMutate(
      { id, data },
      {
        onSuccess: () => closeModal(),
      }
    );
  };
  return (
    <ProductForm
      title="ویرایش اطلاعات"
      confirmButton="ثبت اطلاعات جدید"
      initialValues={initialValues}
      onSubmit={submitHandler}
      isPending={isPending}
    />
  );
};

export default EditProductModal;
