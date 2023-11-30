export function enough(cap: number, on: number, wait: number): number {
    
    // First approach
    // return ((cap - on - wait) > 0 ? 0 : Math.abs(cap - on - wait));

    // Second approach
    return Math.max(cap - on - wait, 0);
  
  }