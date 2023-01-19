import {SeasonSchedule} from '@/types/vendors/sport-radar/season-schedule';

import {SeasonSchedulesResultsRow} from './season-schedules-results-row';

interface Props {
  schedules: SeasonSchedule[];
}

export const SeasonSchedulesResultsTable: React.FC<Props> = ({schedules}) => (
  <div className="overflow-x-auto rounded-lg shadow-md">
    <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
      <thead className="bg-gray-200 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th className="px-6 py-3" scope="col">
            Teams
          </th>
          <th className="px-6 py-3 text-center" scope="col">
            Score
          </th>
        </tr>
      </thead>
      <tbody>
        {schedules.map((schedule) => (
          <SeasonSchedulesResultsRow key={schedule.sport_event.id} schedule={schedule} />
        ))}
      </tbody>
    </table>
  </div>
);
