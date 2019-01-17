import React from 'react';
import PropTypes from 'prop-types';
import { Link, StaticQuery, graphql } from 'gatsby';
import { push as Menu } from 'react-burger-menu';

const Sidebar = ({ color, menuColor, menuBackground }) => (
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
    render={data => (
      <Menu
        right
        outerContainerId={'outer-container'}
        styles={{
          bmBurgerBars: {
            background: color.hex,
          },
          bmMenu: {
            background: menuBackground.hex,
          },
        }}
        width={250}
      >
        <div className="sidebar__section">
          <h3 className="sidebar__section__heading">Work</h3>
          {data.allDatoCmsCategory.edges.map(edge => (
            <Link
              to={edge.node.slug}
              style={{ color: menuColor.hex }}
              className="sidebar__link"
            >
              {edge.node.name}
            </Link>
          ))}
        </div>
        <div className="sidebar__section">
          <h3 className="sidebar__section__heading">About</h3>
          <Link
            to="/resume"
            style={{ color: menuColor.hex }}
            className="sidebar__link"
          >
            Resume
          </Link>
          <Link
            to="/contact"
            style={{ color: menuColor.hex }}
            className="sidebar__link"
          >
            Contact
          </Link>
        </div>
      </Menu>
    )}
  />
);

Sidebar.propTypes = {
  color: PropTypes.shape({ hex: PropTypes.string }),
  menuColor: PropTypes.shape({ hex: PropTypes.string }),
  menuBackground: PropTypes.shape({ hex: PropTypes.string }),
};

Sidebar.defaultProps = {
  color: { hex: '#fff' },
  menuColor: { hex: '#fff' },
  menuBackground: { hex: '#000' },
};

export default Sidebar;
