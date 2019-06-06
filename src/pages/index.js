import React from 'react';
import {graphql} from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ImageBackground from '../components/ImageBackground';

export default ({data, location}) => {
  return (
    <Layout
      path={location.pathname}
      color={{hex: '#151515'}}
      menuColor={{hex: '#151515'}}
      width={1200}
    >
      <SEO
        title="Felix Dahlström Persson"
        keywords={['Felix Dahlström Persson', 'Portfolio']}
      />
      <ImageBackground />
    </Layout>
  );
};

export const query = graphql`
  query {
    allDatoCmsWork(sort: { fields: [updatedAt], order: DESC }) {
      edges {
        node {
          slug
          title
          featuredImage {
            url
            fluid(
              maxHeight: 400
              maxWidth: 300
              imgixParams: { fm: "jpg", auto: "compress" }
            ) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
    datoCmsSetting {
      hoverColor {
        hex
      }
    }
  }
`;
