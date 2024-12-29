//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (number) => {
  let count = 0;
  if (number <= 0) throw new Error("Only positive numbers are allowed");
  while (number !== 1) {
    number = number % 2 === 0 ? parseInt(number / 2) : parseInt(number * 3 + 1);
    count = count + 1;
  }
  return count;
};
