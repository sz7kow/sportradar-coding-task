import {CompetitorQualifierEnum} from './competitor-qualifier-enum';
import {MatchSituationEnum} from './match-situation-enum';

export interface MatchSituation {
  qualifier?: CompetitorQualifierEnum;
  status?: MatchSituationEnum;
  updated_at?: string;
}
