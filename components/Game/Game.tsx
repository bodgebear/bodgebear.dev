import React from 'react';
import Link from 'next/link';

import { Paragraph } from 'components/Typography';
import Center from 'components/Center';
import { HomePageProject } from 'types/HomePageProject';

import { A, Image, ButtonLink } from './Game.styled';

interface GameProps extends HomePageProject {}

const Game: React.FC<GameProps> = ({
  id,
  name,
  description,
  image,
  playNowUrl,
}) => (
  <div>
    <Link href="/projects/[id]" as={`/projects/${id}`} passHref>
      <A>
        {image && <Image src={image} />}
        <Paragraph center>{name}</Paragraph>
        <Paragraph muted center noMargin="top">{description}</Paragraph>
      </A>
    </Link>
    {playNowUrl && (
      <Center>
        <ButtonLink href={playNowUrl} target="_blank">Play now!</ButtonLink>
      </Center>
    )}
  </div>
);

export default Game;
