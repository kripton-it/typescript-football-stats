import { MatchData } from "../MatchData";
import { Analyzer } from "../Summary";
import { possibleResults } from "../PossibleResults";

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {
    this.reducer = this.reducer.bind(this);
  }

  run(matches: MatchData[]): string {
    const winsCount = matches.reduce(this.reducer, 0);

    return `Team "${this.team}" won ${winsCount} games`;
  }

  reducer(acc: number, match: MatchData): number {
    const { HOME_WIN, AWAY_WIN } = possibleResults;
    const isHomeWin = match[1] === this.team && match[5] === HOME_WIN;
    const isAwayWin = match[2] === this.team && match[5] === AWAY_WIN;

    return isHomeWin || isAwayWin ? acc + 1 : acc;
  }
}
