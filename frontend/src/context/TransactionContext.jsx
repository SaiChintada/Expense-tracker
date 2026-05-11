import { createContext, useContext, useEffect, useState } from "react";
import API from "../services/api";

const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);

  // Fetch Transactions
  const fetchTransactions = async () => {
    try {
      const res = await API.get("/transactions");

      console.log("API RESPONSE:", res.data);

      // FIX FOR ARRAY ISSUE
      if (Array.isArray(res.data)) {
        setTransactions(res.data);
      } else if (Array.isArray(res.data.transactions)) {
        setTransactions(res.data.transactions);
      } else {
        setTransactions([]);
      }
    } catch (error) {
      console.error("Error fetching transactions:", error);
      setTransactions([]);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        setTransactions,
        fetchTransactions,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransactions = () => useContext(TransactionContext);