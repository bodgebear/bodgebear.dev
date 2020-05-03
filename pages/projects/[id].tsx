import { GetStaticProps, GetStaticPaths } from 'next';
import { Project as ProjectType } from '../../types/Project';
import { projects } from '../../utils/projects';
import Project from '../../views/Project/Project';

interface ProjectProps {
  project?: ProjectType;
}

const ProjectPage: React.FC<ProjectProps> = ({ project }) => (
  <Project project={project} />
);

export const getStaticProps: GetStaticProps<ProjectProps> = async ({
  params: { id: queryId },
}) => {
  const id = queryId as string;

  return {
    props: {
      project: {
        id,
        name: 'asd',
        description: 'asd',
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: projects.map(({ id }) => ({ params: { id } })),
  fallback: false,
});

export default ProjectPage;
