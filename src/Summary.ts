import { MatchData } from "./MatchData";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { HtmlReport } from "./reportTargets/HtmlReport";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    this.outputTarget.print(this.analyzer.run(matches));
  }

  static winsAnalysisWithHtmlReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new HtmlReport());
  }
}
