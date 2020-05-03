import Link from 'next/link';
import { Project } from '../../types/Project';

interface HomeProps {
  projects: Project[];
}

const Home: React.FC<HomeProps> = ({ projects }) => (
  <div className="container">
    <ul>
      {projects.map(({ id, name }) => (
        <li key={id}>
          <Link href="/projects/[id]" as={`/projects/${id}`}>
            <a>
              {name}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Home;
