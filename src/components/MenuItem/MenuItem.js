import PropTypes from 'prop-types';
import React from 'react';

const MenuItem = props => (
  <span
    tabIndex={0}
    style={{
      color: props.color.hex,
      cursor: 'pointer',
      borderBottom: props.isActive ? `1px solid ${props.color.hex}` : 'none',
    }}
    {...props}
  >
    {props.children}
  </span>
);

MenuItem.propTypes = {
  color: PropTypes.shape({ hex: PropTypes.string }),
  isActive: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

MenuItem.defaultProps = {
  color: { hex: '#000' },
  isActive: false,
};

export default MenuItem;
