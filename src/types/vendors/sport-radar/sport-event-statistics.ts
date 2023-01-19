import {SportEventStatisticsPeriod} from './sport-event-statistics-period';
import {SportEventStatisticsTotals} from './sport-event-statistics-totals';

export interface SportEventStatistics {
  periods?: SportEventStatisticsPeriod[];
  totals?: SportEventStatisticsTotals;
}
