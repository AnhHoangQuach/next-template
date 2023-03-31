import { NextSeo } from 'next-seo';
import { Swap } from 'views/Swap';

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
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <Swap />
    </>
  );
};

export default App;
