import { createGlobalStyle } from 'styled-components';
import colors from './colors';
import Miners from '../static/Pixel-Miners.ttf';
import breakpoints from './breakpoints';

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

  html,
  body {
    font-size: 1rem;
    background-color: ${colors.black};
    color: ${colors.white};
    width: 100%;
    font-family: 'Miners', sans-serif;

    @media (${breakpoints.tablet}) {
      font-size: 1.1rem;
    }

    @media (${breakpoints.desktop}) {
      font-size: 1.3rem;
    }
  }
`;

export default GlobalStyles;
