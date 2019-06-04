import { createGlobalStyle } from 'styled-components';
import colors from './colors';
import Miners from '../static/Pixel-Miners.ttf';

const GlobalStyles = createGlobalStyle`

  @font-face {
     font-family: Miners;
     src: url('${Miners}');
  }
  
 *, 
 *:after,
 *:before {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  }
  
  html, body {
    font-size: 1rem;
    background-color: ${colors.black};
    color: ${colors.white};
    width: 100vw;
    overflow: hidden;
    font-family: 'Miners', serif;
  }
  
  a {
  text-decoration: none;
  }
`;

export default GlobalStyles;
