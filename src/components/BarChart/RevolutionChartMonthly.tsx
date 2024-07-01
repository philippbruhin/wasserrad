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
import { waterwheelMonthlyData } from "../../lib/waterwheelMonthlyData";

// Function to format the date for display on the XAxis
const formatDate = (date: Date) => {
  return date
    .toLocaleString("de-CH", { month: "short", year: "numeric" })
    .replace(".", "");
};

// Map the data to include a formatted date
const formattedData = waterwheelMonthlyData.map((item) => ({
  ...item,
  formattedDate: formatDate(item.date),
}));

const RevolutionChartMonthly = () => {
  return (
    <div className="h-[28rem] my-10">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={formattedData}
          margin={{
            top: 5,
            left: 45,
            bottom: 60,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="formattedDate"
            angle={-45}
            textAnchor="end"
            interval={0}
          />
          <YAxis tickFormatter={(value) => value.toLocaleString("de-CH")}>
            <Label
              value="Umdrehungen pro Monat"
              angle={-90}
              dx={-65}
              position="center"
            />
          </YAxis>
          <Tooltip />
          <Bar dataKey="value" fill="#2563eb" name="Umdrehungen" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevolutionChartMonthly;
