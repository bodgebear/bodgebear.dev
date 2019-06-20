import React from 'react';
import konduktor from 'static/konduktor.png';
import { Heading1 } from '../../styles/typography';
import { StyledSection } from './styles';
import Game from '../elements/Game/Game';

const OurGames = () => (
  <StyledSection>
    <Heading1>our games</Heading1>
    <Game
      picture={konduktor}
      name="Nadgorliwy Konduktor"
      subText="blabla"
    />
  </StyledSection>
);

export default OurGames;
