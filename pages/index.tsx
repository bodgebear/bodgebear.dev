import { GetStaticProps } from 'next';
import { Project } from 'types/Project';
import { projects as defaultProjects } from 'constants/projects';
import Home from 'views/HomePage';

interface HomeProps {
  projects: Project[];
}

const HomePage: React.FC<HomeProps> = ({ projects }) => (
  <Home projects={projects} />
);

export const getStaticProps: GetStaticProps<HomeProps> = async () => ({
  props: {
    projects: defaultProjects,
  },
});

export default HomePage;
