"use client";

import styled from "styled-components";
import { black } from "constants/variables";

export const StyledMarkdownImage = styled.img`
  border: 0.25em solid ${black};
  width: 100%;
  user-select: none;
  box-sizing: border-box;
  image-rendering: pixelated;
`;
