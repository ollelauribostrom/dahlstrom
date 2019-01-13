import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Contact = props => (
  <Layout hideOverFlow={true} path={props.location.pathname}>
    <SEO title="Resume" keywords={[`contact`]} />
    <div style={{}}>
      <h3 style={{marginBottom: '5px', color: '#6e297a', fontSize: '16px'}}>
        Contact
      </h3>
      <span style={{display: 'block'}}>Felix Dahlström Persson</span>
      <span style={{display: 'block'}}>Sjötorpsvägen 14</span>
      <span style={{display: 'block'}}>dahlstrom.persson@gmail.com</span>
    </div>
  </Layout>
);
export default Contact;
