import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Dropdown = ({ categories, color, background }) => (
  <div className="dropdown">
    <div
      className="dropdown__arrow"
      style={{
        borderColor: `transparent transparent ${background.hex} transparent`,
      }}
    />
    <div className="dropdown__body" style={{ background: background.hex }}>
      {categories.map(category => (
        <Link
          key={category.href}
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

Dropdown.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      title: PropTypes.string,
    })
  ).isRequired,
  color: PropTypes.shape({ hex: PropTypes.string }),
  background: PropTypes.shape({ hex: PropTypes.string }),
};

Dropdown.defaultProps = {
  color: { hex: '#fff' },
  background: { hex: '#000' },
};

export default Dropdown;
