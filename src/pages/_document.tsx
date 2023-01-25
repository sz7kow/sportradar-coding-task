import {Html, Head, Main, NextScript} from 'next/document';
import Script from 'next/script';

import {injectColorSchemeScript} from '@/scripts/inject-color-scheme';

const Document: React.FC = () => (
  <Html lang="en">
    <Head />
    <body className="dark:bg-gray-900">
      <Main />
      <NextScript />
      <Script
        dangerouslySetInnerHTML={{__html: injectColorSchemeScript}}
        id="load-theme-preference"
        strategy="afterInteractive"
      />
    </body>
  </Html>
);

export default Document;
