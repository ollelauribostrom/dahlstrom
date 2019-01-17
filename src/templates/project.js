import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import './project.css';

export default props => {
  const { seo } = props.pageContext;
  const { title, description, images } = props.data.datoCmsWork;
  return (
    <Layout path={props.location.pathname}>
      <SEO title={seo.title} keywords={seo.keywords} />
      <div className="project__info">
        <h3>{title}</h3>
        <p className="project__description">{description}</p>
      </div>
      {images.map(image => (
        <Img
          key={image.fluid.src}
          className="project__image"
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
        fluid(maxWidth: 960, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
    }
  }
`;
