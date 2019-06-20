import React from 'react';
import PropTypes from 'prop-types';
import { StyledDiv, StyledPicture } from './styles';
import { StrongP, SubText } from '../../../styles/typography';

const Game = ({ picture, name, subText }) => (
  <StyledDiv>
    <StyledPicture src={picture} />
    <StrongP>{name}</StrongP>
    <SubText>{subText}</SubText>
  </StyledDiv>
);

Game.propTypes = {
  picture: PropTypes.string,
  name: PropTypes.string,
  subText: PropTypes.string,
};

Game.defaultProps = {
  picture: false,
  name: false,
  subText: false,
};
export default Game;
