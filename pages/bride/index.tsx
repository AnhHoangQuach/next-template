import { NextSeo } from 'next-seo';
import { Bride } from 'views/Bride';

const Page = () => {
  const { title, description } = {
    title: `Auragi - Bride to increase APY for your pools`,
    description: `Offer incentives to attract votes and maximize emissions awarded to your pools with Auragi.`,
  };
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          siteName: 'Auragi Finance | Bride',
          url: 'https://auragi.finance/bride',
          images: [{ url: 'https://auragi.finance/thumbnail.png' }],
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <Bride />
    </>
  );
};

export default Page;
