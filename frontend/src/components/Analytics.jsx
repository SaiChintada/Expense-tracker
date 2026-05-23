import {
  Pie
} from "react-chartjs-2";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const Analytics = ({
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

  if (
    transactions.length === 0
  ) {

    return (

      <div className="chart-card">

        <h2>
          No Analytics Yet
        </h2>

        <p>
          Add transactions
          to see charts
        </p>

      </div>

    );
  }

  const data = {

    labels: [
      "Income",
      "Expense",
    ],

    datasets: [
      {
        data: [
          income,
          expense,
        ],
      },
    ],
  };

  return (

    <div className="chart-card">

      <h2>
        Financial Analytics
      </h2>

      <div className="pie-wrapper">

        <Pie data={data} />

      </div>

    </div>

  );
};

export default Analytics;