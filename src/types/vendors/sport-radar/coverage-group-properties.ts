import {CoverageGroupPropertiesStandingsEnum} from './coverage-group-properties-standings-enum';

export interface CoverageGroupProperties {
  brackets?: boolean;
  cup?: boolean;
  group_stage?: boolean;
  league?: boolean;
  missing_players?: boolean;
  qualification?: boolean;
  results?: boolean;
  schedules?: boolean;
  standings?: CoverageGroupPropertiesStandingsEnum;
}
