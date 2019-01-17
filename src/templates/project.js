import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default props => {
  const { seo } = props.pageContext;
  const { title, description, images } = props.data.datoCmsWork;
  return (
    <Layout path={props.location.pathname}>
      <SEO title={seo.title} keywords={seo.keywords} />
      <h3>{title}</h3>
      <p>{description}</p>
      {images.map(image => (
        <Img
          key={image.fluid.src}
          style={{ marginBottom: '20px' }}
          fluid={image.fluid}
        />
      ))}
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    datoCmsWork(slug: { eq: $slug }) {
      title
      description
      images {
        url
        fluid(maxWidth: 900, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
    }
  }
`;
