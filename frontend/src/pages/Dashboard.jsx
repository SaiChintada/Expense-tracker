import Layout from "../components/Layout";

import DashboardHero from "../components/DashboardHero";

import DashboardCards from "../components/DashboardCards";

import FinanceInsights from "../components/FinanceInsights";

import RecentActivity from "../components/RecentActivity";

import AddTransaction from "../components/AddTransaction";

import AnalyticsChart from "../components/AnalyticsChart";

import MonthlyChart from "../components/MonthlyChart";

import CategoryInsights from "../components/CategoryInsights";

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

      <MonthlyChart
  transactions={transactions}
/>  

     <CategoryInsights
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