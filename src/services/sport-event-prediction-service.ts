import data from '@/data/events.json';
import {SportEventPrediction} from '@/types/models/sport-event-prediction';
import {SportEventPredictionBasic} from '@/types/models/sport-event-prediction-basic';
import {
  getUniqueCompetitorNames,
  mapToSportEventPredicionBasic,
  sortDescendingByTheMostProbableResult,
} from '@/utils/sport-event-prediction';

export class SportEventPredictionService {
  #sportEventPredictions: SportEventPrediction[];

  constructor(sportEventPredictions: SportEventPrediction[]) {
    this.#sportEventPredictions = sportEventPredictions;
  }

  getTheMostProbableResults(count: number): SportEventPredictionBasic[] {
    return this.#sportEventPredictions
      .sort(sortDescendingByTheMostProbableResult)
      .slice(0, count)
      .map(mapToSportEventPredicionBasic);
  }

  getCompatitorNames(): string[] {
    return getUniqueCompetitorNames(this.#sportEventPredictions).sort();
  }

  getCompetitionCompatitorNames(compatitionId: string): string[] {
    const sportEventPredictions = this.#sportEventPredictions.filter(
      ({competition_id}) => competition_id === compatitionId
    );

    return getUniqueCompetitorNames(sportEventPredictions).sort();
  }
}

export const sportEventPredictionService = new SportEventPredictionService(data.events as SportEventPrediction[]);
