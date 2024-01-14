"use client";
import styles from "./RadarCharts.module.scss";
import React, { PureComponent } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

type Props = {
  rawData: any;
};

const RadarCharts = ({ rawData }: Props) => {
  console.log(rawData);

  if (!rawData || rawData.length === 0) {
    return <div>No data available</div>;
  }
  const transformedData = rawData.data.map((item: any) => ({
    ...item,
    kind: rawData.kind[item.kind],
  }));

  return (
    <div className={styles.wrapper}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          outerRadius={90}
          width={730}
          height={250}
          data={transformedData}
        >
          <PolarGrid gridType="polygon" />
          <PolarAngleAxis dataKey="kind" tick={{ fontSize: 10 }} />
          <PolarRadiusAxis
            angle={30}
            domain={[0, 150]}
            tickCount={6}
            tick={false}
            axisLine={false}
            tickLine={false}
          />
          <Radar
            name="User Metrics"
            dataKey="value"
            stroke="rgba(255, 1, 1, 0.70)"
            fill="rgba(255, 1, 1, 0.70)"
            fillOpacity={1}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RadarCharts;
