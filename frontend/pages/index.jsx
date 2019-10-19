import React from 'react';
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

import bl from '../static/people/bl_8bit.png';
import kp from '../static/people/kp_8bit.png';

import rp from '../static/people/rp_8bit.png';
import ab from '../static/people/ab_8bit.png';
import mn from '../static/people/mn_8bit.png';

import konduktor from '../static/games/1_konduktor.png';
import whymit from '../static/games/2_whymit.png';
import laika from '../static/games/3_laika_wracaj.png';
import ftb from '../static/games/6_ftb.png';
import gh from '../static/gh.png';
import email from '../static/email.svg';

const App = () => (
  <>
    <GlobalStyles />
    <HeroHeader />
    <Layout>
      <H1 uppercase center>Our games</H1>
      <Grid rows={3} gap="3rem">
        <Game
          name="Nadgorliwy konduktor"
          subtitle="Push people into the train"
          image={konduktor}
        />
        <Game
          name="WHYMIT"
          subtitle="Two students measure a bridge"
          image={whymit}
        />
        <Game
          name="Laika Wracaj!"
          subtitle="Help Laika find the way home"
          image={laika}
        />
        <Game
          name="Feed The Bob"
          subtitle="Feed this bad boy"
          image={ftb}
        />
      </Grid>
      <H1 uppercase center>Our team</H1>
      <SpaceEvenly>
        <>
          <Person
            name="Bartek Legięć"
            position="Programming & Art"
            image={bl}
          />
          <Person
            name="Kacper Pietrzak"
            position="Programming & Sounds"
            image={kp}
          />
        </>
      </SpaceEvenly>
      <H2 uppercase center muted>Friends</H2>
      <SpaceEvenly>
        <>
          <Person
            name="Rafał Piórek"
            position="Programming"
            image={rp}
          />
          <Person
            name="Arek Borysiuk"
            position="Art & Sounds"
            image={ab}
          />
          <Person
            name="Magda Nowak"
            position="Art"
            image={mn}
          />
        </>
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
    {/* <Button>Play now!</Button> */}
  </>
);

export default App;
