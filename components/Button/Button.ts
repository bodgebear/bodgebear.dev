import {
  buttonBorder,
  buttonBackground,
  buttonColor,
  fontFamily,
  buttonBackgroundHovered,
  buttonColorHovered,
  buttonBackgroundDisabled,
  buttonColorDisabled,
} from 'constants/variables';
import styled from '@emotion/styled';

const Button = styled.button`
  background: ${buttonBackground};
  box-shadow:
    0 0.25em 0 ${buttonBorder},
    0 -0.25em 0 ${buttonBorder},
    0.25em 0 0 ${buttonBorder},
    -0.25em 0 0 ${buttonBorder};
  border: 0;
  font-size: 1em;
  padding: 0.5em 1em;
  margin: 0.25em;
  color: ${buttonColor};
  font-family: ${fontFamily};
  transition: 0.1s ease-in-out;
  transition-property: color, background;
  outline: 0;
  cursor: pointer;
  text-decoration: none;

  &:hover,
  &:focus {
    background: ${buttonBackgroundHovered};
    color: ${buttonColorHovered};
  }

  &:disabled {
    background: ${buttonBackgroundDisabled};
    color: ${buttonColorDisabled};
    cursor: default;
  }
`;

export default Button;
