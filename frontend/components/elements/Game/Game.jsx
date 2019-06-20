import React from 'react';
import PropTypes from 'prop-types';
import { StrongP, SubText } from 'styles/typography';
import StyledButton from 'components/elements/Button';
import { StyledDiv, StyledPicture } from './styles';

const Game = ({ picture, name, subText }) => (
  <StyledDiv>
    <StyledPicture src={picture} />
    <StrongP>{name}</StrongP>
    <SubText>{subText}</SubText>
    <StyledButton>Play now</StyledButton>
  </StyledDiv>
);

Game.propTypes = {
  picture: PropTypes.string,
  name: PropTypes.string,
  subText: PropTypes.string,
};

Game.defaultProps = {
  picture: '',
  name: '',
  subText: '',
};
export default Game;
