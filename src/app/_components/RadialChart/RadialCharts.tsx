import styles from "./RadialCharts.module.scss";
import React from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Text,
  Label,
} from "recharts";
import CustomLabel from "./CuntomLabel";

type Props = {
  rawData: any;
};

const RadialCharts = ({ rawData }: Props) => {
  console.log(rawData);
  const percent = rawData;
  const data = [{ value: percent }, { value: 100 - percent }];

  // const formatGoal = (data: any) => {
  //   const formatedGoal = [
  //     {
  //       name: "Goal",
  //       value: data.score ? data.score : data.todayScore,
  //     },
  //     { name: "Total", value: 1 },
  //   ];

  //   return formatedGoal;
  // };

  // const transformedData = formatGoal(rawData);

  return (
    <div className={styles.goal_chart_container}>
      <h3>Score</h3>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={100}
            fill="red"
          >
            <Cell key={`cell-0`} fill="#FF0000" />
            <Cell key={`cell-1`} fill="#FFF" />
            <Label
              content={<CustomLabel value={data[0].value * 100} />}
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
              content={<CustomLabel value={data[0].value * 100} />}
              position="center"
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RadialCharts;
