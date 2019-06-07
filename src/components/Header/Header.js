import React from 'react';
import PropTypes from 'prop-types';

import Menu from '../Menu';
import Sidebar from '../Sidebar';
import Title from '../Title';

const Header = ({path}) => (
  <div className="header">
    <div>
      <Title size={path === '/' ? 'large' : 'small'} />
    </div>
    <div className="menu menu--desktop">
      <Menu path={path} />
    </div>
    <div className="menu menu--mobile">
      <Sidebar />
    </div>
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default Header;
