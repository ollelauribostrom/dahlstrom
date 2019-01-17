import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import './projects.css';

export default class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { seo } = this.props.pageContext;
    return (
      <Layout path={this.props.location.pathname}>
        <SEO title={seo.title} keywords={seo.keywords} />
        <div className="projects">
          {this.props.data.allDatoCmsWork ? (
            this.props.data.allDatoCmsWork.edges.map(edge => (
              <Link to={edge.node.slug}>
                <div
                  className="project__container"
                  onMouseOver={() => {
                    this.setState({ showInfoAbout: edge.node.slug });
                  }}
                  onMouseLeave={() => {
                    this.setState({ showInfoAbout: null });
                  }}
                >
                  <Img
                    fluid={edge.node.images[0].fluid}
                    className="project__thumbnail"
                  />
                  {this.state.showInfoAbout === edge.node.slug ? (
                    <span className="project__title">{edge.node.title}</span>
                  ) : null}
                </div>
              </Link>
            ))
          ) : (
            <Img
              fluid={this.props.data.noContentImage.childImageSharp.fluid}
              style={{ width: '100%' }}
            />
          )}
        </div>
      </Layout>
    );
  }
}

export const query = graphql`
  query($slugs: [String]) {
    allDatoCmsWork(filter: { slug: { in: $slugs } }) {
      edges {
        node {
          slug
          title
          images {
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
