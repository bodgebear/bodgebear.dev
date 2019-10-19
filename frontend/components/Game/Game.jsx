import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '../Button';
import Center from '../Center';
import { Paragraph } from '../Typography';

const Image = styled.img`
  width: 100%;
`;

const Game = ({ image, name, subtitle }) => (
  <div>
    <Image src={image} />
    <Paragraph center>{name}</Paragraph>
    <Paragraph muted center noMargin="top">{subtitle}</Paragraph>
    <Center>
      <Button>Play now!</Button>
    </Center>
  </div>
);

Game.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Game;
