//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (code) => {
  let proteinArray = [];
  if (code === undefined) return [];
  else {
    for (let i = 0; i < code.length; i = i + 3) {
      if (
        code.substr(i, 3) === "UAA" ||
        code.substr(i, 3) === "UAG" ||
        code.substr(i, 3) === "UGA"
      ) {
        return proteinArray;
      } else if (code.substr(i, 3) === "AUG") {
        proteinArray.push("Methionine");
      } else if (code.substr(i, 3) === "UUU" || code.substr(i, 3) === "UUC") {
        proteinArray.push("Phenylalanine");
      } else if (code.substr(i, 3) === "UUA" || code.substr(i, 3) === "UUG") {
        proteinArray.push("Leucine");
      } else if (
        code.substr(i, 3) === "UCU" ||
        code.substr(i, 3) === "UCC" ||
        code.substr(i, 3) === "UCA" ||
        code.substr(i, 3) === "UCG"
      ) {
        proteinArray.push("Serine");
      } else if (code.substr(i, 3) === "UAU" || code.substr(i, 3) === "UAC") {
        proteinArray.push("Tyrosine");
      } else if (code.substr(i, 3) === "UGU" || code.substr(i, 3) === "UGC") {
        proteinArray.push("Cysteine");
      } else if (code.substr(i, 3) === "UGG") {
        proteinArray.push("Tryptophan");
      } else {
        throw new Error("Invalid codon");
      }
    }
  }
  return proteinArray;
};
