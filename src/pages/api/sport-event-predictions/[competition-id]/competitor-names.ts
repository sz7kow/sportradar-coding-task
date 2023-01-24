import {NextApiRequest, NextApiResponse} from 'next';

import {sportEventPredictionService} from '@/services/sport-event-prediction-service';

const handleRoute = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method !== 'GET') {
    return response.status(405).end();
  }

  if (!(typeof request.query?.['competition-id'] === 'string')) {
    return response.status(400).end();
  }

  const competitionId = request.query?.['competition-id'];
  const competitorNames = sportEventPredictionService.getCompetitionCompetitorNames(competitionId);

  if (competitorNames.length === 0) {
    return response.status(404).end();
  }

  return response.status(200).send(competitorNames);
};

export default handleRoute;
