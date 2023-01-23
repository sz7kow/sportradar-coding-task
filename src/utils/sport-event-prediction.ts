import {SportEventPrediction} from '@/types/models/sport-event-prediction';

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
