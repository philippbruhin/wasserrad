import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import type { SensorData } from '../../lib/ttnDataFetcher';

export default function RevolutionChart(data: SensorData) {
  console.log('data:', data);
  const chartData = Array.isArray(data)
  ? data.map((entry) => ({
      time: new Date(entry.uplink_message.received_at).toLocaleTimeString(),
      count: entry.uplink_message.decoded_payload.Count || 0,
    }))
  : [];
  console.log('chartData:', chartData);
  return (
    <BarChart
      width={500}
      height={300}
      data={chartData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="time" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="count" fill="#8884d8" />
    </BarChart>
  );
}
