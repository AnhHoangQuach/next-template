import { GetServerSideProps } from 'next';
import { NextSeo } from 'next-seo';
import { AssetsView } from 'views/Assets';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { address } = params!;
  console.log(address);

  return {
    props: {},
  };
};

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
          siteName: 'Muragi Finance | Assets',
          url: 'https://auragi.finance/assets',
          images: [{ url: '/Muragi.svg' }],
          type: 'website',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <AssetsView />
    </>
  );
};

export default Page;
