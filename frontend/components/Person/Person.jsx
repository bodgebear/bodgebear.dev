import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Paragraph } from '../Typography';

const Container = styled.div`
  margin: 2rem 1rem;
  width: 15rem;
`;

const Image = styled.img`
  width: 100%;
  image-rendering: pixelated;
`;

const Person = ({ image, name, position }) => (
  <Container>
    <Image src={image} alt="" />
    <Paragraph center>{name}</Paragraph>
    <Paragraph muted center noMargin="top">{position}</Paragraph>
  </Container>
);

Person.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Person;
