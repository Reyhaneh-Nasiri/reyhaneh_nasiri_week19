import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import ErrorBoundary from "@/components/layout/ErrorBoundary";
import ProductsPageSkeleton from "@/skeletons/ProductsPageSkeleton";

const ProductsPage = lazy(() => import("@/pages/ProductsPage"));
const RegisterPage = lazy(() => import("@/pages/RegisterPage"));
const LoginPage = lazy(() => import("@/pages/LoginPage"));
const PageNotFound = lazy(() => import("@/pages/404"));

const Router = () => {
  return (
    <>
      <Suspense fallback={<ProductsPageSkeleton />}>
        <Routes>
          {/* Redirect root */}
          <Route index element={<Navigate to="/products" />} />
          {/* Public Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route
              path="/products"
              element={
                <ErrorBoundary>
                  <ProductsPage />
                </ErrorBoundary>
              }
            />
          </Route>
          {/* 404 */}
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default Router;
