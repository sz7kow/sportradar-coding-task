import {CoverageCompetitionProperties} from './coverage-competition-properties';
import {CoverageGroupProperties} from './coverage-group-properties';
import {CoverageSportEventProperties} from './coverage-sport-event-properties';
import {CoverageTypeEnum} from './coverage-type-enum';

export interface Coverage {
  competition_properties: CoverageCompetitionProperties;
  group_properties: CoverageGroupProperties;
  sport_event_properties: CoverageSportEventProperties;
  type: CoverageTypeEnum;
}
