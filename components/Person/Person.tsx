import React from 'react';
import { Person as PersonType } from 'types/Person';
import { Paragraph } from 'components/Typography';

import { Image, Container } from './Person.styled';

interface PersonProps extends PersonType {}

const Person: React.FC<PersonProps> = ({ image, name, position }) => (
  <Container>
    <Image src={image} alt="" />
    <Paragraph center>{name}</Paragraph>
    <Paragraph muted center noMargin="top">{position}</Paragraph>
  </Container>
);

export default Person;
