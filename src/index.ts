import {Day} from "./day";
import {day1} from "./day-1";
import {day2} from "./day-2";
import {day3} from "./day-3";
import fs from "fs";

const days: Day[] = [ day1, day2, day3 ];

const runDay = async (day: number, part: number, isSampleInput: boolean = false) => {
  const dayToRun = days[day - 1];
  const inputFile = isSampleInput 
    ? `./inputs/sample-input-day-${day}.txt` 
    : `./inputs/input-day-${day}.txt`
  const input = fs.readFileSync(inputFile, "utf8")
  let result: string | number = "";

  if (part === 1) result = dayToRun.solveForPartOne(input);
  if (part === 2) result = dayToRun.solveForPartTwo(input);

  console.log(` --- day ${day} part ${part} solution: ${result} --- `);
}

const commandLineParams = process.argv.slice(2) as unknown[] as Number[];

if (commandLineParams.length === 0) console.error("Specify which day to run");
if (commandLineParams.length === 1) console.error("Specify part 1 or 2");
if (commandLineParams.length === 2 || commandLineParams.length === 3) {
  runDay(+commandLineParams[0], +commandLineParams[1], !!commandLineParams[2]);
}
