import api from "./api";

// GET /products
const getProducts = (page = 1, limit = 10) =>
  api.get(`/products?page=${page}&limit=${limit}`);

// GET /products/:id
const getProduct = (id) => api.get(`/products/${id}`);

// POST /products
const createProduct = (data) => api.post("/products", data);

// PUT /products/:id
const updateProduct = (id, data) => api.put(`/products/${id}`, data);

// DELETE /products/:id
const deleteProduct = (id) => api.delete(`/products/${id}`);

export { getProducts, createProduct, getProduct, updateProduct, deleteProduct };
