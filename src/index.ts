
import { Kata } from './dnaStrand';
import { evenOrOdd } from './evenOrOdd';




// console.log(points(['4:1', '3:4', '0:1']));
// console.log(solutionEnds('abcde', 'de'));

const value = new Kata();
console.log(value.dnaStrand ('ATTGC'));


// console.log(DNAtoRNA('TTTT'));
// 1, 2, 2
// 1 + 2 = 3
// 2 + 2 = 4

// 7, 2, 2

// 7 + 2 = 9
// 2 + 2 = 4

// A + B > C    and     
// B + C > A    and
// C + A > B
console.log(evenOrOdd(12));