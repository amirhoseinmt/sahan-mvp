"use client";

import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default function AnalyzeCharts({ chartData }: { chartData: any }) {
  return (
    <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
      <div className="w-full max-w-xs">
        <Pie data={chartData} />
      </div>
      <div className="flex-1">
        <Bar data={chartData} options={{ indexAxis: "y" }} />
      </div>
    </div>
  );
}
