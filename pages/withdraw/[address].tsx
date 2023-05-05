import { NextSeo } from 'next-seo';
import { WithdrawAsset } from 'views/Withdraw';

const Page = () => {
  const { title, description } = {
    title: `Muragi - Withdraw tokens at the best rates`,
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
          siteName: 'Muragi Finance | Withdraw',
          url: 'https://auragi.finance/withdraw',
          images: [{ url: '/Muragi.svg' }],
          type: 'website',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <WithdrawAsset />
    </>
  );
};

export default Page;
