import {GetServerSideProps} from 'next';

import {sportRadarService} from '@/services/sport-radar-service';
import {slugifyId} from '@/utils/sport-radar';

const COMPETITION_ID = 'sr:competition:202';

const ResultsPage: React.FC = () => <div>Results Page</div>;

export const getServerSideProps: GetServerSideProps = async () => {
  const seasons = await sportRadarService.getCompetitionSeasons(COMPETITION_ID);

  return {
    redirect: {
      destination: `/results/${slugifyId(seasons[0].id)}`,
      permanent: true,
    },
  };
};

export default ResultsPage;
