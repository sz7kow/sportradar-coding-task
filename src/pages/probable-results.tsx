import React, {useEffect, useState} from 'react';

import {SportEventPredictionBasic} from '@/types/models/sport-event-prediction-basic';
import {Container} from '@/components/container';
import {PageTitle} from '@/components/page-title';
import {SportEventPredictionList} from '@/components/sport-event-prediction-list';
import {Spinner} from '@/components/spinner';

const ProbableResults: React.FC = () => {
  const [sportEventPredictions, setSportEventPredictions] = useState<SportEventPredictionBasic[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>();

  useEffect(() => {
    fetch('/api/sport-event-predictions')
      .then((response) => response.json())
      .then((data) => {
        setSportEventPredictions(data);
      })
      .catch((error) => setErrorMessage(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <main>
      <Container className="my-8 flex flex-col gap-y-6 lg:my-10 xl:my-12">
        <PageTitle>Probable Results</PageTitle>
        {errorMessage}
        {isLoading ? <Spinner /> : <SportEventPredictionList sportEventPredictions={sportEventPredictions} />}
      </Container>
    </main>
  );
};

export default ProbableResults;
