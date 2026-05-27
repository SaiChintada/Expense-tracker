import Layout from "../components/Layout";

import AddTransaction from "../components/AddTransaction";

import RecentActivity from "../components/RecentActivity";

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