/**
 * Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]
 * @param n 
 * @returns 
 */
export const reverseSeq = (n: number): number[] => {
  let newArray: number[] = [];

  // First option
//   for (let i = n; i >= 1; i--) {
//     newArray.push(i);
//   }

  // First option
  //   return newArray;

  // Second option
  return [...Array(n).keys()].map((i) => n - i);

};
