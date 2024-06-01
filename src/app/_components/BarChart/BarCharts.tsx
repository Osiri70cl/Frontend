"use client";

import styles from "./BarChart.module.scss";
import React, { PureComponent, use, useCallback } from "react";
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
import Tooltips from "../Tooltips";

type Props = {
  rawData: Array<Object> | null;
};

const BarCharts = ({ rawData }: Props) => {
  if (!rawData || rawData.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <>
      <div className={styles.activity_chart_description}>
        <h3>Activité quotidienne</h3>
        <div className={styles.activity_chart_legend}>
          <div className={styles.details}>
            <span className={`${styles.icon} ${styles.icon_black}`}></span>
            <p>Poids (kg)</p>
          </div>
          <div className={styles.details}>
            <span className={`${styles.icon} ${styles.icon_red}`}></span>
            <p>Calories brûlées (kCal)</p>
          </div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={rawData} barGap={8} barCategoryGap={1}>
            <CartesianGrid vertical={false} strokeDasharray="1 1" />
            <XAxis
              dataKey="day"
              tickLine={false}
              tick={{ fontSize: 14 }}
              dy={15}
              color="#9B9EAC"
            />
            <YAxis
              yAxisId="kilogram"
              dataKey="kilogram"
              type="number"
              tickCount="5"
              domain={["dataMin - 2", "dataMax + 1"]}
              axisLine={false}
              orientation="right"
              tickLine={false}
              tick={{ fontSize: 14 }}
              dx={15}
            />
            <YAxis
              yAxisId="calories"
              dataKey="calories"
              type="number"
              domain={["dataMin - 10", "dataMax + 10"]}
              hide={true}
            />
            <Tooltip content={<Tooltips />} />
            <Bar
              yAxisId="kilogram"
              dataKey="kilogram"
              fill="#282D30"
              radius={[10, 10, 0, 0]}
              barSize={10}
            />
            <Bar
              yAxisId="calories"
              dataKey="calories"
              fill="#e60000"
              radius={[10, 10, 0, 0]}
              barSize={10}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default BarCharts;
