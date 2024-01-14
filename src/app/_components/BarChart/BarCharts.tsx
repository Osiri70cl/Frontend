"use client";

import styles from "./BarChart.module.scss";
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
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

const BarCharts = ({ rawData }: Props) => {
  if (!rawData || rawData.length === 0) {
    return <div>No data available</div>;
  }

  const data = rawData.map((item: any, index: any) => ({
    number: index + 1,
    Poids: item.kilogram,
    Calories: item.calories,
    amt: item.calories,
  }));

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 90,
              right: 30,
              left: 20,
              bottom: 10,
            }}
          >
            <CartesianGrid horizontal strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" tick={{ fill: "black" }} />
            <YAxis tick={{ fill: "black" }} />
            <Tooltip />
            <Legend
              wrapperStyle={{
                top: 10,
                right: 20,
                backgroundColor: "#f5f5f5",
                border: "1px solid #d5d5d5",
                borderRadius: 3,
                lineHeight: "40px",
              }}
            />
            <Bar
              dataKey="Poids"
              fill="#282D30"
              barSize={10}
              radius={[50, 50, 0, 0]}
            />
            <Bar
              dataKey="Calories"
              fill="#E60000"
              barSize={10}
              radius={[50, 50, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarCharts;
