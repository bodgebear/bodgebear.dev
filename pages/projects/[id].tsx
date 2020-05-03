import { GetStaticProps, GetStaticPaths } from 'next';
import { Project as ProjectType } from 'types/Project';
import { projects as defaultProjects } from 'constants/projects';
import Project from 'views/ProjectPage';

interface ProjectProps {
  project: ProjectType;
}

const ProjectPage: React.FC<ProjectProps> = ({ project }) => (
  <Project project={project} />
);

export const getStaticProps: GetStaticProps<ProjectProps> = async ({ params }) => {
  if (!params) {
    throw new Error('No params!');
  }

  const { id } = params;

  if (!id) {
    throw new Error('No id!');
  }

  const project = defaultProjects.find((p) => p.id === id);

  if (!project) {
    throw new Error('Project not found!');
  }

  return {
    props: {
      project,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: defaultProjects.map(({ id }) => ({ params: { id } })),
  fallback: false,
});

export default ProjectPage;
