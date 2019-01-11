import {Link} from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import DropDown from '../DropDown';

const MenuItem = props => (
  <span
    tabIndex={0}
    style={{
      color: '#000',
      cursor: 'pointer',
      borderBottom: props.isActive ? '1px solid #111' : 'none',
    }}
    {...props}
  >
    {props.children}
  </span>
);

function isWorkPage (path) {
  return (
    path === '/knitting/' || path === '/stuff/' || path === '/photography/'
  );
}

function isAboutPage (path) {
  return path === '/resume/' || path === '/contact/';
}

class Menu extends React.Component {
  constructor (props) {
    super (props);
    this.state = {showDropDown: false};
  }
  render () {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div
          style={{position: 'relative', marginLeft: '20px'}}
          onMouseLeave={() => this.setState ({showWorkDropDown: false})}
        >
          <MenuItem
            isActive={isWorkPage (this.props.path)}
            onMouseOver={() => this.setState ({showWorkDropDown: true})}
            onFocus={() => this.setState ({showWorkDropDown: true})}
          >
            Work
          </MenuItem>
          {this.state.showWorkDropDown
            ? <DropDown
                categories={[
                  {title: 'Knitting', href: '/knitting/'},
                  {title: 'Stuff', href: '/stuff/'},
                  {title: 'Photography', href: '/photography/'},
                ]}
                onBlur={() => this.setState ({showWorkDropDown: false})}
              />
            : null}
        </div>
        <div
          style={{position: 'relative', marginLeft: '20px'}}
          onMouseLeave={() => this.setState ({showAboutDropDown: false})}
        >
          <MenuItem
            isActive={isAboutPage (this.props.path)}
            onMouseOver={() => this.setState ({showAboutDropDown: true})}
          >
            About
          </MenuItem>
          {this.state.showAboutDropDown
            ? <DropDown
                categories={[
                  {title: 'Resume', href: '/resume/'},
                  {title: 'Contact', href: '/contact/'},
                ]}
              />
            : null}
        </div>
      </div>
    );
  }
}

Menu.PropTypes = {};

export default Menu;
