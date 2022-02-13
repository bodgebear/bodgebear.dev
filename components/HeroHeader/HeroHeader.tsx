import React from 'react';
import Link from 'next/link';
import bannerBearNoLogo from 'assets/banner_bear_no_logo.png';
import bannerLogo from 'assets/bb_name.png';
import bannerNoBearNoLogo from 'assets/banner_no_bear_no_logo.png';

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

export const HeroHeader = ({ showBear = false }: HeroHeaderProps) => {
  const urlNoLogo = showBear ? bannerBearNoLogo.src : bannerNoBearNoLogo.src;
  const urlLogo = bannerLogo.src;

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
