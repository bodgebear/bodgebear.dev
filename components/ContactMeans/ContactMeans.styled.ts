import styled from '@emotion/styled';

export const Container = styled.a`
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

export const Image = styled.img`
  width: 10rem;
  image-rendering: pixelated;
  margin-bottom: 1rem;
`;
