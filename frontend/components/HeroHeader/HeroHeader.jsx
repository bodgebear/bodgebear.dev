import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link';

import { breakpoints } from '../../styles/variables';

import bannerBearNoLogoUrl from '../../static/banner_bear_no_logo.png';
import bannerBearNoLogoUrlAnim from '../../static/banner_bear_no_logo.gif';
import bannerLogoUrl from '../../static/bb_name.png';

import bannerNoBearNoLogoUrl from '../../static/banner_no_bear_no_logo.png';

const Container = styled.header`
  width: 100%;
  position: relative;
  ${props => (!props.loading
    ? `
      height: ${props.showBear ? '25rem' : '16rem'};

      @media (min-width: ${breakpoints.tablet}) {
        height: ${props.showBear ? '35rem' : '23rem'};
      }
    `
    : `
      height: 100vh;
      overflow: hidden;
    `)
}
`;

const ImageOverflowContainer = styled.div`
  position: absolute;
  width: 100%;
  height: ${props => (props.showBear ? '70rem' : '56rem')};
  overflow: hidden;
  pointer-events: none;
`;

const ImgNoLogo = styled.img`
  position: absolute;
  height: ${props => (props.showBear ? '50rem' : '40rem')};
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  image-rendering: pixelated;
  z-index: -1;
  display: unset;

  @media (min-width: ${breakpoints.tablet}) {
    height: ${props => (props.showBear ? '70rem' : '56rem')};
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
    height: 12.5rem;
  }
`;

const ImgLinkLogo = styled.a`
  width: 100%;
  max-width: 40rem;
`;

const ImgLogo = styled.img`
  width: 100%;
  image-rendering: pixelated;
`;

const getNoLogoUrl = ({ showBear, loading }) => {
  if (!showBear) {
    return bannerNoBearNoLogoUrl;
  }

  if (loading) {
    return bannerBearNoLogoUrlAnim;
  }

  return bannerBearNoLogoUrl;
};

const HeroHeader = ({ showBear, loading }) => {
  const urlNoLogo = getNoLogoUrl({ showBear, loading });
  const urlLogo = bannerLogoUrl;

  return (
    <Container showBear={showBear} loading={loading}>
      <ImgLogoContainer showBear={showBear}>
        <Link href="/" passHref>
          <ImgLinkLogo>
            <ImgLogo src={urlLogo} showBear={showBear} />
          </ImgLinkLogo>
        </Link>
      </ImgLogoContainer>
      <ImageOverflowContainer showBear={showBear}>
        <ImgNoLogo src={urlNoLogo} showBear={showBear} />
      </ImageOverflowContainer>
    </Container>
  );
};

HeroHeader.propTypes = {
  showBear: PropTypes.bool,
  loading: PropTypes.bool,
};

HeroHeader.defaultProps = {
  showBear: false,
  loading: false,
};

export default HeroHeader;
