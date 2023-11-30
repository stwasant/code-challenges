/**
 * If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with 
a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
 * @param num 
 * @returns 
 */
export function countSheep(num: number): string {
    
    return [...Array(num).keys()].map((i) => `${i + 1} sheep...`).join('');
    
  }