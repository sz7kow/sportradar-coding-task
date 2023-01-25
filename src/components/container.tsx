import clsx from 'clsx';

type DivProps = JSX.IntrinsicElements['div'];

export const Container: React.FC<DivProps> = ({className, ...props}) => (
  <div {...props} className={clsx(className, 'container mx-auto max-w-full px-4 xl:max-w-screen-lg')} />
);
