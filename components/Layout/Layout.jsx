import React from 'react';
import Header from '../Header';
import StyledButton from '../elements/Button';
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
