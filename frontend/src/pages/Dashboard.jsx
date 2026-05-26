import Layout from "../components/Layout";

import DashboardHero from "../components/DashboardHero";

import DashboardCards from "../components/DashboardCards";

import FinanceInsights from "../components/FinanceInsights";

import RecentActivity from "../components/RecentActivity";

import AddTransaction from "../components/AddTransaction";

import AnalyticsChart from "../components/AnalyticsChart";

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

      <AnalyticsChart
  transactions={transactions}
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