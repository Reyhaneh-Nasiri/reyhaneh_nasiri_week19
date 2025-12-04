import axios from "axios";

const axiosDefaults = {
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000, // 10 seconds
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};
const api = axios.create(axiosDefaults);

export default api;
