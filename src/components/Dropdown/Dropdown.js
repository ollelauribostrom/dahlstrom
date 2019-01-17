import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Dropdown = ({ categories, onBlur, color, background }) => (
  <div className="dropdown" onBlur={onBlur}>
    <div
      className="dropdown__arrow"
      style={{
        borderColor: `transparent transparent ${background.hex} transparent`,
      }}
    />
    <div className="dropdown__body" style={{ background: background.hex }}>
      {categories.map(category => (
        <Link
          to={category.href}
          className="dropdown__item"
          style={{ color: color.hex }}
        >
          {category.title}
        </Link>
      ))}
    </div>
  </div>
);

Dropdown.propTypes = {};
Dropdown.defaultProps = {};

export default Dropdown;
