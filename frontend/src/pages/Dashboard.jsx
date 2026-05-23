import Layout from "../components/Layout";

import DashboardCards from "../components/DashboardCards";

import Analytics from "../components/Analytics";

import TransactionList from "../components/TransactionList";

import AddTransaction from "../components/AddTransaction";

import ExpenseChart from "../components/ExpenseChart";

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

      <div className="charts-grid">

        <Analytics
          transactions={
            transactions
          }
        />

        <ExpenseChart
          transactions={
            transactions
          }
        />

      </div>

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