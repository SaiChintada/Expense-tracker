import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import API from "../services/api";
import toast from "react-hot-toast";

const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {

  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {

    try {

      const response = await API.get("/transactions");

      setTransactions(response.data);

    } catch (error) {
      console.log(error);
    }
  };

 const addTransaction = async (data) => {

  try {

    await API.post("/transactions", data);

    toast.success("Transaction Added");

    fetchTransactions();

  } catch (error) {

    toast.error("Something went wrong");

    console.log(error);
  }
};

  const deleteTransaction = async (id) => {

  try {

    await API.delete(`/transactions/${id}`);

    toast.success("Transaction Deleted");

    fetchTransactions();

  } catch (error) {

    toast.error("Delete failed");

    console.log(error);
  }
};

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransactions = () =>
  useContext(TransactionContext);