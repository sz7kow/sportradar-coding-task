import {PeriodTypeEnum} from './period-type-enum';

export interface PeriodScore {
  away_score: number;
  home_score: number;
  number?: number;
  type?: PeriodTypeEnum;
}
