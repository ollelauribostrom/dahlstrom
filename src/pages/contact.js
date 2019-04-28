import React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Contact = ({ location, data }) => (
  <Layout path={location.pathname}>
    <SEO title="Contact" keywords={[`contact`]} />
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}
    >
      <Img
        fluid={data.datoCmsSetting.contactImage.fluid}
        style={{
          width: '320px',
          height: '410px',
        }}
      />
      <div>
        <h3
          style={{
            marginBottom: '10px',
            color: data.datoCmsSetting.headingColor.hex,
            fontSize: '16px',
            fontFamily: "'Roboto', sans-serif",
          }}
        >
          Contact
        </h3>
        <span style={{ display: 'block', fontSize: '14px' }}>
          Felix Dahlström Persson
        </span>
        <span style={{ display: 'block', fontSize: '14px' }}>
          Thorvald Meyers Gate 71A
        </span>
        <span style={{ display: 'block', fontSize: '14px' }}>
          0552 Oslo, Norway
        </span>
        <span style={{ display: 'block', fontSize: '14px' }}>
          dahlstrom.persson@gmail.com
        </span>
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
