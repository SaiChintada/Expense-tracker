import {
  Bar
} from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

const ExpenseChart = ({
  transactions,
}) => {

  const monthlyData = {};

  transactions.forEach(
    (transaction) => {

      const month =
        new Date(
          transaction.date
        ).toLocaleString(
          "default",
          {
            month: "short",
          }
        );

      if (
        !monthlyData[month]
      ) {

        monthlyData[month] = 0;

      }

      if (
        transaction.type ===
        "expense"
      ) {

        monthlyData[month] +=
          transaction.amount;

      }

    }
  );

  const data = {

    labels:
      Object.keys(
        monthlyData
      ),

    datasets: [
      {
        label:
          "Monthly Expenses",

        data:
          Object.values(
            monthlyData
          ),

        borderRadius: 10,
      },
    ],
  };

  const options = {

    responsive: true,

    plugins: {

      legend: {
        labels: {
          color: "white",
        },
      },

    },

    scales: {

      x: {

        ticks: {
          color: "white",
        },

        grid: {
          display: false,
        },

      },

      y: {

        ticks: {
          color: "white",
        },

        grid: {
          color:
            "rgba(255,255,255,0.1)",
        },

      },

    },

  };

  return (

    <div className="chart-card">

      <h2>
        Monthly Expenses
      </h2>

      <Bar
        data={data}
        options={options}
      />

    </div>

  );
};

export default ExpenseChart;