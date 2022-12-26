import {Day} from "./day";

export const day1: Day = {
  solveForPartOne(input: string) {
    let inArray: string[] = input.toString().split("\n");
    return inArray[0];
  },
  solveForPartTwo(input: string) {
    return "";
  }
}
