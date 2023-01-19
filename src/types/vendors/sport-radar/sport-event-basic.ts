import {Competitor} from './competitor';
import {Coverage} from './coverage';
import {SportEventContext} from './sport-event-context';
import {Venue} from './venue';

export interface SportEventBasic {
  competitors?: Competitor[];
  coverage?: Coverage;
  id: string;
  replaced_by?: string;
  resume_time?: string;
  sport_event_context?: SportEventContext;
  start_time: string;
  start_time_confirmed: boolean;
  venue?: Venue;
}
