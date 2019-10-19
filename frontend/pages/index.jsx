import React from 'react';
import fetch from 'isomorphic-unfetch';

import GlobalStyles from '../styles/global';

import Grid from '../components/Grid';
import Layout from '../components/Layout';
import HeroHeader from '../components/HeroHeader';
import SpaceEvenly from '../components/SpaceEvenly';
import Person from '../components/Person';
import Game from '../components/Game';
import { H1, H2 } from '../components/Typography';
import Copyright from '../components/Copyright';
import ContactMeans from '../components/ContactMeans';

import team from '../constants/team';

import gh from '../static/gh.png';
import email from '../static/email.svg';

const App = ({ projects, team }) => (
  <>
    <GlobalStyles />
    <HeroHeader />
    <Layout>
      <H1 uppercase center>Our games</H1>
      <Grid gap="3rem" colsTemplate="repeat(auto-fit, minmax(18rem, 1fr))">
        {projects.map(project => (
          <Game
            key={project.id}
            name={project.title}
            subtitle={project.description}
            image={project.mainImage}
            playNowUrl={project.playNowUrl}
          />
        ))}
      </Grid>
      <H1 uppercase center>Our team</H1>
      <SpaceEvenly>
        {team.core.map(teamMember => (
          <Person
            key={teamMember.name}
            name={teamMember.name}
            position={teamMember.position}
            image={teamMember.image}
          />
        ))}
      </SpaceEvenly>
      <H2 uppercase center muted noMargin="top">Friends</H2>
      <SpaceEvenly>
        {team.friends.map(teamMember => (
          <Person
            key={teamMember.name}
            name={teamMember.name}
            position={teamMember.position}
            image={teamMember.image}
          />
        ))}
      </SpaceEvenly>
      <H1 uppercase center>Contact us</H1>
      <SpaceEvenly>
        <ContactMeans
          text="team@bodgingbear.dev"
          image={email}
          link="mailto:team@bodgingbear.dev"
        />
        <ContactMeans
          text="/bodgingbear"
          image={gh}
          link="https://github.com/bodgingbear"
        />
      </SpaceEvenly>
      <Copyright />
    </Layout>
  </>
);

App.getInitialProps = async () => {
  const projectsResponse = await (fetch(`${process.env.API_HOST}/api/projects`).then(res => res.json()));
  const { projects } = projectsResponse;

  const projectsCopy = projects.map(project => ({ ...project }));
  projectsCopy
    .sort((projectB, projectA) => new Date(projectA.createdAt) - new Date(projectB.createdAt));

  return {
    projects: projectsCopy,
    team,
  };
};

export default App;
