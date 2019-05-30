import styled, {createGlobalStyle} from "styled-components";
import colors from "./colors";
import {center} from "./mixes";

const GlobalStyles = createGlobalStyle`
 *, 
 *:after,
 *:before {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  }
  
  html, body {
    font-size: 65.5%;
    background-color: ${colors.black};
    color: ${colors.white};
    width: 100vw;
    overflow: hidden;
  }
  
  a {
  text-decoration: none;
  }
`;

export const Button = styled('button')`
  padding: .6rem 1.8rem;
  margin: 20px;
  background-color: ${colors.black};
  color: ${colors.white};
  border: none;
  position: relative;
  font-size: 1.6rem;
  transition: all .1s;
  
   &:before {
    content: '';
    ${center};
    width: 105%;
    height: 90%;
    border-right: ${colors.grey} solid 3px;
    border-left: ${colors.grey} solid 3px;
    }
  
  &:after {
    content: '';
    ${center};
    width: 100%;
    height: 110%;
    border-bottom: ${colors.grey} solid 3px;
    border-top: ${colors.grey} solid 3px;
  }
  
  &:hover {
    background-color: ${colors.white};
    color: ${colors.black};
  }
  &:disabled, [disabled=disabled] {
    background-color: rgba(255,255,255, 0.2);
    color: rgba(255,255,255, 0.7);
  }
`;

export default GlobalStyles;