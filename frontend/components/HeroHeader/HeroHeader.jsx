import React from 'react';
import styled from 'styled-components';
import BannerBearUrl from '../../static/banner_bear.png';

const Container = styled.header`
  width: 100%;
  position: relative;
  height: 35rem;
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

const HeroHeader = () => (
  <Container>
    <ImageOverflowContainer>
      <Img src={BannerBearUrl} />
    </ImageOverflowContainer>
  </Container>
);

export default HeroHeader;
