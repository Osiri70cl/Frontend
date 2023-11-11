import styles from "./LineCharts.module.scss";
import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type Props = {
  rawData: any;
};

const LineCharts = ({ rawData }: Props) => {
  if (!rawData || rawData.length === 0) {
    return <div>No data available</div>;
  }

  const data = rawData.map((item: any, index: any) => ({
    number: index + 1,
    min: item.sessionLength,
  }));

  return (
    <div className={styles.wrapper}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis
            dataKey="day"
            stroke="white"
            tick={{ fill: "white", fontSize: 14 }}
          />
          <YAxis
            stroke="white"
            tick={{ fill: "white", fontSize: 14 }}
            label={{ value: "min", position: "insideTopRight", fill: "white" }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              borderColor: "white",
              color: "black",
            }}
          />
          <Line
            type="monotone"
            dataKey="min"
            stroke="white"
            strokeWidth={2}
            activeDot={{ r: 8, fill: "white", stroke: "white", strokeWidth: 2 }}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineCharts;
