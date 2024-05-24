"use client";
import { PerformanceData } from "@/interface/interface";
import styles from "./RadarCharts.module.scss";
import React, { PureComponent, useCallback } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { formatPerformance } from "./utils/formatRadarData";

type Props = {
  rawData: PerformanceData;
};

const RadarCharts = ({ rawData }: Props) => {
  if (!rawData || rawData.length === 0) {
    return <div>No data available</div>;
  }

  const formattedData = useCallback(
    () => formatPerformance(rawData),
    [rawData]
  )();

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="55%" data={formattedData}>
        <PolarGrid
          radialLines={false}
          gridType="polygon"
          polarRadius={[10, 20, 35, 50, 65]}
        />
        <PolarAngleAxis
          dataKey="subject"
          stroke="#FFFFFF"
          tickLine={false}
          axisLine={false}
          tick={{ fontSize: 10 }}
        />
        <Radar dataKey="A" stroke="#fff" fill="red" fillOpacity={0.7} />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default RadarCharts;
