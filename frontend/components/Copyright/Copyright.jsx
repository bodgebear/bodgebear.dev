import React from 'react';
import styled from 'styled-components';

import { Paragraph } from '../Typography';

const Footer = styled.footer`
  margin: 3rem 0;
`;

const Copyright = () => (
  <Footer>
    <Paragraph center muted>Bodging Bear © 2019</Paragraph>
  </Footer>
);

export default Copyright;
