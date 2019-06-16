import React from 'react';
import Header from '../Header';
import StyledButton from '../elements/Button';
import Main from './styles';

const Layout = () => (
  <Main>
    <Header hasBear />
    <StyledButton>Player</StyledButton>
  </Main>
);

export default Layout;
