import React from 'react';
import PropTypes from 'prop-types';

const SectionItem = ({ description, href }) => {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        title={description}
        className="section-item section-item--link"
      >
        {description}
      </a>
    );
  }
  return <span className="section-item">{description}</span>;
};

SectionItem.propTypes = {
  description: PropTypes.string.isRequired,
  href: PropTypes.string,
};

export default SectionItem;
