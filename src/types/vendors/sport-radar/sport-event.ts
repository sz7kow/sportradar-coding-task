import {Competitor} from './competitor';
import {Coverage} from './coverage';
import {SportEventChannels} from './sport-event-channels';
import {SportEventConditions} from './sport-event-conditions';
import {SportEventContext} from './sport-event-context';
import {Venue} from './venue';

export interface SportEvent {
  channels?: SportEventChannels[];
  competitors?: Competitor[];
  coverage?: Coverage;
  id: string;
  replaced_by?: string;
  resume_time?: string;
  sport_event_conditions?: SportEventConditions;
  sport_event_context?: SportEventContext;
  start_time: string;
  start_time_confirmed: boolean;
  venue?: Venue;
}
