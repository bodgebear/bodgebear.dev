import styled from 'styled-components';
import { tablet } from '../../styles/breakpoints';

export const StyledHeader = styled('header')`
  height: 26rem;
  position: relative;

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
  width: 99%;
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

export const BannerContainer = styled('div')`
  position: relative;
  z-index: 1;
  height: 50rem;
  overflow: hidden;

  @media (${tablet}) {
    height: 70rem;
  }
`;

export const StyledBanner = styled('img')`
  height: 100%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  image-rendering: pixelated;
`;
