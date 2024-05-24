export const formatData = (data: any) => {
  return data.map((item: any) => {
    const dayOfMonth = new Date(item.day).getDate().toString();
    return {
      ...item,
      day: dayOfMonth,
    };
  });
};
