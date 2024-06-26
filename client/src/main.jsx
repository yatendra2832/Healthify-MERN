import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AuthProvider } from "./store/auth.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { CartProvider } from "./store/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    {/* <CartProvider> */}
      <React.StrictMode>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <ToastContainer />
        <App />
      </React.StrictMode>
    {/* </CartProvider> */}
  </AuthProvider>
);
