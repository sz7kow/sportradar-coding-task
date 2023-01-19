import {AppProps} from 'next/app';

const Application: React.FC<AppProps> = ({Component, pageProps}) => {
  return <Component {...pageProps} />;
};

export default Application;
