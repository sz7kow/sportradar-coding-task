import Head from 'next/head';
import {Fragment} from 'react';
import {GetServerSideProps} from 'next';

import {Container} from '@/components/container';
import {GenericEvent} from '@/types/vendors/sport-radar/generic-event';
import {SportEvent} from '@/types/vendors/sport-radar/sport-event';
import {SportEventStatistics} from '@/types/vendors/sport-radar/sport-event-statistics';
import {SportEventStatus} from '@/types/vendors/sport-radar/sport-event-status';
import {sportRadarService} from '@/services/sport-radar-service';
import {unslugifyId} from '@/utils/sport-radar';
import {CompetitorQualifierEnum} from '@/types/vendors/sport-radar/competitor-qualifier-enum';
import {EventTimelineList} from '@/components/event-timeline-list';
import {Competitor} from '@/types/vendors/sport-radar/competitor';
import {SportEventStatisticsTable} from '@/components/sport-event-statistics-table';

interface ServerSideProps {
  sportEvent: SportEvent;
  sportEventStatus: SportEventStatus;
  statistics: SportEventStatistics;
  timeline: GenericEvent[];
}

const MatchPage: React.FC<ServerSideProps> = ({sportEvent: {competitors}, sportEventStatus, statistics, timeline}) => {
  const homeCompetitor = competitors?.find(({qualifier}) => qualifier === CompetitorQualifierEnum.HOME) as Competitor;
  const awayCompetitor = competitors?.find(({qualifier}) => qualifier === CompetitorQualifierEnum.AWAY) as Competitor;

  return (
    <Fragment>
      <Head>
        <title>
          {`${homeCompetitor.name} (${sportEventStatus.home_score}) - ${awayCompetitor.name} (${sportEventStatus.away_score})`}{' '}
          | Sport Radar Coding Task
        </title>
        <meta content="Match details" name="description" />
      </Head>
      <main>
        <Container className="my-12">
          <h1 className="pb-8 text-4xl font-bold dark:text-white">
            {`${homeCompetitor.name} (${sportEventStatus.home_score}) - ${awayCompetitor.name} (${sportEventStatus.away_score})`}
          </h1>
          <div className="mb-8">
            <h2 className="mb-4 text-2xl font-bold dark:text-white">Statistics</h2>
            <div className="w-[32rem] max-w-full">
              <SportEventStatisticsTable statistics={statistics} />
            </div>
          </div>
          <h2 className="mb-4 text-2xl font-bold dark:text-white">Match Commentary</h2>
          <EventTimelineList awayCompetitor={awayCompetitor} events={timeline} homeCompetitor={homeCompetitor} />
        </Container>
      </main>
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps<ServerSideProps> = async (context) => {
  if (!(typeof context.params?.['sport-event-id-slug'] === 'string')) {
    throw new Error(`Invalid 'sport-event-id-slug' parameter: ${context.params?.['sport-event-id-slug']}`);
  }

  const sportEventId = unslugifyId(context.params?.['sport-event-id-slug']);
  const sportEventTimeline = await sportRadarService.getSportEventTimeline(sportEventId);

  return {
    props: {
      sportEvent: sportEventTimeline.sport_event,
      sportEventStatus: sportEventTimeline.sport_event_status,
      statistics: sportEventTimeline.statistics,
      timeline: sportEventTimeline.timeline,
    },
  };
};

export default MatchPage;
