import {GetStaticPaths, GetStaticProps} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {ChangeEventHandler, Fragment, useState} from 'react';

import {SeasonSchedulesResultsTable} from '@/components/season-schedules-results-table';
import {SeasonSchedule} from '@/types/vendors/sport-radar/season-schedule';
import {SportEventMatchStatusEnum} from '@/types/vendors/sport-radar/sport-event-match-status-enum';
import {sportRadarService} from '@/services/sport-radar-service';
import {Season} from '@/types/vendors/sport-radar/season';
import {Spinner} from '@/components/spinner';
import {PageTitle} from '@/components/page-title';
import {FormElement} from '@/components/form-element';
import {slugifyId, unslugifyId} from '@/utils/sport-radar';
import {FormSelect} from '@/components/form-select';
import {Container} from '@/components/container';

const COMPETITION_ID = 'sr:competition:202';

interface StaticProps {
  seasons: Season[];
  seasonSchedule: SeasonSchedule[];
}

const ResultPage: React.FC<StaticProps> = ({seasons, seasonSchedule}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();
  const seasonId = unslugifyId(router.query?.['season-id-slug'] as string);

  const selectOptions = seasons.map(({id, name}) => ({
    label: name,
    value: id,
  }));

  const handleChange: ChangeEventHandler<HTMLSelectElement> = async (event) => {
    setIsLoading(true);
    await router.push(`/results/${slugifyId(event.target.value)}`);
    setIsLoading(false);
  };

  return (
    <Fragment>
      <Head>
        <title>Results | Sport Radar Coding Task</title>
        <meta content={`Season schedule for season ${seasonId}`} name="description" />
      </Head>
      <main>
        <Container className="my-12">
          <PageTitle>Results</PageTitle>
          <FormElement htmlFor="seasons">
            <FormSelect defaultValue={seasonId} id="seasons" onChange={handleChange} options={selectOptions} />
          </FormElement>
          <div className="pt-6">
            {isLoading ? <Spinner className="mx-auto" /> : <SeasonSchedulesResultsTable schedules={seasonSchedule} />}
          </div>
        </Container>
      </main>
    </Fragment>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const seasons = await sportRadarService.getCompetitionSeasons(COMPETITION_ID);

  const paths = seasons.map((season) => ({
    params: {
      'season-id-slug': slugifyId(season.id),
    },
  }));

  return {
    fallback: false,
    paths,
  };
};

export const getStaticProps: GetStaticProps<StaticProps> = async (context) => {
  if (!(typeof context.params?.['season-id-slug'] === 'string')) {
    throw new Error(`Invalid 'season-id-slug' parameter: ${context.params?.['season-id-slug']}`);
  }

  const seasons = await sportRadarService.getCompetitionSeasons(COMPETITION_ID);
  const seasonId = unslugifyId(context.params?.['season-id-slug']);
  const seasonSchedule = await sportRadarService.getSeasonSchedule(seasonId);

  const validSeasonSchedule = seasonSchedule
    .filter((schedule) => schedule.sport_event_status.match_status === SportEventMatchStatusEnum.ENDED)
    .reverse();

  return {
    props: {
      seasons,
      seasonSchedule: validSeasonSchedule,
    },
  };
};

export default ResultPage;
