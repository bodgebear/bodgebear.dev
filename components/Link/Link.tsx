import { LinkStyled } from './Link.styled';

// eslint-disable-next-line react/jsx-props-no-spreading
const Link: React.FC = (props) => <LinkStyled muted {...props} />;

export default Link;
