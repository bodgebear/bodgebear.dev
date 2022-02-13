import { HomePageProject } from 'types/HomePageProject';
import { HeroHeader } from 'components/HeroHeader/HeroHeader';
import { Layout } from 'components/Layout/Layout';
import { H1, H2 } from 'components/Typography/Typography';
import { Grid } from 'components/Grid/Grid';
import { Game } from 'components/Game/Game';
import { SpaceEvenly } from 'components/SpaceEvenly/SpaceEvenly';
import { Person } from 'components/Person/Person';
import { ContactMeans } from 'components/ContactMeans/ContactMeans';
import { Copyright } from 'components/Copyright/Copyright';

import { team } from '_content/team';

import ghIconUrl from 'assets/gh.png';
import emailIconUrl from 'assets/email.svg';

interface HomeProps {
  projects: HomePageProject[];
}

export const Home = ({ projects }: HomeProps) => (
  <>
    <HeroHeader showBear />
    <Layout>
      <H1 uppercase center>
        Our games
      </H1>
      <Grid gap="3rem" colsTemplate="repeat(auto-fit, minmax(18rem, 1fr))">
        {projects.map((project) => (
          <Game
            key={project.id}
            id={project.id}
            name={project.name}
            description={project.description}
            image={project.image}
            playNowUrl={project.playNowUrl}
          />
        ))}
      </Grid>
      <H1 uppercase center>
        Our team
      </H1>
      <SpaceEvenly>
        {team.core.map((teamMember) => (
          <Person
            key={teamMember.name}
            name={teamMember.name}
            position={teamMember.position}
            image={teamMember.image}
          />
        ))}
      </SpaceEvenly>
      <H2 uppercase center muted noMargin="top">
        Friends
      </H2>
      <SpaceEvenly>
        {team.friends.map((teamMember) => (
          <Person
            key={teamMember.name}
            name={teamMember.name}
            position={teamMember.position}
            image={teamMember.image}
          />
        ))}
      </SpaceEvenly>
      <H1 uppercase center>
        Contact us
      </H1>
      <SpaceEvenly>
        <ContactMeans
          text="team@bodgingbear.dev"
          image={emailIconUrl.src}
          link="mailto:team@bodgingbear.dev"
        />
        <ContactMeans
          text="/bodgingbear"
          image={ghIconUrl.src}
          link="https://github.com/bodgingbear"
        />
      </SpaceEvenly>
      <Copyright />
    </Layout>
  </>
);
