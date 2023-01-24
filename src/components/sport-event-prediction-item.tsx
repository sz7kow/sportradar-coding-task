import {SportEventPredictionBasic} from '@/types/models/sport-event-prediction-basic';

import {DateSlug} from './date-slug';

interface Props {
  position: number;
  sportEventPrediction: SportEventPredictionBasic;
}

export const SportEventPredictionItem: React.FC<Props> = ({
  position,
  sportEventPrediction: {
    away_competitor,
    highest_probable_result,
    highest_probable_result_value,
    home_competitor,
    start_date,
    venue_name,
  },
}) => (
  <li className="mb-10 ml-6">
    <div className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
      <span className="text-xs font-bold dark:text-white">{position}</span>
    </div>
    <h2 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
      {`${home_competitor.name} (${home_competitor.country}) vs. ${away_competitor.name} (${away_competitor.country})`}
    </h2>
    <p className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
      <DateSlug date={start_date} />
      {`, ${venue_name}`}
    </p>
    <p className="text-base font-normal uppercase text-gray-500 dark:text-gray-400">{`${highest_probable_result} (${highest_probable_result_value})`}</p>
  </li>
);
