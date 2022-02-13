import { Global, css } from '@emotion/react';
import { fontFamily, bodyBackground } from 'constants/variables';

export const GlobalStyles = () => (
  <Global
    styles={css`
      body {
        font-family: ${fontFamily};
        background: ${bodyBackground};
        margin: 0;
      }
    `}
  />
);
