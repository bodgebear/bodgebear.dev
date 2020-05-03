import Document, { Head, Main, NextScript } from 'next/document';
import url from '../public/favicon.png';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html lang="en-GB">
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <img src={url} alt="" />
        </body>
      </html>
    );
  }
}

export default MyDocument;
