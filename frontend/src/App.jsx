import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { useEffect, useState } from "react";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

import API from "./services/api";

function App() {
  const [transactions, setTransactions] =
    useState([]);

  // TEMPORARY TOKEN
  const token = true;

  const fetchTransactions =
    async () => {
      try {
        const res =
          await API.get(
            "/transactions"
          );

        setTransactions(
          Array.isArray(
            res.data
          )
            ? res.data
            : []
        );
      } catch (error) {
        console.log(error);
      }
    };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <Routes>
      
      {/* LOGIN */}
      <Route
        path="/login"
        element={<Login />}
      />

      {/* REGISTER */}
      <Route
        path="/register"
        element={<Register />}
      />

      {/* DASHBOARD */}
      <Route
        path="/"
        element={
          token ? (
            <Dashboard
              transactions={
                transactions
              }
              fetchTransactions={
                fetchTransactions
              }
            />
          ) : (
            <Navigate to="/login" />
          )
        }
      />
    </Routes>
  );
}

export default App;