import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles/variables';

import BannerBearUrl from '../../static/banner_bear.png';
import BannerBearBoLogoUrl from '../../static/banner_bear_no_logo.png';
import BannerLogoUrl from '../../static/bb_name.png';

const Container = styled.header`
  width: 100%;
  position: relative;
  height: 25rem;

  @media (min-width: ${breakpoints.tablet}) {
    height: 35rem;
  }
`;

const ImageOverflowContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 70rem;
  overflow: hidden;
  z-index: -1;
`;

const Img = styled.img`
  position: absolute;
  height: 70rem;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  image-rendering: pixelated;
`;

const ImgBearWithLogo = styled(Img)`
  display: none;

  @media (min-width: ${breakpoints.tablet}) {
    display: unset;
  }
`;

const ImgBearNoLogo = styled(Img)`
  display: unset;
  height: 50rem;

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

const HeroHeader = () => (
  <Container>
    <ImageOverflowContainer>
      <ImgBearWithLogo src={BannerBearUrl} />
      <ImgBearWithLogo src={BannerBearUrl} />
      <ImgBearNoLogo src={BannerBearBoLogoUrl} />
      <ImgLogoContainer>
        <ImgLogo src={BannerLogoUrl} />
      </ImgLogoContainer>
    </ImageOverflowContainer>
  </Container>
);

export default HeroHeader;
