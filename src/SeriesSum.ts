/**
 * Task:
Your task is to write a function which returns the sum of following series upto nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +..
 * @param n 
 * @returns 
 */
export function SeriesSum(n: number): string {
  // First solution
  /*let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += 1 / (1 + i * 3);
  }
  return sum.toFixed(2);**/

  // Second solution
  return Array.from({ length: n }, (_, i) => 1 / (1 + i * 3))
    .reduce((acc, curr) => acc + curr, 0)
    .toFixed(2);
}
