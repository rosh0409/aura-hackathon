import { Bar } from "react-chartjs-2";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const option = {
  responsive: true,
  plugins: {
    legend: { position: "chartArea" },
    title: {
      display: true,
      text: "Product details",
    },
  },
};

const data = {
  labels: ["Electronic", "Sports", "Food", "Fashion", "Software", "Other"],
  datasets: [
    {
      label: "Not Expired",
      data: [5, 10, 40, 20, 10, 30],
      backgroundColor: "green",
    },
    {
      label: "Expired",
      data: [15, 20, 25, 40, 45, 60],
      backgroundColor: "blue",
    },
  ],
};

export default function BarChart() {
  return (
    <div className="App">
      {/* npm install chart.js
npm install react-chartjs-2
 */}
    <Bar options={option} data={data} />
 
    </div>
  );
}
