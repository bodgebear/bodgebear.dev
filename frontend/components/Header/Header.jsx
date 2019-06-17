import React from 'react';
import PropTypes from 'prop-types';
import headerText from 'static/bb_name.png';
import bannerBear from 'static/banner_bear_no_logo.png';
import bannerNoBear from 'static/banner_no_bear_no_logo.png';
import {
  StyledHeader, StyledLogo, StyledBanner, LogoContainer,
} from './styles';

const Header = ({ hasBear }) => (
  <StyledHeader>
    <LogoContainer>
      <StyledLogo src={headerText} />
    </LogoContainer>
    <StyledBanner src={hasBear ? `${bannerBear}` : `${bannerNoBear}`} />
  </StyledHeader>
);

Header.propTypes = {
  hasBear: PropTypes.bool,
};

Header.defaultProps = {
  hasBear: false,
};

export default Header;
