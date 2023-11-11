import styles from "./RadialCharts.module.scss";
import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Text } from "recharts";

type Props = {
  rawData: any;
};

const RadialCharts = ({ rawData }: Props) => {
  const percent = rawData * 100;
  const data = [{ value: percent }, { value: 100 - percent }];

  return (
    <div className={styles.wrapper}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={200} height={200}>
          <Pie
            data={data}
            cx={100}
            cy={100}
            startAngle={90}
            endAngle={450}
            innerRadius={70}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={0}
            dataKey="value"
          >
            <Cell key={`cell-0`} fill="#ff0000" />
            <Cell key={`cell-1`} fill="#FFF" />
          </Pie>
          <Text
            x={100}
            y={100}
            textAnchor="middle"
            dominantBaseline="middle"
            className="progress-label"
          >
            {`${percent.toFixed(0)}% de votre objectif`}
          </Text>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RadialCharts;
