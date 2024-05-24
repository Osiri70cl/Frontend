export const formatGoal = (rawData: any) => {
  const formatedGoal = [
    {
      name: "Goal",
      value: rawData,
    },
    { name: "Total", value: 1 },
  ];

  return formatedGoal;
};
