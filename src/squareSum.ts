/**
 * Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9"
 * @param numbers 
 * @returns 
 */
export function squareSum(numbers: number[]): number {
  return numbers.reduce((accumulator, currentValue) => accumulator + currentValue ** 2,0);
}
