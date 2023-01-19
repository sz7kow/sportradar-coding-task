import {BallLocation} from './ball-location';
import {Clock} from './clock';
import {MatchSituation} from './match-situation';
import {PeriodScore} from './period-score';
import {SportEventMatchStatusEnum} from './sport-event-match-status-enum';
import {SportEventStatusEnum} from './sport-event-status-enum';

export interface SimpleSportEventStatus {
  aggregate_away_score?: number;
  aggregate_home_score?: number;
  aggregate_winner_id?: string;
  away_normaltime_score?: number;
  away_overtime_score?: number;
  away_score?: number;
  ball_locations?: BallLocation[];
  clock?: Clock;
  decided_by_fed?: boolean;
  home_normaltime_score?: number;
  home_overtime_score?: number;
  home_score?: number;
  match_situation?: MatchSituation;
  match_status?: SportEventMatchStatusEnum;
  match_tie?: boolean;
  period_scores?: PeriodScore[];
  scout_abandoned?: boolean;
  status: SportEventStatusEnum;
  winner_id?: string;
}
