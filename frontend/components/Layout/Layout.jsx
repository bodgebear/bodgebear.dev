import React from 'react';
import PropTypes from 'prop-types';
import Header from 'components/Header';
import Main from './styles';

const Layout = ({ children, hasBear }) => (
  <>
    <Header hasBear={hasBear} />
    <Main>
      {children}
    </Main>
  </>
);

Layout.propTypes = {
  hasBear: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Layout.defaultProps = {
  hasBear: false,
};

export default Layout;
