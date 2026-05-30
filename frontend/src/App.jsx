import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import {
  useEffect,
  useState,
} from "react";

import Transactions from "./pages/Transactions";
import AnalyticsPage from "./pages/AnalyticsPage";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Settings from "./pages/Settings";

import API from "./services/api";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  const [transactions, setTransactions] =
    useState([]);

  const fetchTransactions =
    async () => {

      try {

        const token =
          localStorage.getItem(
            "token"
          );

        const response =
          await API.get(

            "/transactions/",

            {
              headers: {
                Authorization:
                  `Bearer ${token}`,
              },
            }
          );

        setTransactions(
          response.data
        );

      } catch (error) {

        console.log(error);
      }
    };

  useEffect(() => {

    const token =
      localStorage.getItem(
        "token"
      );

    if (token) {

      fetchTransactions();
    }

  }, []);

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
        path="/transactions"
        element={
          <ProtectedRoute>

            <Transactions
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
        path="/analytics"
        element={
          <ProtectedRoute>

            <AnalyticsPage
              transactions={
                transactions
              }
            />

          </ProtectedRoute>
        }
      />

      <Route
        path="/settings"
        element={
          <ProtectedRoute>

            <Settings />

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