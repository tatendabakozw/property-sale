import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head prefix="og:https://ogp.me/ns#">
        <link rel="icon" type="image/png" href="/images/icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800&family=Open+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        <link rel="shortcut icon" type="image/png" href="/images/icon.png" />
        <link rel="apple-touch-icon" href="/images/icon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
