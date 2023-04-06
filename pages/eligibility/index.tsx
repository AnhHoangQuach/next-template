import { NextSeo } from 'next-seo';
import { Airdrop } from 'views/Airdrop';

const Page = () => {
  const { title, description } = {
    title: `Auragi - Airdrop to check eligibility and claim $AGI tokens`,
    description: `240M (60%) $AGI tokens will be distributed to people who are likeliest to contribute to Auragi and Arbitrum's long-term success.`,
  };
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          siteName: 'Auragi Finance | Airdrop',
          url: 'https://auragi.finance/airdrop',
          images: [{ url: 'https://auragi.finance/thumbnail.png' }],
          type: 'website',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <Airdrop />
    </>
  );
};

export default Page;
