function translateKind(
  kind: number,
  kindMap: { [key: string]: string }
): string {
  return kindMap[kind.toString()] || "Unknown";
}

export const formatPerformance = (input: any): any[] => {
  return input.data.map((item: any) => ({
    subject: translateKind(item.kind, input.kind),
    A: item.value,
    fullMark: 280,
  }));
};
