import Document, { NextScript, Head, Html, Main } from 'next/document'
import React from 'react'
import { ServerStyleSheet } from 'styled-components'

export default class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1"/>

          {/* Google fonts: prefetch/preconnect */}
          <link rel="dns-prefetch" href="https://fonts.gstatic.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
          <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
        </Head>

        <body>
          <Main />

          {/* Google fonts: preload and stylesheet */}
          <link rel="preload" href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Roboto&family=Roboto+Slab:wght@600&display=swap" as="style" crossOrigin=""/>
          <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Roboto&family=Roboto+Slab:wght@600&display=swap" rel="stylesheet"/>

          <NextScript />
        </body>
      </Html>
    );
  }
}
