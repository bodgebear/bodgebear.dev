import React from 'react';
import Team from 'components/elements/Team';
import { Heading1 } from 'styles/typography';
import bl from 'static/bl_8bit.png';
import kp from 'static/kp_8bit.png';
import rp from 'static/rp_8bit.png';
import ab from 'static/ab_8bit.png';
import mn from 'static/mn_8bit.png';
import { TeamContainer, StyledSection, Heading3 } from './styles';

const OurTeam = () => (
  <StyledSection>
    <Heading1>OUR TEAM</Heading1>
    <TeamContainer>
      <Team
        picture={bl}
        name="Bartek Legiec"
        description="Programming & Art"
      />
      <Team
        picture={kp}
        name="Kacper Pietrzak"
        description="Programming & Sound"
      />
    </TeamContainer>
    <Heading3>Friends</Heading3>
    <TeamContainer>
      <Team
        picture={rp}
        name="RafaL Piotrek"
        description="Programming"
      />
      <Team
        picture={ab}
        name="Arek Borysiuk"
        description="Art & Sound"
      />
      <Team
        picture={mn}
        name="Magda Nowak"
        description="Art"
      />
    </TeamContainer>
  </StyledSection>
);

export default OurTeam;
