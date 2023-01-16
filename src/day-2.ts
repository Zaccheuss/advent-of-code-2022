import {Day} from "./day";

export const day2: Day = {

  solveForPartOne(input: string) {
    type GameResult = "Win" | "Tie" | "Loss";
    const pointMap: { [key: string]: number } = { "X": 1, "Y": 2, "Z": 3 };
    const gameResultPointMap: Map<GameResult, number> = new Map([
      ["Win", 6],
      ["Tie", 3],
      ["Loss", 0]
    ]);

    const inArray: string[] = input.toString().split("\n");
    let totalScore = 0;

    inArray.forEach((row) => {
      const oppChoice = row[0];
      const myChoice = row[2];
      const points: number = pointMap[myChoice];
      const isWin: boolean = 
        oppChoice === "A" && myChoice === "Y" ||
        oppChoice === "B" && myChoice === "Z" ||
        oppChoice === "C" && myChoice === "X";

      const isTie: boolean = 
        oppChoice === "A" && myChoice === "X" ||
        oppChoice === "B" && myChoice === "Y" ||
        oppChoice === "C" && myChoice === "Z";

      const gameResult: GameResult = isWin ? "Win" : isTie ? "Tie" : "Loss"; 

      totalScore += points
      totalScore += gameResultPointMap.get(gameResult) || 0;
    });

    return totalScore;
  },

  solveForPartTwo(input: string) {
    type GameResult = "Win" | "Tie" | "Loss";
    const pointMap: { [key: string]: number } = 
      { "X": 1, "Y": 2, "Z": 3, "A": 1, "B": 2, "C": 3  };
    const gameResultPointMap: Map<GameResult, number> = new Map([
      ["Win", 6],
      ["Tie", 3],
      ["Loss", 0]
    ]);

    const inArray: string[] = input.toString().split("\n");
    let totalScore = 0;

    inArray.forEach((row) => {
      const oppChoice = row[0];
      const resultNeeded = row[2];
      const gameResult: GameResult = 
        resultNeeded === "X" ? "Loss" 
        : resultNeeded === "Y" ? "Tie" 
        : "Win";

      let myChoice: string;
      if (gameResult === "Tie") myChoice = oppChoice;
      else if (gameResult === "Win") {
        myChoice = 
          oppChoice === "A" ? "B" :
          oppChoice === "B" ? "C" :
          "A"
      } else {
        myChoice = 
          oppChoice === "A" ? "C" :
          oppChoice === "B" ? "A" :
          "B"
      }

      totalScore += pointMap[myChoice];
      totalScore += gameResultPointMap.get(gameResult) || 0;
    });

    return totalScore;
  }
}
