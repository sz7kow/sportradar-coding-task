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
