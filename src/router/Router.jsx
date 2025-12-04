import PageNotFound from "@/pages/404";
import LoginPage from "@/pages/LoginPage";
import ProductsPage from "@/pages/ProductsPage";
import RegisterPage from "@/pages/RegisterPage";
import { Navigate, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <>
      <Routes>
        <Route index element={<Navigate to="/login" />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default Router;
