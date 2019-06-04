import React from 'react';
import styled from 'styled-components';
// import bgImg from '../static/background.png'
// import headerText from '../static/bb_name.png'
// import bear from '../static/bear.png';
// import desk from '../static/desk2.png'
import banner from '../static/banner_bear.png';


const StyledBanner = styled('img')`
  height: 20rem;
  image-rendering: pixelated;

`;


const Header = () => (
  // eslint-disable-next-line react/jsx-filename-extension
  <StyledBanner src={banner} />
);

export default Header;
