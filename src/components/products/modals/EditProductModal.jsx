import useModal from "@/hooks/useModal";
import ProductForm from "../ProductForm/ProductForm";

const EditProductModal = ({ initialValues }) => {
  const { closeModal } = useModal();
  const submitHandler = async (data, e) => {
    e.preventDefault();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    closeModal();
  };
  return (
    <ProductForm
      initialValues={initialValues}
      onSubmit={submitHandler}
      confirmButton="ثبت اطلاعات جدید"
      title="ویرایش اطلاعات"
    />
  );
};

export default EditProductModal;
