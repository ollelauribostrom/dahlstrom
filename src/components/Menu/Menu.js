import {Link, StaticQuery, graphql} from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import DropDown from '../DropDown';

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

class Menu extends React.Component {
  constructor (props) {
    super (props);
    this.state = {showDropDown: false};
  }
  render () {
    console.log (this.props.path);
    return (
      <StaticQuery
        query={graphql`
          query {
            allDatoCmsCategory {
              edges {
                node {
                  name
                  slug
                }
              }
            }
          }
        `}
        render={data => {
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
                  isActive={false}
                  onMouseOver={() => this.setState ({showWorkDropDown: true})}
                  onFocus={() => this.setState ({showWorkDropDown: true})}
                  color={this.props.color}
                >
                  Work
                </MenuItem>
                {this.state.showWorkDropDown
                  ? <DropDown
                      categories={data.allDatoCmsCategory.edges.map (edge => ({
                        title: edge.node.name,
                        href: `/${edge.node.slug}/`,
                      }))}
                      onBlur={() => this.setState ({showWorkDropDown: false})}
                      color={this.props.menuColor}
                      background={this.props.menuBackground}
                    />
                  : null}
              </div>
              <div style={{position: 'relative', marginLeft: '20px'}}>
                <MenuItem
                  isActive={this.props.path === '/resume'}
                  onMouseOver={() => this.setState ({showAboutDropDown: true})}
                  color={this.props.color}
                >
                  <Link
                    to="/resume"
                    style={{
                      color: this.props.color.hex,
                      textDecoration: 'none',
                    }}
                  >
                    Resume
                  </Link>
                </MenuItem>
              </div>
              <div style={{position: 'relative', marginLeft: '20px'}}>
                <MenuItem
                  isActive={this.props.path === '/contact'}
                  onMouseOver={() => this.setState ({showAboutDropDown: true})}
                  color={this.props.color}
                >
                  <Link
                    to="/contact"
                    style={{
                      color: this.props.color.hex,
                      textDecoration: 'none',
                    }}
                  >
                    Contact
                  </Link>
                </MenuItem>
              </div>
            </div>
          );
        }}
      />
    );
  }
}

Menu.propTypes = {};

export default Menu;
