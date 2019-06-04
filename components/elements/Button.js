import styled from 'styled-components';
import colors from '../../utils/colors';

const Button = styled('button')`
  border: none;
  padding: .6em 1.4em;
  background-color: ${colors.black};
  color: ${colors.white};
  box-shadow: -0.25em 0 0 rgba(255, 255, 255, 0.6), 0.25em 0 0 rgba(255, 255, 255, 0.6), 0 0.25em 0 rgba(255, 255, 255, 0.6), 0 -0.25em 0 rgba(255, 255, 255, 0.6) ;
  font-size: 1rem;
  transition: all .1s;
  font-family: 'Miners', serif;

  &:hover {
    background-color: ${colors.white};
    color: ${colors.black};
  }
  &:disabled, [disabled=disabled] {
    background-color: rgba(255,255,255, 0.2);
    color: rgba(255,255,255, 0.7);
  }
`;

export default Button;
