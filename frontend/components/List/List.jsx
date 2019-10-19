import React from 'react';
import styled from 'styled-components';

import { Text } from '../Typography';

export const List = styled.ul`
  position: relative;
  padding-left: 2em;
  counter-reset: item;
`;

const ListItemStyled = styled(Text)`
  list-style: none;
  counter-increment: item;

  &::before {
    ${props => (!props.ordered ? 'content: \'*\'' : 'content: counter(item) \'.\'')};
    position: absolute;
    left: 0;
  }
`;


export const ListItem = props => <ListItemStyled muted as="li" {...props} />;
