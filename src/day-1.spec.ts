import {assert} from "chai";
import {day1} from "./day-1";
import fs from "fs";

describe("day 1", () => {
  describe("part 1", () => {
    it("Gets max calorie from sample", () => {
      const input = fs.readFileSync("./inputs/sample-input-day-1.txt" , "utf8")

      const result = day1.solveForPartOne(input);
      assert.equal(result, "24000");
    });
  });

  describe("part 2", () => {
    it("Gets correct calorie sum from sample", () => {
      const input = fs.readFileSync("./inputs/sample-input-day-1.txt" , "utf8")

      const result = day1.solveForPartTwo(input);
      assert.equal(result, "45000");
    });
  });
});
