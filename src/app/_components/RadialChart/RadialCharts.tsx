import styles from "./RadialCharts.module.scss";
import React, { useCallback } from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Text,
  Label,
} from "recharts";
import CustomLabel from "./CuntomLabel";
import { formatGoal } from "./utils/formatRadialData";

type Props = {
  rawData: Array<Object> | null;
};

const RadialCharts = ({ rawData }: Props) => {
  if (!rawData || rawData.length === 0) {
    return <div>No data available</div>;
  }
  const formatedData = useCallback(() => formatGoal(rawData), [rawData])();

  return (
    <div className={styles.goal_chart_container}>
      <h3>Score</h3>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={formatedData}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={90}
            cornerRadius={50}
            fill="red"
          >
            <Cell key={`cell-0`} fill="#FF0000" />
            <Cell key={`cell-1`} fill="#fbfbfb" />
            <Label
              content={<CustomLabel value={formatedData[0].value * 100} />}
              position="center"
            />
          </Pie>
          <Pie
            data={[
              { name: "", value: 1 },
              { name: "", value: 1 },
            ]}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={0}
            outerRadius={80}
            fill="#fff"
          >
            <Label
              content={<CustomLabel value={formatedData[0].value * 100} />}
              position="center"
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RadialCharts;
