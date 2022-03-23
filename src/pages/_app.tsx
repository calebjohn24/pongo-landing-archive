import * as React from 'react';
import { Provider, webLightTheme } from '@pongo-ui/react-components';
import type { AppProps } from 'next/app';
import Head from 'next/head';
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
        <meta
          name="description"
          content="Get the best way to improve your company. Through the feedback of your customers."
        />
        <link rel="icon" type="image/svg+xml" href="/src/favicon.svg" />
      </Head>
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
