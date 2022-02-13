import React from 'react';
import { Person as PersonType } from 'types/Person';
import { Paragraph } from 'components/Typography/Typography';

import { Image, Container } from './Person.styled';

interface PersonProps extends PersonType {}

export const Person = ({ image, name, position }: PersonProps) => (
  <Container>
    <Image src={image} alt="" />
    <Paragraph center>{name}</Paragraph>
    <Paragraph muted center noMargin="top">
      {position}
    </Paragraph>
  </Container>
);
