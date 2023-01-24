import {CompetitorBasic} from './competitor-basic';
import {HighestProbableResultEnum} from './highest-probable-result-enum';

export interface SportEventPredictionBasic {
  away_competitor: CompetitorBasic;
  competition_id: string;
  competition_name: string;
  highest_probable_result_value: number;
  highest_probable_result: HighestProbableResultEnum;
  home_competitor: CompetitorBasic;
  sport_event_id: string;
  start_date: string;
  venue_name: string;
}
