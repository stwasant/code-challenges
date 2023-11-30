/**
 * Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
 * @param name 
 * @returns 
 */
export function abbrevName(name: string): string {
    // First solution
    return name.split(' ').map((n) => n.charAt(0).toUpperCase()).join('.');

    // Second solution
    // return name.toUpperCase().replace(/(\w)\w* (\w)\w*/, '$1.$2')
}