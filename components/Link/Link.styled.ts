import { textColor, mutedGrey } from 'constants/variables';

import { Text } from 'components/Typography/Typography';
import styled from '@emotion/styled';

const LinkStyledText = styled(Text)`
  text-decoration: underline;
  color: ${mutedGrey};
  word-break: break-all;

  &:hover,
  &:focus {
    color: ${textColor};
  }
`;

export const LinkStyled = LinkStyledText.withComponent('a');
