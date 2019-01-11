import React from 'react';
import {graphql, Link} from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import createPageSEO from '../utils/createPageSEO';

export default props => {
  const seo = createPageSEO (props.pageContext.data);
  const images = props.data.placeholderImage;
  return (
    <Layout path={props.location.pathname}>
      <SEO title={seo.title} keywords={seo.keywords} />
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {props.pageContext.data.items.map ((item, i) => (
          <Link to={item.slug}>
            {images && images.edges[i]
              ? <Img
                  fluid={images.edges[i].node.childImageSharp.fluid}
                  style={{
                    width: '180px',
                    height: '230px',
                    margin: '20px',
                  }}
                />
              : item.title}
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($images: [String]) {
    placeholderImage: allFile(filter: {relativePath: { in: $images }}) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
