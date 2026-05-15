import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

import { Toaster } from "react-hot-toast";

import { TransactionProvider } from "./context/TransactionContext";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>

    <TransactionProvider>

      <Toaster position="top-right" />
     <App />

    </TransactionProvider>

  </React.StrictMode>
);