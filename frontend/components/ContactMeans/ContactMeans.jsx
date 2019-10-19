import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Paragraph } from '../Typography';

const Container = styled.a`
  color: unset; /* stylelint-disable-line sh-waqar/declaration-use-variable */
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.1s ease-in;
  transition-property: opacity;

  &:hover {
    opacity: 0.6;
  }
`;

const Image = styled.img`
  width: 10rem;
  image-rendering: pixelated;
  margin-bottom: 1rem;
`;

const ContactMeans = ({ image, text, link }) => (
  <Container href={link}>
    <Image src={image} />
    <Paragraph>{text}</Paragraph>
  </Container>
);

ContactMeans.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ContactMeans;
