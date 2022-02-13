import ReactMarkdown from 'react-markdown';
import RemarkBreaks from 'remark-breaks';
import RemarkEmoji from 'remark-emoji';

import { Project as ProjectType } from 'types/ProjectPageProject';

import { Text, Paragraph } from 'components/Typography/Typography';
import { HeroHeader } from 'components/HeroHeader/HeroHeader';
import { Layout } from 'components/Layout/Layout';
import { Copyright } from 'components/Copyright/Copyright';
import React from 'react';
import { Image } from 'components/Image/Image';
import { Link } from 'components/Link/Link';
import { List, ListItem } from 'components/List/List';
import { MarkdownHeader } from 'components/MarkdownHeader/MarkdownHeader';

interface ProjectProps {
  project: ProjectType;
}

export const Project = ({ project }: ProjectProps) => (
  <>
    <HeroHeader />
    <Layout>
      {project.readme && (
        <ReactMarkdown
          remarkPlugins={[RemarkBreaks, RemarkEmoji]}
          linkTarget="_blank"
          components={{
            /* eslint-disable react/no-unstable-nested-components, react/jsx-props-no-spreading */
            p: ({ node, ...props }) => <Paragraph muted {...props} />,
            strong: ({ node, ...props }) => <Text {...props} />,
            code: ({ node, ...props }) => <Text {...props} />,
            img: ({ node, ...props }) => <Image {...props} />,
            ul: ({ node, ...props }) => <List {...props} />,
            ol: ({ node, ...props }) => <List {...props} />,
            li: ({ node, ...props }) => <ListItem {...props} />,
            a: Link,
            h1: MarkdownHeader,
            h2: MarkdownHeader,
            h3: MarkdownHeader,
            h4: MarkdownHeader,
            h5: MarkdownHeader,
            h6: MarkdownHeader,
            /* eslint-enable react/no-unstable-nested-components, react/jsx-props-no-spreading */
          }}
        >
          {project.readme}
        </ReactMarkdown>
      )}
      <Copyright />
    </Layout>
  </>
);
