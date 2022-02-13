import React from 'react';

import { Paragraph } from 'components/Typography/Typography';

import { Footer } from './Copyright.styled';

export const Copyright = () => {
  const currentYear = new Date().getFullYear();
  const startYear = 2018;

  const displayDate =
    startYear === currentYear ? `${startYear}` : `${startYear}-${currentYear}`;

  return (
    <Footer>
      <Paragraph center muted>
        Bodging Bear © {displayDate}
      </Paragraph>
    </Footer>
  );
};
