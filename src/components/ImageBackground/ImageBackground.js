import Img from 'gatsby-image';
import React from 'react';
import {StaticQuery, graphql} from 'gatsby';

const ImageBackground = () => (
  <StaticQuery
    query={graphql`
      query {
        datoCmsBackground {
          src {
            url
            fluid(maxWidth: 1800, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <Img
          fluid={data.datoCmsBackground.src.fluid}
          className="imagebackground"
        />
      );
    }}
  />
);

export default ImageBackground;
