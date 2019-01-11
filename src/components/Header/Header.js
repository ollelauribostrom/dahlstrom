import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'gatsby';

import Menu from '../Menu';
import Sidebar from '../Sidebar';

const Header = ({siteTitle, path}) => (
  <div className="header">
    <div>
      <h1 className="header__title">
        <Link to="/" className="header__title__link">
          {siteTitle}
        </Link>
      </h1>
    </div>
    <Menu path={path} />
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
