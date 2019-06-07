import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'gatsby';

const Title = ({size}) => (
  <h1 className={`title title--${size}`}>
    <Link to="/" className="title__link">
      <span className="title__word">Felix</span>
      <span className="title__word">Dahlström</span>
      <span className="title__word">Persson</span>
    </Link>
  </h1>
);

Title.propTypes = {
  size: PropTypes.oneOf (['small', 'large']).isRequired,
};

export default Title;
