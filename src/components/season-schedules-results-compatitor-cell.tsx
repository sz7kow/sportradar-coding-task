import clsx from 'clsx';

import {Competitor} from '@/types/vendors/sport-radar/competitor';

interface Props {
  className?: string;
  competitor?: Competitor;
  winnerId?: string;
}

export const SeasonSchedulesCompetitorCell: React.FC<Props> = ({className, competitor, winnerId}) => {
  const classNames = clsx(className, 'font-medium text-gray-900 dark:text-white', {
    'bg-green-400/50': competitor?.id === winnerId,
    'bg-orange-400/50': !winnerId,
    'bg-red-400/50': winnerId && competitor?.id !== winnerId,
  });

  return (
    <th className={classNames} scope="row">
      {competitor?.name || 'Invalid name'}
    </th>
  );
};
