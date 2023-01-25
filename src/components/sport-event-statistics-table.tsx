import {CompetitorQualifierEnum} from '@/types/vendors/sport-radar/competitor-qualifier-enum';
import {SportEventStatistics} from '@/types/vendors/sport-radar/sport-event-statistics';

const properties = [
  {key: 'ball_possession', label: 'Possession %'},
  {key: 'yellow_cards', label: 'Yellow Cards'},
  {key: 'red_cards', label: 'Red Cards'},
  {key: 'cards_given', label: 'Cards given'},
  {key: 'corner_kicks', label: 'Corner Kicks'},
  {key: 'fouls', label: 'Fouls'},
  {key: 'injuries', label: 'Injuries'},
  {key: 'shots_total', label: 'Total shots'},
];

interface Props {
  statistics: SportEventStatistics;
}

export const SportEventStatisticsTable: React.FC<Props> = ({statistics: {totals}}) => {
  const homeCompetitor = totals?.competitors.find(({qualifier}) => qualifier === CompetitorQualifierEnum.HOME);
  const awayCompetitor = totals?.competitors.find(({qualifier}) => qualifier === CompetitorQualifierEnum.AWAY);

  return (
    <div className="custom-table">
      <table className="table-fixed [&_td]:text-center [&_th]:text-center">
        <thead>
          <tr>
            <th>{homeCompetitor?.name}</th>
            <td>vs</td>
            <th>{awayCompetitor?.name}</th>
          </tr>
        </thead>
        <tbody>
          {properties.map(({key, label}) => {
            const homeValue = (homeCompetitor?.statistics || {})[key as keyof object];
            const awayValue = (awayCompetitor?.statistics || {})[key as keyof object];

            return (
              <tr key={key}>
                <td>{homeValue || 0}</td>
                <th>{label}</th>
                <td>{awayValue || 0}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
