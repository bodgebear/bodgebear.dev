import styled from 'styled-components';
import colors from '../../../styles/colors';

const utils = {
  width: '0.25em',
  opacity: 0.6,
  color: '#FFFFFF',
  bgColor: '#FFFFFF',
  hoverColor: '#151616',
  hoverBgColor: '#FFFFFF',
  disabledBgColor: 'rgba(0, 0, 0, 0.2)',
  disabledColor: 'rgba(255,255,255, 0.7)',
};

const Button = styled('button')`
  border: none;
  padding: 0.6em 1.4em;
  background-color: ${colors.dark};
  color: ${colors.white};
  box-shadow:
    -${utils.width} 0 0 rgba(255, 255, 255, ${utils.opacity}),
    ${utils.width} 0 0 rgba(255, 255, 255, ${utils.opacity}),
    0 ${utils.width}  0 rgba(255, 255, 255, ${utils.opacity}),
    0 -${utils.width} 0 rgba(255, 255, 255, ${utils.opacity});
  font-size: 1rem;
  transition: all 0.1s ease-in-out;
  transition-property: color, background-color;
  font-family: 'Miners', serif;

  &:hover {
    background-color: ${utils.hoverBgColor};
    color: ${utils.hoverColor};
  }

  &:disabled {
    background-color: ${utils.disabledBgColor};
    color: ${utils.disabledColor};
  }
`;

export default Button;
