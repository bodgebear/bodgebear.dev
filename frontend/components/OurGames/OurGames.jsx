import React from 'react';
import Game from 'components/elements/Game';
import konduktor1 from 'static/konduktor.png';
import konduktor2 from 'static/konduktor_ss-1.png';
import konduktor3 from 'static/konduktor_ss-2.png';
import konduktor4 from 'static/konduktor_ss-3.png';
import konduktor5 from 'static/konduktor_ss-4.png';
import konduktor6 from 'static/konduktor_ss.png';
import { Heading1 } from 'styles/typography';
import { GamesContainer, StyledSection } from './styles';

const OurGames = () => (
  <StyledSection>
    <Heading1>our games</Heading1>
    <GamesContainer>
      <Game
        picture={konduktor1}
        name="Nadgorliwy Konduktor"
        subText="Push people into the train"
      />
      <Game
        picture={konduktor2}
        name="Nadgorliwy Konduktor"
        subText="Push people into the train"
      />
      <Game
        picture={konduktor3}
        name="Nadgorliwy Konduktor"
        subText="Push people into the train"
      />
      <Game
        picture={konduktor4}
        name="Nadgorliwy Konduktor"
        subText="Push people into the train"
      />
      <Game
        picture={konduktor5}
        name="Nadgorliwy Konduktor"
        subText="Push people into the train"
      />
      <Game
        picture={konduktor6}
        name="Nadgorliwy Konduktor"
        subText="Push people into the train"
      />
    </GamesContainer>
  </StyledSection>
);

export default OurGames;
