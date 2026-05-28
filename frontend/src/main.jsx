import React from "react";

import ReactDOM from "react-dom/client";

import {
  BrowserRouter,
} from "react-router-dom";

import { Toaster } from "react-hot-toast";

import App from "./App";

import "./index.css";


import {
  AuthProvider,
} from "./context/AuthContext";

ReactDOM.createRoot(
  document.getElementById(
    "root"
  )


  
).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Toaster position="top-right" />
         

           <App />

        <Toaster

  position="top-right"

  toastOptions={{

    style: {

      background:"#111827",

      color:"#fff",

      border:
      "1px solid rgba(255,255,255,0.05)",

      borderRadius:"16px",
    },

    success: {

      iconTheme: {

        primary:"#10b981",

        secondary:"#fff",
      },
    },

    error: {

      iconTheme: {

        primary:"#ef4444",

        secondary:"#fff",
      },
    },
  }}
/>
        
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);