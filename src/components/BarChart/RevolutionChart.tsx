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
import "./RevolutionChart.css";
import type { SensorData } from "../../lib/ttnDataFetcher";

export default function RevolutionChart(data: SensorData) {
  let previousCount = 0;

  const transformedData = data.entries.map((item) => {
    const currentCount = item.result.uplink_message.decoded_payload.Count;
    const countDifference = currentCount - previousCount;
    const fill: string =
    countDifference / 10 > 20
      ? "#dc2626"
      : countDifference / 10 < 8
      ? "#dc2626"
      : "#2563eb";

    previousCount = currentCount;

    console.log('fill', fill);

    return {
      time: new Date(item.result.uplink_message.received_at).toLocaleString(
        "de-CH",
        {
          weekday: "short",
          hour: "2-digit",
          minute: "2-digit",
        }
      ),
      fill: fill,
      count: countDifference / 10,
    };
  });

  return (
    <div className="h-[28rem] my-10">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={transformedData}
          margin={{
            top: 5,
            left: 15,
            bottom: 60,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" angle={-45} textAnchor="end" />
          <YAxis>
            <Label
              value="Rundenzähler [1/min]"
              angle={-90}
              dx={-35}
              position="center"
            />
          </YAxis>
          <Tooltip />
          <Bar dataKey="count" name="Umdrehungen" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
