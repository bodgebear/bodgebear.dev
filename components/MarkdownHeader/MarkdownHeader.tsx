import { Text, H2, H3, H4 } from 'components/Typography/Typography';

interface MarkdownHeaderProps {
  level: number;
}

const StyledH1 = H2.withComponent('h1');
const StyledH2 = H3.withComponent('h2');
const StyledH3 = H4.withComponent('h3');

/* eslint-disable react/jsx-props-no-spreading */
export const MarkdownHeader = ({ level, ...props }: MarkdownHeaderProps) => {
  switch (level) {
    case 1: {
      return <StyledH1 {...props} />;
    }
    case 2: {
      return <StyledH2 {...props} />;
    }
    case 3: {
      return <StyledH3 {...props} />;
    }
    default: {
      return <Text {...props} />;
    }
  }
};
/* eslint-enable react/jsx-props-no-spreading */
