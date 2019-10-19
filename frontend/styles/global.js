import { createGlobalStyle } from 'styled-components';
import { fontFamily, bodyBackground } from './variables';

// eslint-disable-next-line no-unused-expressions
const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${fontFamily};
    background: ${bodyBackground};
    margin: 0;
  }
`;

export default GlobalStyles;
