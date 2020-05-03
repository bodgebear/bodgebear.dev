import { ListItemStyled, ListItemStyledProps } from './List.styled';

export const ListItem: React.FC<ListItemStyledProps> = (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <ListItemStyled muted {...props} />
);
