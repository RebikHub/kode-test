export function compareDate(date: string): number {
  const current = new Date().getTime();
  const target = new Date(date);
  const year = target.getMonth() > new Date().getMonth() ? '2022' : '2023';
  const result = current - (new Date(`${year}-${target.getMonth() + 1}-${target.getDate()}`).getTime());
  return result;
}