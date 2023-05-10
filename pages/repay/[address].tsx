import { NextSeo } from 'next-seo';
import { RepayAsset } from 'views/Replay';

const Page = () => {
  const { title, description } = {
    title: `Muragi - Repay tokens at the best rates`,
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
          siteName: 'Muragi Finance | Repay',
          url: 'https://auragi.finance/repay',
          images: [{ url: '/Muragi.svg' }],
          type: 'website',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <RepayAsset />
    </>
  );
};

export default Page;
