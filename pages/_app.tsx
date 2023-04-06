import { CacheProvider, EmotionCache } from '@emotion/react';
import 'App.scss';
import { AppProvider } from 'containers';
import { StaticLayout } from 'layouts';
import { NextSeo } from 'next-seo';
import { AppProps } from 'next/app';
import { publicRoute } from 'routes';
import { createEmotionCache } from 'utils/createEmotionCache';
import { Home } from 'views/Home';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const { title, description } = {
  title: `Auragi - The Trading and Liquidity Marketplace on Arbitrum`,
  description: `Take advantage of Auragi's minimal slippage, low swapping fees, and deep liquidity.`,
};

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
        <NextSeo
          title={title}
          description={description}
          openGraph={{
            title,
            description,
            siteName: 'Auragi Finance',
            url: 'https://auragi.finance',
            images: [{ url: 'https://auragi.finance/thumbnail.png' }],
            type: 'website',
          }}
          twitter={{
            cardType: 'summary_large_image',
          }}
        />
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
