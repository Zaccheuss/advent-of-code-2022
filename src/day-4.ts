import {Day} from "./day";

export const day4: Day = {
  solveForPartOne(input: string) {
    const inArray: string[] = input.toString().split("\n");
    let numOverlaps = 0;

    inArray.forEach(value => {
      const parsedValues = value.split(/[,-]/).filter(x => !isNaN(parseInt(x)));

      if (parsedValues.length > 0) {
        const startDiff = +parsedValues[0] - +parsedValues[2];
        const endDiff = +parsedValues[1] - +parsedValues[3];

        if (startDiff * endDiff <= 0) numOverlaps++;
      }
    });

    return numOverlaps;
  },

  solveForPartTwo(input: string) {
    const inArray: string[] = input.toString().split("\n");
    let numOverlaps = 0;

    inArray.forEach(value => {
      const parsedValues: number[] = 
        value
        .split(/[,-]/)
        .filter(x => !isNaN(parseInt(x)))
        .map(x => +x);
      
      // Don't look below....

      const smallestStartingRange = Math.min(...parsedValues);
      const startDiff = +parsedValues[0] - +parsedValues[2];
      const endDiff = +parsedValues[1] - +parsedValues[3];

      if (smallestStartingRange === parsedValues[0]) {
        const smallestEndingRange = parsedValues[1]
        if (smallestEndingRange >= parsedValues[2] && smallestEndingRange <= parsedValues[3]) numOverlaps++;
        else if (startDiff * endDiff <= 0) numOverlaps++;
      } else {
        const smallestEndingRange = parsedValues[3]
        if (smallestEndingRange >= parsedValues[0] && smallestEndingRange <= parsedValues[1]) numOverlaps++;
        else if (startDiff * endDiff <= 0) numOverlaps++;
      }


    });

    return numOverlaps;
  }
}
