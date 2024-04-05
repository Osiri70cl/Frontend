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
  Rectangle,
} from "recharts";
import SessionsTooltips from "../SessionsTooltip";

function formatSessions(data: any) {
  const days = ["L", "M", "M", "J", "V", "S", "D"];
  return data.map((session: any, index: number) => ({
    day: days[index],
    sessionLength: session.sessionLength,
  }));
}

function CustomizedCursor({ points }: any) {
  return (
    <Rectangle
      fill="black"
      opacity={0.1}
      width={700}
      height={700}
      x={points[1].x}
      y={-20}
      overflow={"visible"}
      accentHeight={"120%"}
    />
  );
}

type Props = {
  rawData: Array<Object> | null;
};

const LineCharts = ({ rawData }: Props) => {
  if (!rawData || rawData.length === 0) {
    return <div>No data available</div>;
  }
  console.log(rawData);

  const transformedData = formatSessions(rawData);

  console.log("lineChart", transformedData);
  return (
    <div className={styles.sessions_chart_container}>
      <h3 className={styles.title}>Durée moyenne des sessions</h3>
      <ResponsiveContainer
        width="100%"
        height="100%"
        className="sessions-chart"
      >
        <LineChart
          width={500}
          height={300}
          data={transformedData}
          margin={{
            top: 45,
            right: 5,
            bottom: 10,
            left: 5,
          }}
        >
          <XAxis
            dataKey="day"
            tick={{ fontSize: 12, stroke: "white", opacity: 0.8 }}
            dy={15}
            stroke="1 1"
            color="#fff"
          />
          <YAxis
            dataKey="sessionLength"
            tick={{ fontSize: 14 }}
            dx={-10}
            stroke="1 1"
            hide={true}
          />
          <Tooltip
            content={<SessionsTooltips />}
            cursor={<CustomizedCursor />}
          />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="rgba(255, 255, 255, 0.7)"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 2, strokeWidth: 4, stroke: "white" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineCharts;
