import ProductForm from "../ProductForm/ProductForm";

const AddProductModal = () => {
  const submitHandler = () => {
    console.log("submit");
  };
  return (
    <ProductForm
      initialValues={{ name: "", quantity: "", price: "" }}
      onSubmit={submitHandler}
      confirmButton="ایجاد"
      title="ایجاد محصول جدید"
    />
  );
};

export default AddProductModal;
