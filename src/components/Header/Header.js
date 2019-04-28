import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Menu from '../Menu';
import Sidebar from '../Sidebar';

const Header = ({ siteTitle, path }) => (
  <div className="header">
    <div>
      <h1 className="header__title">
        <Link to="/" className="header__title__link">
          {siteTitle}
        </Link>
      </h1>
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
