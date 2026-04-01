import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
  Legend,
} from "recharts";
import "./RevolutionChart.css";
import { waterwheelMonthlyData } from "../../lib/waterwheelMonthlyData";

// Months in order starting from January (month index 0-based)
const monthOrder = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const monthNames = ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"];

// Group data by year and month index
const byYearMonth: Record<number, Record<number, number>> = {};
waterwheelMonthlyData.forEach((item) => {
  const year = item.date.getFullYear();
  const month = item.date.getMonth();
  if (!byYearMonth[year]) byYearMonth[year] = {};
  byYearMonth[year][month] = item.value;
});

// Build chart data: one entry per month, with a value per year
const chartData = monthOrder.map((monthIdx) => ({
  month: monthNames[monthIdx],
  "2024": byYearMonth[2024]?.[monthIdx],
  "2025": byYearMonth[2025]?.[monthIdx],
  "2026": byYearMonth[2026]?.[monthIdx],
}));

const RevolutionChartMonthly = () => {
  return (
    <div className="h-[28rem] my-10">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          margin={{
            top: 5,
            left: 45,
            bottom: 30,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis tickFormatter={(value) => value.toLocaleString("de-CH")}>
            <Label
              value="Umdrehungen pro Monat"
              angle={-90}
              dx={-65}
              position="center"
            />
          </YAxis>
          <Tooltip formatter={(value: number) => value.toLocaleString("de-CH")} />
          <Legend />
          <Bar dataKey="2024" fill="#2563eb" name="2024" />
          <Bar dataKey="2025" fill="#16a34a" name="2025" />
          <Bar dataKey="2026" fill="#dc2626" name="2026" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevolutionChartMonthly;
