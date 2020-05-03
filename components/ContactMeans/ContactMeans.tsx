import React from 'react';

import { Paragraph } from 'components/Typography';
import { Container, Image } from './ContactMeans.styled';

interface ContactMeansProps {
  image: string;
  text: string;
  link: string;
}

const ContactMeans: React.FC<ContactMeansProps> = ({ image, text, link }) => (
  <Container href={link}>
    <Image src={image} />
    <Paragraph>{text}</Paragraph>
  </Container>
);

export default ContactMeans;
