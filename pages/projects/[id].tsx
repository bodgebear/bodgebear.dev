import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';

import { Project as ProjectType } from 'types/ProjectPageProject';
import { Project } from 'views/ProjectPage/ProjectPage';
import { getRepo } from 'utils/getRepo';

import { pages as pagesData } from '_content/pages';

interface ProjectProps {
  project: ProjectType;
}

const ProjectPage = ({ project }: ProjectProps) => (
  <>
    <Head>
      <title>Bodging Bear | {project.name}</title>
    </Head>
    <Project project={project} />
  </>
);

export const getStaticProps: GetStaticProps<ProjectProps> = async ({
  params,
}) => {
  if (!params) {
    throw new Error('No params!');
  }

  const { id } = params;

  if (!id) {
    throw new Error('No id!');
  }

  const project = pagesData.find((p) => p.id === id);

  if (!project) {
    throw new Error('Project not found!');
  }

  const repo = await getRepo(project.id);

  return {
    props: {
      project: {
        id: project.id,
        description: project.description,
        name: project.name,
        readme: repo.readme,
        image: project.image,
        playNowUrl: null,
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: pagesData.map(({ id }) => ({ params: { id } })),
  fallback: false,
});

export default ProjectPage;
