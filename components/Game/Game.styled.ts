import styled from '@emotion/styled';
import Button from 'components/Button';

export const Image = styled.img`
  width: 100%;
`;

export const A = styled.a`
  display: block;
  text-decoration: none;
`;

export const ButtonLink = Button.withComponent('a');
