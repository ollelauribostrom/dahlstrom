import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ProjectThumbnail from '../components/ProjectThumbnail';
import './projects.css';

export default ({ location, data, pageContext }) => {
  const { seo } = pageContext;
  return (
    <Layout path={location.pathname} width={960}>
      <SEO title={seo.title} keywords={seo.keywords} />
      <div className="projects">
        {data.allDatoCmsWork ? (
          data.allDatoCmsWork.edges.map(edge => (
            <ProjectThumbnail project={edge.node} key={edge.node.slug} />
          ))
        ) : (
          <Img
            fluid={data.noContentImage.childImageSharp.fluid}
            style={{ width: '100%' }}
          />
        )}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slugs: [String]) {
    allDatoCmsWork(
      filter: { slug: { in: $slugs } }
      sort: { fields: [updatedAt], order: DESC }
    ) {
      edges {
        node {
          slug
          title
          featuredImage {
            url
            fluid(
              maxHeight: 330
              maxWidth: 260
              imgixParams: { fm: "jpg", auto: "compress" }
            ) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
    noContentImage: file(relativePath: { eq: "no-content.png" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
