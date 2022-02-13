import React from 'react';
import { LinkStyled } from './Link.styled';

export const Link = (props: React.ComponentProps<typeof LinkStyled>) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <LinkStyled muted {...props} />
);
