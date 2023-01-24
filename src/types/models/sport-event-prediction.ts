import {Competitor} from '../vendors/sport-radar/competitor';
import {Venue} from '../vendors/sport-radar/venue';

export interface SportEventPrediction {
  competition_id: string;
  competition_name: string;
  competitors: Competitor[];
  probability_away_team_winner: number;
  probability_draw: number;
  probability_home_team_winner: number;
  season_name: string;
  sport_event_id: string;
  sport_name: string;
  start_date: string;
  venue: Venue;
}
