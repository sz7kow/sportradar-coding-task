import {Referee} from './referee';
import {Weather} from './weather';

export interface SportEventConditions {
  attendance?: {
    count?: number;
  };
  comment?: {
    text?: string;
  };
  ground?: {
    neutral?: boolean;
  };
  lineups?: {
    confirmed?: boolean;
  };
  referees: Referee[];
  weather?: Weather;
}
