import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

class ProjectThumbnail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showTitle: false };
  }
  render() {
    const { slug, featuredImage, title } = this.props.project;
    return (
      <Link
        className="project__thumbnail"
        to={slug}
        key={slug}
        onMouseOver={() => this.setState({ showTitle: true })}
        onMouseLeave={() => this.setState({ showTitle: false })}
      >
        <Img
          fluid={featuredImage.fluid}
          className="project__thumbnail__image"
        />
        {this.state.showTitle ? (
          <span
            className="project__thumbnail__title"
            style={{ backgroundColor: this.props.hoverColor.hex }}
          >
            {title}
          </span>
        ) : null}
      </Link>
    );
  }
}

ProjectThumbnail.propTypes = {
  project: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    featuredImage: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  hoverColor: PropTypes.shape({ hex: PropTypes.string }),
};

export default ProjectThumbnail;
