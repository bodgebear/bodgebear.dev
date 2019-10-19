import React from 'react';
import fetch from 'isomorphic-unfetch';
import absoluteUrl from 'next-absolute-url';

import ReactMarkdown from 'react-markdown';
import RemarkBreaks from 'remark-breaks';
import RemarkEmoji from 'remark-emoji';

import GlobalStyles from '../styles/global';
import Layout from '../components/Layout';
import HeroHeader from '../components/HeroHeader';
import ProjectHeroImage from '../components/ProjectHeroImage';
import Copyright from '../components/Copyright';

import { List, ListItem } from '../components/List';
import Link from '../components/Link';
import Image from '../components/Image';
import {
  Text, H1, H2, Paragraph,
} from '../components/Typography';

const ProjectById = ({}) => (
  <>
    <GlobalStyles />
    <HeroHeader />
    <Layout>
      <ProjectHeroImage src="project.mainImage" />
      <ReactMarkdown
        source="# project.readme"
        plugins={[RemarkBreaks, RemarkEmoji]}
        linkTarget="_blank"
        renderers={{
          paragraph: props => <Paragraph muted {...props} />,
          strong: Text,
          image: Image,
          list: List,
          listItem: ListItem,
          link: Link,
          heading: ({ level, ...props }) => {
            switch (level) {
              case 1: {
                return <H1 {...props} />;
              }
              case 2: {
                return <H2 {...props} />;
              }
              default: {
                return <Text {...props} />;
              }
            }
          },
        }}
      />
    </Layout>
    <Copyright />
  </>
);

export default ProjectById;
