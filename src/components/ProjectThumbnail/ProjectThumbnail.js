import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const ProjectThumbnail = ({ project, hoverColor }) => {
  const [showTitle, setShowTitle] = useState(false);
  const { slug, featuredImage, title } = project;
  return (
    <Link
      className="project__thumbnail"
      to={slug}
      key={slug}
      onMouseOver={() => setShowTitle(true)}
      onMouseLeave={() => setShowTitle(false)}
    >
      <Img fluid={featuredImage.fluid} className="project__thumbnail__image" />
      {showTitle ? (
        <span
          className="project__thumbnail__title"
          style={{ backgroundColor: hoverColor.hex }}
        >
          {title}
        </span>
      ) : null}
    </Link>
  );
};

ProjectThumbnail.propTypes = {
  project: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    featuredImage: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  hoverColor: PropTypes.shape({ hex: PropTypes.string }),
};

export default ProjectThumbnail;
