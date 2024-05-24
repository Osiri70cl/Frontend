export const formatSessions = (data: any) => {
  const days = ["L", "M", "M", "J", "V", "S", "D"];
  return data.map((session: any, index: number) => ({
    day: days[index],
    sessionLength: session.sessionLength,
  }));
};
