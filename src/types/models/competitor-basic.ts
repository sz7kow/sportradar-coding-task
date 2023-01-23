import {CompetitorQualifierEnum} from '../vendors/sport-radar/competitor-qualifier-enum';

export interface CompetitorBasic {
  country: string;
  id: string;
  name: string;
  qualifier: CompetitorQualifierEnum;
}
