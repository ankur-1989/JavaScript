//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const pairs = {
  "[": "]",
  "(": ")",
  "{": "}",
};
const isOpeningChar = (char) => {
  return char in pairs;
};
const isClosingChar = (char) => {
  return Object.values(pairs).includes(char);
};
const isMatch = (opening, closing) => {
  return pairs[opening] === closing ? true : false;
};
export const isPaired = (input) => {
  if (input.length === 0) return true;
  const strArray = input.split("");
  const stack = [];
  for (const token of strArray) {
    if (isOpeningChar(token)) stack.push(token);
    if (isClosingChar(token)) if (!isMatch(stack.pop(), token)) return false;
  }
  return stack.length === 0;
};
