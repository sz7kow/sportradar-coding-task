import {CompetitorQualifierEnum} from '@/types/vendors/sport-radar/competitor-qualifier-enum';
import {SeasonSchedule} from '@/types/vendors/sport-radar/season-schedule';

interface Props {
  schedule: SeasonSchedule;
}

export const SeasonSchedulesResultsRow: React.FC<Props> = ({
  schedule: {
    sport_event: {competitors},
    sport_event_status,
  },
}) => {
  const homeCompetitor = competitors?.find(({qualifier}) => qualifier === CompetitorQualifierEnum.HOME);
  const awayCompetitor = competitors?.find(({qualifier}) => qualifier === CompetitorQualifierEnum.AWAY);

  return (
    <tr className="border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 odd:dark:bg-gray-800 even:dark:bg-gray-900">
      <th className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white" scope="row">
        {`${homeCompetitor?.name} - ${awayCompetitor?.name}`}
      </th>
      <td className="px-6 py-4 text-center">
        {`${sport_event_status.home_score || 0} - ${sport_event_status.away_score || 0}`}
      </td>
    </tr>
  );
};
