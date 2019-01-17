import { Link, StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Dropdown from '../Dropdown';
import MenuItem from '../MenuItem';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showDropdown: false };
  }
  render() {
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
            <div className="menu">
              <div
                className="menu-item__wrapper"
                onMouseLeave={() => this.setState({ showDropdown: false })}
              >
                <MenuItem
                  isActive={false}
                  onMouseOver={() => this.setState({ showDropdown: true })}
                  color={this.props.color}
                >
                  Work
                </MenuItem>
                {this.state.showDropdown ? (
                  <Dropdown
                    categories={data.allDatoCmsCategory.edges.map(edge => ({
                      title: edge.node.name,
                      href: `/${edge.node.slug}/`,
                    }))}
                    onBlur={() => this.setState({ showDropdown: false })}
                    color={this.props.menuColor}
                    background={this.props.menuBackground}
                  />
                ) : null}
              </div>
              <div className="menu-item__wrapper">
                <MenuItem
                  isActive={this.props.path === '/resume'}
                  onMouseOver={() => this.setState({ showAboutDropdown: true })}
                  color={this.props.color}
                >
                  <Link
                    to="/resume"
                    style={{ color: this.props.color.hex }}
                    className="menu-item__link"
                  >
                    Resume
                  </Link>
                </MenuItem>
              </div>
              <div className="menu-item__wrapper">
                <MenuItem
                  isActive={this.props.path === '/contact'}
                  onMouseOver={() => this.setState({ showAboutDropdown: true })}
                  color={this.props.color}
                >
                  <Link
                    to="/contact"
                    style={{ color: this.props.color.hex }}
                    className="menu-item__link"
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

Menu.propTypes = {
  color: PropTypes.shape({ hex: PropTypes.string }),
  menuColor: PropTypes.shape({ hex: PropTypes.string }),
  menuBackground: PropTypes.shape({ hex: PropTypes.string }),
};

Menu.defaultProps = {
  color: { hex: '#fff' },
  menuColor: { hex: '#fff' },
  menuBackground: { hex: '#000' },
};

export default Menu;
