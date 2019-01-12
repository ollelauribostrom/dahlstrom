import {Link, StaticQuery} from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import DropDown from '../DropDown';
import capitalize from '../../utils/capitalize';

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
      <StaticQuery
        query={graphql`
          query {
            allDatoCmsCategory {
              edges {
                node {
                  name
                }
              }
            }
          }
        `}
        render={data => {
          console.log (data);
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
                  color={this.props.color}
                >
                  Work
                </MenuItem>
                {this.state.showWorkDropDown
                  ? <DropDown
                      categories={data.allDatoCmsCategory.edges.map (edge => ({
                        title: capitalize (edge.node.name),
                        href: `/${edge.node.name}/`,
                      }))}
                      onBlur={() => this.setState ({showWorkDropDown: false})}
                      color={this.props.menuColor}
                      background={this.props.menuBackground}
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
                  color={this.props.color}
                >
                  About
                </MenuItem>
                {this.state.showAboutDropDown
                  ? <DropDown
                      categories={[
                        {title: 'Resume', href: '/resume/'},
                        {title: 'Contact', href: '/contact/'},
                      ]}
                      color={this.props.menuColor}
                      background={this.props.menuBackground}
                    />
                  : null}
              </div>
            </div>
          );
        }}
      />
    );
  }
}

Menu.PropTypes = {};

export default Menu;
