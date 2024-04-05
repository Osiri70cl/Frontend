"use client";
import { PerformanceData } from "@/interface/interface";
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

function formatPerformance(input: any): any[] {
  return input.data.map((item: any) => ({
    subject: translateKind(item.kind, input.kind),
    A: item.value,
    fullMark: 280,
  }));
}

function translateKind(
  kind: number,
  kindMap: { [key: string]: string }
): string {
  return kindMap[kind.toString()] || "Unknown";
}

type Props = {
  rawData: PerformanceData;
};

const RadarCharts = ({ rawData }: Props) => {
  console.log(rawData);

  if (!rawData || rawData.length === 0) {
    return <div>No data available</div>;
  }

  const formattedData = formatPerformance(rawData);

  console.log("radar", formattedData);

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
