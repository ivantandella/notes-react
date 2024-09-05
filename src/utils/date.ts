export function convertDate(timestamp: string) {
  const date = new Date(timestamp);
  return date.toLocaleString();
}
