import styles from "./RadialCharts.module.scss";
import React from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "unknow",
    uv: 12,
    pv: 4800,
    fill: "#ffc658",
  },
];

const style = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};

const RadialCharts = () => {
  <div className={styles.wrapper}>
    <ResponsiveContainer width="100%" height="100%">
      <RadialBarChart
        cx="50%"
        cy="50%"
        innerRadius="10%"
        outerRadius="80%"
        barSize={10}
        data={data}
      >
        <RadialBar
          minAngle={15}
          label={{ position: "insideStart", fill: "#fff" }}
          background
          clockWise
          dataKey="uv"
        />
        <Legend
          iconSize={10}
          layout="vertical"
          verticalAlign="middle"
          wrapperStyle={style}
        />
      </RadialBarChart>
    </ResponsiveContainer>
  </div>;
};

export default RadialCharts;
