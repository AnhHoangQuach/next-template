import { CacheProvider, EmotionCache } from '@emotion/react';
import 'App.scss';
import { AppProvider } from 'containers';
import { StaticLayout } from 'layouts';
import { AppProps } from 'next/app';
import { default as NextNProgress } from 'nextjs-progressbar';
import { Provider } from 'react-redux';
import { persistor, store } from 'reducers/store';
import { PersistGate } from 'redux-persist/integration/react';
import { createEmotionCache } from 'utils/createEmotionCache';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export type MyAppProps = AppProps & {
  emotionCache?: EmotionCache;
};

const MyApp = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps, ...others } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Provider store={store}>
        {/* PersistGate >< Server Side Rendering */}
        <PersistGate loading={null} persistor={persistor}>
          <AppProvider>
            <StaticLayout>
              <NextNProgress color='var(--color-secondary-main)' />
              <Component {...others} {...pageProps} />
            </StaticLayout>
          </AppProvider>
        </PersistGate>
      </Provider>
    </CacheProvider>
  );
};

export default MyApp;
