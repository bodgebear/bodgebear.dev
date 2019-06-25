import React from 'react';
import PropTypes from 'prop-types';
import { StrongP, SubText } from 'styles/typography';
import { StyledDiv, StyledPicture } from './styles';

const Team = ({ picture, name, description }) => (
  <StyledDiv>
    <StyledPicture src={picture} />
    <StrongP>{name}</StrongP>
    <SubText>{description}</SubText>
  </StyledDiv>
);

Team.propTypes = {
  picture: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
};

Team.defaultProps = {
  picture: '',
  name: '',
  description: '',
};

export default Team;
