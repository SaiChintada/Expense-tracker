import { useTransactions } from "../context/TransactionContext";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
} from "recharts";

const COLORS = [
  "#8B5CF6",
  "#06B6D4",
  "#F59E0B",
  "#10B981",
  "#EF4444",
];

const Analytics = ({ transactions = [] }) => {
  

  // EXPENSE FILTER
  const expenseTransactions = transactions.filter(
    (t) => t.type === "expense"
  );

  // CATEGORY DATA
  const categoryMap = {};

  expenseTransactions.forEach((transaction) => {
    const category = transaction.category || "Other";

    categoryMap[category] =
      (categoryMap[category] || 0) +
      Number(transaction.amount || 0);
  });

  const expenseData = Object.keys(categoryMap).map((key) => ({
    name: key,
    value: categoryMap[key],
  }));

  // MONTHLY DATA
  const monthlyMap = {};

  transactions.forEach((transaction) => {
const date = transaction.date
  ? new Date(transaction.date)
  : new Date();

    const month = date.toLocaleString("default", {
      month: "short",
    });

    monthlyMap[month] =
      (monthlyMap[month] || 0) +
      Number(transaction.amount || 0);
  });

  const monthlyData = Object.keys(monthlyMap).map((key) => ({
    month: key,
    amount: monthlyMap[key],
  }));

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
      
      {/* PIE CHART */}
      <div className="bg-[#1B2333] p-6 rounded-2xl shadow-lg">
        <h2 className="text-white text-xl font-semibold mb-6">
          Expense Breakdown
        </h2>

        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={expenseData.length ? expenseData : [{ name: "No Data", value: 1 }]}
                dataKey="value"
                outerRadius={100}
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
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* BAR CHART */}
      <div className="bg-[#1B2333] p-6 rounded-2xl shadow-lg">
        <h2 className="text-white text-xl font-semibold mb-6">
          Monthly Overview
        </h2>

        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlyData}>
              <XAxis dataKey="month" />

              <Tooltip />

              <Bar
                dataKey="amount"
                fill="#8B5CF6"
                radius={[10, 10, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Analytics;