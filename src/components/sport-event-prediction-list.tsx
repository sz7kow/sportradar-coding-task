import {SportEventPredictionBasic} from '@/types/models/sport-event-prediction-basic';

import {SportEventPredictionItem} from './sport-event-prediction-item';

interface Props {
  sportEventPredictions: SportEventPredictionBasic[];
}

export const SportEventPredictionList: React.FC<Props> = ({sportEventPredictions}) => (
  <ol className="relative ml-3 border-l border-gray-200 pl-1 dark:border-gray-700">
    {sportEventPredictions.map((sportEventPrediction, index) => (
      <SportEventPredictionItem
        key={sportEventPrediction.sport_event_id}
        position={index + 1}
        sportEventPrediction={sportEventPrediction}
      />
    ))}
  </ol>
);
