import {AppProps} from 'next/app';

const Application: React.FC<AppProps> = ({Component, pageProps}) => <Component {...pageProps} />;

export default Application;
