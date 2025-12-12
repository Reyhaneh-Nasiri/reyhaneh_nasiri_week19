import { Navigate, Route, Routes } from "react-router-dom";
import PageNotFound from "@/pages/404";
import LoginPage from "@/pages/LoginPage";
import ProductsPage from "@/pages/ProductsPage";
import RegisterPage from "@/pages/RegisterPage";
import ProtectedRoute from "./ProtectedRoute";

const Router = () => {
  return (
    <>
      <Routes>
        {/* Redirect root */}
        <Route index element={<Navigate to="/products" />} />
        {/* Public Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/products" element={<ProductsPage />} />
        </Route>
        {/* 404 */}
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default Router;
