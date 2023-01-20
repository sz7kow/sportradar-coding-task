import clsx from 'clsx';

type Heading1_Props = JSX.IntrinsicElements['h1'];

export const PageTitle: React.FC<Heading1_Props> = ({className, children, ...props}) => (
  <h1
    {...props}
    className={clsx(
      className,
      'mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white sm:mb-5 md:mb-6 md:text-5xl'
    )}
  >
    {children}
  </h1>
);
