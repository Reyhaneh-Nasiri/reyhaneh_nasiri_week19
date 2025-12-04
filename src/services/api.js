import { errorMapper } from "@/utils/errorMapper";
import axios from "axios";
import { toast } from "react-toastify";

const axiosDefaults = {
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000, // 10 seconds
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};
const api = axios.create(axiosDefaults);

api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

// Handle responses and errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    errorMapper(error, toast)
    return Promise.reject(error);
  }
);

export default api;
