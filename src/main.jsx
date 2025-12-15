import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import App from "./App.jsx";
import ModalProvider from "./contexts/modal/ModalProvider";
import AuthProvider from "./contexts/auth/AuthProvider.jsx";
import { queryClient } from "./lip/react-query.js";
import "./styles/core/global.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <ModalProvider>
              <App />
            </ModalProvider>
          </AuthProvider>
        </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
