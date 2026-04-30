import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar, Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

const Charts = ({ items }) => {
  const total = items.length;
  const withDesc = items.filter(i => i.description).length;
  const withoutDesc = total - withDesc;

  const barData = {
    labels: ["Total", "With Desc", "Without Desc"],
    datasets: [
      {
        label: "Items",
        data: [total, withDesc, withoutDesc],
        backgroundColor: ["navy", "violet", "crimson"],
      },
    ],
  };

  const pieData = {
    labels: ["With Desc", "Without Desc"],
    datasets: [
      {
        data: [withDesc, withoutDesc],
        backgroundColor: ["violet", "crimson"],
      },
    ],
  };

  return (
    <div className="charts">
      <div className="chart-card">
        <h3>Items Overview</h3>
        <Bar data={barData} />
      </div>

      <div className="chart-card">
        <h3>Distribution</h3>
        <Pie data={pieData} />
      </div>
    </div>
  );
};

export default Charts;