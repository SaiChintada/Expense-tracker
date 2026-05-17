import Layout from "../components/Layout";
import DashboardCards from "../components/DashboardCards";
import Analytics from "../components/Analytics";
import TransactionList from "../components/TransactionList";
import AddTransaction from "../components/AddTransaction";

const Dashboard = ({
  transactions,
  fetchTransactions,
}) => {
  return (
    <Layout>
      <DashboardCards
        transactions={
          transactions
        }
      />

      <AddTransaction
        fetchTransactions={
          fetchTransactions
        }
      />

      <Analytics
        transactions={
          transactions
        }
      />

      <TransactionList
        transactions={
          transactions
        }
        fetchTransactions={
          fetchTransactions
        }
      />
    </Layout>
  );
};

export default Dashboard;