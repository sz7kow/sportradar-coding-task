import {useRouter} from 'next/router';
import {Fragment, useEffect, useState} from 'react';

import {PageHeader} from './page-header';
import {Spinner} from './spinner';

interface Props {
  children?: React.ReactNode;
}

export const PageLayout: React.FC<Props> = ({children}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    const handleStart = (targetUrl: string) => {
      if (router.asPath.includes('/results') && targetUrl.includes('/results')) return;
      if (targetUrl !== router.asPath) setIsLoading(true);
    };

    const handleComplete = (targetUrl: string) => targetUrl === router.asPath && setIsLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router.asPath, router.events]);

  const spinnerContainer = (
    <div className="pt-8">
      <Spinner />
    </div>
  );

  return (
    <Fragment>
      <PageHeader />
      <div className="pt-16">{isLoading ? spinnerContainer : children}</div>
    </Fragment>
  );
};
