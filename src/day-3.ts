import {Day} from "./day";

export const day3: Day = {
  solveForPartOne(input: string) {
    const inArray: string[] = input.toString().split("\n");

    let totalScore = 0;

    inArray.forEach((row) => {
      const leftSide: Array<boolean> = [];
      const rightSide: Array<boolean> = [];

      for (let i = 0; i < row.length / 2; i++) {
        leftSide[getCharacterValue(row[i])] = true;
        rightSide[getCharacterValue(row[(row.length / 2) + i])] = true;
      }

      for(let i = 0; i < rightSide.length; i++) {
        if (rightSide[i] && leftSide[i]) {
          totalScore += i;
          break;
        }
      }
    })

    return totalScore;
  },

  solveForPartTwo(input: string) {
    const inArray: string[] = input.toString().split("\n");

    let totalScore = 0;

    for (let j = 0; j < inArray.length - 1; j +=3) {
      const occ: Array<number> = Array(53).fill(0);
      let testVal = 0;

      [inArray[j], inArray[j+1], inArray[j+2]].forEach((row, index) => {
        for (let i = 0; i < row.length; i++) {
          const charValue = getCharacterValue(row[i]);
          if (occ[charValue] === testVal) occ[charValue] += index + 1;
        }

        for(let i = 0; i < occ.length; i++) {
          if (occ[i] >= 6) {
            totalScore += i;
            break;
          }
        }
        testVal += index + 1;
      })
    }

    return totalScore;
  }
}

const getCharacterValue = (character: string): number => {
  if (character.length !== 1) throw new Error("Input must a character of length 1");

  let charValue: number;

  if (character === character.toUpperCase()) {
    charValue = character.charCodeAt(0) - 38;
  } else {
    charValue = character.charCodeAt(0) - 96;
  }

  return charValue;
};
