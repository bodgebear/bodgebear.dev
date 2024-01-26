import { cache } from "react";
import { glob } from "glob";
import { HeroHeader } from "components/HeroHeader/HeroHeader";
import { Layout } from "components/Layout/Layout";
import { H1, H2 } from "components/Typography/Typography";
import { Grid } from "components/Grid/Grid";
import { Game } from "components/Game/Game";
import { SpaceEvenly } from "components/SpaceEvenly/SpaceEvenly";
import { Person } from "components/Person/Person";
import { ContactMeans } from "components/ContactMeans/ContactMeans";
import { Copyright } from "components/Copyright/Copyright";

import { team } from "constants/team";

import ghIconUrl from "assets/gh.png";
import emailIconUrl from "assets/email.svg";

export default async function HomePage() {
  const pagesData = await getItems();
  const projects = pagesData.map((page) => ({
    id: page.id,
    name: page.name,
    description: page.description,
    image: page.image,
    playNowUrl: page.playNowUrl || null,
  }));

  return (
    <>
      <HeroHeader showBear />
      <Layout>
        <H1 $uppercase $center>
          Our games
        </H1>
        <Grid $gap="3rem" $colsTemplate="repeat(auto-fit, minmax(18rem, 1fr))">
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
        <H1 $uppercase $center>
          Our team
        </H1>
        <SpaceEvenly>
          {team.core.map((teamMember) => (
            <Person key={teamMember.name} {...teamMember} />
          ))}
        </SpaceEvenly>
        <H2 $uppercase $center $muted $noMargin="top">
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
        <H1 $uppercase $center>
          Contact us
        </H1>
        <Grid $colsTemplate="repeat(auto-fill, minmax(22rem, 1fr))">
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
        </Grid>
        <Copyright />
      </Layout>
    </>
  );
}

const getItems = cache(async () => {
  const pagePaths = await glob(["app/projects/*/*/page.mdx"]);

  const pageMetadatas = pagePaths
    .sort((a, b) => b.localeCompare(a))
    .map((pagePath): Promise<GamePageMetadata> => {
      const path = pagePath.split("/");
      const order = path.at(-3);
      const dir = path.at(-2);

      return import(`app/projects/${order}/${dir}/page.mdx`).then(
        (x) => x.pageMetadata,
      );
    });

  return Promise.all(pageMetadatas);
});
