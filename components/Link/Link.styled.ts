"use client";
import { textColor, mutedGrey } from "constants/variables";

import { Paragraph } from "components/Typography/Typography";
import styled from "styled-components";

export const LinkStyled = styled(Paragraph)`
  text-decoration: underline;
  color: ${mutedGrey};
  overflow-wrap: break-word;

  &:hover,
  &:focus {
    color: ${textColor};
  }
`;
