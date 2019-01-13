import React from 'react';
import {graphql} from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import createPageSEO from '../utils/createPageSEO';

export default props => {
  const seo = createPageSEO (props.pageContext);
  return (
    <Layout path={props.location.pathname}>
      <SEO title={seo.title} keywords={seo.keywords} />
      <h3>{props.data.datoCmsWork.title}</h3>
      <p>{props.data.datoCmsWork.description}</p>
      {props.data.datoCmsWork.images.map (image => <Img fluid={image.fluid} />)}
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    datoCmsWork(slug: {eq: $slug}) {
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
