import { useEffect, useState } from "react";

import Layout from "./components/Layout";
import DashboardCards from "./components/DashboardCards";
import Analytics from "./components/Analytics";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";

import API from "./services/api";

function App() {
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    try {
      const res = await API.get("/transactions");

      console.log(res.data);

      setTransactions(
     Array.isArray(res.data)
     ? res.data
     : res.data.transactions || []
  );
    } catch (error) {
      console.log(error);
      setTransactions([]);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <Layout>
      <DashboardCards transactions={transactions} />

      {/* ADD TRANSACTION FORM */}
      <AddTransaction
        fetchTransactions={fetchTransactions}
      />

      <Analytics transactions={transactions} />

      <TransactionList
        transactions={transactions}
        fetchTransactions={fetchTransactions}
      />
    </Layout>
  );
}

export default App;