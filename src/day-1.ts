import {Day} from "./day";

export const day1: Day = {
  solveForPartOne(input: string) {
    const inArray: string[] = input.toString().split("\n");
    let maxCalorie = 0;
    let calorieSum: number = 0;

    inArray.forEach((item) => {
      if (item === "") {
        if (calorieSum > maxCalorie) maxCalorie = calorieSum;
        calorieSum = 0;
      }
      calorieSum += Number(item);
    });

    return String(maxCalorie);
  },

  solveForPartTwo(input: string) {
    const inArray: string[] = input.toString().split("\n");
    let summedCalories: number[] = [];
    let calorieSum: number = 0;

    inArray.forEach((item) => {
      if (item === "") {
        summedCalories.push(calorieSum);
        calorieSum = 0;
      }
      calorieSum += Number(item);
    });

    summedCalories.sort((a, b) => b - a);

    return String(summedCalories[0] + summedCalories[1] + summedCalories[2]);
  }
}
