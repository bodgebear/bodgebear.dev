import styled from '@emotion/styled';

import { Text, TextProps } from 'components/Typography';

export const List = styled.ul`
  position: relative;
  padding-left: 2em;
  counter-reset: item;
`;

export interface ListItemStyledProps extends TextProps {
  ordered?: boolean;
}

const ListItemStyledText = styled(Text)<ListItemStyledProps>`
  list-style: none;
  counter-increment: item;

  &::before {
    ${(props) => (!props.ordered ? 'content: \'*\'' : 'content: counter(item) \'.\'')};
    position: absolute;
    left: 0;
  }
`;

export const ListItemStyled = ListItemStyledText.withComponent('li');
