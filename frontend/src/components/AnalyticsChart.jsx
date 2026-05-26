import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AnalyticsChart = ({
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

  const data = [

    {
      name: "Income",
      value: income,
    },

    {
      name: "Expense",
      value: expense,
    },

  ];

  const COLORS = [
    "#22c55e",
    "#ef4444",
  ];

  return (

    <div className="chart-card">

      <div className="chart-header">

        <div>

          <h2>
            Financial Analytics
          </h2>

          <p>
            Income vs Expenses
          </p>

        </div>

      </div>

      <div className="chart-wrapper">

        <ResponsiveContainer
          width="100%"
          height={320}
        >

          <PieChart>

            <Pie

              data={data}

              cx="50%"

              cy="50%"

              innerRadius={85}

              outerRadius={120}

              paddingAngle={4}

              dataKey="value"
            >

              {data.map(
                (
                  entry,
                  index
                ) => (

                  <Cell
                    key={index}
                    fill={
                      COLORS[index]
                    }
                  />

                )
              )}

            </Pie>

            <Tooltip />

          </PieChart>

        </ResponsiveContainer>

      </div>

      <div className="chart-stats">

        <div className="chart-stat income-stat">

          <span></span>

          <p>Income</p>

        </div>

        <div className="chart-stat expense-stat">

          <span></span>

          <p>Expenses</p>

        </div>

      </div>

    </div>

  );

};

export default AnalyticsChart;