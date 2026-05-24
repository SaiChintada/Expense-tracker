import Layout from "../components/Layout";

import DashboardCards from "../components/DashboardCards";

import AddTransaction from "../components/AddTransaction";

import DashboardHero from "../components/DashboardHero";

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

      <AddTransaction
        fetchTransactions={
          fetchTransactions
        }
      />

    </Layout>

  );

};

export default Dashboard;