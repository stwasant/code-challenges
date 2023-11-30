/**
 * Introduction
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.

Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
Note: this kata uses strict construction as shown in the description and the examples, you can read more about it here
 * @param year 
 * @returns 
 */
export const centuryFromYear = (year: number): number => {
  const century = Math.floor(year / 100);

  const decade = year % 100;

  const centuryStrict = century >= 1 && decade >= 1 ? century + 1 : century || 1;

  // Option 1
  return centuryStrict;

  // Option 2
  //   return Math.ceil(year / 100);
};
