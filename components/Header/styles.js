import styled from 'styled-components';
import { desktop, tablet } from '../../styles/breakpoints';

export const StyledHeader = styled('header')`
  width: 100%;
  position: relative;
  overflow: hidden;
  height: 50rem;
`;

export const LogoContainer = styled('div')`
  width: 100%;
  padding: 2rem;
`;

export const StyledLogo = styled('img')`
  position: absolute;
  z-index: 2;
  left: 50%;
  transform: translateX(-50%);
  width: 70%;

  @media (${tablet}) {
    width: 60%;
  }

  @media (${desktop}) {
    width: 30rem;
  }
`;

export const StyledBanner = styled('img')`
  height: 50rem;
  position: absolute;
  left: 50%;
  top: -1rem;
  transform: translateX(-50%);
  image-rendering: pixelated;
`;
