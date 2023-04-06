import { NextSeo } from 'next-seo';
import { Faucet } from 'views/Faucet';

const Page = () => {
  const { title, description } = {
    title: `Auragi - Faucet to claim 1000 $AGI tokens to participate in Testnet`,
    description: `Use faucet to claim 1000 $AGI tokens on Testnet to whitelist for retroactive airdrop at token generation event.`,
  };
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          siteName: 'Auragi Finance | Faucet',
          url: 'https://auragi.finance/faucet',
          images: [{ url: 'https://auragi.finance/thumbnail.png' }],
          type: 'website',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <Faucet />
    </>
  );
};

export default Page;
