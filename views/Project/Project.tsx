import Link from 'next/link';

import { Project as ProjectType } from '../../types/Project';

interface ProjectProps {
  project?: ProjectType;
}

const Project: React.FC<ProjectProps> = ({ project: { id } = {} }) => (
  <div className="container">
    <div>
      Project:
      {id}
    </div>
    <Link href="/">
      <a>&larr; Back</a>
    </Link>
  </div>
);

export default Project;
