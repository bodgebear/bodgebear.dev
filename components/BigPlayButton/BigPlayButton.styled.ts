"use client";
import {
  buttonBorder,
  buttonColor,
  fontFamily,
  buttonBackgroundHovered,
  buttonColorHovered,
  buttonBackgroundDisabled,
  buttonColorDisabled,
  bigButtonBackground,
} from "constants/variables";
import styled from "styled-components";

export const StyledBigPlayButton = styled.a`
  background: ${bigButtonBackground};
  box-shadow: 0 0.25em 0 ${buttonBorder}, 0 -0.25em 0 ${buttonBorder},
    0.25em 0 0 ${buttonBorder}, -0.25em 0 0 ${buttonBorder};
  border: 0;
  font-size: 1.5em;
  padding: 0.5em 1em;
  margin: 1em 0.25em;
  font-family: ${fontFamily};
  outline: 0;
  cursor: pointer;
  text-decoration: none;
  user-select: none;

  && {
    color: ${buttonColor};
    text-decoration: none;

    &:hover,
    &:focus-visible {
      background: ${buttonBackgroundHovered};
      color: ${buttonColorHovered};
    }

    &:disabled {
      background: ${buttonBackgroundDisabled};
      color: ${buttonColorDisabled};
      cursor: default;
    }
  }
`;
