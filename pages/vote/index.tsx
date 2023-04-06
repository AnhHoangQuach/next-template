import { NextSeo } from 'next-seo';
import { Vote } from 'views/Vote';

const Page = () => {
  const { title, description } = {
    title: `Auragi - Vote for the best APY`,
    description: `Earn a share of your pool's transaction fees, bribes, and emission rewards for helping govern Auragi.`,
  };
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          siteName: 'Auragi Finance | Vote',
          url: 'https://auragi.finance/vote',
          images: [{ url: 'https://auragi.finance/thumbnail.png' }],
          type: 'website',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <Vote />
    </>
  );
};

export default Page;
