import {Link} from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const DropDown = ({categories, onBlur}) => (
  <div className="dropdown" onBlur={onBlur}>
    <div className="dropdown__arrow" />
    <div className="dropdown__body">
      {categories.map (category => (
        <Link to={category.href} className="dropdown__item">
          {category.title}
        </Link>
      ))}
    </div>
  </div>
);

DropDown.PropTypes = {};

export default DropDown;
