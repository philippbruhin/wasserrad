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
import { useState } from "react";

export default function RevolutionChartSensor(sensorData: SensorData) {
  const [numEntries, setNumEntries] = useState(1008);

  if (!sensorData.entries || sensorData.entries.length === 0) {
    return (
      <div className="bg-gray-200 p-6 rounded-lg shadow text-center italic">
        Derzeit leider keine Live-Sensordaten verfügbar. Bitte versuchen Sie es
        zu einem späteren Zeitpunkt erneut.
      </div>
    );
  }

  let previousCount =
    sensorData.entries[0].result.uplink_message.decoded_payload.Count;

  let previousTime = new Date(
    sensorData.entries[0].result.uplink_message.received_at
  );
  previousTime.setSeconds(0, 0);

  const transformedData = sensorData.entries.map((item) => {
    const currentCount = item.result.uplink_message.decoded_payload.Count;

    const currentTime = new Date(item.result.uplink_message.received_at);
    currentTime.setSeconds(0, 0);

    const timeDifference =
      (currentTime.getTime() - previousTime.getTime()) / 60000; // in minutes
    let countDifference = currentCount - previousCount;

    // We want the counts per minute (RPM)
    countDifference = countDifference / timeDifference;

    const fill: string =
      countDifference > 11
        ? "#dc2626"
        : countDifference < 6
        ? "#dc2626"
        : "#2563eb";

    previousCount = currentCount;
    previousTime = currentTime;

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
      count: countDifference,
    };
  });

  const displayedData = transformedData.slice(-numEntries);

  return (
    <>
      <div className="relative max-w-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 bottom-0 w-5 h-5 my-auto text-gray-400 right-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
        <select
          className="w-full px-3 py-2 text-sm text-gray-600 bg-white border rounded-lg shadow-sm outline-none appearance-none focus:ring-offset-2 focus:ring-blue-600 focus:ring-2"
          value={numEntries}
          onChange={(e) => setNumEntries(Number(e.target.value))}
        >
          <option value={1008}>Letzte 7 Tage</option>
          <option value={432}>Letzte 3 Tage</option>
          <option value={144}>Lezte 24 Stunden</option>
          <option value={72}>Lezte 12 Stunden</option>
        </select>
      </div>
      <div className="h-[28rem] my-10">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={displayedData}
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
    </>
  );
}
