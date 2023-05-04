import { NextSeo } from 'next-seo';
import { Market } from 'views/Market';

const Page = () => {
  const { title, description } = {
    title: `Muragi - Vest to earn high yield`,
    description: `Create and manage your locked tokens for longer to earn higher rewards with Muragi.`,
  };
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          siteName: 'Muragi Finance | Market',
          url: 'https://auragi.finance/market',
          images: [{ url: '/Muragi.svg' }],
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
