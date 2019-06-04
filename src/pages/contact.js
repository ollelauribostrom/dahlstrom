import React from 'react';
import Img from 'gatsby-image';
import {graphql} from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Section from '../components/Section';
import SectionItem from '../components/SectionItem';

const Contact = ({location, data}) => (
  <Layout path={location.pathname}>
    <SEO title="Contact" keywords={[`contact`]} />
    <div
      style={{
        display: 'flex',
      }}
    >
      <div>
        <h2 style={{fontSize: '12vw'}}>dahlstrom.persson@gmail.com</h2>
      </div>
    </div>
  </Layout>
);

export const query = graphql`
  query {
    datoCmsSetting {
      headingColor {
        hex
      }
      contactImage {
        url
        fluid(maxWidth: 320, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
    }
  }
`;

export default Contact;
