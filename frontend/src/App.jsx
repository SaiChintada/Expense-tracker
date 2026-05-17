import { useEffect, useState } from "react";

import Layout from "./components/Layout";
import DashboardCards from "./components/DashboardCards";
import Analytics from "./components/Analytics";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import BudgetProgress from "./components/BudgetProgress";
import { FaPlus } from "react-icons/fa";

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
      <button
        className="fixed bottom-6 right-6 bg-violet-600 hover:bg-violet-700 text-white p-5 rounded-full shadow-2xl md:hidden"
      >
      <FaPlus />
     </button>
      <DashboardCards transactions={transactions} />
      <BudgetProgress transactions={transactions} />

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