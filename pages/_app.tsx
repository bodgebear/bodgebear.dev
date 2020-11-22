import Head from 'next/head';
import { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import GlobalStyles from 'components/GlobalStyles';
import { init } from '@socialgouv/matomo-next';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    init({
      url: process.env.NEXT_APP_MATOMO_URL,
      siteId: process.env.NEXT_APP_MATOMO_SITE_ID,
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
