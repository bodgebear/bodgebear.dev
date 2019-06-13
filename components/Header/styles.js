import styled from 'styled-components';

export const StyledHeader = styled('header')`
  width: 100%;
  position: relative;
  overflow: hidden;
  height: 50rem;
`;

export const StyledLogo = styled('img')`
  height: 2.5rem;
  position: absolute;
  z-index: 2;
  top: 8%;
  left: 50%;
  transform: translateX(-50%);
`;

export const StyledBanner = styled('img')`
  height: 50rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  image-rendering: pixelated;
`;
