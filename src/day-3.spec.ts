import {assert} from "chai";
import {day3} from "./day-3";
import fs from "fs";

describe("day 3", () => {
  describe("part 1", () => {
    it("Gets correct value from simple string 'aa'", () => {
      const input = "aa";
      const result = day3.solveForPartOne(input);
      assert.equal(result, "1");
    });
    it("Gets correct value from simple string 'BB'", () => {
      const input = "BB";
      const result = day3.solveForPartOne(input);
      assert.equal(result, 28);
    });
    it("Gets correct value from longer string", () => {
      const input = "lfloli";
      const result = day3.solveForPartOne(input);
      assert.equal(result, 12);
    });
    it("Returns 0 for no match", () => {
      const input = "aabb";
      const result = day3.solveForPartOne(input);
      assert.equal(result, 0);
    });
    it("Returns correct value from first row of sample", () => {
      const input = "vJrwpWtwJgWrhcsFMMfFFhFp";
      const result = day3.solveForPartOne(input);
      assert.equal(result, 16);
    });
    it("Returns correct value from first row of sample repeated on next line", () => {
      const input = "vJrwpWtwJgWrhcsFMMfFFhFp\nvJrwpWtwJgWrhcsFMMfFFhFp";
      const result = day3.solveForPartOne(input);
      assert.equal(result, 32);
    });
    it("Returns correct value from second row of sample", () => {
      const input = "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL";
      const result = day3.solveForPartOne(input);
      assert.equal(result, 38);
    });
    it("Returns correct value from third row of sample", () => {
      const input = "PmmdzqPrVvPwwTWBwg";
      const result = day3.solveForPartOne(input);
      assert.equal(result, 42);
    });
    it("Returns correct value from fourth row of sample", () => {
      const input = "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn";
      const result = day3.solveForPartOne(input);
      assert.equal(result, 22);
    });
    it("Returns 0 from empty input", () => {
      const input = "";
      const result = day3.solveForPartOne(input);
      assert.equal(result, 0);
    });
    it("Gets correct value from sample input", () => {
      const input = fs.readFileSync("./inputs/sample-input-day-3.txt" , "utf8")

      const result = day3.solveForPartOne(input);
      assert.equal(result, 157);
    });
  });

  describe("part 2", () => {
    it("Gets correct value from first 3 lines of sample input", () => {
      const input = "vJrwpWtwJgWrhcsFMMfFFhFp\n"  +
      "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL\n" +
      "PmmdzqPrVvPwwTWBwg"

      const result = day3.solveForPartTwo(input);
      assert.equal(result, "18");
    });
    it("Gets correct value from last 3 lines of sample input", () => {
      const input = "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn\n"  +
      "ttgJtRGJQctTZtZT\n" +
      "CrZsJsPPZsGzwwsLwLmpwMDw"

      const result = day3.solveForPartTwo(input);
      assert.equal(result, "52");
    });
    it("Gets correct value from sample input", () => {
      const input = fs.readFileSync("./inputs/sample-input-day-3.txt" , "utf8")

      const result = day3.solveForPartTwo(input);
      assert.equal(result, 70);
    });
  });
});
