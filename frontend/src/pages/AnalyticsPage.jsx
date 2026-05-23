import Layout from "../components/Layout";

import Analytics from "../components/Analytics";

import ExpenseChart from "../components/ExpenseChart";

import CategoryChart from "../components/CategoryChart";

const AnalyticsPage = ({
  transactions,
}) => {

  return (

    <Layout>

      <div className="page-header">

        <h1>
          Analytics
        </h1>

        <p>
          Financial insights and reports
        </p>

      </div>

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

      <div className="charts-grid">

        <CategoryChart
          transactions={
            transactions
          }
        />

      </div>

    </Layout>

  );

};

export default AnalyticsPage;