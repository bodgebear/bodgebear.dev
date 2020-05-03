import Head from 'next/head';
import { AppProps } from 'next/app';
import React from 'react';
import GlobalStyles from 'components/GlobalStyles';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Bodging Bear</title>
    </Head>
    <GlobalStyles />
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...pageProps} />
  </>
);

export default App;
