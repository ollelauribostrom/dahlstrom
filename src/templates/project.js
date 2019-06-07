import React from 'react';
import {graphql} from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Video from '../components/Video';
import './project.css';

export default props => {
  const {seo} = props.pageContext;
  const {
    title,
    description,
    images,
    video1,
    video2,
    video3,
  } = props.data.datoCmsWork;
  return (
    <Layout path={props.location.pathname}>
      <SEO title={seo.title} keywords={seo.keywords} />
      <div className="project">
        <div className="project__info">
          <h3 className="project__title">{title}</h3>
          {description.split ('\n').map ((line, i) => (
            <p key={`desc-line-${i}`} className="project__description">
              {line}
            </p>
          ))}
        </div>
        {[video1, video2, video3].map ((src, i) => (
          <Video key={`video-${i}`} src={src} />
        ))}
        {images.map (image => (
          <Img
            key={image.fluid.src}
            className="project__image"
            fluid={image.fluid}
          />
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    datoCmsWork(slug: { eq: $slug }) {
      title
      description
      video1
      video2
      video3
      images {
        url
        fluid(maxWidth: 810, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
    }
  }
`;
