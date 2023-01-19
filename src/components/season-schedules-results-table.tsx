import {SeasonSchedule} from '@/types/vendors/sport-radar/season-schedule';

import {SeasonSchedulesResultsRow} from './season-schedules-results-row';

interface Props {
  schedules: SeasonSchedule[];
}

export const SeasonSchedulesResultsTable: React.FC<Props> = ({schedules}) => (
  <div className="overflow-x-auto rounded-lg shadow-md">
    <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 [&_td]:py-3 [&_td]:px-6 [&_th]:py-3 [&_th]:px-6">
      <thead className="bg-gray-200 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-200">
        <tr>
          <th className="text-center" scope="col">
            Date
          </th>
          <th scope="col">Home team</th>
          <th scope="col">Away team</th>
          <th scope="col">Stadium</th>
          <th className="text-center" scope="col">
            <span className="whitespace-nowrap">Half Time</span> Score
          </th>
          <th className="text-center" scope="col">
            Final Score
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
