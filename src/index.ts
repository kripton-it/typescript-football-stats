import { MatchReader } from "./MatchReader";
import { MatchData } from "./MatchData";
import { possibleResults } from "./PossibleResults";

const reader = new MatchReader("football.csv");

reader.read();

const matches = reader.data;

const manUnitedWins = matches.reduce(
  (acc: number, match: MatchData): number => {
    const isHomeWin =
      match[1] === "Man United" && match[5] === possibleResults.HOME_WIN;
    const isAwayWin =
      match[2] === "Man United" && match[5] === possibleResults.AWAY_WIN;
    return isHomeWin || isAwayWin ? acc + 1 : acc;
  },
  0
);

console.log(manUnitedWins);
