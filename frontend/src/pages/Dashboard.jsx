import Layout from "../components/Layout";

import DashboardCards from "../components/DashboardCards";

import AddTransaction from "../components/AddTransaction";

import DashboardHero from "../components/DashboardHero";

import FinanceInsights from "../components/FinanceInsights";

import RecentActivity from "../components/RecentActivity";

const Dashboard = ({

  transactions,

  fetchTransactions,

}) => {

  return (

    <Layout>

      <DashboardHero
        transactions={
          transactions
        }
      />

      <DashboardCards
        transactions={
          transactions
        }
      />

      <FinanceInsights
        transactions={
          transactions
        }
      />

      <RecentActivity
        transactions={
          transactions
        }
      />

      <AddTransaction
        fetchTransactions={
          fetchTransactions
        }
      />

    </Layout>

  );

};

export default Dashboard;