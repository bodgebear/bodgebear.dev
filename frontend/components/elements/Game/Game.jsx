import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { StrongP, SubText } from 'styles/typography';
import StyledLink from 'components/elements/Button';
import { GameContainer, StyledPicture } from './styles';


const Game = ({
  picture, name, subText, playLink, idName: id,
}) => {
  const href = `/project/[id]`;
  const as = `/project/${id}`;

  return (
    <GameContainer>
      <Link href={href} as={as}>
        <a>
          <StyledPicture src={picture} alt="" />
          <StrongP>{name}</StrongP>
        </a>
      </Link>
      <SubText>{subText}</SubText>
      <StyledLink href={playLink}>Play Now</StyledLink>
    </GameContainer>
  );
};


Game.propTypes = {
  picture: PropTypes.string,
  name: PropTypes.string,
  subText: PropTypes.string,
  playLink: PropTypes.string,
  idName: PropTypes.string,
};

Game.defaultProps = {
  picture: '',
  name: '',
  subText: '',
  playLink: '',
  idName: '',
};
export default Game;
