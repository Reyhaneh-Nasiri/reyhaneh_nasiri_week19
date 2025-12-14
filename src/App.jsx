import { ToastContainer } from "react-toastify";
import Router from "./router/Router";
import ErrorBoundary from "./components/layout/ErrorBoundary";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const App = () => {
  return (
    <>
      <ErrorBoundary>
        <Router />
      </ErrorBoundary>
      <ToastContainer />
      <ReactQueryDevtools />
    </>
  );
};

export default App;
