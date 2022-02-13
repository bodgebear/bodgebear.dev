import { GetStaticProps } from 'next';
import { HomePageProject } from 'types/HomePageProject';
import { pages as pagesData } from '_content/pages';
import { Home } from 'views/HomePage/HomePage';

interface HomeProps {
  projects: HomePageProject[];
}

const HomePage = ({ projects }: HomeProps) => <Home projects={projects} />;

export const getStaticProps: GetStaticProps<HomeProps> = async () => ({
  props: {
    projects: pagesData.map((page) => ({
      id: page.id,
      name: page.name,
      description: page.description,
      image: page.image,
      playNowUrl: page.playNowUrl || null,
    })),
  },
});

export default HomePage;
