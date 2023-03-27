import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

const AboutPage = () => {
  const router = useRouter();
  const { user, reward = "100 AGI" } = router.query;

  return (
    <Layout
      title="About | Next.js + TypeScript Example"
      description={`Hello AboutPage` + (user ? ` | ${user}: ${reward}` : ``)}
    >
      <h1>About</h1>
      <p>This is the about page</p>
      <p>
        <Link href="/">Go home</Link>
      </p>
    </Layout>
  );
};

export default AboutPage;

