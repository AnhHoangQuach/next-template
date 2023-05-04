import { NextSeo } from 'next-seo';
import { Swap } from 'views/Swap';

const Page = () => {
  const { title, description } = {
    title: `Muragi - Swap tokens at the best rates`,
    description: `Take advantage of minimal slippage, low swapping fees, and deep liquidity with Muragi.`,
  };
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          siteName: 'Muragi Finance | Swap',
          url: 'https://auragi.finance/swap',
          images: [{ url: '/Muragi.svg' }],
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
