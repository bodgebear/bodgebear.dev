import React from 'react';
import Layout from 'components/Layout';
import GlobalStyles from '../styles/GlobalStyles';
import OurGames from '../components/OurGames';

const Index = () => (
  <>
    <GlobalStyles />
    <Layout hasBear>
      <OurGames />
    </Layout>
  </>
);

export default Index;
