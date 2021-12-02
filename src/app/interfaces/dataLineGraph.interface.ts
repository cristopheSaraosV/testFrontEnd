export interface DataLineGraph {
  name:   string;
  series: Series[];
}

export interface Series {
  name:  string;
  value: number;
}
