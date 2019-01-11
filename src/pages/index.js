import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ImageBackground from '../components/ImageBackground';

const IndexPage = () => (
  <Layout hideOverFlow={true}>
    <ImageBackground />
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
  </Layout>
);

export default IndexPage;
