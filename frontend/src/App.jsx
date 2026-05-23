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

import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  const [transactions, setTransactions] =
    useState([]);

  const { token } =
    useAuth();

  const fetchTransactions =
    async () => {

      try {

        const res =
          await API.get(
            "/transactions"
          );

        setTransactions(
          Array.isArray(res.data)
            ? res.data
            : []
        );

      } catch (error) {

        console.log(error);

      }
    };

  useEffect(() => {

    if (token) {

      fetchTransactions();

    }

  }, [token]);

  return (

    <Routes>

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>

            <Dashboard
              transactions={
                transactions
              }
              fetchTransactions={
                fetchTransactions
              }
            />

          </ProtectedRoute>
        }
      />

      <Route
        path="/"
        element={
          <Navigate
            to="/dashboard"
          />
        }
      />

    </Routes>

  );
}

export default App;