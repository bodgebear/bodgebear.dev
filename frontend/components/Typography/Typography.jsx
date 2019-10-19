import React from 'react';
import styled from 'styled-components';

import { textColor, mutedGrey } from '../../styles/variables';

export const Text = styled.span`
  color: ${props => (props.muted ? mutedGrey : textColor)};
  ${props => (props.uppercase ? 'text-transform: uppercase;' : '')}
  ${props => (props.center ? 'text-align: center;' : 'text-align: left;')}
  ${props => (props.noMargin === true ? `
    margin-top: 0;
    margin-bottom: 0;
  ` : '')}
  ${props => (props.noMargin === 'top' ? 'margin-top: 0;' : '')}
  ${props => (props.noMargin === 'bottom' ? 'margin-bottom: 0;' : '')}
  line-height: 1.5;
`;

const ParagraphStyles = styled(Text)`
  ${props => (props.uppercase ? 'text-transform: uppercase;' : '')}
`;

export const Paragraph = props => (<ParagraphStyles as="p" {...props} />);

const H1Styles = styled(Text)`
  font-size: 3rem;
`;

export const H1 = props => (<H1Styles as="h1" {...props} />);

const H2Styles = styled(Text)`
  font-size: 2rem;
  font-weight: 400;
`;

export const H2 = props => (<H2Styles as="h2" {...props} />);
