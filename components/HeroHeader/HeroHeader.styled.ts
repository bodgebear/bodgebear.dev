import styled from '@emotion/styled';
import { breakpoints } from '../../constants/variables';

interface ShowBearProps {
  showBear: boolean;
}

export const Container = styled.header<ShowBearProps>`
  width: 100%;
  position: relative;
  height: ${(props) => (props.showBear ? '25rem' : '16rem')};

  @media (min-width: ${breakpoints.tablet}) {
    height: ${(props) => (props.showBear ? '35rem' : '23rem')};
  }
`;

export const ImageOverflowContainer = styled.div<ShowBearProps>`
  position: absolute;
  width: 100%;
  height: ${(props) => (props.showBear ? '70rem' : '56rem')};
  overflow: hidden;
  pointer-events: none;
`;

export const ImgNoLogo = styled.img<ShowBearProps>`
  position: absolute;
  height: ${(props) => (props.showBear ? '50rem' : '40rem')};
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  image-rendering: pixelated;
  z-index: -1;
  display: unset;

  @media (min-width: ${breakpoints.tablet}) {
    height: ${(props) => (props.showBear ? '70rem' : '56rem')};
  }
`;

export const ImgLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 9rem;
  width: 100%;
  position: absolute;
  top: 0;
  padding: 0 2rem;
  box-sizing: border-box;

  @media (min-width: ${breakpoints.tablet}) {
    height: 12.5rem;
  }
`;

export const ImgLinkLogo = styled.a`
  width: 100%;
  max-width: 40rem;
`;

export const ImgLogo = styled.img`
  width: 100%;
  image-rendering: pixelated;
`;
