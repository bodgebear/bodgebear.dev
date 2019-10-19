import styled from 'styled-components';

const Grid = styled.section`
  display: grid;
  /* stylelint-disable-next-line declaration-colon-newline-after */
  grid-template-columns: ${(props) => {
    if (props.colsTemplate) {
      return `${props.colsTemplate}`;
    }

    if (props.cols) {
      return `repeat(${props.cols}, 1fr)`;
    }

    return 'repeat(1, 1fr)';
  }};
  grid-gap: ${props => props.gap || '1rem'};
`;

export default Grid;
