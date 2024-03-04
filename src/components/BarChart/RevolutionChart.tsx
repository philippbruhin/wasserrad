import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
} from "recharts";
import type { SensorData } from "../../lib/ttnDataFetcher";

export default function RevolutionChart(data: SensorData) {
  let previousCount = 0;

  const transformedData = data.entries.map((item) => {
    const currentCount = item.result.uplink_message.decoded_payload.Count;
    const countDifference = currentCount - previousCount;
    previousCount = currentCount;

    return {
      time: new Date(item.result.uplink_message.received_at).toLocaleDateString(
        "de-CH"
      ),
      count: countDifference,
    };
  });

  return (
    <div className="h-96 mb-20">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={transformedData}
          margin={{
            top: 5,
            left: 15,
            bottom: 70,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" angle={-45} textAnchor="end">
            <Label value="Datum" offset={-70} position="insideBottom" />
          </XAxis>
          <YAxis>
            <Label value="Rundenzähler" angle={-90} position="left" />
          </YAxis>
          <Tooltip />
          <Bar dataKey="count" fill="#2563eb" name="Umdrehungen"/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
