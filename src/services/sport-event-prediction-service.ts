import data from '@/data/events.json';
import {SportEventPrediction} from '@/types/models/sport-event-prediction';
import {getUniqueCompetitorNames} from '@/utils/sport-event-prediction';

export class SportEventPredictionService {
  #sportEventPredictions: SportEventPrediction[];

  constructor(sportEventPredictions: SportEventPrediction[]) {
    this.#sportEventPredictions = sportEventPredictions;
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
