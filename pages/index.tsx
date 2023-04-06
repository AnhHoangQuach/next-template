import { NextSeo } from 'next-seo';
import { Home } from 'views/Home';

const App = () => {
  const { title, description } = {
    title: `Auragi - The Trading and Liquidity Marketplace on Arbitrum`,
    description: `Take advantage of Auragi's minimal slippage, low swapping fees, and deep liquidity.`,
  };
  return (
    <>
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
      <Home />
    </>
  );
};

export default App;
