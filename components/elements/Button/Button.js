import styled from 'styled-components';
import colors from '../../../styles/colors';

const button = {
  width: '0.25em',
  opacity: 0.6,
  color: '#FFFFFF',
  bgColor: '#FFFFFF',
  hoverColor: '#151616',
  hoverBgColor: '#FFFFFF',
  disabledBgColor: 'rgba(0, 0, 0, 0.2)',
  disabledColor: 'rgba(255,255,255, 0.7)',
};

const StyledButton = styled('button')`
  border: none;
  padding: 0.6em 1.4em;
  background-color: ${colors.dark};
  color: ${colors.white};
  box-shadow:
    -${button.width} 0 0 rgba(255, 255, 255, ${button.opacity}),
    ${button.width} 0 0 rgba(255, 255, 255, ${button.opacity}),
    0 ${button.width}  0 rgba(255, 255, 255, ${button.opacity}),
    0 -${button.width} 0 rgba(255, 255, 255, ${button.opacity});
  font-size: 1rem;
  transition: all 0.1s ease-in-out;
  transition-property: color, background-color;
  font-family: 'Miners', serif;

  &:hover {
    background-color: ${button.hoverBgColor};
    color: ${button.hoverColor};
  }

  &:disabled {
    background-color: ${button.disabledBgColor};
    color: ${button.disabledColor};
  }
`;

export default StyledButton;
