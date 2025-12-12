import api from "./api";

const register = (data) => api.post("/auth/register", data);
const login = (data) => api.post("/auth/login", data);

export { register, login };
