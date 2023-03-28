import { CacheProvider, EmotionCache } from '@emotion/react';
import { AppTheme } from 'containers';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { wrapper } from 'reducers/store';
import 'styles/App.scss';
import { createEmotionCache } from 'utils/createEmotionCache';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export type MyAppProps = AppProps & {
  emotionCache?: EmotionCache;
};

const MyApp = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps, ...rest } = props;
  const { store } = wrapper.useWrappedStore(rest);
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <AppTheme>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </AppTheme>
    </CacheProvider>
  );
};

export default MyApp;
