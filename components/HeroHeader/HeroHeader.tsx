import React from 'react';
import Link from 'next/link';
import bannerBearNoLogoUrl from 'assets/banner_bear_no_logo.png';
import bannerLogoUrl from 'assets/bb_name.png';
import bannerNoBearNoLogoUrl from 'assets/banner_no_bear_no_logo.png';

import {
  Container,
  ImageOverflowContainer,
  ImgNoLogo,
  ImgLogoContainer,
  ImgLinkLogo,
  ImgLogo,
} from './HeroHeader.styled';

interface HeroHeaderProps {
  showBear?: boolean;
}

const HeroHeader: React.FC<HeroHeaderProps> = ({
  showBear = false,
}) => {
  const urlNoLogo = showBear
    ? bannerBearNoLogoUrl
    : bannerNoBearNoLogoUrl;
  const urlLogo = bannerLogoUrl;

  return (
    <Container showBear={showBear}>
      <ImgLogoContainer>
        <Link href="/" passHref>
          <ImgLinkLogo>
            <ImgLogo src={urlLogo} />
          </ImgLinkLogo>
        </Link>
      </ImgLogoContainer>
      <ImageOverflowContainer showBear={showBear}>
        <ImgNoLogo src={urlNoLogo} showBear={showBear} />
      </ImageOverflowContainer>
    </Container>
  );
};

export default HeroHeader;
