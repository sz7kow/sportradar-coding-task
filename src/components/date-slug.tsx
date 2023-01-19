type SpanProps = JSX.IntrinsicElements['span'];

interface Props extends SpanProps {
  date: string | number | Date;
}

export const DateSlug: React.FC<Props> = ({date, ...props}) => {
  const currentDate = new Date(date);

  if (Number.isNaN(currentDate.getTime())) return <span {...props}>Invalid Date</span>;

  const day = currentDate.getDate();
  const month = currentDate.toLocaleString('en-GB', {month: 'long'}).slice(0, 3);
  const year = currentDate.getFullYear();

  return <span {...props}>{`${day} ${month} ${year}`}</span>;
};
