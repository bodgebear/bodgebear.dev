import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles/variables';

import BannerBearUrl from '../../static/banner_bear.png';
import BannerBearNoLogoUrl from '../../static/banner_bear_no_logo.png';
import BannerLogoUrl from '../../static/bb_name.png';

import BannerNoBearUrl from '../../static/banner_no_bear.png';
import BannerNoBearNoLogoUrl from '../../static/banner_no_bear_no_logo.png';

const Container = styled.header`
  width: 100%;
  position: relative;
  height: ${props => (props.showBear ? '25rem' : '16rem')};

  @media (min-width: ${breakpoints.tablet}) {
    height: ${props => (props.showBear ? '35rem' : '23rem')};
  }
`;

const ImageOverflowContainer = styled.div`
  position: absolute;
  width: 100%;
  height: ${props => (props.showBear ? '70rem' : '56rem')};
  overflow: hidden;
  z-index: -1;
`;

const Img = styled.img`
  position: absolute;
  height: ${props => (props.showBear ? '70rem' : '56rem')};
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  image-rendering: pixelated;
`;

const ImgWithLogo = styled(Img)`
  display: none;

  @media (min-width: ${breakpoints.tablet}) {
    display: unset;
  }
`;

const ImgNoLogo = styled(Img)`
  display: unset;
  height: ${props => (props.showBear ? '50rem' : '40rem')};

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

const ImgLogoContainer = styled.div`
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
    display: none;
  }
`;

const ImgLogo = styled.img`
  width: 100%;
  image-rendering: pixelated;
  max-width: 40rem;
`;

const HeroHeader = ({ showBear }) => {
  const urlWithLogo = showBear ? BannerBearUrl : BannerNoBearUrl;
  const urlNoLogo = showBear ? BannerBearNoLogoUrl : BannerNoBearNoLogoUrl;
  const urlLogo = BannerLogoUrl;

  return (
    <Container showBear={showBear}>
      <ImageOverflowContainer showBear={showBear}>
        <ImgWithLogo src={urlWithLogo} showBear={showBear} />
        <ImgNoLogo src={urlNoLogo} showBear={showBear} />
        <ImgLogoContainer showBear={showBear}>
          <ImgLogo src={urlLogo} showBear={showBear} />
        </ImgLogoContainer>
      </ImageOverflowContainer>
    </Container>
  );
};

export default HeroHeader;
