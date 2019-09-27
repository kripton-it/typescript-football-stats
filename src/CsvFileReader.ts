import fs from "fs";

// первый способ сделать код повторно используемым:
// дженерики (generics) для передачи типа используемых данных
export abstract class CsvFileReader<T> {
  data: T[] = [];

  constructor(public filename: string) {}
  
  abstract mapRowToData(row: string[]): T;

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf-8"
      })
      .split("\n")
      .map((row: string): string[] => row.split(","))
      .map(this.mapRowToData);
  }

}
