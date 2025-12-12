import { ToastContainer } from "react-toastify";
import Router from "./router/Router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const App = () => {
  return (
    <>
      <Router />
      <ToastContainer />
      <ReactQueryDevtools />
    </>
  );
};

export default App;
