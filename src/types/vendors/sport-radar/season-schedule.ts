import {SimpleSportEventStatus} from './simple-sport-event-status';
import {SportEventBasic} from './sport-event-basic';

export interface SeasonSchedule {
  sport_event: SportEventBasic;
  sport_event_status: SimpleSportEventStatus;
}
