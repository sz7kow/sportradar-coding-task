import {CompetitorAgeGroupEnum} from './competitor-age-group-enum';
import {CompetitorQualifierEnum} from './competitor-qualifier-enum';

export interface Competitor {
  abbreviation?: string;
  age_group?: CompetitorAgeGroupEnum;
  country_code?: string;
  country?: string;
  form?: string;
  gender?: string;
  id: string;
  name: string;
  other_season_id?: string;
  qualifier?: CompetitorQualifierEnum;
  virtual?: boolean;
}
