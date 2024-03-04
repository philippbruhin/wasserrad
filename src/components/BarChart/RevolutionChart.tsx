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
  const transformedData = data.result.map(item => ({
    time: new Date(item.received_at).toLocaleString(),
    count: item.uplink_message.decoded_payload.Count
  }));
  return (
    <BarChart
      width={500}
      height={300}
      data={transformedData}
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
