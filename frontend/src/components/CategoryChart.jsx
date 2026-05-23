import {
  Doughnut
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

const CategoryChart = ({
  transactions,
}) => {

  const categoryData = {};

  transactions.forEach(
    (transaction) => {

      if (
        transaction.type ===
        "expense"
      ) {

        if (
          !categoryData[
            transaction.category
          ]
        ) {

          categoryData[
            transaction.category
          ] = 0;

        }

        categoryData[
          transaction.category
        ] += transaction.amount;

      }

    }
  );

  const data = {

    labels:
      Object.keys(
        categoryData
      ),

    datasets: [
      {
        data:
          Object.values(
            categoryData
          ),

        borderWidth: 1,
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

  };

  return (

    <div className="chart-card">

      <h2>
        Category Analytics
      </h2>

      <Doughnut
        data={data}
        options={options}
      />

    </div>

  );

};

export default CategoryChart;