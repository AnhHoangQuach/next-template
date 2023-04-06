import { CacheProvider, EmotionCache } from '@emotion/react';
import 'App.scss';
import { NextHead } from 'components/next';
import { AppProvider } from 'containers';
import { StaticLayout } from 'layouts';
import { AppProps } from 'next/app';
import { publicRoute } from 'routes';
import { createEmotionCache } from 'utils/createEmotionCache';
import { Home } from 'views/Home';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export type MyAppProps = AppProps & {
  emotionCache?: EmotionCache;
};

const MyApp = (props: MyAppProps) => {
  const { router } = props;
  const isHome = router.pathname === publicRoute.home.path;

  const { Component, emotionCache = clientSideEmotionCache, pageProps, ...others } = props;
  return (
    <CacheProvider value={emotionCache}>
      {isHome && (
        <NextHead>
          <title>Auragi - The Trading and Liquidity Marketplace on Arbitrum</title>
          <meta name='viewport' content='initial-scale=1, width=device-width' />
          <meta name='robots' content='index,follow' />
          <meta
            name='description'
            content="Take advantage of Auragi's minimal slippage, low swapping fees, and deep liquidity."
          />
          <meta name='twitter:card' content='summary_large_image' />
          <meta property='og:title' content='Auragi - The Trading and Liquidity Marketplace on Arbitrum' />
          <meta
            property='og:description'
            content="Take advantage of Auragi's minimal slippage, low swapping fees, and deep liquidity."
          />
          <meta property='og:url' content='https://auragi.finance' />
          <meta property='og:type' content='website' />
          <meta property='og:image' content='https://auragi.finance/thumbnail.png' />
          <meta property='og:site_name' content='Auragi Finance' />
        </NextHead>
      )}
      <AppProvider>
        {isHome ? (
          <Home />
        ) : (
          <StaticLayout>
            <Component {...others} {...pageProps} />
          </StaticLayout>
        )}
      </AppProvider>
    </CacheProvider>
  );
};

export default MyApp;
