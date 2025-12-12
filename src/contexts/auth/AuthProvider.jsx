import { useState } from "react";
import AuthContext from "./AuthContext";
import { getCookie, setCookie, removeCookie } from "@/utils/cookie";

export default function AuthProvider({ children }) {
  const [token, setToken] = useState(() => getCookie("token"));

  const login = (token) => {
    setCookie("token", token);
    setToken(token);
  };

  const logout = () => {
    removeCookie("token");
    setToken(null);
  };

  const value = {
    token,
    isAuthenticated: Boolean(token),
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
