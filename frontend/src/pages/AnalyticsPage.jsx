import Layout from "../components/Layout";

import MonthlyChart from "../components/MonthlyChart";

import CategoryInsights from "../components/CategoryInsights";

import ExpenseBreakdown
from "../components/ExpenseBreakdown";

import CategoryPieChart
from "../components/CategoryPieChart";

const AnalyticsPage = ({
  transactions,
}) => {

  const income =
    transactions

      .filter(
        (t) =>
          t.type === "income"
      )

      .reduce(
        (acc, item) =>
          acc + item.amount,
        0
      );

  const expense =
    transactions

      .filter(
        (t) =>
          t.type === "expense"
      )

      .reduce(
        (acc, item) =>
          acc + item.amount,
        0
      );

  const balance =
    income - expense;

  return (

    <Layout>

      <div className="analytics-page">

        <div className="analytics-top">

          <h1>
            Financial Analytics
          </h1>

          <p>
            Smart overview of your financial activity
          </p>

        </div>

        <div className="analytics-cards">

          <div className="analytics-card income-card">

            <p>
              Total Income
            </p>

            <h2>
              ₹ {income}
            </h2>

          </div>

          <div className="analytics-card expense-card">

            <p>
              Total Expense
            </p>

            <h2>
              ₹ {expense}
            </h2>

          </div>

          <div className="analytics-card balance-card">

            <p>
              Net Balance
            </p>

            <h2>
              ₹ {balance}
            </h2>

          </div>

        </div>

        <MonthlyChart
          transactions={transactions}
        />

        <CategoryInsights
          transactions={transactions}
        />

        <ExpenseBreakdown
         transactions={transactions}
        />

        <CategoryPieChart
         transactions={transactions}
        />

      </div>

    </Layout>
  );
};

export default AnalyticsPage;