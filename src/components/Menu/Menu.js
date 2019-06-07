import React from 'react';

import MenuItem from '../MenuItem';

const Menu = ({ path }) => {
  return (
    <div className="menu">
      <MenuItem title="Work" url="/work" isActive={path === '/work'} />
      <MenuItem title="Resume" url="/resume" isActive={path === '/resume'} />
      <MenuItem title="Contact" url="/contact" isActive={path === '/contact'} />
    </div>
  );
};

export default Menu;
