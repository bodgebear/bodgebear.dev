import React from 'react';
import styled from 'styled-components';

import { textColor, mutedGrey } from '../../styles/variables';

import { Text } from '../Typography';

const LinkStyled = styled(Text)`
  text-decoration: underline;
  color: ${mutedGrey};
  transition: 0.1s ease-in-out;
  transition-property: color;
  word-break: break-all;

  &:hover,
  &:focus {
    color: ${textColor};
  }
`;

const Link = props => <LinkStyled as="a" muted {...props} />;

export default Link;
