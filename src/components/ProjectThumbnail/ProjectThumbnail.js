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
        to={slug}
        key={slug}
        onMouseOver={() => this.setState({ showTitle: true })}
        onMouseLeave={() => this.setState({ showTitle: false })}
      >
        <div className="project">
          <Img fluid={featuredImage.fluid} className="project__thumbnail" />
          {this.state.showTitle ? (
            <span className="project__thumbnail__title">{title}</span>
          ) : null}
        </div>
      </Link>
    );
  }
}

ProjectThumbnail.propTypes = {
  project: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectThumbnail;
