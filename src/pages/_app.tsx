import {AppProps} from 'next/app';
import {Fragment} from 'react';
import Head from 'next/head';

import '@/styles/tailwind.css';

const Application: React.FC<AppProps> = ({Component, pageProps}) => (
  <Fragment>
    <Head>
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    </Head>
    <Component {...pageProps} />
  </Fragment>
);

export default Application;
