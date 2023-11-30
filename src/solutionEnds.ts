/**
 * Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
 * @param str 
 * @param ending 
 * @returns 
 */
export function solutionEnds(str: string, ending: string): boolean {

    // Firts option
//   return str.slice(str.length - ending.length, str.length) === ending;
  
  // Second option
  return str.endsWith(ending);


  
  
}
