//
// This is only a SKELETON file for the 'Darts' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const score = (x, y) => {
  let d = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
  if (d <= 1) return 10;
  else if (d > 1 && d <= 5) return 5;
  else if (d > 5 && d <= 10) return 1;
  else return 0;
};
