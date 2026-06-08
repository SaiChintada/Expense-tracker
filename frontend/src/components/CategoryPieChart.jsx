import {

  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,

} from "recharts";

const COLORS = [

  "#8b5cf6",
  "#3b82f6",
  "#10b981",
  "#f59e0b",
  "#ef4444",
];

const CategoryPieChart = ({
  transactions,
}) => {

  const expenses =
    transactions.filter(
      (t) =>
        t.type === "expense"
    );

  const groupedData =

    expenses.reduce(
      (acc, item) => {

        const existing =
          acc.find(
            (i) =>
              i.name ===
              item.category
          );

        if (existing) {

          existing.value +=
            item.amount;

        } else {

          acc.push({

            name:
              item.category,

            value:
              item.amount,
          });
        }

        return acc;

      },
      []
    );

    if (groupedData.length === 0) {

  return (

    <div className="pie-chart-card">

      <div className="empty-state">

        <h3>
          🥧 No Expense Data
        </h3>

        <p>
          Add expense transactions
          to view category insights.
        </p>

      </div>

    </div>

  );
}

  return (

    <div className="pie-chart-card">

      <h2>
        Expense Categories
      </h2>

      <ResponsiveContainer
        width="100%"
        height={350}
      >

        <PieChart>

          <Pie

            data={groupedData}

            dataKey="value"

            nameKey="name"

            cx="50%"

            cy="50%"

            outerRadius={120}

            label
          >

            {groupedData.map(
              (
                entry,
                index
              ) => (

                <Cell
                  key={`cell-${index}`}
                  fill={
                    COLORS[
                      index %
                      COLORS.length
                    ]
                  }
                />
              )
            )}

          </Pie>

          <Tooltip />

        </PieChart>

      </ResponsiveContainer>

    </div>
  );
};

export default CategoryPieChart;