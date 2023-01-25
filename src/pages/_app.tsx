import {AppProps} from 'next/app';
import {Fragment} from 'react';
import Head from 'next/head';

import {ColorSchemeProvider} from '@/providers/color-scheme-provider';

import '@/styles/tailwind.css';

const Application: React.FC<AppProps> = ({Component, pageProps}) => (
  <Fragment>
    <Head>
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    </Head>
    <ColorSchemeProvider>
      <Component {...pageProps} />
    </ColorSchemeProvider>
  </Fragment>
);

export default Application;
