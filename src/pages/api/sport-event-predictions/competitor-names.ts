import {NextApiRequest, NextApiResponse} from 'next';

import {sportEventPredictionService} from '@/services/sport-event-prediction-service';

const handleRoute = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method !== 'GET') return response.status(405).end();

  const competitorNames = sportEventPredictionService.getCompetitorNames();

  return response.status(200).send(competitorNames);
};

export default handleRoute;
