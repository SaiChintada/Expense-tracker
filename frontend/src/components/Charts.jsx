import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend
);

function Charts({ items }) {
  // 💰 Calculate totals
  const income = items
    .filter((item) => item.type === "Income")
    .reduce((sum, item) => sum + item.amount, 0);

  const expense = items
    .filter((item) => item.type === "Expense")
    .reduce((sum, item) => sum + item.amount, 0);

  // 🥧 Category breakdown
  const categoryData = {};

  items
    .filter((item) => item.type === "Expense")
    .forEach((item) => {
      categoryData[item.category] =
        (categoryData[item.category] || 0) + item.amount;
    });

  const pieData = {
    labels: Object.keys(categoryData),
    datasets: [
      {
        data: Object.values(categoryData),
      },
    ],
  };

  const barData = {
    labels: ["Income", "Expense"],
    datasets: [
      {
        label: "Amount",
        data: [income, expense],
      },
    ],
  };

  return (
    <div className="charts">
      <h3 className="section-title">Analytics</h3>

      <div className="chart-grid">
        <div className="chart-card">
          <h4>Income vs Expense</h4>
          <Bar data={barData} />
        </div>

        <div className="chart-card">
          <h4>Expenses by Category</h4>
          <Pie data={pieData} />
        </div>
      </div>
    </div>
  );
}

export default Charts;