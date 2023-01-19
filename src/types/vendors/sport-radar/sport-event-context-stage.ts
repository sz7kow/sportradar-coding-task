import {PhaseEnum} from './phase-enum';
import {StageTypeEnum} from './stage-type-enum';

export interface SportEventContextStage {
  end_date?: string;
  order: number;
  phase: PhaseEnum;
  start_date?: string;
  type: StageTypeEnum;
  year?: string;
}
