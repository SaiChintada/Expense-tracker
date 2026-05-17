import { motion } from "framer-motion";

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
  // SAFETY CHECK
  if (!Array.isArray(transactions)) {
    return null;
  }

  if (transactions.length === 0) {
  return (
    <div className="bg-[#1B2333] p-10 rounded-2xl mt-6 text-center">
      <h2 className="text-white text-2xl font-bold">
        No Analytics Yet
      </h2>

      <p className="text-gray-400 mt-2">
        Add transactions to see charts
      </p>
    </div>
  );
}

  // FILTER EXPENSES
  const expenseTransactions = transactions.filter(
    (t) => t.type === "expense"
  );

  // CATEGORY DATA
  const categoryMap = {};

  expenseTransactions.forEach((transaction) => {
    const category =
      transaction.category || "Other";

    categoryMap[category] =
      (categoryMap[category] || 0) +
      Number(transaction.amount || 0);
  });

  const expenseData = Object.keys(
    categoryMap
  ).map((key) => ({
    name: key,
    value: categoryMap[key],
  }));

  // MONTHLY DATA
  const monthlyMap = {};

  transactions.forEach((transaction) => {
    const date = new Date(transaction.date);

    const month = date.toLocaleString(
      "default",
      {
        month: "short",
      }
    );

    monthlyMap[month] =
      (monthlyMap[month] || 0) +
      Number(transaction.amount || 0);
  });

  const monthlyData = Object.keys(
  monthlyMap
).map((key) => ({
  month: key,
  amount: monthlyMap[key],
}));

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
      
      {/* PIE CHART */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.01 }}
        className="bg-[#1B2333] p-6 rounded-2xl shadow-lg"
      >
        <h2 className="text-white text-xl font-semibold mb-6">
          Expense Breakdown
        </h2>

        <div className="h-[300px]">
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <PieChart>
              <Pie
                data={expenseData}
                dataKey="value"
                outerRadius={100}
                label
              >
                {expenseData.map(
                  (entry, index) => (
                    <Cell
                      key={index}
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
      </motion.div>

      {/* BAR CHART */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.2,
        }}
        whileHover={{ scale: 1.01 }}
        className="bg-[#1B2333] p-6 rounded-2xl shadow-lg"
      >
        <h2 className="text-white text-xl font-semibold mb-6">
          Monthly Overview
        </h2>

        <div className="h-[300px]">
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
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
      </motion.div>
    </div>
  );
};

export default Analytics;