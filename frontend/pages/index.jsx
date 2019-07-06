import React from 'react';
import fetch from 'isomorphic-unfetch';
import Layout from 'components/Layout';
import GlobalStyles from 'styles/GlobalStyles';
import OurGames from 'components/OurGames';
import PropTypes from 'prop-types';

const Index = ({ games }) => (
  <>
    <GlobalStyles />
    <Layout hasBear>
      <OurGames games={games.projects} />
    </Layout>
  </>
);

Index.getInitialProps = async ({ req }) => {
  const baseUrl = `${req.headers['x-forwarded-port']}://${req.headers['x-forwarded-host']}`;
  const res = await fetch(`${baseUrl}/api/projects/`);
  const data = await res.json();

  return {
    games: data,
  };
};

Index.propTypes = {
  games: PropTypes.shape({
    projects: PropTypes.arrayOf(PropTypes.shape({
      createAt: PropTypes.number,
      description: PropTypes.string,
      id: PropTypes.string,
      mainImage: PropTypes.string,
      playNowUrl: PropTypes.string,
      srcUrl: PropTypes.string,
      title: PropTypes.string,
    })),
  }),
};

Index.defaultProps = {
  games: '',
};

export default Index;
