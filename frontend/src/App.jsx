import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import {
  useEffect,
  useState,
} from "react";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

import API from "./services/api";

import { useAuth } from "./context/AuthContext";

function App() {

  const [transactions, setTransactions] =
    useState([]);

  const { token } =
    useAuth();

  // Fetch Transactions
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

  // Load Transactions
  useEffect(() => {

    if (token) {

      fetchTransactions();

    }

  }, [token]);

  return (

    <Routes>

      {/* Login Route */}
      <Route
        path="/login"
        element={
          token
            ? (
                <Navigate
                  to="/dashboard"
                />
              )
            : (
                <Login />
              )
        }
      />

      {/* Register Route */}
      <Route
        path="/register"
        element={
          token
            ? (
                <Navigate
                  to="/dashboard"
                />
              )
            : (
                <Register />
              )
        }
      />

      {/* Dashboard Route */}
      <Route
        path="/dashboard"
        element={
          token
            ? (
                <Dashboard
                  transactions={
                    transactions
                  }
                  fetchTransactions={
                    fetchTransactions
                  }
                />
              )
            : (
                <Navigate
                  to="/login"
                />
              )
        }
      />

      {/* Default Route */}
      <Route
        path="/"
        element={
          <Navigate
            to={
              token
                ? "/dashboard"
                : "/login"
            }
          />
        }
      />

    </Routes>

  );

}

export default App;