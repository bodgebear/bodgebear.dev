import React from 'react';
import { StyledHeader, StyledLogo, StyledBanner } from './styles';
import headerText from '../../static/bb_name.png';
import bannerBear from '../../static/banner_bear_no_logo.png';


const Header = () => (
  <StyledHeader>
    <StyledLogo src={headerText} />
    <StyledBanner src={bannerBear} />
  </StyledHeader>
);

export default Header;
