import { Serie } from './miIndicadorCurrent.interface';
export interface DataLineGraph {
  name:   string;
  serie?: Serie[];
  series?: Series[];
}

export interface Series {
  name:  string;
  value: number;
}
