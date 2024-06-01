const formatActivityData = (data: any) => {
  return data.map((item: any) => {
    const dayOfMonth = new Date(item.day).getDate().toString();
    return {
      ...item,
      day: dayOfMonth,
    };
  });
};

const formatAverageSessionsData = (data: any) => {
  const days = ["L", "M", "M", "J", "V", "S", "D"];
  return data.map((session: any, index: number) => ({
    day: days[index],
    sessionLength: session.sessionLength,
  }));
};

const translateKind = (
  kind: number,
  kindMap: { [key: string]: string }
): string => {
  return kindMap[kind.toString()] || "Unknown";
};

const formatPerformanceData = (input: any): any[] => {
  return input.data.map((item: any) => ({
    subject: translateKind(item.kind, input.kind),
    A: item.value,
    fullMark: 280,
  }));
};

const formatGoalData = (rawData: any) => {
  const formattedGoal = [
    {
      name: "Goal",
      value: rawData,
    },
    { name: "Total", value: 1 },
  ];
  return formattedGoal;
};

export const formatData = (data: {
  userData: any;
  activityData: any;
  averageSessionsData: any;
  performanceData: any;
}) => {
  const userData = {
    ...data.userData,
    score: data.userData.todayScore
      ? formatGoalData(data.userData.todayScore)
      : formatGoalData(data.userData.score),
  };

  if (userData.todayScore) {
    delete userData.todayScore;
  }

  return {
    userData,
    activityData: formatActivityData(data.activityData.sessions),
    averageSessionsData: formatAverageSessionsData(
      data.averageSessionsData.sessions
    ),
    performanceData: formatPerformanceData(data.performanceData),
  };
};
