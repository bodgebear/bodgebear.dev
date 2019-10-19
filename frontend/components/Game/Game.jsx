import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link';

import Button from '../Button';
import Center from '../Center';
import { Paragraph } from '../Typography';

const Image = styled.img`
  width: 100%;
`;

const A = styled.a`
  display: block;
  text-decoration: none;
`;

const Game = ({
  image, name, subtitle, playNowUrl, id,
}) => (
  <div>
    <Link href="/projects/[id]" as={`/projects/${id}`} passHref>
      <A>
        <Image src={image} />
        <Paragraph center>{name}</Paragraph>
        <Paragraph muted center noMargin="top">{subtitle}</Paragraph>
      </A>
    </Link>
    {playNowUrl && (
      <Center>
        <Button href={playNowUrl} as="a" target="_blank">Play now!</Button>
      </Center>
    )}
  </div>
);

Game.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  playNowUrl: PropTypes.string,
};

Game.defaultProps = {
  playNowUrl: null,
};

export default Game;
