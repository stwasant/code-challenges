/**
 * Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
 * @param x 
 * @returns 
 */
export function sumMix(x: any[]): number {
  return x.reduce((acc, curr) => acc + (typeof curr === 'string' ? Number(curr) : curr), 0);
}
