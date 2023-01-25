import clsx from 'clsx';
import Link from 'next/link';

const routes = [
  {href: '/results', label: 'Results'},
  {href: '/probable-results', label: 'Predictions'},
];

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const PageNavigation: React.FC<Props> = ({isOpen, onClose}) => {
  const navigationClassName = clsx(
    'fixed z-10 top-16 inset-x-0 bottom-0 flex justify-start md:static border-t md:border-t-0 border-gray-200 md: dark:border-gray-600',
    {
      '-translate-x-full md:translate-x-0': !isOpen,
    }
  );

  const bannerClassName = clsx('absolute inset-0 z-[-1] bg-black md:hidden', {
    'opacity-0': !isOpen,
    'opacity-50': isOpen,
  });

  return (
    <div className={navigationClassName}>
      <div className={bannerClassName} onClick={onClose} role="presentation" />
      <nav className="flex w-60 flex-col bg-white py-4 px-1 dark:bg-gray-800 md:w-auto md:p-0">
        <p className="m-3 text-sm font-semibold uppercase text-gray-900 dark:text-white md:hidden">Pages</p>
        <ul className="flex flex-col md:flex-row md:gap-x-1">
          {routes.map(({href, label}) => (
            <li key={href}>
              <Link
                className="custom-ring block py-2 pl-3 pr-4 text-gray-500 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white md:hover:bg-gray-100"
                href={href}
              >
                <span className="md:text-sm md:font-medium">{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
