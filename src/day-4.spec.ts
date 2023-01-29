import {assert} from "chai";
import {day4} from "./day-4";
import fs from "fs";

describe("day 4", () => {
  describe("part 1", () => {
    it("Sees that the same ranges are overlaps", () => {
      const input = "2-5,2-5";

      const result = day4.solveForPartOne(input);
      assert.equal(result, "1");
    });
    it("Counts overlapping ranges", () => {
      const input = "1-9,2-5";

      const result = day4.solveForPartOne(input);
      assert.equal(result, "1");
    });
    it("Doesn't count ranges that only partially overlap", () => {
      const input = "1-4,2-5";

      const result = day4.solveForPartOne(input);
      assert.equal(result, "0");
    });
    it ("Doesn't count ranges that don't overlap at all", () => {
      const input = "1-4,9-183";

      const result = day4.solveForPartOne(input);
      assert.equal(result, "0");
    });
    it("Gets correct number of overlaps from sample", () => {
      const input = fs.readFileSync("./inputs/sample-input-day-4.txt" , "utf8")

      const result = day4.solveForPartOne(input);
      assert.equal(result, "2");
    });
  });

  describe("part 2", () => {
    it("Gets correct number of overlaps from sample", () => {
      const input = fs.readFileSync("./inputs/sample-input-day-4.txt" , "utf8")

      const result = day4.solveForPartTwo(input);
      assert.equal(result, "4");
    });
  });
});
