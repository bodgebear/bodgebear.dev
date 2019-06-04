import React from 'react';
import styled from 'styled-components';
import HeaderText from '../static/bb_name.png';
import BannerBear from '../static/banner_bear_no_logo.png';

const StyledHeader = styled('header')`
  width: 100vw;
  position: relative;
`;

const StyledText = styled('img')`
  height: 2.5rem;
  position: absolute;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
`;

const StyledBanner = styled('img')`
  height: 15rem;
  image-rendering: pixelated;
`;


const Header = () => (
  <StyledHeader>
    <StyledText src={HeaderText} />
    <StyledBanner src={BannerBear} />
  </StyledHeader>
);

export default Header;
