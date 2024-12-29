//
// This is only a SKELETON file for the 'Run Length Encoding' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (str) => {
  let hold = str.charAt(0);
  let count = 0;
  let decodedString = "";
  if (str === "") return "";

  str.split("").forEach((element) => {
    if (element === hold) {
      count = count + 1;
    } else {
      decodedString = `${decodedString}${count === 1 ? "" : count}${hold}`;
      count = 0;
      hold = element;
      count = count + 1;
    }
  });
  decodedString = `${decodedString}${count === 1 ? "" : count}${hold}`;
  return decodedString;
};

export const decode = (str) => {
  let n = "";
  let encodedString = "";
  if (str === "") return "";
  else {
    str.split("").forEach((element) => {
      if (Number.isNaN(parseInt(element))) {
        encodedString =
          encodedString + element.repeat(n === "" ? 1 : Number(n));
        n = "";
      } else {
        n = n + element;
      }
    });
  }
  return encodedString;
};
