import React from "react";

import { Paragraph } from "components/Typography/Typography";

import { Footer } from "./Copyright.styled";

const NON_BREAKING_HYPHEN = "\u2011";
const NON_BREAKING_SPACE = "\u00a0";

export const Copyright = () => {
  const currentYear = new Date().getFullYear();
  const startYear = 2018;

  const displayDate =
    startYear === currentYear
      ? `${startYear}`
      : `${startYear}${NON_BREAKING_HYPHEN}${currentYear}`;

  return (
    <Footer>
      <Paragraph $center $muted>
        Bodging Bear ©{NON_BREAKING_SPACE}
        {displayDate}
      </Paragraph>
    </Footer>
  );
};
