import { ListItemStyled, ListItemStyledProps } from './List.styled';

export const ListItem = (props: ListItemStyledProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <ListItemStyled muted {...props} />
);
