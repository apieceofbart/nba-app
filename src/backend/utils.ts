export function getYesterdaysDate() {
  const now = new Date();
  const yesterday = new Date(+now - 1000 * 60 * 60 * 24);
  const year = yesterday.getFullYear();
  const month = String(yesterday.getMonth() + 1).padStart(2, "0");
  const day = String(yesterday.getDate()).padStart(2, "0");

  return `${year}${month}${day}`;
}
