import styled from '@emotion/styled';

import { breakpoints } from 'constants/variables';

const Layout = styled.main`
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  box-sizing: border-box;

  @media (min-width: ${breakpoints.mobile}) {
    padding: 0;
    max-width: 40rem;
  }

  @media (min-width: ${breakpoints.desktopSm}) {
    max-width: 64rem;
  }
`;

export default Layout;
