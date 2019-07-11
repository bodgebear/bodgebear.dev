import React from 'react';
import Game from 'components/elements/Game';
import { Heading1 } from 'styles/typography';
import PropTypes from 'prop-types';
import { GamesContainer, StyledSection } from './styles';

const OurGames = ({ games }) => (
  <StyledSection>
    <Heading1>our games</Heading1>
    <GamesContainer>
      {console.log(games)}
      {games.map(game => (
        <Game
          picture={game.mainImage}
          name={game.title}
          subText={game.description}
          playLink={game.playNowUrl}
          idName={game.id}
          key={game.id}
        />
      ))}
    </GamesContainer>
  </StyledSection>
);

OurGames.propTypes = {
  games: PropTypes.arrayOf(PropTypes.shape({
    createAt: PropTypes.number,
    description: PropTypes.string,
    id: PropTypes.string,
    mainImage: PropTypes.string,
    playNowUrl: PropTypes.string,
    srcUrl: PropTypes.string,
    title: PropTypes.string,
  })),
};

OurGames.defaultProps = {
  games: '',
};
export default OurGames;
