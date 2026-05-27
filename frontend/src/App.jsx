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

import API from "./services/api";

import { useAuth } from "./context/AuthContext";

import ProtectedRoute from "./components/ProtectedRoute";

import Settings from "./pages/Settings";

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
  path="/transactions"
  element={
    token ? (
      <Transactions
        transactions={transactions}
        fetchTransactions={fetchTransactions}
      />
    ) : (
      <Navigate to="/login" />
    )
  }
/>

<Route
  path="/analytics"
  element={
    token ? (
      <AnalyticsPage
        transactions={transactions}
      />
    ) : (
      <Navigate to="/login" />
    )
  }
/>

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      <Route
       path="/settings"
       element={<Settings />}
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
      element={<Navigate to="/login" />}
    />

    </Routes>

  );
}

export default App;