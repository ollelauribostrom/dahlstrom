import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Menu from '../Menu';
import Sidebar from '../Sidebar';

const Header = ({ siteTitle, path, color, menuBackground, menuColor }) => (
  <div className="header">
    <div>
      <h1 className="header__title">
        <Link
          to="/"
          className="header__title__link"
          style={{ color: color.hex }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <div className="menu menu--desktop">
      <Menu
        path={path}
        color={color}
        menuBackground={menuBackground}
        menuColor={menuColor}
      />
    </div>
    <div className="menu menu--mobile">
      <Sidebar
        color={color}
        menuBackground={menuBackground}
        menuColor={menuColor}
      />
    </div>
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  color: PropTypes.shape({ hex: PropTypes.string }),
  menuBackground: PropTypes.shape({ hex: PropTypes.string }),
  menuColor: PropTypes.shape({ hex: PropTypes.string }),
};

Header.defaultProps = {
  color: { hex: '#000' },
};

export default Header;
