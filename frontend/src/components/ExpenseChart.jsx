import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

import { useTransactions } from "../context/TransactionContext";

const COLORS = [
  "#8b5cf6",
  "#06b6d4",
  "#ec4899",
  "#22c55e",
  "#f97316",
];

function ExpenseChart() {

  const { transactions } = useTransactions();

  const expenseData = transactions
    .filter((item) => item.type === "expense")
    .map((item) => ({
      name: item.category,
      value: Number(item.amount),
    }));

  return (
    <div className="bg-slate-900 p-5 rounded-3xl">

      <h2 className="text-2xl font-bold mb-6 text-center">
        Expense Analytics
      </h2>

      {expenseData.length === 0 ? (

        <div className="h-[300px] flex items-center justify-center text-slate-400">
          No expense data
        </div>

      ) : (

        <div className="flex justify-center">

          <PieChart width={400} height={350}>

            <Pie
              data={expenseData}
              cx="50%"
              cy="50%"
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
              label
            >

              {expenseData.map((entry, index) => (

                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />

              ))}

            </Pie>

            <Tooltip />

            <Legend />

          </PieChart>

        </div>

      )}

    </div>
  );
}

export default ExpenseChart;