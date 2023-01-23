import data from '@/data/events.json';
import {SportEventPrediction} from '@/types/models/sport-event-prediction';

export class SportEventPredictionService {
  #sportEventPredictions: SportEventPrediction[];

  constructor(sportEventPredictions: SportEventPrediction[]) {
    this.#sportEventPredictions = sportEventPredictions;
  }

  getCompatitorNames(): string[] {
    return Array.from(SportEventPredictionService.#getUniqueCompetitorNames(this.#sportEventPredictions)).sort();
  }

  getCompetitionCompatitorNames(compatitionId: string): string[] {
    const sportEventPredictions = this.#sportEventPredictions.filter(
      ({competition_id}) => competition_id === compatitionId
    );

    return SportEventPredictionService.#getUniqueCompetitorNames(sportEventPredictions);
  }

  static #getUniqueCompetitorNames(sportEventPredictions: SportEventPrediction[]): string[] {
    const competitorNames = new Set<string>();

    sportEventPredictions.forEach(({competitors}) => {
      competitors.forEach(({name}) => {
        competitorNames.add(name);
      });
    });

    return Array.from(competitorNames);
  }
}

export const sportEventPredictionService = new SportEventPredictionService(data.events as SportEventPrediction[]);
