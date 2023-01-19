import {CoverageCompetitionPropertiesStandingsEnum} from './coverage-competition-properties-standings-enum';

export interface CoverageCompetitionProperties {
  brackets?: boolean;
  missing_players?: boolean;
  player_transfer_history?: boolean;
  schedules?: boolean;
  season_player_statistics?: boolean;
  season_probabilities?: boolean;
  season_stats_leaders?: boolean;
  season_team_statistics?: boolean;
  standings?: CoverageCompetitionPropertiesStandingsEnum;
  team_squads?: boolean;
}
