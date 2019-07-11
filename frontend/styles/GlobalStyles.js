import { createGlobalStyle } from 'styled-components';
import colors from './colors';
import Miners from '../static/Pixel-Miners.ttf';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: Miners;
    src: url('${Miners}');
  }

  *,
  *::after,
  *::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }

  html,
  body {
    font-size: 1rem;
    background-color: ${colors.background};
    color: ${colors.text};
    width: 100%;
    font-family: 'Miners', sans-serif;
  }
`;

export default GlobalStyles;
