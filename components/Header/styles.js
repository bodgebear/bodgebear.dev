import styled from 'styled-components';
import { tablet } from '../../styles/breakpoints';

export const StyledHeader = styled('header')`
  width: 100%;
  height: 26rem;

  @media (${tablet}) {
    height: 36rem;
  }
`;

export const LogoContainer = styled('div')`
  position: absolute;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2rem 3rem;
  height: 9rem;

  @media (${tablet}) {
    padding: 3rem;
    height: 12rem;
  }
`;

export const StyledLogo = styled('img')`
  max-width: 100%;
  max-height: 100%;
`;

export const StyledBanner = styled('img')`
  height: 50rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  image-rendering: pixelated;

  @media (${tablet}) {
    height: 70rem;
  }
`;
