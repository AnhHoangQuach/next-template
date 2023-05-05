import { NextSeo } from 'next-seo';
import { BorrowAsset } from 'views/Borrow';

const Page = () => {
  const { title, description } = {
    title: `Auragi - Deposit tokens at the best rates`,
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
          siteName: 'Auragi Finance | Deposit',
          url: 'https://auragi.finance/swap',
          images: [{ url: 'https://auragi.finance/thumbnail.png' }],
          type: 'website',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <BorrowAsset />
    </>
  );
};

export default Page;
