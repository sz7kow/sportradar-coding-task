import {SeasonSchedule} from '@/types/vendors/sport-radar/season-schedule';

import {SeasonSchedulesResultsRow} from './season-schedules-results-row';

interface Props {
  schedules: SeasonSchedule[];
}

export const SeasonSchedulesResultsTable: React.FC<Props> = ({schedules}) => (
  <div className="custom-table">
    <table>
      <thead>
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
          <td />
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
