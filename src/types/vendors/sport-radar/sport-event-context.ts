import {Category} from './category';
import {Competition} from './competition';
import {Season} from './season';
import {Sport} from './sport';
import {SportEventContextGroup} from './sport-event-context-group';
import {SportEventContextRound} from './sport-event-context-round';
import {SportEventContextStage} from './sport-event-context-stage';

export interface SportEventContext {
  category: Category;
  competition: Competition;
  groups?: SportEventContextGroup[];
  round?: SportEventContextRound;
  season: Season;
  sport: Sport;
  stage?: SportEventContextStage;
}
