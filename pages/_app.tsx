import { CacheProvider, EmotionCache } from '@emotion/react';
import { NextHead } from 'components/next';
import { AppTheme } from 'containers';
import { AppProps } from 'next/app';
import { createEmotionCache } from 'utils/createEmotionCache';
import 'styles/App.scss';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export type MyAppProps = AppProps & {
  emotionCache?: EmotionCache;
};

const MyApp = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <NextHead>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </NextHead>
      <AppTheme>
        <Component {...pageProps} />
      </AppTheme>
    </CacheProvider>
  );
};

export default MyApp;
