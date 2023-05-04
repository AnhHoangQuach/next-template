import { NextSeo } from 'next-seo';
import { Rewards } from 'views/Rewards';

const Page = () => {
  const { title, description } = {
    title: `Muragi - Rewards with real yield`,
    description: `Claim rewards for locking tokens, including new token emissions, bribes, and a slice of the transaction fees from your pools with Muragi.`,
  };
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          siteName: 'Muragi Finance | Rewards',
          url: 'https://auragi.finance/rewards',
          images: [{ url: '/Muragi.svg' }],
          type: 'website',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <Rewards />
    </>
  );
};

export default Page;
