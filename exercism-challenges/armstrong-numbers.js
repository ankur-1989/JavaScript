//
// This is only a SKELETON file for the 'Armstrong numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (number) => {
  let originalNumber = number;
  let armstrongNumber = 0;
  let numberOfDigits = originalNumber.toString().length;

  while (number > 0) {
    let remainder = number % 10;
    armstrongNumber = armstrongNumber + Math.pow(remainder, numberOfDigits);
    number = parseInt(number / 10);
  }

  return originalNumber === armstrongNumber;
};
