import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'gatsby';
import {push as Menu} from 'react-burger-menu';

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    right: '36px',
    top: '36px',
  },
  bmBurgerBars: {
    background: '#373a47',
  },
  bmBurgerBarsHover: {
    background: '#a90000',
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
  },
  bmMorphShape: {
    fill: '#373a47',
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
  },
  bmItem: {
    display: 'inline-block',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0)',
  },
};

const Sidebar = () => (
  <Menu right outerContainerId={'outer-container'} styles={styles}>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/page-2/">Go to page 3</Link>
  </Menu>
);

Sidebar.PropTypes = {};

export default Sidebar;
