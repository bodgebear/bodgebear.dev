import { Global, css } from '@emotion/core';
import { fontFamily, bodyBackground } from 'constants/variables';

const GlobalStyles = () => (
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

export default GlobalStyles;
