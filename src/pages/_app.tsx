import * as React from 'react';
import { Provider, webLightTheme } from '@pongo-ui/react-components';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import { SSRProvider } from '@fluentui/react-utilities';
import { RendererProvider, createDOMRenderer } from '@griffel/react';
import '../styles/globals.css';

export default function App(props: AppProps & { renderer: any }) {
  const { Component, pageProps, renderer } = props;

  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <Head>
        <title>Pongo</title>
        <meta name="title" content="Pongo" />
        <meta name="description" content="The easiest way to create post-purchase surveys and increase your sales." />
        <link rel="icon" type="image/svg+xml" href="/image/favicon.svg" />
      </Head>
      <Script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
      <Script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <RendererProvider renderer={renderer || createDOMRenderer()}>
        <SSRProvider>
          {isMounted && (
            <Provider theme={webLightTheme}>
              <Component {...pageProps} />
            </Provider>
          )}
        </SSRProvider>
      </RendererProvider>
    </>
  );
}
