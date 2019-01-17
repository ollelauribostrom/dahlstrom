import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ImageBackground from '../components/ImageBackground';

export default ({ data }) => {
  const {
    backgroundImage,
    color,
    menuBackground,
    menuColor,
  } = data.datoCmsFrontpage;
  return (
    <Layout color={color} menuBackground={menuBackground} menuColor={menuColor}>
      <SEO title="Home" keywords={['Felix Dahlström Persson', 'Portfolio']} />
      <ImageBackground src={backgroundImage} />
    </Layout>
  );
};

export const query = graphql`
  query {
    datoCmsFrontpage {
      color {
        hex
      }
      menuColor {
        hex
      }
      menuBackground {
        hex
      }
      backgroundImage {
        url
        fluid(maxWidth: 1800, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
    }
  }
`;
