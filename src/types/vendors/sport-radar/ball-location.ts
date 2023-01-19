import {CompetitorQualifierEnum} from './competitor-qualifier-enum';

export interface BallLocation {
  order?: number;
  qualifier?: CompetitorQualifierEnum;
  x?: number;
  y?: number;
}
