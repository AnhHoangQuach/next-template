import { NextSeo } from 'next-seo';
import { Pools } from 'views/Pools';

const Page = () => {
  const { title, description } = {
    title: `Auragi - Pools with high yield`,
    description: `Add liquidity and earn week ly rewards with Auragi.`,
  };
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          siteName: 'Auragi Finance | Pools',
          url: 'https://auragi.finance/pools',
          images: [{ url: 'https://auragi.finance/thumbnail.png' }],
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <Pools />
    </>
  );
};

export default Page;
