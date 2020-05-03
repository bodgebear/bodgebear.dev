import {
  ParagraphStyles,
  H1Styles,
  H2Styles,
  H3Styles,
  H4Styles,
} from './Typography.styled';

export { Text } from './Typography.styled';
export type { TextProps } from './Typography.styled';

export const Paragraph = ParagraphStyles.withComponent('p');
export const H1 = H1Styles.withComponent('h1');
export const H2 = H2Styles.withComponent('h2');
export const H3 = H3Styles.withComponent('h3');
export const H4 = H4Styles.withComponent('h4');
