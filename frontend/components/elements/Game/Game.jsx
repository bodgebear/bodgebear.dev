import React from 'react';
import PropTypes from 'prop-types';
import { StrongP, SubText } from 'styles/typography';
import StyledLink from 'components/elements/Button';
import { GameContainer, StyledPicture } from './styles';

const Game = ({
  picture, name, subText, playLink,
}) => (
  <GameContainer>
    <StyledPicture src={picture} alt="" />
    <StrongP>{name}</StrongP>
    <SubText>{subText}</SubText>
    <StyledLink href={playLink}>Play Now</StyledLink>
  </GameContainer>
);

Game.propTypes = {
  picture: PropTypes.string,
  name: PropTypes.string,
  subText: PropTypes.string,
  playLink: PropTypes.string,
};

Game.defaultProps = {
  picture: '',
  name: '',
  subText: '',
  playLink: '',
};
export default Game;
