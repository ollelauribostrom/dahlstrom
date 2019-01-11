import Img from 'gatsby-image';
import React from 'react';
import {StaticQuery, graphql} from 'gatsby';

const ImageBackground = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "test.png" }) {
          childImageSharp {
            fluid(maxWidth: 1800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        fluid={data.placeholderImage.childImageSharp.fluid}
        className="imagebackground"
      />
    )}
  />
);

export default ImageBackground;
