import { NextSeo } from 'next-seo';
import { Market } from 'views/Market';

const Page = () => {
  const { title, description } = {
    title: `Auragi - Vest to earn high yield`,
    description: `Create and manage your locked tokens for longer to earn higher rewards with Auragi.`,
  };
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          siteName: 'Auragi Finance | Market',
          url: 'https://auragi.finance/market',
          images: [{ url: 'https://auragi.finance/thumbnail.png' }],
          type: 'website',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <Market />
    </>
  );
};

export default Page;