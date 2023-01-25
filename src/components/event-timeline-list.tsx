import {Competitor} from '@/types/vendors/sport-radar/competitor';
import {GenericEvent} from '@/types/vendors/sport-radar/generic-event';

import {EventTimelineItem} from './event-timeline-item';

interface Props {
  awayCompetitor: Competitor;
  events: GenericEvent[];
  homeCompetitor: Competitor;
}

export const EventTimelineList: React.FC<Props> = ({awayCompetitor, events, homeCompetitor}) => (
  <ol className="relative border-l border-gray-200 dark:border-gray-700">
    {events.map((event) => (
      <EventTimelineItem key={event.id} awayCompetitor={awayCompetitor} event={event} homeCompetitor={homeCompetitor} />
    ))}
  </ol>
);
