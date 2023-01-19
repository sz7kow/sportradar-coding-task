import {CompetitorQualifierEnum} from '@/types/vendors/sport-radar/competitor-qualifier-enum';
import {PeriodTypeEnum} from '@/types/vendors/sport-radar/period-type-enum';
import {SeasonSchedule} from '@/types/vendors/sport-radar/season-schedule';

import {DateSlug} from './date-slug';
import {SeasonSchedulesCompetitorCell} from './season-schedules-results-compatitor-cell';

interface Props {
  schedule: SeasonSchedule;
}

export const SeasonSchedulesResultsRow: React.FC<Props> = ({
  schedule: {
    sport_event: {competitors, start_time, venue},
    sport_event_status,
  },
}) => {
  const {period_scores, winner_id} = sport_event_status;

  const homeCompetitor = competitors?.find(({qualifier}) => qualifier === CompetitorQualifierEnum.HOME);
  const awayCompetitor = competitors?.find(({qualifier}) => qualifier === CompetitorQualifierEnum.AWAY);
  const halfTimeScore = period_scores?.find(({type}) => type === PeriodTypeEnum.REGULAR_PERIOD);

  return (
    <tr className="border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 odd:dark:bg-gray-800 even:dark:bg-gray-900">
      <td className="whitespace-nowrap text-center">
        <DateSlug date={start_time} />
      </td>
      <SeasonSchedulesCompetitorCell
        className="max-w-[12rem] overflow-hidden text-ellipsis whitespace-nowrap"
        competitor={homeCompetitor}
        winnerId={winner_id}
      />
      <SeasonSchedulesCompetitorCell
        className="max-w-[12rem] overflow-hidden text-ellipsis whitespace-nowrap"
        competitor={awayCompetitor}
        winnerId={winner_id}
      />
      <td className="max-w-[13rem] overflow-hidden text-ellipsis whitespace-nowrap">{venue?.name}</td>
      <td className="whitespace-nowrap text-center">{`${halfTimeScore?.home_score || 0} - ${
        halfTimeScore?.away_score || 0
      }`}</td>
      <td className="whitespace-nowrap text-center">
        {`${sport_event_status?.home_score || 0} - ${sport_event_status?.away_score || 0}`}
      </td>
    </tr>
  );
};
