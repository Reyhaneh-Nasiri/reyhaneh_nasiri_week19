import axios from "axios";
import { toast } from "react-toastify";

import { errorMapper } from "@/utils/errorMapper";
import { getCookie } from "@/utils/cookie";

const axiosDefaults = {
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000, // 10 seconds
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};
const api = axios.create(axiosDefaults);

// Attach token to each request
api.interceptors.request.use(
  (config) => {
    const token = getCookie("token");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Handle responses and errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    errorMapper(error, toast);
    return Promise.reject(error);
  }
);

export default api;
