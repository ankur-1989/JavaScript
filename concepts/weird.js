// Object.is  - checks for the same value
console.log(Object.is(NaN, NaN));
console.log(NaN === NaN);
console.log(NaN == NaN);

/** Solve mathematical problems with BigInt if the number can be too larges as JavaScript create issue handling big number because of 64bbit floating point precision. */

// strange parseInt behaviour while parsing characters in the string.
// by default it takes base 10 and checks if that character exists in that radix
/** As a safe side, use base for parseInt when using as it first converts the input to string. */
console.log(parseInt("fff", 16)); // 4095

/** var vs let
 * var does not support block scope. but let does.
 * therefore, issues created by var due to block scope can be fixed with let.
 */
