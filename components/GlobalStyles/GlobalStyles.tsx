"use client";
import { createGlobalStyle } from "styled-components";
import {
  fontFamily,
  bodyBackground,
  selectionColor,
  white,
} from "constants/variables";

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${fontFamily};
    background: ${bodyBackground};
    margin: 0;
  }

  @media (prefers-contrast: no-preference) or (prefers-contrast: less) {
    ::selection {
      background-color: ${selectionColor};
      color: ${white};
    }

    /* Webkit browsers */
    ::-moz-selection {
      background-color: ${selectionColor};
      color: ${white};
    }

    /* Firefox */
    ::-webkit-selection {
      background-color: ${selectionColor};
      color: ${white};
    }
  }
`;
