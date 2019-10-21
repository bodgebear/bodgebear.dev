import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import favicon from '../static/favicon.png';
import ogImage from '../static/og:image.png';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="en-GB">
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap" rel="stylesheet" />
          <link rel="shortcut icon" type="image/png" href={favicon} />
          <meta property="og:title" content="Bodging Bear" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://bodgingbear.dev/" />
          <meta property="og:image" content={`https://bodgingbear.dev${ogImage}`} />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
