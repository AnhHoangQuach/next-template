import { NextSeo } from 'next-seo';
import { Dashboard } from 'views/Dashboard';

const Page = () => {
  const { title, description } = {
    title: `Muragi - Dashboard of earn high yield`,
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
          siteName: 'Muragi Finance | Dashboard',
          url: 'https://auragi.finance/dashboard',
          images: [{ url: '/Muragi.svg' }],
          type: 'website',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <Dashboard />
    </>
  );
};

export default Page;
