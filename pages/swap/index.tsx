import { NextSeo } from 'next-seo';
import { Swap } from 'views/Swap';

const Page = () => {
  const { title, description } = {
    title: `Auragi - Swap tokens at the best rates`,
    description: `Take advantage of minimal slippage, low swapping fees, and deep liquidity with Auragi.`,
  };
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          siteName: 'Auragi Finance | Swap',
          url: 'https://auragi.finance/swap',
          images: [{ url: 'https://auragi.finance/thumbnail.png' }],
          type: 'website',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <Swap />
    </>
  );
};

export default Page;
