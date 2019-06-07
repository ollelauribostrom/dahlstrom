import React from 'react';
import Img from 'gatsby-image';
import {graphql} from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Section from '../components/Section';
import SectionItem from '../components/SectionItem';
import './contact.css';
import Creators from '../components/Creators';

const Contact = ({location, data}) => (
  <Layout path={location.pathname} width={800}>
    <SEO title="Contact" keywords={[`contact`]} />
    <div className="contact">
      <div>
        <h2 className="contact__email">dahlstrom.persson@gmail.com</h2>
      </div>
    </div>
    <Creators />
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
