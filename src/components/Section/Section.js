import React from 'react';
import PropTypes from 'prop-types';

const Section = props => (
  <div className="section">
    <h3 className="section__heading">{props.title}</h3>
    {props.children}
  </div>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
