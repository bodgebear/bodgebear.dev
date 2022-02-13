import React from 'react';

import { Paragraph } from 'components/Typography/Typography';
import { Container, Image } from './ContactMeans.styled';

interface ContactMeansProps {
  image: string;
  text: string;
  link: string;
}

export const ContactMeans = ({ image, text, link }: ContactMeansProps) => (
  <Container href={link}>
    <Image src={image} />
    <Paragraph>{text}</Paragraph>
  </Container>
);
