import Layout from "../components/Layout";

import AddTransaction from "../components/AddTransaction";

import RecentActivity from "../components/RecentActivity";

import AIInsights
from "../components/AIInsights";

import BudgetTracker
from "../components/BudgetTracker";

import PerformanceCard
from "../components/PerformanceCard";

import TopCategoryCard
from "../components/TopCategoryCard";

const Dashboard = ({
  transactions,
  fetchTransactions,
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

    const monthlyBudget =
  Number(
    localStorage.getItem(
      "monthlyBudget"
    )
  ) || 0;

const budgetUsed =
  monthlyBudget
    ? (
        (expense /
          monthlyBudget) *
        100
      ).toFixed(0)
    : 0;

    const highestExpense =
  transactions
    .filter(
      (t) => t.type === "expense"
    )
    .sort(
      (a, b) =>
        b.amount - a.amount
    )[0];

const highestIncome =
  transactions
    .filter(
      (t) => t.type === "income"
    )
    .sort(
      (a, b) =>
        b.amount - a.amount
    )[0];

const savingsRate =
  income > 0
    ? (
        ((income - expense) /
          income) *
        100
      ).toFixed(1)
    : 0;

  return (

    <Layout>

      <div className="dashboard-page">

        <div className="dashboard-header">

          <div>

            <h1>
              Dashboard
            </h1>

            <p>
              Manage your finances smartly
            </p>

          </div>

        </div>

        <div className="dashboard-cards">

          <div className="dashboard-card income-dashboard">

            <p>
              Total Income
            </p>

            <h2>
              ₹ {income}
            </h2>

          </div>

          <div className="dashboard-card expense-dashboard">

            <p>
              Total Expense
            </p>

            <h2>
              ₹ {expense}
            </h2>

          </div>

          <div className="dashboard-card balance-dashboard">

            <p>
              Current Balance
            </p>

            <h2>
              ₹ {balance}
            </h2>

          </div>

        </div>

       <div className="insight-box">
        {monthlyBudget > 0 && (

  <div
    className="budget-alert"
  >

    {expense >
    monthlyBudget ? (

      <p>
        🚨 Budget Exceeded
      </p>

    ) : budgetUsed >=
      80 ? (

      <p>
        ⚠️ {budgetUsed}%
        of budget used
      </p>

    ) : (

      <p>
        ✅ Budget healthy
      </p>

    )}

  </div>

)}

  {balance > 0 ? (

    <p>

      Great job 🎉
      Your balance is positive.

    </p>

  ) : (

    <p>

      Your expenses are higher
      than income this month.

    </p>

  )}

</div>

<AIInsights
  transactions={transactions}
/>

<PerformanceCard
  transactions={
    transactions
  }
/>

<TopCategoryCard
  transactions={transactions}
/>

<div className="financial-insights">

  <div className="insight-card">

    <h3>
      Biggest Expense
    </h3>

    <p>
      {
        highestExpense
          ?.title ||
        "No Expense"
      }
    </p>

    <span>
      ₹
      {
        highestExpense
          ?.amount || 0
      }
    </span>

  </div>

  <div className="insight-card">

    <h3>
      Biggest Income
    </h3>

    <p>
      {
        highestIncome
          ?.title ||
        "No Income"
      }
    </p>

    <span>
      ₹
      {
        highestIncome
          ?.amount || 0
      }
    </span>

  </div>

  <div className="insight-card">

    <h3>
      Savings Rate
    </h3>

    <span>
      {savingsRate}%
    </span>

  </div>

</div>

<BudgetTracker
  transactions={
    transactions
  }
/>

        <AddTransaction
          fetchTransactions={
            fetchTransactions
          }
        />

        <RecentActivity
          transactions={transactions}
          fetchTransactions={
            fetchTransactions
          }
        />

      </div>

    </Layout>
  );
};

export default Dashboard;