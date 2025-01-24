import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface LineChartProps {
  options: ChartOptions<"line">;
  data: any;
  plugins?: any[];
}

const LineChart = ({ options, data, plugins = [] }: LineChartProps) => {
  return <Line options={options} data={data} plugins={plugins} />;
};

export default LineChart;
