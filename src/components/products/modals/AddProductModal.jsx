import useModal from "@/hooks/useModal";
import ProductForm from "../ProductForm/ProductForm";

const AddProductModal = () => {
  const { closeModal } = useModal();
  const submitHandler = async (data, e) => {
    e.preventDefault();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    closeModal();
  };
  return (
    <ProductForm
      onSubmit={submitHandler}
      confirmButton="ایجاد"
      title="ایجاد محصول جدید"
    />
  );
};

export default AddProductModal;
