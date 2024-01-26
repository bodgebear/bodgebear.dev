import React from 'react';
import Link from 'next/link';

import { Paragraph } from 'components/Typography/Typography';
import { Center } from 'components/Center/Center';
import { HomePageProject } from 'types/HomePageProject';

import { A, Image, ButtonLink } from './Game.styled';

interface GameProps extends HomePageProject {}

export const Game = ({
  id,
  name,
  description,
  image,
  playNowUrl,
}: GameProps) => (
  <div>
    <Link href="/projects/[id]" as={`/projects/${id}`} passHref legacyBehavior>
      <A>
        {image && <Image src={image} />}
        <Paragraph center>{name}</Paragraph>
        <Paragraph muted center noMargin="top">
          {description}
        </Paragraph>
      </A>
    </Link>
    {playNowUrl && (
      <Center>
        <ButtonLink href={playNowUrl} target="_blank">
          Play now!
        </ButtonLink>
      </Center>
    )}
  </div>
);
