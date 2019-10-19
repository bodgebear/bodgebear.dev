import styled from 'styled-components';

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(${props => props.rows || 1}, 1fr);
  grid-gap: ${props => props.gap || '1rem'};
`;

export default Grid;
