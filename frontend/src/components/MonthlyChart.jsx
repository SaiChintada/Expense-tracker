import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const MonthlyChart = ({
  transactions,
}) => {

  const monthlyData = [

    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",

  ].map((month, index) => {

    const income =
      transactions

        .filter((t) => {

          const date =
            new Date(t.date);

          return (
            date.getMonth() ===
              index &&
            t.type ===
              "income"
          );
        })

        .reduce(
          (acc, item) =>
            acc + item.amount,
          0
        );

    const expense =
      transactions

        .filter((t) => {

          const date =
            new Date(t.date);

          return (
            date.getMonth() ===
              index &&
            t.type ===
              "expense"
          );
        })

        .reduce(
          (acc, item) =>
            acc + item.amount,
          0
        );

    return {

      month,

      income,

      expense,
    };
  });

  if (transactions.length === 0) {

  return (

    <div className="monthly-chart-card">

      <div className="empty-state">

        <h3>
          📈 No Analytics Yet
        </h3>

        <p>
          Add transactions to see
          monthly trends.
        </p>

      </div>

    </div>

  );
} 
  return (

    <div className="monthly-chart-card">

      <div className="monthly-header">

        <div>

          <h2>
            Monthly Overview
          </h2>

          <p>
            Income vs Expense Trends
          </p>

        </div>

      </div>

      <div className="monthly-chart-wrapper">

        <ResponsiveContainer
          width="100%"
          height={350}
        >

          <LineChart
            data={monthlyData}
          >

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#1e293b"
            />

            <XAxis
              dataKey="month"
              stroke="#94a3b8"
            />

            <YAxis
              stroke="#94a3b8"
            />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="income"
              stroke="#22c55e"
              strokeWidth={4}
              dot={{
                r: 5,
              }}
            />

            <Line
              type="monotone"
              dataKey="expense"
              stroke="#ef4444"
              strokeWidth={4}
              dot={{
                r: 5,
              }}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>

  );

};

export default MonthlyChart;