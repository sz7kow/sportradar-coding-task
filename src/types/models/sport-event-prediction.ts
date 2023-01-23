import {Competitor} from '../vendors/sport-radar/competitor';
import {Venue} from '../vendors/sport-radar/venue';

export interface SportEventPrediction {
  sport_event_id: string;
  start_date: string;
  sport_name: string;
  competition_name: string;
  competition_id: string;
  season_name: string;
  competitors: Competitor[];
  venue: Venue;
  probability_home_team_winner: number;
  probability_draw: number;
  probability_away_team_winner: number;
}
