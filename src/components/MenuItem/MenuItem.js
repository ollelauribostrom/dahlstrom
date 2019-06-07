import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';

const MenuItem = ({ title, url, isActive }) => (
  <span
    tabIndex={0}
    className={`menu-item ${isActive ? 'menu-item--active' : ''}`}
  >
    <Link to={url} className="menu-item__link">
      {title}
    </Link>
  </span>
);

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
};

MenuItem.defaultProps = {
  isActive: false,
};

export default MenuItem;
