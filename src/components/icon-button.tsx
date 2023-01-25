import clsx from 'clsx';
import {MouseEventHandler} from 'react';

interface Props {
  className?: string;
  children?: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const IconButton: React.FC<Props> = ({className, children, onClick}) => (
  <button
    className={clsx(
      className,
      'custom-ring flex h-10 w-10 items-center justify-center text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white'
    )}
    onClick={onClick}
    type="button"
  >
    {children}
  </button>
);
