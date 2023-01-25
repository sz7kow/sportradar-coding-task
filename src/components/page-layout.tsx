import {Fragment} from 'react';

import {PageHeader} from './page-header';

interface Props {
  children?: React.ReactNode;
}

export const PageLayout: React.FC<Props> = ({children}) => (
  <Fragment>
    <PageHeader />
    <div className="pt-16">{children}</div>
  </Fragment>
);
