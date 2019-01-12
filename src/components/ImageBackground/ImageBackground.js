import Img from 'gatsby-image';
import React from 'react';

const ImageBackground = ({src}) => (
  <Img fluid={src.fluid} className="imagebackground" />
);

export default ImageBackground;
