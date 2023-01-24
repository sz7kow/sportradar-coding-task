import {HighestProbableResultEnum} from '@/types/models/highest-probable-result-enum';
import {SportEventPrediction} from '@/types/models/sport-event-prediction';
import {SportEventPredictionBasic} from '@/types/models/sport-event-prediction-basic';
import {Competitor} from '@/types/vendors/sport-radar/competitor';
import {CompetitorQualifierEnum} from '@/types/vendors/sport-radar/competitor-qualifier-enum';

import {mapToCompetitorBasic} from './competitor';

export const getUniqueCompetitorNames = (sportEventPredictions: SportEventPrediction[]): string[] => {
  const competitorNames = new Set<string>();

  sportEventPredictions.forEach(({competitors}) => {
    competitors.forEach(({name}) => {
      competitorNames.add(name);
    });
  });

  return Array.from(competitorNames);
};

export const sortDescendingByTheMostProbableResult = (a: SportEventPrediction, b: SportEventPrediction) => {
  const aValue = Math.max(a.probability_away_team_winner, a.probability_draw, a.probability_home_team_winner);
  const bValue = Math.max(b.probability_away_team_winner, b.probability_draw, b.probability_home_team_winner);

  return bValue - aValue;
};

export const mapToSportEventPredictionBasic = ({
  competition_id,
  competition_name,
  competitors,
  probability_away_team_winner,
  probability_draw,
  probability_home_team_winner,
  start_date,
  venue: {name},
}: SportEventPrediction): SportEventPredictionBasic => {
  const homeCompetitor = competitors?.find(({qualifier}) => qualifier === CompetitorQualifierEnum.HOME) as Competitor;
  const awayCompetitor = competitors?.find(({qualifier}) => qualifier === CompetitorQualifierEnum.AWAY) as Competitor;

  const highestProbableResultValue = Math.max(
    probability_away_team_winner,
    probability_draw,
    probability_home_team_winner
  );

  let highestProbableResult = HighestProbableResultEnum.DRAW;

  if (highestProbableResultValue === probability_home_team_winner) {
    highestProbableResult = HighestProbableResultEnum.HOME_TEAM_WIN;
  }

  if (highestProbableResultValue === probability_away_team_winner) {
    highestProbableResult = HighestProbableResultEnum.HOME_TEAM_WIN;
  }

  return {
    away_competitor: mapToCompetitorBasic(awayCompetitor),
    competition_id,
    competition_name,
    highest_probable_result: highestProbableResult,
    highest_probable_result_value: highestProbableResultValue,
    home_competitor: mapToCompetitorBasic(homeCompetitor),
    start_date,
    venue_name: name,
  };
};
