/**
 * Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
 * @param array 
 * @returns 
 */
export function invert(array: number[]): number[] {
  if (array === null || array.length === 0) return [];

  let newArray: number[] = [];

  array.every((element) => newArray.push(-element));

  return newArray;
}
