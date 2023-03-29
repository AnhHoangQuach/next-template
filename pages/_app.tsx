import { CacheProvider, EmotionCache } from '@emotion/react';
import { NextHead } from 'components/next';
import { AppTheme } from 'containers';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { wrapper } from 'reducers/store';
import { createEmotionCache } from 'utils/createEmotionCache';
import 'styles/App.scss';

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
      <NextHead>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </NextHead>
      <AppTheme>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </AppTheme>
    </CacheProvider>
  );
};

export default MyApp;
