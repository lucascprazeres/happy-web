
import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="theme-color" content="#fff666" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="shortcut icon" href="favicon.png" type="image/png" />
          <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800&family=Poppins:wght@400;600;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet"/> 
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}