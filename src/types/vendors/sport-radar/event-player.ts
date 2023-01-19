import {EventPlayerTypeEnum} from './event-player-type-enum';

export interface EventPlayer {
  id: string;
  name: string;
  type?: EventPlayerTypeEnum;
}
