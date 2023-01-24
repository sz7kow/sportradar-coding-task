import {NextApiRequest, NextApiResponse} from 'next';

import {sportEventPredictionService} from '@/services/sport-event-prediction-service';

const DEFAULT_COUNT_VALUE = 10;

const handleRoute = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method !== 'GET') return response.status(405).end();

  const countParam = request.query?.count;
  const countParsedValue = Number.parseInt(countParam as string, 10);
  const countValue = Number.isNaN(countParsedValue) ? DEFAULT_COUNT_VALUE : countParsedValue;
  const mostProbableResults = sportEventPredictionService.getTheMostProbableResults(countValue);

  return response.status(200).send(mostProbableResults);
};

export default handleRoute;
