import ProductForm from "../ProductForm/ProductForm";

const EditProductModal = () => {
  const submitHandler = () => {
    console.log("submit");
  };
  return (
    <ProductForm
      initialValues={{ name: "تیشرت", quantity: "22", price: "90000" }}
      onSubmit={submitHandler}
      confirmButton="ثبت اطلاعات جدید"
      title="ویرایش اطلاعات"
    />
  );
};

export default EditProductModal;
