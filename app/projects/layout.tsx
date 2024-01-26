import { HeroHeader } from "components/HeroHeader/HeroHeader";
import { Layout } from "components/Layout/Layout";
import { Copyright } from "components/Copyright/Copyright";

export default async function ProjectPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeroHeader />
      <Layout>
        {children}
        <Copyright />
      </Layout>
    </>
  );
}
