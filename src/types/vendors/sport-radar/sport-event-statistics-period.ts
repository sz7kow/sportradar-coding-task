import {CompetitorAgeGroupEnum} from './competitor-age-group-enum';
import {CompetitorQualifierEnum} from './competitor-qualifier-enum';
import {SportEventPlayerStatistics} from './sport-event-player-statistics';

export interface SportEventStatisticsPeriod {
  competitors?: {
    abbreviation?: string;
    age_group?: CompetitorAgeGroupEnum;
    country_code?: string;
    country?: string;
    form?: string;
    gender?: string;
    id: string;
    name: string;
    other_season_id?: string;
    players?: SportEventPlayerStatistics[];
    qualifier?: CompetitorQualifierEnum;
    statistics?: {
      ball_possession?: number;
      cards_given?: number;
      corner_kicks?: number;
      fouls?: number;
      free_kicks?: number;
      goal_kicks?: number;
      injuries?: number;
      offsides?: number;
      penalties_missed?: number;
      red_cards?: number;
      shots_blocked?: number;
      shots_off_target?: number;
      shots_on_target?: number;
      shots_saved?: number;
      shots_total?: number;
      substitutions?: number;
      throw_ins?: number;
      yellow_cards?: number;
      yellow_red_cards?: number;
    };
    virtual?: boolean;
  }[];
  number?: number;
}
