import { CacheProvider, EmotionCache } from '@emotion/react';
import { NextHead } from 'components/next';
import { AppProvider } from 'containers';
import { StaticLayout } from 'layouts';
import { AppProps } from 'next/app';
import { createEmotionCache } from 'utils/createEmotionCache';
import 'App.scss';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export type MyAppProps = AppProps & {
  emotionCache?: EmotionCache;
};

const MyApp = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps, ...others } = props;
  return (
    <CacheProvider value={emotionCache}>
      <NextHead>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </NextHead>
      <AppProvider>
        <StaticLayout>
          <Component {...others} {...pageProps} />
        </StaticLayout>
      </AppProvider>
    </CacheProvider>
  );
};

export default MyApp;
