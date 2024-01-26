"use client";
import {
  buttonBorder,
  buttonBackground,
  buttonColor,
  fontFamily,
  buttonBackgroundHovered,
  buttonColorHovered,
  buttonBackgroundDisabled,
  buttonColorDisabled,
} from "constants/variables";
import styled from "styled-components";

export const StyledButton = styled.button`
  background: ${buttonBackground};
  box-shadow: 0 0.25em 0 ${buttonBorder}, 0 -0.25em 0 ${buttonBorder},
    0.25em 0 0 ${buttonBorder}, -0.25em 0 0 ${buttonBorder};
  border: 0;
  font-size: 1em;
  padding: 0.5em 1em;
  margin: 0.25em;
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
