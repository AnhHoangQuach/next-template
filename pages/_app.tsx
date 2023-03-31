import { CacheProvider, EmotionCache } from '@emotion/react';
import { createEmotionCache } from 'utils/createEmotionCache';
import { NextHead } from 'components/next';
import { AppProps } from 'next/app';
import 'App.scss';
import { StaticLayout } from 'layouts';
import { AppProvider } from 'containers';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export type MyAppProps = AppProps & {
  emotionCache?: EmotionCache;
};

const MyApp = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, ...pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <NextHead>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </NextHead>
      <AppProvider>
        <StaticLayout>
          <Component {...pageProps} />
        </StaticLayout>
      </AppProvider>
    </CacheProvider>
  );
};

export default MyApp;
