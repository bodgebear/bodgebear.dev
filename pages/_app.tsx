import Head from 'next/head';
import { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import { GlobalStyles } from 'components/GlobalStyles/GlobalStyles';
import { init } from '@socialgouv/matomo-next';
import { MATOMO_URL, MATOMO_SITE_ID } from 'utils/env';

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    init({
      url: MATOMO_URL,
      siteId: MATOMO_SITE_ID,
    });
  }, []);

  return (
    <>
      <Head>
        <title>Bodging Bear</title>
      </Head>
      <GlobalStyles />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </>
  );
};

export default App;
