import React from 'react';
import StyledButton from 'components/elements/Button';
import Header from '../Header';
import Main from './styles';

const Layout = () => (
  <>
    <Header hasBear />
    <Main>
      <StyledButton>Player</StyledButton>
    </Main>
  </>
);

export default Layout;
