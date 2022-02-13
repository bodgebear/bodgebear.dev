import styled from '@emotion/styled';
import { textColor, mutedGrey } from 'constants/variables';

export interface TextProps {
  muted?: boolean;
  uppercase?: boolean;
  center?: boolean;
  noMargin?: boolean | 'top' | 'bottom';
}

export const Text = styled.span<TextProps>`
  color: ${(props) => (props.muted ? mutedGrey : textColor)};
  ${(props) => (props.uppercase ? 'text-transform: uppercase;' : '')}
  ${(props) => (props.center ? 'text-align: center;' : 'text-align: left;')}
  ${(props) =>
    props.noMargin === true
      ? `
    margin-top: 0;
    margin-bottom: 0;
  `
      : ''}
  ${(props) => (props.noMargin === 'top' ? 'margin-top: 0;' : '')}
  ${(props) => (props.noMargin === 'bottom' ? 'margin-bottom: 0;' : '')}
  line-height: 1.5;
`;

export const ParagraphStyles = styled(Text)`
  ${(props) => (props.uppercase ? 'text-transform: uppercase;' : '')}
`;

export const H1Styles = styled(Text)`
  font-size: 3rem;
`;

export const H2Styles = styled(Text)`
  font-size: 2.3rem;
  font-weight: 400;
`;

export const H3Styles = styled(Text)`
  font-size: 1.5rem;
  font-weight: 400;
`;

export const H4Styles = styled(Text)`
  font-size: 1.25rem;
  font-weight: 400;
`;
