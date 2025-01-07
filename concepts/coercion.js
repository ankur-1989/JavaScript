// Coercion Examples and concepts

/** Empty arrays are coerced to 0.
 * JavaScript compares Object by reference instead of content.
 */

console.log([] == ![]); // true;
// console.log([] === ![]); // false

/** Unary Operators has higher precedence than addition therefore unary on string throws nan and coerced to string*/
const result = ("b" + "a" + +"a" + "a").toLowerCase();
console.log(result);
/** sort by default converts the elements into strings and then use utf-16 to compare the elements. we need to pass the comparator fnction to sort the elmenents based on numerical values. */
console.log([10, 1, 4].sort());
