/**
 * Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
 * @param n 
 * @returns 
 */
export function evenOrOdd(n:number):string {
  
    return Math.round(n) % 2 === 0 ? 'Even' : 'Odd'; 
  }