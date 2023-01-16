import {assert} from "chai";
import {day2} from "./day-2";
import fs from "fs";

describe("day 2", () => {
  describe("part 1", () => {
    it("Returns 4 when choosing rock and tying", () => {
      const input = "A X";
      const result = day2.solveForPartOne(input);
      assert.equal(result, 4);
    });
    it("Returns 1 when choosing rock and losing", () => {
      const input = "B X";
      const result = day2.solveForPartOne(input);
      assert.equal(result, 1);
    });
    it("Returns 7 when choosing rock and winning", () => {
      const input = "C X";
      const result = day2.solveForPartOne(input);
      assert.equal(result, 7);
    });
    it("Returns correct score from sample input", () => {
      const input = fs.readFileSync("./inputs/sample-input-day-2.txt" , "utf8")
      const result = day2.solveForPartOne(input);
      assert.equal(result, 15);
    });
  });

  describe("part 2", () => {
    it("Tie when opp chooses rock and are given an input Y", () => {
      const input = "A Y";
      const result = day2.solveForPartTwo(input);
      assert.equal(result, 4);
    });
    it("Lose when opp chooses rock and are given an input X", () => {
      const input = "A X";
      const result = day2.solveForPartTwo(input);
      assert.equal(result, 3);
    });
    it("Win when opp chooses rock and are given an input Z", () => {
      const input = "A Z";
      const result = day2.solveForPartTwo(input);
      assert.equal(result, 8);
    });
    it("Returns correct score from sample input", () => {
      const input = fs.readFileSync("./inputs/sample-input-day-2.txt" , "utf8")
      const result = day2.solveForPartTwo(input);
      assert.equal(result, 12);
    });
  });
});
