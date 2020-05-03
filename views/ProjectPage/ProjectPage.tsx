import ReactMarkdown from 'react-markdown';
import RemarkBreaks from 'remark-breaks';
import RemarkEmoji from 'remark-emoji';

import { Project as ProjectType } from 'types/Project';

import { Text, Paragraph } from 'components/Typography';
import HeroHeader from 'components/HeroHeader';
import Layout from 'components/Layout';
import Copyright from 'components/Copyright';
import Image from 'components/Image';
import Link from 'components/Link';
import { List, ListItem } from 'components/List';
import MarkdownHeader from 'components/MarkdownHeader';

interface ProjectProps {
  project: ProjectType;
}

// eslint-disable-next-line react/jsx-props-no-spreading
const MutedParagraph: React.FC = (props) => <Paragraph muted {...props} />;

const Project: React.FC<ProjectProps> = ({ project }) => (
  <>
    <HeroHeader />
    <Layout>
      <Image src={project.image} />
      <ReactMarkdown
        source={project.readme}
        plugins={[
          RemarkBreaks,
          RemarkEmoji,
        ]}
        linkTarget="_blank"
        renderers={{
          paragraph: MutedParagraph,
          strong: Text,
          image: Image,
          list: List,
          listItem: ListItem,
          link: Link,
          heading: MarkdownHeader,
        }}
      />
    </Layout>
    <Copyright />
  </>
);

export default Project;
