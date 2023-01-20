import clsx from 'clsx';

type SelectProps = JSX.IntrinsicElements['select'];

interface Props extends SelectProps {
  defaultValue: string | number;
  options: {
    label: string;
    value: string | number;
  }[];
}

export const FormSelect: React.FC<Props> = ({className, defaultValue, options, ...props}) => (
  <select
    className={clsx(
      className,
      'appearance-none rounded-lg border border-gray-300 bg-gray-100 py-2.5 pl-2.5 pr-8 text-gray-900 outline-0 focus:border-blue-500 focus:ring focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white',
      `bg-[url('/chevron-down-gray.svg')] bg-[length:0.75rem] bg-[right_0.625rem_center] bg-no-repeat dark:bg-[url('/chevron-down-white.svg')]`
    )}
    defaultValue={defaultValue}
    {...props}
  >
    {options.map(({label, value}) => (
      <option key={value} value={value}>
        {label}
      </option>
    ))}
  </select>
);
