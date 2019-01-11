import React from 'react';
import {graphql} from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import createPageSEO from '../utils/createPageSEO';

export default props => {
  const images = props.data.placeholderImage;
  const seo = createPageSEO (props.pageContext);
  return (
    <Layout path={props.location.pathname}>
      <SEO title={seo.title} keywords={seo.keywords} />
      <h3>{props.pageContext.data.title}</h3>
      <p>{props.pageContext.data.description}</p>
      {images &&
        images.edges.map (image => (
          <Img fluid={image.node.childImageSharp.fluid} />
        ))}
    </Layout>
  );
};

export const query = graphql`
  query($images: [String]) {
    placeholderImage: allFile(filter: {relativePath: { in: $images }}) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 900) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
