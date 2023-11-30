/**
 * DESCRIPTION:
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
 * @param array 
 * @returns 
 */

export function findAverage(array: number[]): number {
  return array.reduce((acc, curr) => acc + curr, 0) / array.length;
}
