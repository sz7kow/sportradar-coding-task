import {RefereeTypeEnum} from './referee-type-enum';

export interface Referee {
  country_code?: string;
  id?: string;
  name?: string;
  nationality?: string;
  type?: RefereeTypeEnum;
}
