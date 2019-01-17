import { Link, StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Dropdown from '../Dropdown';

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
  constructor(props) {
    super(props);
    this.state = { showDropdown: false };
  }
  render() {
    console.log(this.props.path);
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
                style={{ position: 'relative', marginLeft: '20px' }}
                onMouseLeave={() => this.setState({ showWorkDropdown: false })}
              >
                <MenuItem
                  isActive={false}
                  onMouseOver={() => this.setState({ showWorkDropdown: true })}
                  onFocus={() => this.setState({ showWorkDropdown: true })}
                  color={this.props.color}
                >
                  Work
                </MenuItem>
                {this.state.showWorkDropdown ? (
                  <Dropdown
                    categories={data.allDatoCmsCategory.edges.map(edge => ({
                      title: edge.node.name,
                      href: `/${edge.node.slug}/`,
                    }))}
                    onBlur={() => this.setState({ showWorkDropdown: false })}
                    color={this.props.menuColor}
                    background={this.props.menuBackground}
                  />
                ) : null}
              </div>
              <div style={{ position: 'relative', marginLeft: '20px' }}>
                <MenuItem
                  isActive={this.props.path === '/resume'}
                  onMouseOver={() => this.setState({ showAboutDropdown: true })}
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
              <div style={{ position: 'relative', marginLeft: '20px' }}>
                <MenuItem
                  isActive={this.props.path === '/contact'}
                  onMouseOver={() => this.setState({ showAboutDropdown: true })}
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
