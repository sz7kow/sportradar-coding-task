import {CoverageSportEventPropertiesLineupsAvailabilityEnum} from './coverage-sport-event-properties-lineups-availability-enum';
import {CoverageSportEventPropertiesScoresEnum} from './coverage-sport-event-properties-scores-enum';

export interface CoverageSportEventProperties {
  ballspotting?: boolean;
  basic_play_by_play?: boolean;
  basic_player_stats?: boolean;
  basic_team_stats?: boolean;
  commentary?: boolean;
  deeper_play_by_play?: boolean;
  deeper_player_stats?: boolean;
  deeper_team_stats?: boolean;
  extended_player_stats?: boolean;
  extended_team_stats?: boolean;
  fun_facts?: boolean;
  game_clock?: boolean;
  goal_scorers?: boolean;
  lineups_availability?: CoverageSportEventPropertiesLineupsAvailabilityEnum;
  lineups?: boolean;
  probabilities?: boolean;
  scores?: CoverageSportEventPropertiesScoresEnum;
  venue?: boolean;
}
